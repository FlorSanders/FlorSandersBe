// Adding environment variables
require('dotenv').config();
// Importing path
const path = require('path');

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Flor Sanders',
        description: 'Personal and business website for Flor Sanders.\nA driven engineering student and starting entrepreneur.',
        keywords: 'Student, Entrepreneur, Developer, Software, Hardware, Open Data, IoT, Guitar, Travel, Cooking, Business, Personal',
        author: 'Flor Sanders',
    },
    // TODO: Add plugin manifest when launching
    plugins: [
        // Transformer plugins needed for Gatsby image
        `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
        // Gatsby Image
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        // Source from file system plugin
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        // SEO Manager
        `gatsby-plugin-react-helmet`,
        // Make The site work offline
        `gatsby-plugin-offline`,
        // Automatically create a sitemap
        `gatsby-plugin-sitemap`,
        // Google analytics
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_ID,
                head: false,
                anonymize: true,
            },
        },
    ],
}