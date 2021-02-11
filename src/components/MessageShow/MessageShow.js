import React, { useState, useEffect } from 'react';
import './MessageShow.css';
import firebase from '../../firebase/firebaseConfig';
import EditMessageForm from '../EditMessageForm/EditMessageForm';

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

function deleteMessage(id) {
    alert('Your message will be deleted!');
    firebase
        .firestore()
        .collection('emails')
        .where('email', '==', id).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        }
    )
}


const Message = ({id}) => {
    
    const messages = useMessages();
    messages.find((message) => message.id===id);

    const initialOpenEditForm = new Array(Message.length)
    for (let val of initialOpenEditForm) val = false;

    const [openEditForm, setOpenEditForm] = React.useState(initialOpenEditForm);

    const visibleForm = ({i}) => {
        setOpenEditForm(f => {
            const f1 = [...f];
            f[i] = true;
            return f1;
        });
    }

    return (

        <div  className='MessageShow'>

        {messages.length < 1 ? <p>Message is loading from database ...</p> : <h2>Your Messages</h2> }

            <div>

            {messages.map((message, i) =>

                message.id === id ?

                <div className='eachMessage' key={i}>

                    <p>{message.id}</p>
                    <p>{message.name}</p>
                    <div className='messageShow'>{message.message}</div>

                    {openEditForm && <EditMessageForm id={id} />}

                    <button className='edit'
                    onClick={() => visibleForm(i)}
                    >EDIT</button>

                    <button className='delete'
                        onClick={() => deleteMessage(message.id)}
                    >DELETE</button>
                    
                </div> : null )}

            </div>                        
        </div>
    )
}

export default Message;