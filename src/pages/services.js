import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import { Layout, Quote } from '../components';

export default function Services({data}) {
    // Obtaining the background image for this page
    const image = data.file.childImageSharp.fluid;
    // Obtaining the illustrations for services
    var services_images = data.allImageSharp.edges.filter((elem) => (elem.node.parent.name.includes('services')));
    var services_programming_image = services_images.filter((elem) => (elem.node.parent.name === 'services_programming'))[0].node.fluid;
    var services_hardware_image = services_images.filter((elem) => (elem.node.parent.name === 'services_hardware'))[0].node.fluid;
    var services_it_image = services_images.filter((elem) => (elem.node.parent.name === 'services_it'))[0].node.fluid;
    var services_3dprinting_image = services_images.filter((elem) => (elem.node.parent.name === 'services_3dprinting'))[0].node.fluid;
    
    return (
        <Layout title='Services' image={image}>
            <Quote attribution={'Will Durant'}>
                Excellence is not an act, but a habit.
            </Quote>

            <div className="section">
                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            Software & Web Development
                        </div>
                        <Img fluid={services_programming_image} style={{height: '15rem'}} />
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            IT Consultancy
                        </div>
                        <Img fluid={services_it_image} style={{height: '15rem'}} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            3D Printing
                        </div>
                        <Img fluid={services_3dprinting_image} style={{height: '15rem'}} />
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            Hardware Prototyping
                        </div>
                        <Img fluid={services_hardware_image} style={{height: '15rem'}} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
        file(name: { eq: "services_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`