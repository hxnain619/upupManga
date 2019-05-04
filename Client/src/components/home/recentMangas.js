import React from 'react';
import Cards from '../global/cards';
import SocialHandle from '../global/socialHandle';
import {Link} from 'react-router-dom';

class RecentMangas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestImages : ["https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/1667587/pexels-photo-1667587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/837500/pexels-photo-837500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ]}
    }
    render(){
        return(
            <div className="container-fluid recent-uploaded-mangas">
                <div className="container card-main-container">
                    <div className="row">
                        <div className="col s12 l7">
                            {this.renderHeader()}
                            {this.renderCards()}
                        </div>
                        <div className="col s12 l5">
                            <SocialHandle />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderCards(){

        //no of card....
        let elem =[] ;

        for(let i=0 ; i<this.state.latestImages.length ; i++){
            elem.push(
                <div key={i} className="col s12 m6">
                                 <Link to="/mangabio" >
                                 <Cards image={this.state.latestImages[i]}/>
                                 </Link>
                </div>
            )
        }

        return(
            <div className="row">
                {elem}
            </div>

        )
    }

    renderHeader(){
        return(
            <div className="row">
                <div className="col s12">
                    <h3>recent mangas <Link to="/image list" className="badge-button">view more </Link>  </h3>
                    <div className="divider"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){

        let cardsElem = document.getElementsByClassName('card-background');

        Array.prototype.forEach.call(cardsElem,elem => {
            elem.setAttribute('style',`background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }

}

export default RecentMangas;