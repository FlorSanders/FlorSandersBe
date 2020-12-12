import React from 'react';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

import Typing from 'react-typing-animation';

import '../styles/index.scss';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function Home({data}) {
    const pages = ['About', 'Services', 'Blog', 'Contact'];
    const whatIAm = [' human', ' programmer', 'n engineering student', ' cooking enthousiast', 'n amateur guitarist', ' student representative', 'n entrepreneur']
    shuffleArray(whatIAm)
    const imageData = data.file.childImageSharp.fluid;

    return (
        <BackgroundImage
            fluid={imageData}
        >
            <div className='dark-overlay'>
                <div className='hero is-fullheight'>
                    <div className='hero-body is-fullwidth'>
                        <div className='container has-text-centered'>
                            <div className="subtitle is-3 has-text-light">
                                Hi! My name is
                            </div>
                            <div className='title is-1 has-text-light'>
                                Flor Sanders
                            </div>
                            <div className="subtitle is-3 has-text-light is-flex-direction-row">
                                
                                <Typing cursor={<p className='has-text-white' style={{display:'inline'}}>|</p>} style={{display:'inline'}}>
                                    I am a
                                    {whatIAm.slice(0, -1).map((something) => (
                                        <>
                                        <p style={{display:'inline'}}>{something}.</p>
                                        <Typing.Backspace count={something.length+1} speed={50} delay={1000}/>
                                        </>
                                    ))}
                                    {whatIAm[whatIAm.length-1]}.
                                </Typing>
                            </div>
                        </div>
                    </div>
                    <div className='hero-footer'>
                        <div className='tabs is-boxed is-centered is-fullwidth is-large'>
                            <ul>
                                {pages.map((page) => (
                                    <li key={page}>
                                        <Link to={`/${page}`} className='is-light'>
                                            {page}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    );
}

export const query = graphql`
    query {
        file(base: { eq: "main-background.jpg" }) {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`