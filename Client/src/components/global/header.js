
import React from 'react';

class Header extends React.Component{
    
    render(){
        return(
            <header className="container-fluid"  >
                <div className="header-content">
                    {this.content()}           
                </div>
            </header>
        )
    }

    content(){
        let elem ;
        
        if(this.props.page === "home"){
            elem  = (
                <h1>
                    <span  className="animated-hero-text">&nbsp;</span>
                </h1>
            );
        }
        
        else{
            elem = <h1>{this.props.text}</h1>
        }

        return elem;
    }

   

}

export default Header;