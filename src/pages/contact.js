import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { Layout, Toaster } from '../components';
import { sendEmail } from '../constants';

export default function Contact({ data }) {
    // Extract the image from the data prop.
    var image = data.file.childImageSharp.fluid;

    // State variables used to show and hide feedback messages
    var [sent, setSent] = useState(false);
    var [error, setError] = useState(false);
    var [errorMessage, setErrorMessage] = useState(<><b>Oops!</b> There seems to be a problem. Try again later or contact Flor in another way.</>);

    // Handle form submit
    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        sendEmail(form, () => setSent(true), (message) => {
            setErrorMessage(message);
            setError(true);
        });
    }

    return (
        <Layout title='Contact' image={image} backgroundPosition='top'>
            <div className="section is-fullwidth">
                <div className="title is-3">
                    Get in touch
                </div>

                <div className="columns">
                    <div className="column">
                    Online
                    </div>
                    <div className="column">
                    Phone
                    </div>
                    <div className="column">
                    In real life
                    </div>
                </div>
            </div>

            <div className="section is-fullwidth" >
                <div className="title is-3">Drop me a message!</div>

                <form method="POST" action="https://formspree.io/f/mrgoogov" onSubmit={submitForm}>
                    <div className="columns p-0 mb-0">
                        <div className="column field my-0 py-2">
                            <label htmlFor="name" className="label">Name</label>
                            <div className="control has-icons-left" id="name">
                                <input type="text" name="name" className="input" placeholder="Your Name" />
                                <span className="icon is-small is-left"><FaUser /></span>
                            </div>
                        </div>
                        <div className="column field my-0 py-2">
                            <label htmlFor="name" className="label">Email</label>
                            <div className="control has-icons-left" id="email">
                                <input type="text" name="email" className="input" placeholder="Your email address" />
                                <span className="icon is-small is-left"><FaEnvelope /></span>
                            </div>
                        </div>
                    </div>

                    <div className="field py-2">
                        <label htmlFor="message" className="label">Message</label>
                        <div className="control">
                            <textarea name="message" id="message" rows="5" placeholder="Your message" className="textarea"></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button has-text-light is-secondary has-background-grey" type="submit" value="Send"> <FaPaperPlane className='mr-2' /> Send</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <Toaster 
                show={sent} 
                color='success'
                close={() => setSent(false)}
            >
                <b>Thanks!</b> Your message has been successfully sent. Flor will contact you very soon!
            </Toaster>

            <Toaster 
                show={error} 
                color='danger'
                close={() => setError(false)}
            >
                {errorMessage}
            </Toaster>
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