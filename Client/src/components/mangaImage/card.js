import React from 'react';
import {Link} from 'react-router-dom';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <div className="card-background" style={{backgroundImage:`url(https://cdn.mangaeden.com/mangasimg/${this.props.data.image})`}}></div>
                    <div className="card-hidden-content">
                        <Link to="#!">&nbsp;</Link>
                        <span className="card-views">{this.props.data.hits} views</span>
                        <span className="card-post-date">Released On: {this.props.data.released} </span>
                        <span className="card-author"><Link to="#!"> by : {this.props.data.author}</Link></span>
                    </div>
                </div>

                <div className="card-content">
                    <Link to="#!"><p className="card-hero-title">{this.props.data.title.substr(0,25)+'...'}</p></Link>
                    <p style={{ Height: '300px !important' }} >{this.props.data.description.substr(0, 120)+'...'}</p>
                    <Link to="#!" className="btn btn-small waves-effect waves-light btn-primary btn-sm">read more</Link>
                </div>
            </div>
        )
    }
}

export default Card;