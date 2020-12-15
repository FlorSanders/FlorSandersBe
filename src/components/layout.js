import React from 'react';
import { Link } from 'gatsby';
import {FaHeart, FaCopyright} from 'react-icons/fa';
import { SEO, HeroImage, Navbar } from '../components';

export default function Layout(props) {
    var { title, children, image } = props;

    return (
        <div className='is-flex is-flex-direction-column' style={{ minHeight: '100vh' }}>
            <SEO title={title} />
            <HeroImage
                image={image}
                header={
                    <Navbar />
                }
                footer={
                    <div className="m-5"></div>
                }
            >
                <div className="container has-text-centered">
                    <div className="title is-1 has-text-light">
                        {title}
                    </div>
                </div>    
            </HeroImage>            

            <div className="section is-flex-grow-1 has-text-centered">
                <div className="title is-1">
                    CONTENT
                </div>
                <p>Hello world</p>
                {children}
            </div>

            <footer className="footer">
                <div className="container has-text-centered">
                    &copy; {new Date().getFullYear()} | Created with <FaHeart className='has-text-danger' /> by Flor Sanders.
                </div>
            </footer>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Home',
}