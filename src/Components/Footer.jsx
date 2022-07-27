import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Flogo from "../Components/assets/logooo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="footer-links">
              <ul>
                <li>Home</li>
                <li>Rides</li>
                <li>Requests</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="footer-logo">
              <img src={Flogo} />
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="social-icon">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="copyright">
              <p>2022 ©. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
