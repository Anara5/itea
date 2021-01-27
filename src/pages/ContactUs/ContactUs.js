import React, {useState, useEffect} from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import MessageShow from '../../components/MessageShow/MessageShow';

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
            <div>
                Contact us form with Firebase
            </div>

            <ContactUsForm updateId={updateIdHandle} />

            <MessageShow id={id} />

        </div>
    )
}

export default ContactUs;