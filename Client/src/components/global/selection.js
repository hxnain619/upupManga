import React from 'react';


class Selection extends React.Component{

    render(){
        return this.selectElem();
    }
    
    selectElem(){
        
        let elem;

        if(this.props.data.multiple){
            elem = (
                <select id={this.props.data.id} multiple>
                    {this.renderGroups()}
                </select>
            );
        }
        else{
            elem = (
                <select id={this.props.data.id}>
                    {this.renderOptions(this.props.data.options,this.props.data.selected)}
                </select>
            )
        }
        
        return elem;

    }

    renderOptions(options,selected){
        
        let elem = [];
        
        if(selected.length < 1 ){
            for(let i=0 ; i < options.length  ; i++){
                elem.push(
                    <option key={Math.random()}>
                        {options[i]}
                    </option>
                )
            }
            return elem;
        }

        for(let i=0 ; i<options.length ; i++){
            for(let j=0 ; j<selected.length ; j++){
                if(selected[j] === options[i]){
                    elem.push(
                        <option key={Math.random()} defaultValue>
                            {options[i]}
                        </option>
                    );
                }
                else{
                    elem.push(
                        <option key={Math.random()}>
                            {options[i]}
                        </option>
                    )
                }
            }
        }

        return elem;

    }

    renderGroups(){
        
        let elem = [] , i;

        if(this.props.data.singles !== undefined ){
            elem = this.renderOptions(this.props.data.singles,this.props.data.selected);
        }

        for(i=0 ;i<this.props.data.groups.length ; i++){
            elem.push(
                <optgroup label={this.props.data.groups[i].name} key={Math.random()}>
                    {this.renderOptions(this.props.data.groups[i].options,this.props.data.selected)}
                </optgroup>
            );
        }

        
        return elem;

    }

}

export default Selection;