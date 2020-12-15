import React from 'react';
import BackgroundImage from 'gatsby-background-image';

export default function HeroImage(props) {
    var {image, header, footer, children, fullheight, backgroundPosition} = props;
    return (
        <BackgroundImage
            fluid={image}
            style={{backgroundPosition}}
        >
            <div className='dark-overlay'>
                <div className={`hero${fullheight?' is-fullheight':' is-medium'}`}>
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

HeroImage.defaultProps = {
    image: null,
    header: null,
    children: null,
    footer: null,
    fullheight: false,
    backgroundPosition: 'center',
}