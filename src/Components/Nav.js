import React, { useState, useEffect } from 'react'
import './Nav.css'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src="Images/logo3.png" alt="A-Z Landscape & Maintenance, LLC" />
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='skills' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={-40} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Recent Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={-70} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <ResumeLink>Resume</ResumeLink>} */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
