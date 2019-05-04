
import React from 'react';
import {Link} from 'react-router-dom';

class NotFound extends React.Component{
    render(){
        return(
            <div className="full-page-container">
                <div className="content">
                   <center> <h3>oops! the page you are looking for is not found</h3>
                    <Link to="/" className="btn-large btn-secondary waves-effect">go back to homepage</Link>
                    </center>
                </div>
            </div>
        )
    }
}

export default NotFound;