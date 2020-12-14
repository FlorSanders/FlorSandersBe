import React from 'react';
import BackgroundImage from 'gatsby-background-image';

export default function FullscreenImage(props) {
    var { image, header, footer, children} = props;
    return (
        <BackgroundImage
            fluid={image}
        >
            <div className='dark-overlay'>
                <div className='hero is-fullheight'>
                    <div className="hero-head">
                        {header}
                    </div>
                    <div className='hero-body is-fullwidth'>
                        {children}
                    </div>
                    <div className='hero-foot'>
                        {footer}
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}

FullscreenImage.defaultProps = {
    image: null,
    header: null,
    children: null,
    footer: null,
}