import React from 'react';

class InputField extends React.Component {


    render() {

        let classes = `input-field ${this.props.classes}`;
        let elem;
        if (this.props.required !== undefined) {
            elem = (
                <div>
                    <label htmlFor={this.props.id}>{this.props.type}</label>
                    <input type={this.props.type} className="validate" placeholder={this.props.placeholder}
                        id={this.props.id} required />
                </div>
            )
        }
        else {
            elem = (
                <div >
                    <label htmlFor={this.props.id}>{this.props.type}</label>
                    <input type={this.props.type} className="validate" placeholder={this.props.placeholder}
                        id={this.props.id} />
                </div>
            )
        }

        return (
            <div className={classes}>
                {elem}
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default InputField;