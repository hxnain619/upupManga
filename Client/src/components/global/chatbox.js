import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from './fontAwesomeIcons';
import Chats from './partials/chats';

class ChatBox extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            visible : false
        }
    }

    render(){
        return(
            <div className="chat-box">
                <Link to='#!' className="btn-floating  btn-chatBox" onClick={ this.handleClick}>
                    <FontAwesomeIcon  iconClasses="fab fa-facebook-messenger"/>
                </Link>
                {(this.state.visible) ? <Chats onClose={this.handleClick}/> : null  }
            </div>
        )
    }

    handleClick = () => {
        (this.state.visible) ? this.setState({visible : false}) : this.setState({visible : true})
    }

}

export default ChatBox;