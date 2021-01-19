import React from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import MessageShow from '../../components/MessageShow/MessageShow';
//import classes from './ContactUs.modules.css';

const ContactUs = () => {
    return (
        <div>
            <div>
                Contact us form with Firebase
            </div>

            <ContactUsForm />

            <MessageShow />

        </div>
    )
}

export default ContactUs;