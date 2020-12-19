import React from 'react';
import { SEO, HeroImage, Navbar, Footer } from '../components';

export default function Layout(props) {
    var { title, children, image, backgroundPosition, fullheight } = props;

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
                    <div className="title is-1 has-text-light">
                        {title}
                    </div>
                </div>    
            </HeroImage>

            <div className="container is-max-desktop">
                {children}
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Home',
    image: null,
    fullheight: false,
}