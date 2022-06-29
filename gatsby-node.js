exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node  {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      cover: File @fileByRelativePath
    }
  `);
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/.*/posts/.*/" } }) {
        nodes {
          slug
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    });
  });
};
