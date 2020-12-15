import React from 'react';
import {NavigationTabs, SEO} from '../components';

export default function Layout(props) {
    var {title, children} = props;
    return (
        <React.Fragment>
            <SEO title={title}/>
            <NavigationTabs></NavigationTabs>


            <p>Hello world</p>
            {children}

            <footer className="footer">
                <div className="container has-text-centered">
                    Created with [heart] by Flor Sanders.
                </div>
            </footer>
        </React.Fragment>
        
    )
}

Layout.defaultProps = {
    title: 'Home',
}