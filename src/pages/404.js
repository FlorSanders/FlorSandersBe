import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

export default function NotFound({data}) {
    var image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Error 404: Page Not Found' image={image} fullheight={true}>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "404_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`