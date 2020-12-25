import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Quote, BlogPreview } from '../components';


export default function Blog({ data }) {
    // Retrieve page background image
    var image = data.file.childImageSharp.fluid;
    // Retrieve blog post 
    var posts = data.allMdx.nodes.sort((post1, post2) => post1.frontmatter.date >= post2.frontmatter.date ? -1 : 1 );

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
                    <BlogPreview 
                        key={post.frontmatter.slug}
                        title={post.frontmatter.title}
                        subtitle={post.frontmatter.subtitle}
                        image={post.frontmatter.cover}
                        excerpt={post.excerpt}
                        slug={post.frontmatter.slug}
                        tags={post.frontmatter.tags}
                        date={post.frontmatter.date}
                    />
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                excerpt
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
        file(name: { eq: "blog_background" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`