import React from 'react';
import MaterialIcon from './materialicon';
import NavLinks from './partials/navLinks';
import SideNav from './partials/sideNav';
import {Link } from 'react-router-dom';

class Nav extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            logo : {
                imgSrc : ["src/images/nav-logo-0.png","src/images/nav-logo-1.png"],
                imgId : ["nav-logo","nav-logo-sm"],
                alt : "upupmanga logo"
            },
            dropdownText : ["text list","image list"],
            navText : ["home","manga list","contact","login","sign up"]
        }

    }

    render(){
        return(
          <nav>
              
           <div className="nav-wrapper container">
                <Link to="#!" data-target="mobile-demo" className="sidenav-trigger waves-effect waves-light">
                    <MaterialIcon iconName="menu"/>
                </Link>

                <Link to="/" className="brand-logo">
                    {this.navLogos()}
                </Link>

                <ul id="manga-dropdown" className="dropdown-content">
                    {this.listItems(this.state.dropdownText)}
                </ul>

                <NavLinks active={this.props.activeLink} text={this.state.navText}/>
                <SideNav active={this.props.activeLink} text={this.state.navText}/>
           </div>

          </nav>          
        );
    }


    listItems(textArray){
        
        let temp = [] , i;

        for(i=0 ; i<textArray.length ; i++){
            temp.push(
                <li key={i}><Link to={textArray[i]}>{textArray[i]}</Link></li>
            )
        }

        return temp;

    }

    navLogos(){
        
        let temp = [] , i;

        for(i=0 ; i<this.state.logo.imgSrc.length ; i++){
            temp.push(
                <img key={i} src={this.state.logo.imgSrc[i]}  alt={this.state.logo.alt} id={this.state.logo.imgId[i]}/>
            )
        }

        return temp;
        
    }
   

}

export default Nav;
