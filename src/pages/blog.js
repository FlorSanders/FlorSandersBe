import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Quote } from '../components';


export default function Blog({ data }) {
    // Retrieve page background image
    var image = data.file.childImageSharp.fluid;
    // Retrieve blog post 
    var posts = data.allMdx.nodes.sort((post1, post2) => post1.frontmatter.date >= post2.frontmatter.date ? -1 : 1 );
    // Retrieve images for blog posts
    var postCovers = posts.map((post) => (data.allImageSharp.edges.filter((elem) => (elem.node.parent.name === post.frontmatter.cover))[0].node.fluid));

    return (
        <Layout title='Blog' image={image} backgroundPosition='top'>
            <div className="section pb-0">
                <Quote attribution='Austin Kleon'>
                    The only way to find your voice is to use it.
                </Quote>
            </div>

            <div className="section">
                <div className="title is-3">
                    Articles
                </div>

                {posts.map((post) => (
                    <div key={post.frontmatter.slug}> 
                        <div className="title is-4">
                            {post.frontmatter.title}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                body
                frontmatter {
                    slug
                    author
                    cover
                    date
                    subtitle
                    tags
                    title
                }
            }
        }
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
        file(name: { eq: "blog_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`