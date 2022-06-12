module.exports = {
  siteMetadata: {
    title: `Flor Sanders`,
    siteUrl: `https://www.florsanders.be`,
    description:
      'Hi! My name is Flor Sanders.\nI make use of cutting edge technologies to solve real-world practical problems.',
    creator: 'Flor Sanders (me@florsanders.be)'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/assets/projects/'
      },
      __key: 'projects'
    }
  ]
};
