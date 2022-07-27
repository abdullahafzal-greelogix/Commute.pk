import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Search from "../Components/assets/search.png";
import Lines from "../Components/assets/lines.png";
import Tick from "../Components/assets/tick.png";
import Note from "../Components/assets/note.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const data = [
  {
    image: Search,
    head: "Search for a Ride",
    para: "Tell us where do you want to go and we will connect you to relevant drivers",
  },
  {
    image: Lines,
    head: "Browse Listings",
    para: "Browse through multiple listings and book whoever suits your budget",
  },
  {
    image: Tick,
    head: "Book the Ride",
    para: "Book a ride and make sure to pay them after reaching your destination",
  },
];

const Howitworks = () => {
  return (
    <div className="how-it-work">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="how-work-heading">
              <h2>How it Works</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="how-itwork-tabs">
              <Tabs>
                <TabList>
                  <Tab>
                    <img src={Search} />
                    <br></br>
                    Search Ride
                  </Tab>
                  <Tab>
                    <img src={Note} />
                    <br></br>
                    Post Ride
                  </Tab>
                </TabList>

                <TabPanel>
                  <Row>
                    {data.map((e) => (
                      <Col lg={4} md={12} sm={12}>
                        <div className="work-content">
                          <img src={e.image} />
                          <h3>{e.head}</h3>
                          <p>{e.para}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    {data.map((e) => (
                      <Col lg={4} md={12} sm={12}>
                        <div className="work-content">
                          <img src={e.image} />
                          <h3>{e.head}</h3>
                          <p>{e.para}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPanel>
              </Tabs>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="how-it-work-button">
              <Button varient="primary">Fill Form</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Howitworks;
