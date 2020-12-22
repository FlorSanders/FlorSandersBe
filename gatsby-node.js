const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
    
    result.data.allMdx.nodes.forEach(({frontmatter}) => {
        createPage({
            path: `posts/${frontmatter.slug}`,
            component: path.resolve('./src/templates/blog_post.js'),
            context: {
                slug: frontmatter.slug,
            },
        });
    });
}