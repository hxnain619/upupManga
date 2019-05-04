
import React from 'react';
import MaterialIcon from '../materialicon';
import * as firebase from "firebase";
// Loader 
import Loader from '../loader';

class Chats extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            inputtedMsg: '',
            msgs: [],
            loading: false
        }
    }

    handleClick(e) {
        e.preventDefault()
            this.props.onClose();
        
    }
    componentDidMount() {
        this._isMounted = true;
        if(!firebase.apps.length){
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCdnVvpmDzlr-yItbQB6koCdduxBSNm2YU",
                authDomain: "upupmanga.firebaseapp.com",
                databaseURL: "https://upupmanga.firebaseio.com",
                projectId: "upupmanga",
                storageBucket: "upupmanga.appspot.com",
                messagingSenderId: "256669907691"
            };

            firebase.initializeApp(config);

            //getting messages from the database
        }
            this.getMsgs();
 
    }
    componentWillUnmount(){
        this._isMounted = false;
    }

    getMsgs = () => {
        this.setState({ loading: true });
        let msgs = firebase.database().ref('/messages');

        let temp = [];
        msgs.on('value', data => {
            if(this._isMounted){
            this.setState({ loading: false })
            data.forEach(item => {
                let singleMsg = item.val();
                let key = item.key;
                temp.push({ id: key, text: singleMsg.text })
            });
        }
            this.setState({ msgs: temp });
        });
    }

    saveMsg = (msg) => {
        firebase.database().ref('/messages').push({
            text: msg
        });
    }

    renderMsgs = () => {
        let temp = [];
        for (let i = 0; i < this.state.msgs.length; i++) {
            temp.push(
                <li className='msg-container you' key={this.state.msgs[i].id}>
                    <p>{this.state.msgs[i].text}</p>
                    <span>hxnain ali</span>
                </li>
            );
        }
        return temp;
    }

    render() {
        return (
            <div className="user-chats">
                <div className="chat-header" onClick={(e) => this.handleClick(e)}>
                    <span>chatbox</span>
                    <MaterialIcon iconName="close" />
                </div>
                <ul className="chat-messages">
                    {this.state.loading ? <Loader /> : null}
                    {this.renderMsgs()}
                </ul>
                <div className="msg-input">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" required className='browser-default' onChange={(e) => this.handleChange(e)} />
                        <button type="submit" >send</button>
                    </form>

                </div>
            </div>
        )
    }
    handleSubmit = (event) => {

        event.preventDefault();
        this.saveMsg(this.state.inputtedMsg);
        this.setState({
            inputtedMsg: ''
        });
        event.target.getElementsByTagName('input')[0].value = null;
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            inputtedMsg: event.target.value
        });
    }

}


export default Chats;