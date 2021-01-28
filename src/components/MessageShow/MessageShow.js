import React, { useState, useEffect } from 'react';

import './MessageShow.css';

import firebase from '../../firebase/firebaseConfig';


function useMessages() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('emails')
            .onSnapshot((snapshot) => {
                const newMessages = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setMessages(newMessages);
            })
    }, [])
    return messages
}

const Message = ({id}) => {
    
    const messages = useMessages();

    messages.find((message) => message.id===id);

    return (

        <div  className='MessageShow'>

        {messages.length<1 ? <p>Message is loading from database ...</p> : <h2>Your Message</h2> }

            <div>

            {messages.map((message, i) =>

                message.id === id ?

                <div className='eachMessage' key={i}>

                    <p>{message.id}</p>
                    <p>{message.name}</p>
                    <p>{message.message}</p>

                    <button className='edit'
                        
                    >EDIT</button>

                    <button className='delete'
                        
                    >DELETE</button>

                </div> : null )}
            </div>
            
        </div>
    )
}

export default Message;