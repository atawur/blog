import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
//
const NotLoginedNavbar = props => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink tag={Link} to="/">
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/create_post">
        Create Post
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/post">
        All Post
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/login">
        Login
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/register">
        Register
      </NavLink>
    </NavItem>
  </Nav>
);

export default NotLoginedNavbar;
