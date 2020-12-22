import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

export default function NotFound({data}) {
    var image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Nothing to see here...' image={image} fullheight={true}>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "404_background" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`