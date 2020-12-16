import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { pages, breakPoints } from '../constants';

export default function Navbar() {
    // Deals with opening and closing of the mobile hamburger menu
    var [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    // Closes the hamburger menu if we resize the window and it gets larger than mobile
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth > breakPoints.mobile){
                setMenuOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
    })

    return (
        <div className='container is-max-widescreen'>
            <div className='navbar is-transparent m-5'>
                <div className="navbar-brand">
                    <Link to='/' className='navbar-item has-text-light title is-4'>
                        Flor Sanders
                    </Link>
                    
                    <div className={`dropdown dropdown-navbar is-right${menuOpen?' is-active':''}`}>
                        <a class={`navbar-burger burger has-text-light${menuOpen?' is-active':''}`} href='/' onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>

                        <div className="dropdown-menu">
                            <div className='navbar-items'>
                                {pages.map((page) => (
                                    <Link key={page} to={`/${page.toLowerCase()}`} className='navbar-item has-text-light is-size-4 is-justify-content-end'>{page}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
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
