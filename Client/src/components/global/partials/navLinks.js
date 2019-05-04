import React from 'react';
import MaterialIcon from '../materialicon';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {
    render() {
        return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.listItems()}
            </ul>
        )
    }

    listItems() {

        let temp = [], i;

        for (i = 0; i < this.props.text.length; i++) {
            if (i === 1) {
                temp.push(
                    <li key={i}>
                        <a href="#!" className="dropdown-trigger waves-effect waves-light" data-target="manga-dropdown">
                            {this.props.text[i]}
                            <MaterialIcon iconName="arrow_drop_down" alignment="right" />
                        </a>
                    </li>
                )
            }
            else {

                if (this.props.active === this.props.text[i]) {
                    temp.push(
                        <li key={i}>
                            <Link to={this.props.text[i]} className="active waves-effect waves-light">
                                {this.props.text[i]}
                            </Link>
                        </li>
                    )
                }
                else {
                    temp.push(
                        <li key={i}>
                            <Link to={this.props.text[i]} className="waves-effect waves-light">
                                {this.props.text[i]}
                            </Link>
                        </li>
                    );
                }
            }

        }

        //final search bar
        temp.push(
            <li key={5} id="search-trigger">
                <a href="#search-modal" className="modal-trigger"><i className="material-icons">search</i></a>
            </li>
        )

        return temp;


    }

}

export default NavLinks;