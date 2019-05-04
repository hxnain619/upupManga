import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../global/comments';
import StarRatings from 'react-star-ratings';

class Bio extends React.Component {
    constructor() {
        super();
        this.state = {
            "rating" : 0
        }
    }
    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }
  
    render() {
        return (
            <div className="container manga-bio">
                <div className="row">
                    <div className="col s12 l8 xl9">
                        <h3>description</h3>
                        <div className="divider"></div>

                        <div className="row">
                            <div className="col s12">
                                <h5>title of the manga</h5>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>

                                <div className="col m6 s12">
                                    <table className="striped  centered">
                                        <tbody>
                                            <tr>
                                                <td>status</td>
                                                <td>completed</td>
                                            </tr>
                                            <tr>
                                                <td>author</td>
                                                <td>author name</td>
                                            </tr>
                                            <tr>
                                                <td>art director</td>
                                                <td>director name</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col m6 s12">
                                    <table className="striped centered">
                                        <tbody>
                                            <tr>
                                                <td>date</td>
                                                <td>december 28 2018</td>
                                            </tr>
                                            <tr>
                                                <td>views</td>
                                                <td>699</td>
                                            </tr>
                                            <tr>
                                                <td>ratings</td>
                                                <td>
                                                    <StarRatings
                                                        rating={this.state.rating}
                                                        starRatedColor="rgb(255,215,0)"
                                                        starEmptyColor = "grey"
                                                        starHoverColor = "rgb(255,215,0)"
                                                        starDimension = '20px'
                                                        changeRating={(e) => this.changeRating(e, 'rating')}
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col s12 m8 l4 xl3 offset-m2">
                        <div className="manga-poster-container">
                            <Link to="/mangareads" >
                                <img src={require("../../assets/images/upup.png")} style={{ height: "100%", width: "100%" }} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l8">
                        <div className="row">
                            <div className="col s12 sub-header-container">
                                <h4>chapters</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <ul className="collection">
                                    <li className="collection-item">
                                        <a href="#!">
                                            chapter name
                                        </a>
                                    </li>
                                    <li className="collection-item">
                                        <a href="#!">
                                            chapter name
                                        </a>
                                    </li>
                                    <li className="collection-item">
                                        <a href="#!">
                                            chapter name
                                        </a>
                                    </li>
                                    <li className="collection-item">
                                        <a href="#!">
                                            chapter name
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l4">
                        <div className="row genre-container">
                            <div className="col s12 sub-header-container">
                                <h4>genre</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <a href="#!" className="btn-badges">comedy</a>
                                <a href="#!" className="btn-badges">action</a>
                                <a href="#!" className="btn-badges">romance</a>
                                <a href="#!" className="btn-badges">teenage</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col s12 l8 xl9">
                        <Comment />
                    </div>
                </div>
            </div>
        )
    }



}

export default Bio;
