
import React from 'react';
import FontAwesomeIcons from './fontAwesomeIcons';
import MaterialIcon from './materialicon';

class NewsLetter extends React.Component{
    render(){
        return(
            <div className="news-letter-con">
                <FontAwesomeIcons iconClasses="far fa-envelope-open fa-5x" />
                <p>subscribe to our newsletter to stay updated from all recent mangas!</p>
                <form method="POST">
                    <div className="input-field inline">
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-field inline">
                        <button type="submit" className="btn-small">
                            <MaterialIcon iconName="send"/>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewsLetter;