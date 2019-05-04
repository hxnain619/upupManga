import React from 'react';
import { withRouter } from "react-router-dom";
import InputField from '../global/partials/inputField';
import {Link} from 'react-router-dom';

// SweetAlert
import swal from 'sweetalert';
// Loader 
import Loader from '../global/loader';

class ForgetPasswordModal extends React.Component {
    constructor() {
        super();
        this.forgot = this.forgot.bind(this);
        this.state = {
            "loading": false
        }
    }
    forgot(event) {
        event.preventDefault();
        var Email = document.getElementById('forget-input-email').value;
        fetch('http://localhost:4000/api/forgot', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": Email
            })
        })
            .then((response) => {
                this.setState({ loading: false })
                if (response.status === 200) {
                    swal('SUCCESS', 'Reset Pass Link Has Been Sent');
                    this.props.history.push('/login');
                    this.handleClick();
                } else {
                    this.setState({ loading: false })
                    swal('ERROR!!', 'User Not Found!!');
                    this.handleClick();
                }
            })
            .catch(err => {
                this.setState({ loading: false });
                this.handleClick();
                swal('ERROR!!', " Network Error!!")
            });

    };
    render() {
        return (
            <div id="forget-password" className="modal">
                {this.state.loading ? <Loader /> : null}
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h5>Forget password</h5>
                                <div className="divider"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <form method="GET" onSubmit={(e) => {
                                    this.setState({ loading: true });
                                    this.forgot(e)
                                }}>
                                    <InputField required="yes" type="email" placeholder="Enter your email"
                                        classes="col s12" id="forget-input-email" />
                                    <div className="input-field col s12">
                                        <button className="btn btn-large btn-primary" type='submit' >recover account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <Link to="#!" className="modal-close btn-flat">
                        Close
                    </Link>
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

export default withRouter(ForgetPasswordModal);
