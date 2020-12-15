import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

export default function Contact({data}) {
    console.log(data)
    var image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Contact' image={image} backgroundPosition='top'>
            Have questions? Slide in my DMs.
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "contact-background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`