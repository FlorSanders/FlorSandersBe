import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Quote } from '../components';

export default function About({ data }) {
    var image = data.file.childImageSharp.fluid;

    return (
        <Layout title='About' image={image}>
            <div className="section pb-0">
                <Quote attribution="André Gide">
                    Believe those who are seeking the truth; doubt those who find it.
                </Quote>
            </div>
            <div className="section">
                <div className="title is-3">
                    Who? Me!
                </div>
            </div>
            
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "about_background" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`