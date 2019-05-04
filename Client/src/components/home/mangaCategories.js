
import React from 'react';
import Cards from '../global/cards';
import {Link} from 'react-router-dom';

class MangaCategories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestImages : ["https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/1667587/pexels-photo-1667587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/837500/pexels-photo-837500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ]}
    }
    render(){
        return(
            <div className="container-fluid mangas-category-container">
                <div className="container card-main-container">
                    {this.renderHeader()}
                    <div className="row">
                        {this.renderFilter()}
                    </div>
                    <div className="row">
                        {this.renderHeroCard()}
                        {this.renderCards()}
                    </div>
                </div>
            </div>
        );
    }

    renderCards(){

        let elems = [];

        //cards
        for(let i=1 ; i<this.state.latestImages.length ; i++){
            elems.push(
                <div key = {i} className="col s12 m6 xl4">
                    <Cards image={this.state.latestImages[i]}/>
                </div>
            );
        }

        return(
            <div className="col s12 l8">
                <div className="row">
                    {elems}
                </div>
            </div>
        );
    }

    renderHeroCard(){
        return(
            <div className="col s12 l4">
                <div className="row">
                    <div className="col s12">
                    <Link to="/mangabio" >
                        <div className="card hero-card">
                            
                            <div className="card-image">
                                <div className="card-background" data-image-source={this.state.latestImages[0]}></div>
                                <div className="card-hidden-content">
                                    <Link to="#!">&nbsp;</Link>
                                    <span className="card-views">24 views</span>
                                    <span className="card-post-date">3 weeks ago</span>
                                    <span className="card-author"><Link to="#!">by : author name</Link></span>
                                </div>
                            </div>
                        
                            <div className="card-content">
                                <Link to="#!">
                                    <p className="card-hero-title">demo title</p>
                                </Link>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    renderFilter(){
        return(
            <div className="col s12">
                <form>
                    <div className="input-field col s12">
                        <select multiple id="cateogry-select">
                            <option>Any</option>
                            <optgroup label="Basic Genres">
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>School Life</option>
                                <option>Shounen</option>
                                <option >Romance</option>   
                            </optgroup>
                            <optgroup label="More Genres">
                                <option>Genre 1</option>
                                <option>Genre 2</option>
                                <option>Genre 3</option>
                            </optgroup>
                        </select>
                        <label htmlFor="cateogry-select">Displaying Mangas Based On Categories</label>
                    </div>
                </form>
            </div>
        )
    }

    renderHeader(){
        let data = (
            <div className="row">
                <div className="col s12">
                    <h3>mangas categories <Link to="/image list" className="badge-button">view more </Link> </h3>
                    <div className="divider"></div>
                </div>
            </div>
        );
        return data;
    }
    componentDidMount(){

        let cardsElem = document.getElementsByClassName('card-background');

        Array.prototype.forEach.call(cardsElem,elem => {
            elem.setAttribute('style',`background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }

}

export default MangaCategories;