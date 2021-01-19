import React from 'react';

import './ContactUsForm.modules.css';

import firebase from '../../firebase/firebaseConfig';


class ContactUsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
        this.onNameChange=this.onNameChange.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onMessageChange=this.onMessageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
        console.log(event.target.value)
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }

      
      handleSubmit(event) {
        event.preventDefault(); 
        console.log(this.state);

       firebase
            .firestore()
            .collection('emails')
            .add({
                id: this.email,
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                time: new Date(),
                }).then(() => {
                    alert('Your message has beeen submitted!');
                }).catch((error) => {
                    alert(error.message);
                })
            event.target.reset();
        };

    render() {

        return (
            <div className='Form'>

                <form onSubmit={this.handleSubmit} method="POST">

                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.onNameChange}
                        value={this.state.value}
                        required
                    />
                    
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={this.onEmailChange}
                        value={this.state.value}
                        required
                    />

                    <textarea
                        type='text'
                        name='message'
                        placeholder='Message'
                        onChange={this.onMessageChange}
                        value={this.state.value}
                        required
                    />

                    <button>
                        Send message
                    </button>

                </form>
            </div>
        )
    }
}

export default ContactUsForm;