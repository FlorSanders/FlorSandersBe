import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact({data}) {
    var image = data.file.childImageSharp.fluid;
    return (
        <Layout title='Contact' image={image} backgroundPosition='top'>
            <div className="section" style={{width: '100%'}}>
                <div className="title is-3">Have questions? I might have the answer!</div>
                <div className="columns p-0 mb-0">
                    <div className="column field">
                        <label htmlFor="name" className="label">Name</label>
                        <div className="control has-icons-left" id="name">
                            <input type="text" className="input" placeholder="Your Name"/>
                            <span className="icon is-small is-left"><FaUser/></span>
                        </div>
                    </div>
                    <div className="column field">
                        <label htmlFor="name" className="label">Email</label>
                        <div className="control has-icons-left" id="email">
                            <input type="text" className="input" placeholder="Your email address"/>
                            <span className="icon is-small is-left"><FaEnvelope/></span>
                        </div>    
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="message" className="label">Message</label>
                    <div className="control">
                        <textarea name="message" id="message" rows="5" placeholder="Your message" className="textarea"></textarea>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-link is-secondary has-background-grey"> <FaPaperPlane className='mr-2'/> Send</button>
                    </div>
                </div>
                
            </div>
            
        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "contact_background" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`