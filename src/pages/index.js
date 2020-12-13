import React from 'react';
import { graphql, Link } from 'gatsby';

import { TypingAnimation, FullscreenImage } from '../components';
import { pages } from '../constants/index';

import '../styles/index.scss';

export default function Home({ data }) {
    const whatIAm = ['n engineering student', ' freelance developer', ' maker', 'n IT consultant', ' human'];

    var images = data.allImageSharp.edges.filter((elem) => (elem.node.parent.name.includes('main-background')));
    var image = images[Math.floor(Math.random() * images.length)].node.fluid;

    return (
        <FullscreenImage
            image={image}
            header={null}
            body={
                <div className='container has-text-centered'>
                    <div className="subtitle is-3 has-text-light">
                        Hi! My name is
                    </div>
                    <div className='title is-1 has-text-light'>
                        Flor Sanders
                    </div>
                    <div className="subtitle is-3 has-text-light is-flex-direction-row">
                        <TypingAnimation
                            base={'I am a'}
                            content={whatIAm}
                        />
                    </div>
                </div>
            }
            footer={
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
            }
        />
    );
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
    }
      
`