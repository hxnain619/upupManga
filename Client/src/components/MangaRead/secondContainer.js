
import React from 'react';
import NewsLetter from '../global/newsLetter';
import {Link} from 'react-router-dom';

class SecondContainer extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 l8">
                        <ul className="collection with-header">
                            <li className="collection-header"><h5>More Chapters</h5></li>
                            <li className="collection-item">
                                <Link to="#!">name of chapter</Link>
                            </li>
                            <li className="collection-item">
                                <Link to="#!">name of chapter</Link>
                            </li>
                            <li className="collection-item">
                                <Link to="#!">name of chapter</Link>
                            </li>
                            <li className="collection-item">
                                <Link to="#!">name of chapter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 l4">
                        <NewsLetter />
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondContainer;