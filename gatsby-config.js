/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/uamuzi-website",
  siteMetadata: {
    title: `Uamuzi Foundation`,
    description: `Uamuzi Foundation is a philanthropic organization, under the umbrella of Uamuzi Group, advocating for social justice with a specific focus on the youth who deserve equal economic, political and social rights.`,
    author: `Uamuzi Foundation`,
    siteUrl: `https://uamuzi.org/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/uamuzi-favlogo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
