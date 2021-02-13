import React, { Component }  from 'react';
import firebase from '../../firebase/firebaseConfig';
import './EditMessageForm.css';

export default class EditMessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.message
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
    
    editMessage = (e) => {
        e.preventDefault();
        alert('Would you like to save your changes!');

        firebase
            .firestore()
            .collection('emails')
            .where('email', '==', this.state.id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs[this.props.pos].ref.update({ message: this.state.message });
            });
            this.props.onClosed(this.props.pos);
        }

        cancelMessage = () => {
            this.props.onClosed(this.props.pos);
        }

    render() {
        return (
            <div className='EditMessageForm'>
                <form onSubmit={(e) => this.editMessage(e)}>
                    <textarea type='text'
                            value = {this.state.message}
                            onChange = {this.onChangeInputMessage} />

                    <button type='submit' className='submit'>
                        Save
                    </button>

                    <button onClick={this.cancelMessage} className='submit'>Cancel</button>
                </form>
            </div>
        )
    }
}