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
