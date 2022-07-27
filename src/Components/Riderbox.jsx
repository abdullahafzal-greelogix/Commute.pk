import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container, Col, Row, Form } from "react-bootstrap";
import Requestride from "./Requestride";

const Riderbox = () => {
  return (
    <div className="rider-listing">
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="rider-box-main">
              <div className="rider-box-head">
                <h3>Filter</h3>
                <h4>Clear All</h4>
              </div>
              <div className="listing-tabs">
                <Tabs>
                  <TabList>
                    <Tab>In-City</Tab>
                    <Tab>Out-City</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="listinf-form">
                      <Form.Control type="text" placeholder="Your Location" />
                      <Form.Control type="text" placeholder="Arfa Tower" />
                      <Form.Control type="text" placeholder="23-Aug-2022" />
                      <Form.Control type="text" placeholder="09:00 PM" />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col lg={8} md={12} sm={12}>
            <div className="result-found">
              <h3>1 to 10 of 34 results found</h3>
            </div>
            <div className="rider-detail-box-main">
              <Requestride />
              <Requestride />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Riderbox;
