import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.modules.css';

function NavigationBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

        return (
            <>
            <nav className='NavigationBar'>

                <div className='navbar-container'>

                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    ITEA
                    </Link>

                    <div onClick={handleClick} className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    
                    </ul>
                
                </div>
           </nav>
           </>
        );
    }


export default NavigationBar;