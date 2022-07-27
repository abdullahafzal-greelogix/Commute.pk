import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-bootstrap-time-picker";
import Search from "../Components/assets/search.png";
import Note from "../Components/assets/note.png";
import Pathmg from "../Components/assets/Path.png";

const Content = () => {
  return (
    <div className="content-section">
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12}>
            <div className="content-detail">
              <h1>
                Save your <span>Fuel Cost </span> by Ride Sharing
              </h1>
              <p>
                We bring commute.pk to counter hikes in fuel prices. Search or
                post your rides, meet with drivers & commuters and save your
                fuel cost
              </p>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <div className="tabs-main">
              <Tabs>
                <TabList>
                  <Tab>
                    <img src={Search} />
                    <br></br>
                    Search Ride
                  </Tab>
                  <Tab>
                    <img src={Pathmg} />
                    <br></br>
                    Request Ride
                  </Tab>
                  <Tab>
                    <img src={Note} />
                    <br></br>
                    Post Ride
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="tabs-content-main">
                    <div className="tabs-content">
                      <h2>Search Ride</h2>
                      <p>Where do you want to go?</p>
                    </div>
                    <div className="tabs-route">
                      <Tabs>
                        <TabList>
                          <Tab>In-City</Tab>
                          <Tab>Out-City</Tab>
                        </TabList>

                        <TabPanel>
                          <div className="incity-input">
                            <Form>
                              <Form.Control
                                type="text"
                                placeholder="Your Location"
                              />
                              <Form.Control
                                type="text"
                                placeholder="Where to go?"
                              />
                              <div className="date-time-input">
                                <DatePicker className="date" />
                                <TimePicker
                                  start="10:00"
                                  end="21:00"
                                  step={30}
                                  className="time"
                                />
                              </div>
                              <Button varient="primary" className="">
                                Search Rides
                              </Button>
                            </Form>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="incity-input">
                            <Form>
                              <Form.Control
                                type="text"
                                placeholder="Your Location"
                              />
                              <Form.Control
                                type="text"
                                placeholder="Where to go?"
                              />
                              <div className="date-time-input">
                                <DatePicker className="date" />
                                <TimePicker
                                  start="10:00"
                                  end="21:00"
                                  step={30}
                                  className="time"
                                />
                              </div>
                              <Button varient="primary" className="">
                                Search Rides
                              </Button>
                            </Form>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
