const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Carlos Henrique Rabelo`,
    description: `Site pessoal de Engenheiro Front-End, sempre em busca do conhecimento.`,
    author: `@carloshrabelo`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site pessoal | Carlos Henrique Rabelo`,
        short_name: `CarlosHRabelo`,
        start_url: `/`,
        background_color: `#576674`,
        theme_color: `#222f3e`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        i18n: path.join(__dirname, "src/i18n"),
        images: path.join(__dirname, "src/images"),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ["400", "600"],
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
