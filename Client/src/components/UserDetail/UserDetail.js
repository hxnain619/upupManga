import React from 'react';
import InputField from '../global/partials/inputField';
import bcrypt from 'bcryptjs';
// SweetAlert
import swal from 'sweetalert';
//  Loader
import Loader from '../global/loader';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.resetPass = this.resetPass.bind(this);
        this.state = {
            "loading": false
        }
    }
    resetPass(e) {
        e.preventDefault();
        var Email = document.getElementById('email').firstChild.nodeValue;
        var oldPass = document.getElementById('user-old-password').value;
        var newPass = document.getElementById('user-new-password').value;

        fetch('https://lit-shelf-71550.herokuapp.com/api/login')
            .then(data => {
                var db = data.json();
                return db;
            })
            .then(db => {
                db.forEach((data) => {
                    if (data.email === Email) {
                        return bcrypt.compare(oldPass, data.password)
                            .then(res => {
                                if (!res) {
                                    this.setState({ loading: false })
                                    this.handleClick();
                                    swal("ERROR", "Old Password Is Not Correct")
                                    return null;
                                } else {
                                    var hash = bcrypt.hashSync(newPass, 5);
                                    return newPass = hash
                                }
                            })
                            .then(hashedPass => {
                                if (hashedPass) {
                                    return fetch('http://localhost:4000/api/updatepass', {
                                        method: "PUT",
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            "password": hashedPass
                                        })
                                    })
                                        .then(res => {
                                            if (res) {
                                                this.setState({ loading: false })
                                                this.handleClick();
                                                swal("SUCCESS", "Password Updated Successfully")
                                            } else {
                                                return null;
                                            }
                                        })
                                        .catch(err => {
                                            this.setState({ loading: false })
                                            this.handleClick();
                                            swal("ERROR", "Password Updated Failed")
                                        })
                                } else {
                                    return null;
                                }
                            })
                            .catch(err => {
                                this.setState({ loading: false })
                                this.handleClick();
                                swal('ERROR!!', 'Password Is Incorrect!!')
                            });
                    } else {
                        this.setState({ loading: false })
                        swal("ERROR", 'Email Not Found')
                    }
                })
            })
            .catch(err => {
                this.setState({ loading: false })
                this.handleClick();
                swal("ERROR", "Network Error");
            })

    }
    handleClick() {
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems, (elem) => {
            elem.value = null;
        });
    }
    render() {
        return (
            <div className="container user-profile-main-container">
                {this.state.loading ? <Loader /> : null}
                <div className="row">
                    <div className="col s12">
                        <h3>User details</h3>
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="row" id="detail-main-container">
                    <div className="col s12 m4">
                        <ul className="tabs">
                            <li className="tab col s12">
                                <a href="#user-dashboard">Dashboard</a>
                            </li>
                            <li className="tab col s12">
                                <a href="#user-profile">User Profile</a>
                            </li>
                            <li className="tab col s12">
                                <a href="#user-update-password">Update Password</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 m7 offset-m1" id="user-update-password">
                        <form onSubmit={(e) => {
                            this.setState({ loading: true })
                            this.resetPass(e);
                        }}>
                            <InputField classes="col s12" type="Password" placeholder="Old Password" id="user-old-password"
                                required="yes" />
                            <InputField classes="col s12" type="Password" placeholder="New Password" id="user-new-password"
                                required="yes" />
                            <div className="input-field col s12">
                                <button type="submit" className="btn btn-large btn-primary">Change Password</button>
                            </div>
                        </form>
                    </div>
                    <div className="col s12 m7 offset-m1" id="user-profile">
                        <table className="striped">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Someone</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td id='email'>hxan619@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s12 m7 offset-m1" id="user-dashboard" >
                        <div className="content-header">
                            <div className="user-img">
                                <h3 className='avatar-letter'> H </h3>
                            </div>
                            <span id="member-info">member since : 32 minutes ago</span>
                        </div>
                        <table className="striped">
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>demoemail@email.com</td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>*************</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails;