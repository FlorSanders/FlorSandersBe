import React from 'react';
import {graphql} from 'gatsby';
import { Layout, Quote } from '../components';


export default function Blog({data}) {
    var image = data.file.childImageSharp.fluid;

    return (
        <Layout title='Blog' image={image} backgroundPosition='top'>
            <div className="section pb-0">
                <Quote attribution='Austin Kleon'>
                    The only way to find your voice is to use it.
                </Quote>
            </div>

            <div className="section">
                Hello world
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "blog_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`