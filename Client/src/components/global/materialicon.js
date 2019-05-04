
import React from 'react';

class MaterialIcon extends React.Component{
    render(){
        let temp  = <i className="material-icons">{this.props.iconName}</i>;
        
        if(this.props.alignment !== undefined){
            let classes = `material-icons ${this.props.alignment}`;
            temp = <i className={classes} >{this.props.iconName}</i>
        }

        return temp;
    }
}

export default MaterialIcon;