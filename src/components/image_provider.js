import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function ImageProvider({name, style}) {
    var data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(quality: 100) {
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
    `);
    
    var image = data.allImageSharp.edges.filter((elem) => (elem.node.parent.name === name))[0].node.fluid;
    return (
        <Img fluid={image} style={style} />
    )
}

ImageProvider.defaultProps = {
    name: '404_background',
    style: null,
}