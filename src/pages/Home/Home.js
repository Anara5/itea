import React from 'react';
import './Home.css';
import bridge from '../../images/Homepage/bridge.jpg';

import Footer from '../../components/Footer/Footer';

const Home = () => {

    return (

        <div className='Homepage'>

            <header className='header'>
                <img src={bridge} className='bridgePhoto' alt='homepage'></img>

                <h3>Let us prepare your company for a better future...</h3>

            </header>
            
            <div className='homeText'>

                <h1>ITEA</h1>

                <p>ITEA stands for IT in Europe and Asia. And is a girl power IT company employing
                the sharpest minds to give our customers the finest IT solutions possible. Our Idea is simple, deliver
                top notch quality to all our clients and world class support.</p>

                <p>We believe in delivering great solutions to customers, that are 
                cost effective, time saving and agile, meaning that it might need to change 
                in this ever changing climate of business.</p>

                <p>We believe in the power of women, We sniff out the greatest minds out there
                to give you the best possible up to date techical knolwedge. Excelling in fields
                like security, scalability, and best practice framework.</p>

                <p>Our vision is happy customers, leading edge technical solutions for
                Europe and Asia with flexibility in mind.</p>

            </div>

            <Footer />

        </div>
    )
}

export default Home;