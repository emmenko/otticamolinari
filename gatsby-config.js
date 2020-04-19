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
      resolve: "@lekoarts/gatsby-theme-minimal-blog-core",
      options: {
        showLineNumbers: false,
        // Links displayed in the header on the right side
        externalLinks: [
          {
            name: "Facebook",
            url: "https://www.facebook.com/otticamolinari",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/ottica_molinari",
          },
        ],
        // Navigation links
        navigation: [
          {
            title: "About",
            slug: "/about",
          },
          {
            title: "Negozio",
            slug: "/negozio",
          },
          {
            title: "Servizi",
            slug: "/servizi",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
};
