import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "black" };

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="text-uppercase navbar-brand" to="/" style={linkStyle}>
          Spectrum
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/assignment-a" style={linkStyle}>
              Assignment A
            </Link>

            <Link className="nav-link" to="/assignment-b" style={linkStyle}>
              Assignment B
            </Link>

            <Link className="nav-link" to="/assignment-c" style={linkStyle}>
              Assignment C
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
