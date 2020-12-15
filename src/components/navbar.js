import React from 'react';
import { Link } from 'gatsby';
import { pages } from '../constants';

export default function Navbar() {
    return (
        <div className='container is-max-widescreen'>
            <div className='navbar is-transparent m-5'>
                <div className="navbar-brand">
                    <Link to='/' className='navbar-item has-text-light title is-4'>
                        Flor Sanders
                    </Link>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        {pages.map((page) => (
                            <Link key={page} to={`/${page.toLowerCase()}`} className='navbar-item has-text-light is-size-4'>{page}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
