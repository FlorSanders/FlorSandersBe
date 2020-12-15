import React from 'react';
import { graphql } from 'gatsby';

import { NavigationTabs, TypingAnimation, FullscreenImage, SEO } from '../components';
import { whatIAm } from '../constants';

import '../styles/index.scss';

export default function Home({ data }) {
    var images = data.allImageSharp.edges.filter((elem) => (elem.node.parent.name.includes('main-background')));
    var image = images[Math.floor(Math.random() * images.length)].node.fluid;

    return (
        <React.Fragment>
            <SEO title='Home' />
            <FullscreenImage
                image={image}
                header={null}
                footer={<NavigationTabs light={true}/>}
            >
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
            </FullscreenImage>
        </React.Fragment>
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