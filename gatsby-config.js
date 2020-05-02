module.exports = {
  siteMetadata: {
    siteTitle: "Ottica Molinari",
    siteTitleAlt: "Stile e benessere visivo",
    siteHeadline: "Stile e benessere visivo",
    siteDescription: "Stile e benessere visivo",
    siteUrl: "https://otticamolinari.it",
    siteLanguage: "it",
    siteImage: "/store-overview.jpg",
    author: "@ottica_molinari",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fragments",
        path: `${__dirname}/src/fragments`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/files/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-netlify-cache",
    {
      resolve: 'gatsby-plugin-gdpr-tracking',
      options: {
        debug: false,
        environments: ['production', 'development'],
        googleAnalytics: {
          trackingId: 'UA-54770790-1',
          autoStart: false,
          anonymize: true,
          controlCookieName: 'gdpr-analytics-enabled',
        },
      },
    },
  ],
};
