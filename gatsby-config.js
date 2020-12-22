// Adding environment variables
require('dotenv').config();

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
**/

module.exports = {
    siteMetadata: {
        title: 'Flor Sanders',
        description: 'Personal and business website for Flor Sanders. A driven engineering student, freelance developer and IT consultant.',
        keywords: 'Student, Entrepreneur, Developer, Software, Hardware, Open Data, IoT, Guitar, Travel, Cooking, Business, Personal',
        author: 'Flor Sanders',
    },
    // TODO: Add plugin manifest when launching
    plugins: [
        // Transformer plugins needed for Gatsby image
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        // MarkdownX for content management
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 720,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        // Source from file system plugin
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        
        // Styling: sass
        `gatsby-plugin-sass`,
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