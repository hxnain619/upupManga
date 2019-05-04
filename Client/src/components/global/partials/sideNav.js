import React from 'react';
import MaterialIcon from '../materialicon';
import {Link } from 'react-router-dom';

class SideNav extends React.Component {
    render() {
        return (
            <ul className="sidenav" id="mobile-demo">
                {this.listItems()}
            </ul>
        )
    }

    listItems() {
        let temp = [], i;

        for (i = 0; i < this.props.text.length; i++) {

            if (i !== 1) {
                if (this.props.active === this.props.text[i]) {
                    temp.push(
                        <li key={i}>
                            <Link to={this.props.text[i]} className="active waves-effect waves-light sidenav-close">
                                {this.props.text[i]}
                            </Link>
                        </li>
                    )
                }
                else {
                    temp.push(
                        <li key={i}>
                            <Link to={this.props.text[i]} className="waves-effect waves-light sidenav-close">
                                {this.props.text[i]}
                            </Link>
                        </li>
                    )
                }
            }
            else {
                temp.push(
                    <li key={i}>
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header">
                                    {this.props.text[i]}
                                    <MaterialIcon iconName="arrow_drop_down" />
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <Link to="text list" className="sidenav-close">
                                                text listItem
                                            </Link>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <Link to="image list" className="sidenav-close">
                                                image list
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                );
            }



        }

        /*last one i.e. search link*/
        temp.push(
            <li key={5}>
                <a href="#search-modal" className="modal-trigger sidenav-close">search</a>
            </li>
        );

        return temp;
    }
}

export default SideNav;