import React from 'react';
import { withRouter } from 'react-router-dom';
import InputField from '../global/partials/inputField';
// SweetAlert
import swal from 'sweetalert';
// Loader 
import Loader from '../global/loader';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.message = this.message.bind(this);
        this.state = {
            "loading": false
        }
    }
    message(event) {
        event.preventDefault();
        this.setState({ loading: true })
        var Email = document.getElementsByTagName('input')[0].value;
        var Subject = document.getElementsByTagName('select')[0].value;
        var Message = document.getElementsByTagName('textarea')[0].value;

        console.log(Email, Subject, Message)
        fetch('http://localhost:4000/api/message', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": Email,
                "subject": Subject,
                "text": Message
            })
        }).then((response) => {
            if (response.status === 200) {
                this.setState({ loading: false });
                this.handleClick();
                swal('success', 'successfully send!!');
            } else {
                this.handleClick();
                this.setState({ loading: false })
                swal('error', "can't send!!");
            }
        }).catch(err => {
            this.handleClick();
            this.setState({ loading: false })
            swal('error', "Connection error!!")
        });
    }

    render() {
        return (
            <div className="container-fluid form-page-main-container">
                {this.state.loading ? <Loader /> : null}
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>send us a message</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12">
                            <form >
                                <InputField className="col m7 s12" placeholder="Enter your email" type="email"
                                    id="input-email" required="yes" />
                                <div className="input-field col m5 s12">
                                    <select>
                                        <option>Manga Request</option>
                                        <option>Suggestion</option>
                                        <option>Other</option>
                                    </select>
                                    <label>query category</label>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="user-message" className="materialize-textarea" required></textarea>
                                    <label htmlFor="user-message">your message</label>
                                </div>
                                <div className="input-field col s12">
                                    <button type="submit"
                                        className="btn btn-large btn-primary"
                                        onClick={this.message} >
                                        send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleClick() {
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems, (elem) => {
            elem.value = null;
        });
    }
}

export default withRouter(Form);