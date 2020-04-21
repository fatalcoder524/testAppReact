import React from 'react';
import {
    Link
  } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar()
{
    return (
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/testAppReact">TestApp</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/testAppReact">
              <Nav.Link>Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
    </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
}

export default NavigationBar;