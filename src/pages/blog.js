import React from 'react';
import {graphql} from 'gatsby';
import { Layout } from '../components';


export default function Blog({data}) {
    var image = data.file.childImageSharp.fluid;

    return (
        <Layout title='Blog' image={image} backgroundPosition='top'>

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