const fs = require(`fs`);
const path = require("path");
const kebabCase = require(`lodash.kebabcase`);
const mkdirp = require(`mkdirp`);
const defaultOptions = require(`./src/utils/default-options`);

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, "content")];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`);
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title);

    return `/${slug}`.replace(/\/\/+/g, `/`);
  };

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      };
    },
  });

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  createTypes(`
    interface Page @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      description: String
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }

    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      description: String
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
    }

    type MinimalBlogConfig implements Node {
      pagesPath: String
      externalLinks: [ExternalLink]
      navigation: [NavigationEntry]
    }

    type ExternalLink {
      name: String!
      url: String!
    }

    type NavigationEntry {
      title: String!
      slug: String!
    }
  `);
};

exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions;

  const minimalBlogConfig = {
    pagesPath: defaultOptions.pagesPath,
    externalLinks: defaultOptions.externalLinks,
    navigation: defaultOptions.navigation,
  };

  createNode({
    ...minimalBlogConfig,
    id: `site >>> config`,
    parent: null,
    children: [],
    internal: {
      type: `MinimalBlogConfig`,
      contentDigest: createContentDigest(minimalBlogConfig),
      content: JSON.stringify(minimalBlogConfig),
    },
  });
};

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions;

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === "content") {
    const fieldData = {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug: node.frontmatter.slug,
    };

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Page interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPageId) });
  }
};

// These template are only data-fetching wrappers that import components
const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`);
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: homepageTemplate,
    context: {
      formatString: defaultOptions.formatString,
    },
  });

  const result = await graphql(`
    query {
      allPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      result.errors
    );
    return;
  }

  result.data.allPage.nodes.forEach((page) => {
    const breadcrumbs = page.slug.split("/").filter(Boolean);
    createPage({
      path: `/${page.slug}`.replace(/\/\/+/g, `/`),
      component: pageTemplate,
      context: {
        breadcrumbs,
        slug: page.slug,
        slugDirectoryGlob: `/${breadcrumbs.join("/")}/*`,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    ...config.module.rules.map((rule) => ({
      ...rule,
      test:
        // Strip out the svg files from the following built-in rule
        // See https://github.com/zabute/gatsby-plugin-svgr/blob/5087926076e61a0d5681c842af42c73d55a89653/gatsby-node.js#L10-L21
        String(rule.test) ===
        String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)
          ? /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/
          : rule.test,
    })),
    {
      test: /\.svg$/,
      include: /files\/svg/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            // NOTE: disable this and manually add `removeViewBox: false` in the SVGO plugins list
            // See related PR: https://github.com/smooth-code/svgr/pull/137
            icon: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
            },
          },
        },
      ],
    },
  ];
  config.resolve = {
    ...config.resolve,
    // Add support for absolute imports
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  };
  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};