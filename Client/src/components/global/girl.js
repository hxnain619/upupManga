import React from 'react';
import {Link} from 'react-router-dom';

class Girl extends React.Component{
    render(){
        return(
            <Link to="#upup-modal" id="upup-girl" className="modal-trigger">
                <img src="src/images/upup-girl.png" alt="upup girl"/>
            </Link>
        )
    }
}


export default Girl;