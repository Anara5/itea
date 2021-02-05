import React, { Component }  from 'react';

import firebase from '../../firebase/firebaseConfig';

export default class EditMessageForm extends Component {

    constructor(props) {
        super(props)
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
        this.setState({message: e.target.value})
    };

    editMessage = (id) => {

        firebase
            .firestore()
            .collection('emails')
            .where('email', '==', id)
            .then(querySnapshot => {
                querySnapshot.docs[0].ref.set({
                message: this.state.message
            });
            })

            this.props.updateId(this.state.id);
        }

    render() {
        return (
            <div>
                <form>
                    <textarea type='text'
                            value = {this.state.message}
                            onChange = {this.onChangeInputMessage} />

                    <button
                        onClick={() => {this.editMessage(this.state.message)}}>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}