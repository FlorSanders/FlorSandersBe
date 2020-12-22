import React from 'react';
import { SEO, HeroImage, Navbar, Footer } from '../components';
import { getDateText } from '../constants';

export default function BlogLayout(props) {
    var { title, subtitle, author, date, children, image, backgroundPosition, fullheight } = props;
    var dateText = getDateText(date);

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
                        <div className="subtitle is-4 has-text-white">
                            By {author} on {dateText}
                        </div>
                    </div>

                </div>
            </HeroImage>

            <div className="container is-max-desktop" style={{ width: '100%' }}>
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
    author: 'Flor Sanders',
    date: '1999-07-06',
    image: null,
    fullheight: false,
}