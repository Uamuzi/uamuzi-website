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
    headers: {
      '/*': [
        'Content-Security-Policy: default-src \'self\'; connect-src \'self\'; font-src \'self\'; img-src \'self\'; object-src \'self\'; script-src \'self\'; style-src \'self\';',
      ],
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-netlify',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-FVGKK2Y011",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "uamuzi.org",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
}
