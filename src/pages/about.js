import React from 'react';
import { graphql } from 'gatsby';
import {Layout} from '../components';

export default function About({data}) {
    var image = data.file.childImageSharp.fluid;

    return (
        <Layout title='About' image={image}>

        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "about_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`