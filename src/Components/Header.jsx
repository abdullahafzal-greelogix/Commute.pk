import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./assets/logooo.png";
import Google from "../Components/assets/google.png";
import Face from "../Components/assets/facebook.png";

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="Rider">Rides</Nav.Link>
              <Nav.Link href="#home">Requests</Nav.Link>
              <Nav.Link href="#home">Login with</Nav.Link>
              <Nav.Link href="#home">
                <img src={Google} />
              </Nav.Link>
              <Nav.Link href="#home">
                <img src={Face} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
