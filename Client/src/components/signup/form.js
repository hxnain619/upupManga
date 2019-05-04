import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputField from '../global/partials/inputField';
import LoginComponent from '../../screen/Login/LoginComponent';

// SweetAlert
import swal from 'sweetalert';
//  Loader
import Loader from '../global/loader';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.state = {
            "loading": false
        }
    }

    signUp(event) {
        event.preventDefault();
        var Username = document.getElementsByTagName('input')[0].value;
        var Email = document.getElementsByTagName('input')[1].value;
        var Password = document.getElementsByTagName('input')[2].value;
        fetch('https://lit-shelf-71550.herokuapp.com/api/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": Username,
                "email": Email,
                "password": Password,
                "isAdmin": false
            })
        }).then((response) => {
            this.setState({ loading: false })
            if (response.status === 200) {
                swal('SUCCESS', 'Successfully Sign Up!!');
                this.props.history.push('/login');
            } else {
                this.setState({ loading: false })
                swal('ERROR!!', 'Can\'t Sign Up, User Exists!!');
                this.handleClick();
            }
        }).catch(err => {
            this.setState({ loading: false });
            this.handleClick();
            swal('ERROR!!', "Network Error!!")
        });
    }

    render() {
        return (
            <div className="container-fluid form-page-main-container">
                {this.state.loading ? <Loader /> : null}
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>register account</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <form method="GET" onSubmit={(e) => {
                                this.setState({ loading: true })
                                this.signUp(e)
                            }}>
                                <InputField type="text" placeholder="Enter your name" id="input-name" required="yes" classes="col s12" />
                                <InputField type="email" placeholder="Enter your email address" id="input-email" required="yes" classes="col s12" />
                                <InputField type="password" placeholder="Password" id="input-password" required="yes" classes="col s12" />
                                <div className="input-field col s12">
                                    <button type="submit" className="btn btn-large btn-primary" >
                                        register
                                    </button>
                                    <button type="button"
                                        className="btn btn-large btn-secondary"
                                        style={{ marginLeft: "5%" }}
                                        onClick={this.handleClick}
                                    >
                                        cancel
                                    </button>
                                </div>
                                <div className="input-field col s12">
                                    <Link className="btn-flat" to="/login" component={LoginComponent}>
                                        already have an account?
                                    </Link>
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