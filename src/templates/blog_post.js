import React from 'react';
import { graphql } from 'gatsby';
import { BlogLayout } from '../components';
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({data}) {
    const page = data.allMdx.nodes[0];
    const post = page.body;
    const image = data.allImageSharp.edges.filter((elem) => (elem.node.parent.name === page.frontmatter.cover))[0].node.fluid;
    return (
        <BlogLayout
            title={page.frontmatter.title}
            subtitle={page.frontmatter.subtitle}
            image={image}
        >
            <div className=" section content">
                <MDXRenderer>
                    {post}
                </MDXRenderer>
            </div>
        </BlogLayout>
    )
}

export const query = graphql`
query($slug: String!) {
    allImageSharp {
        edges {
            node {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
                parent {
                    ... on File {
                        name
                    }
                }
            }
        }
    }
    allMdx(filter: {frontmatter: {slug: {eq: $slug}}}) {
        nodes {
            frontmatter {
                slug
                author
                cover
                date
                subtitle
                tags
                title
            }
            body
        }
    }
}
`