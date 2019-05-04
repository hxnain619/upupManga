import React from 'react';
import FontAwesomeIcons from './fontAwesomeIcons';
import {Link} from 'react-router-dom';

class SocialHandle extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            iconClasses : ["fab fa-facebook-f","fab fa-twitter","fab fa-linkedin-in","fas fa-rss"]
        }
    }

    render(){
        return(
            <div className="row social-handle-container">
                <div className="row">
                    <div className="col s12">
                        <h3>social media</h3>
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="row" id="social-btn-container" >
                    {this.renderIcons()}
                </div>
            </div>
        )
    }

    renderIcons(){
        
        let elem = [];
        
        for(let i=0  ; i<4  ; i++){
            elem.push(
                <Link to="#!" className="btn-floating social-btn btn-large" key={i}>
                    <FontAwesomeIcons iconClasses={this.state.iconClasses[i]}/>
                </Link>
            )
        }

        return elem;
    }

}

export default SocialHandle;