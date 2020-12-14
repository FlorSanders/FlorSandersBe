import React from 'react';
import {SEO} from '../components';

export default function Layout(props) {
    return (
        <React.Fragment>
            <SEO title={null}/>
            <p>Hello world</p>
        </React.Fragment>
        
    )
}

Layout.defaultProps = {
    title: 'Home',
}