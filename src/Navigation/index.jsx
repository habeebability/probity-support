import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/js/bootstrap.bundle.min.js';

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import LandingPage from "../LandingPage";

const Navigation = () => {
  return (
      <Navbar className="shadow" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Nav.Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="" srcSet="" />
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <Nav.Link eventKey={2} to="/publicTicket">
                Public Tickets
              </Nav.Link>
              <Nav.Link eventKey={3} to="/submitTicket">
                Submit Tickets
              </Nav.Link>
              <Nav.Link eventKey={4} to="/searchTicket">
                Search Tickets
              </Nav.Link>
              <Nav.Link eventKey={5} to="/faqs">
                FAQS
              </Nav.Link>
              <Nav.Link eventKey={6} to="/register">
                Register
              </Nav.Link>
              
              <LinkContainer to="/login">
                <Nav.Link eventKey={7} >
                  Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigation;
