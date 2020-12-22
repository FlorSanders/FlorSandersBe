import React from 'react';
import { SEO, HeroImage, Navbar, Footer } from '../components';

export default function BlogLayout(props) {
    var { title, subtitle, children, image, backgroundPosition, fullheight } = props;

    return (
        <div className='is-flex is-flex-direction-column'>
            <SEO title={title} />
            <HeroImage
                image={image}
                backgroundPosition={backgroundPosition}
                header={
                    <Navbar />
                }
                footer={
                    <div className="m-6"></div>
                }
                fullheight={fullheight}
            >
                <div className="container has-text-centered">
                    <div className="title is-2 has-text-light">
                        {title}
                    </div>
                    <div className="subtitle is-3 has-text-light">
                        {subtitle}
                    </div>
                </div>    
            </HeroImage>
            
            <div className="container is-max-desktop" style={{width:'100%'}}>
                {children}
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

BlogLayout.defaultProps = {
    title: 'Blog post sample',
    subtitle: 'Blog post',
    image: null,
    fullheight: false,
}