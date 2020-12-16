import React from 'react';
import {FaHeart, FaGithub ,FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="container has-text-centered" >
                    
                    <a href="https://www.linkedin.com/in/flor-sanders/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='is-size-2 mx-4 mb-2 has-text-dark' /> 
                    </a>
                    <a href="https://github.com/FlorSanders" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='is-size-2 mx-4 mb-2 has-text-dark'/> 
                    </a>
                    <a href="https://twitter.com/FlorPSanders" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='is-size-2 mx-4 mb-2 has-text-dark'/> 
                    </a>
                    <a href="mailto:me@florsanders.be">
                        <FaEnvelope className='is-size-2 mx-4 mb-2 has-text-dark' />
                    </a>
                    <br />
                    &copy; {new Date().getFullYear()} | Created with <FaHeart className='has-text-danger' /> by Flor Sanders.
                </div>
    )
}
