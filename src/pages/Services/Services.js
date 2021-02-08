import React from 'react';
import './Services.css';

import Footer from '../../components/Footer/Footer';

const Services = () => {

    return (

        <>

        <div className='Services'>
            
            <h2>You can be sure that our team is here to help you. We are working in departments:</h2>

            <div className='text'>
            
            <h3>Data Driven Architecture</h3>
            Design paterns, Scalablitity, Best Practice Framwork, Trigger based Automation.

            <h3>Cloud Computing</h3>
            Go full on Cloud, or Hybrid? What Cloud service suits your needs?

            <h3>Web Development</h3>
            E-Commerce, Home page, Applications.

            <h3>Mobile Development</h3>
            Andriod, IOS.

            <h3>Backend Development</h3>
            Database, RDS, MySQL, MongoDB, Firebase, S3, Blog Storage, Dynamo DB, Serverless?

            <h3>Front-end Development</h3>
            Javascript based, React JS, PHP, Hosting, ect.

            <h3>DevOps</h3>
            System Administration run by Developers, sounds too good to be true? Well we have the detailed solutions that matches your needs.
            </div>

        </div>
        
        <Footer />

        </>
    )
}

export default Services;