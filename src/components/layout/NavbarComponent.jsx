import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "black" };

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" style={linkStyle}>
            Izar Aerospace
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to="/assignment-a" style={linkStyle}>
                Assignment A
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/assignment-b" style={linkStyle}>
                Assignment B
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/assignment-c" style={linkStyle}>
                Assignment C
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
