import React from 'react';
import { Link } from 'gatsby';
import { pages } from '../constants';

export default function NavigationTabs(props) {
    var {light} = props;
    return (
        <div className={`tabs is-boxed is-centered is-fullwidth is-large${light?' has-text-light':''}`}>
            <ul>
                {pages.map((page) => (
                    <li key={page}>
                        <Link to={`/${page.toLowerCase()}`} className='is-light'>
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

NavigationTabs.defaultProps = {
    light: false,
}