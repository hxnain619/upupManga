import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { Button, FormControl, Form, InputGroup, Col } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

var searchTimeout = "";

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: '',
    }
  }



  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <AppNavbarBrand className="logo"><h3 className="logo">UpUpManga</h3> </AppNavbarBrand>

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
        <AppHeaderDropdown style={{listStyle : "none" }} direction="down">
          <DropdownToggle  nav>
            <img src={'../../assets/img/nav-logo-1.png'} className="img-avatar" alt="" />
          </DropdownToggle>
        </AppHeaderDropdown>
        {/* </Nav> */}
         {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/* <AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
