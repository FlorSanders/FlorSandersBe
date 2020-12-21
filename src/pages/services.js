import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import { FaCheck } from 'react-icons/fa';
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
            <div className="section pb-0">
                <Quote attribution="Mission statement">
                    Apply the skills I have acquired to help companies solve problems making use of technology.
                </Quote>
            </div>

            <div className="section">
                <div className="title is-3">
                    Services
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            Software & web development
                        </div>
                        <Img fluid={services_programming_image} style={{height: '15rem'}} />
                        <div>
                            <FaCheck /> Scientific programming (Python, MATLAB)
                        </div>
                        <div>
                            <FaCheck /> Web development (HTML, CSS, JavaScript, React, Django)
                        </div>
                        <div>
                            <FaCheck /> Embedded system programming (C/C++)
                        </div>
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            IT consultancy
                        </div>
                        <Img fluid={services_it_image} style={{height: '15rem'}} />
                        <div>
                            <FaCheck /> Advice
                        </div>
                        <div>
                            <FaCheck /> Installation
                        </div>
                        <div>
                            <FaCheck /> Maintenance & support
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            3D printing & CAD modelling
                        </div>
                        <Img fluid={services_3dprinting_image} style={{height: '15rem'}} />
                        <div>
                            <FaCheck /> 3D CAD Design (Autodesk Fusion 360)
                        </div>
                        <div>
                            <FaCheck /> FDM 3D printing (Original Prusa i3 MK2)
                        </div>
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            Hardware prototyping
                        </div>
                        <Img fluid={services_hardware_image} style={{height: '15rem'}} />
                        <div>
                            <FaCheck /> PCB Design (ADS)
                        </div>
                        <div>
                            <FaCheck /> FPGA programming (VHDL)
                        </div>
                    </div>
                </div>
            </div>
            
            {/* None of this is finisihed --> Add later */}
            {/* <div className="section">
                <div className="title is-3">
                    Experience
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            Resume
                        </div>
                        Coming soon
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            Portfolio
                        </div>
                        Coming soon
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            Github
                        </div>
                        Coming soon
                    </div>
                </div>
            </div> */}
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