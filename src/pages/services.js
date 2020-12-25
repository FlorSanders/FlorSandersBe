import React from 'react';
import {graphql} from 'gatsby';
import { FaCheck } from 'react-icons/fa';
import { ImageProvider, Layout, Quote } from '../components';

export default function Services({data}) {
    // Obtaining the background image for this page
    const image = data.file.childImageSharp.fluid;
   
    return (
        <Layout title='Services' image={image}>
            <div className="section pb-0">
                <Quote attribution="Will Durant">
                    Excellence is not an act, but a habit.
                </Quote>
            </div>

            <div className="section">
                <div className="title is-3">
                    Services
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name='services_programming' style={{height: '15rem'}} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    Software & web development
                                </div>
                                <div>
                                    <FaCheck /> Scientific programming (Python, MATLAB)
                                </div>
                                <div>
                                    <FaCheck /> Web development (HTML, CSS, JS, React, Django)
                                </div>
                                <div>
                                    <FaCheck /> Embedded system programming (C/C++)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name='services_it' style={{height: '15rem'}} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    IT consultancy
                                </div>
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
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name='services_3dprinting' style={{height: '15rem'}} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    3D printing & CAD modelling
                                </div>
                                <div>
                                    <FaCheck /> 3D CAD Design (Autodesk Fusion 360)
                                </div>
                                <div>
                                    <FaCheck /> FDM 3D printing (Original Prusa i3 MK2)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name="services_hardware" style={{height: '15rem'}} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    Hardware prototyping
                                </div>
                                <div>
                                    <FaCheck /> PCB Design (ADS)
                                </div>
                                <div>
                                    <FaCheck /> FPGA programming (VHDL)
                                </div>
                            </div>
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
        file(name: { eq: "services_background" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`