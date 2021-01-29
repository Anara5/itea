import React from 'react';
import './Home.css';
import bridge from '../../images/Homepage/bridge.jpg';

import Footer from '../../components/Footer/Footer';

const Home = () => {

    return (

        <div className='Homepage'>

            <header className='header'>
                <img src={bridge} className='bridgePhoto' alt='homepage'></img>

                <h3>our ITEA and text...</h3>

            </header>
            
            <div className='homeText'>
                <h1>ITEA</h1>
                <p>there will be a homepage info. Info about our company.
                The idea</p>
            </div>

            <Footer />

        </div>
    )
}

export default Home;