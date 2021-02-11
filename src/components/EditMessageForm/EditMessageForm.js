import React, { Component }  from 'react';
import firebase from '../../firebase/firebaseConfig';
import './EditMessageForm.css';

export default class EditMessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    updateState (message) {
        this.setState({
            message: message
        })
    };

    onChangeInputMessage = (e) => {
        this.setState({message: e.target.value});
    };
    
    editMessage = (e, message, docId) => {
        e.preventDefault();
        alert(message + ' ' + docId);

        firebase
            .firestore()
            .collection('emails')
            .where('email', '==', docId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs[0].ref.update({ message: message });
            });
        }

    render() {
        return (
            <div className='EditMessageForm'>
                <form onSubmit={(e) => this.editMessage(e, this.state.message, this.props.id)}>
                    <textarea type='text'
                            value = {this.state.message}
                            onChange = {this.onChangeInputMessage} />

                    <button type='submit' className='submit'>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}