import React, {useState, useEffect} from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import MessageShow from '../../components/MessageShow/MessageShow';
import Footer from '../../components/Footer/Footer';

import './ContactUs.css';

const ContactUs = () => {
    const [id, setId] = useState('');
    const updateIdHandle = (id) => setId(id);

    useEffect(() => {
        const lastUserId = localStorage.getItem('itea-user-id');
        if (lastUserId)
        setId(lastUserId);
        }, []);

    return (

        <div className='ContactUsPage'>
        
            <h2>
                Contact us form with Firebase
            </h2>

            <ContactUsForm updateId={updateIdHandle} />

            <MessageShow id={id} />

            <Footer />

        </div>
    )
}

export default ContactUs;