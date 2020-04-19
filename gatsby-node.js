const path = require("path");

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
      include: /images/,
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
