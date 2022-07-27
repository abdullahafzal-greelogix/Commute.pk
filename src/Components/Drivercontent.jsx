import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Driverbox from "./Driverbox";
import Moreridebox from "./Moreridebox";

const Drivercontent = () => {
  return (
    <div className="driver-content-section">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="driver-detail-heading">
              <h2>Driver Details</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <Driverbox />
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="map-area">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
            <div className="add-seat">
              <div className="total-price">
                <p>Total</p>
                <h3>Rs. 2,400</h3>
              </div>
              <Button varient="primary" className="">
                WhatsApp
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="more-ride-heading">
              <h2>More Rides</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Moreridebox />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Drivercontent;
