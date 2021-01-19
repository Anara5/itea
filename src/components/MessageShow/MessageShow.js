import React, { useState, useEffect } from 'react';

import './MessageShow.css';

import firebase from '../../firebase/firebaseConfig';

function useMessages() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('emails')
            .onSnapshot((snapshot) => {
                const newMessages = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setMessages(newMessages)
            })
    }, [])

    return messages
}

const Message = () => {
    const messages = useMessages();

   
    return (

        <div className="MessageShow">

            <p>Your Message</p>

            <div>
                {messages.map((email) => 
                    <div className='eachMessage'>
                        <p>{email.id}</p>
                        <p>{email.email}</p>
                        <p>{email.message}</p>
                    </div>
                )}
            </div>

        </div>

    )
}

export default Message;