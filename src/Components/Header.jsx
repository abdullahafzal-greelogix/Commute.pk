import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./assets/logooo.png";
import Google from "../Components/assets/google.png";
import Face from "../Components/assets/facebook.png";
import LoginModal from "./LoginModal";
import LoginOtp from "./LoginOtp";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  return (
    <div>
      <div className="header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/Rider">Rides</Link>

                  <Link to="/Driverdetail">Requests</Link>

                  <Link to="#" onClick={() => setShowLoginModal(true)}>
                    Login with
                  </Link>

                  <Link to="/Driverdetail">
                    {" "}
                    <img src={Google} />
                  </Link>

                  <Link to="/Driverdetail">
                    {" "}
                    <img src={Face} />
                  </Link>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <LoginModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onClickLoginButton={() => {
          setShowLoginModal(false);
          setShowOtpModal(true);
        }}
      />
      <LoginOtp show={showOtpModal} onHide={() => setShowOtpModal(false)} />
    </div>
  );
};

export default Header;
