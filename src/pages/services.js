import React from 'react';
import {graphql} from 'gatsby';
import { Layout } from '../components';

export default function Services({data}) {
    const image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Services' image={image}>

        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "blog-background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`