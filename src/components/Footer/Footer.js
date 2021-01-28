import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/Homepage/icons8-linkedin-2-30.png';

import './Footer.css';

const footer = () => {

    return (

        <div className='Footer'>

            <div className='adress'>
                <p>ITEA Consulting  Ranunkelgatan 5B, Mölndal, Västra Götalanda län, 431 32</p>
            </div>

            <Link to='/contactus' className='links'>
                Contact Us
            </Link>

            <div className='phones'>
                <p>ITEA Consulting: +46 765 868 550</p>
                <p>anarikrulit@gmail.com</p>
            </div>

            <a className='linkedin' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/anara-zhunusova-2179a2179/'>
                <img src={icon} className='icon' alt='linkedin'></img>
            </a>

        </div>
    )
}

export default footer;