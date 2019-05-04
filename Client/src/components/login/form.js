import React from 'react';
import bcrypt from 'bcryptjs';
import { withRouter } from "react-router-dom";
import InputField from '../global/partials/inputField';
// SweetAlert
import swal from 'sweetalert';
// Loader 
import Loader from '../global/loader';

//Private Route
import Auth from "../../AppRouter/Auth";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            "loading": false
        }
    }
    login() {
        var UserEmail = document.getElementById("user-input-email").value,
            UserPassword = document.getElementById('user-input-password').value,
            AdminEmail = document.getElementById("admin-input-email").value,
            AdminPassword = document.getElementById("admin-input-password").value;

        fetch('http://localhost:4000/api/login')
            .then(data => {
                var db = data.json();
                return db;
            }).then(db => {
                db.forEach((data) => {
                    this.setState({ loading: false })
                    if (AdminEmail === data.email && data.isAdmin) {
                        bcrypt.compare(AdminPassword, data.password).then(res => {
                            swal("SUCCESS", "Successfully SignIn !!");
                            this.props.history.push('/panel');
                        })
                            .catch(err => {
                                this.handleClick();
                                swal('ERROR!!', 'Password Is Incorrect!!')
                            });
                    }
                    if (UserEmail === data.email && !data.isAdmin) {
                        bcrypt.compare(UserPassword, data.password).then(res => {
                            swal("SUCCESS", "Successfully SignIn!!");
                            this.props.history.push('/');
                        })
                            .catch(err => {
                                this.setState({ loading: false })
                                this.handleClick();
                                swal('ERROR!!', 'Password Is Incorrect')
                            });
                    } else {
                        this.setState({ loading: false })
                        this.handleClick();
                        swal('ERROR', "Email Is not Correct");
                    }
                })
            })
            .catch(err => {
                this.handleClick();
                this.setState({ loading: false })
                swal("ERROR", "Network Error!!");
            })
    }

    render() {
        return (
            <div className="container-fluid form-page-main-container">
                {this.state.loading ? <Loader /> : null}
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>Account login</h3>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab col s12 m6 l4 offset-l2">
                                            <a href="#user-form">User Login</a>
                                        </li>
                                        <li className="tab col s12 m6 l4 offset-l2">
                                            <a href="#admin-form">
                                                Admin Login
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">

                            {this.renderForm("user-form", "user-input-email", "user-input-password")}
                            {this.renderForm("admin-form", "admin-input-email", "admin-input-password")}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderForm(id, emailID, passwordID) {

        return (
            <form id={id} onSubmit={(e) => {
                this.setState({ loading: true })
                Auth.login(e, this.login)
            }
            }>
                <InputField classes="col s12"
                    type='email'
                    name='email'
                    placeholder="Enter your email" id={emailID}
                    required="yes" />

                <InputField classes="col s12"
                    type='password'
                    name='password'
                    placeholder="Enter your password" id={passwordID}
                    required="yes" />

                <div className="input-field col s12" >
                    <button className="btn btn-large btn-primary"  >
                        Login
                    </button>
                    <button className="btn btn-large btn-secondary"
                        style={{ marginLeft: "5%" }}
                        onClick={this.handleClick}>
                        Cancel
                    </button>
                </div>
                <div className="col s12 l6 forgot-pass-col">
                    <a className="btn-flat modal-trigger" href="#forget-password">Forgot Password?</a>
                </div>
            </form>
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