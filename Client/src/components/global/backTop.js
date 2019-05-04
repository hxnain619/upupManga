import React from 'react';
import MaterialIcon from './materialicon';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class BackTop extends React.Component{
    render(){
        return(
            <Link className="btn-floating btn-small btn-primary" id="back-top" to="#!"
            onClick={this.handleClick}>
                <MaterialIcon iconName="arrow_drop_up"/>                
            </Link>

        );
    }

    handleClick(){
        $('#back-top').each(function(){
            $(this).click(function(){ 
                $('html,body').animate({ scrollTop: 0 }, 'slow');
                return false; 
            });
        });
    }
}

export default BackTop;