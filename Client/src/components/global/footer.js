import React from 'react';
import FontAwesomeIcons from './fontAwesomeIcons';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            linkText: ["demo text here", "demo text here", "demo text here", "demo text here"],
            socialClasses: ["fab fa-facebook-f", "fab fa-twitter"
                , "fab fa-google-plus-g", "fab fa-linkedin-in",
                "fab fa-pinterest-p", "fas fa-rss", "fab fa-vimeo-v"]
        }
    }

    render() {
        return (
            <footer className="container-fluid footer">
                <div className="container container-first">
                    <div className="row">
                        {this.first()}
                        {this.second()}
                        {this.third()}
                    </div>
                </div>
                <div className="container footer-second-container">
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <Link to='/' >
                                <img src="src/images/logo.png" alt="upupmanga logo" />
                            </Link>
                            <div>
                                {this.renderIcons()}
                            </div>
                            <p>&copy; Upupmanga.com. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    first() {
        return (
            <div className="col s12 l4">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5>about us</h5>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Link to='/' >
                                <img src="src/images/logo.png" alt="upupmanga logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    second() {
        return (
            <div className="col s12 l4">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5>latest posts</h5>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <ul>
                                {this.getList()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    third() {
        return (
            <div className="col s12 l4">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5>latest updates</h5>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <ul>
                                {this.getList()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

        getList() {

            let temp = [];

            for (let i = 0; i < this.state.linkText.length; i++) {
                temp.push(
                    <li key={i}>
                        <Link to="#!">
                            {this.state.linkText[i]}
                        </Link>
                    </li>
                )
            }

            return temp;

        }

    renderIcons() {

        let temp = [];

        for (let i = 0; i < this.state.socialClasses.length; i++) {
            temp.push(
                <a key={i} className="btn-floating btn-large" style={{margin: '5px'}} href="#!">
                    <FontAwesomeIcons iconClasses={this.state.socialClasses[i]} />
                </a>
            );
        }

        return temp;

    }

}

export default Footer;