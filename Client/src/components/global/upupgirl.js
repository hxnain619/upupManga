import React from 'react';
import Cards from './cards';
import {Link} from 'react-router-dom';

class Upupgirl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestImages : ["https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/1667587/pexels-photo-1667587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/837500/pexels-photo-837500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/973226/pexels-photo-973226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/532564/pexels-photo-532564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
        }
    }
    render(){
        return this.modal();
    }

    modal(){
        return(
            <div id="upup-modal" className="modal">
                <div className="modal-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col l8">
                                <h3>popular mangas</h3>
                                <div className="divider"></div>
                            </div>
                            <div className="col l4">
                                <form>
                                    <div className="input-field col s12">
                                        <select id="upup-modal-cateogry-select">
                                            <option defaultValue>Today</option>
                                            <option>All Time</option>
                                            <option>Past Week</option>
                                            <option>Past Month</option>
                                            <option>Past Year</option>
                                        </select>
                                        <label htmlFor="upup-modal-cateogry-select">Filter Popular Mangas</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row card-main-container">
                            {this.getCards()}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <Link to="#!" className="modal-close waves-effect btn-flat">close</Link>
                </div>
            </div>
        )
    }

    getCards(){
        
        let elems = [];

        for(let i=0 ; i<this.state.latestImages.length ; i++){
            elems.push(
                <div key= {i} className="col m6 l4 xl4">
                   <Link to="/notfound" className="modal-close" > <Cards image={this.state.latestImages[i]}/></Link>
                </div>
            )
        }

        return elems;

    }
    componentDidMount(){

        let cardsElem = document.getElementsByClassName('card-background');

        Array.prototype.forEach.call(cardsElem,elem => {
            elem.setAttribute('style',`background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }


}

export default Upupgirl;