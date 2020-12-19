import React from 'react';
import {graphql} from 'gatsby';
import { Layout, Quote } from '../components';

export default function Services({data}) {
    const image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Services' image={image}>
            <Quote attribution={'Someone probably'}>
                If a thing is worth doing, it's worth doing well.
            </Quote>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "services_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`