import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { FaUser, FaEnvelope, FaPaperPlane, FaTwitter, FaLinkedin, FaGlobe, FaPhoneAlt, FaCoffee, FaVideo } from 'react-icons/fa'
import { AiFillWarning } from 'react-icons/ai';
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
                    Get in touch!
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="subtitle is-4">
                            <FaGlobe className="icon" /> Online
                        </div>
                        <div className="block">
                            For short questions or messages, tweet me <a href="https://twitter.com/FlorPSanders" target="_blank" rel="noopener noreferrer"> @FlorPSanders <FaTwitter className='icon is-small' /></a> or send me a direct message on <a href="https://www.linkedin.com/in/flor-sanders/" target="_blank" rel="noopener noreferrer">LinkedIn <FaLinkedin className='icon is-small' /></a>.
                        </div>
                        <div className="block">
                            For longer enquiries, please use the form below or send me an <a href="mailto:me@florsanders.be">email <FaEnvelope className="icon is-small" /> </a>.
                        </div>
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            <FaPhoneAlt className="icon" /> Phone
                        </div>
                        <div className="block">
                            Want to discuss something quickly over the phone? Urgently need to get a hold of me?
                            Feel free to give me a call on <a href="tel:+32479873490">0479873490 <FaPhoneAlt className='icon is-small'/></a>.
                        </div>
                    </div>
                    <div className="column">
                        <div className="subtitle is-4">
                            <FaCoffee className="icon" /> Real life
                        </div>
                        {/* <div className="block">
                            <del>
                                Want to grab a coffee and have a talk? Send me a message and we'll figure out a moment that fits both our calenders.
                            </del>
                        </div> */}
                        <div className="block">
                            <AiFillWarning className="icon is-small has-text-warning" /> Due to the ongoing Covid pandemic meetings in real life are obviously to be avoided.<br />
                            As an alternative, just shoot me a message and we can grab a coffee during a video call <FaVideo className="icon is-small" />.
                        </div>
                    </div>
                </div>
            </div>

            <div className="section is-fullwidth" >
                <div className="title is-3">Drop me a message.</div>

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
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`