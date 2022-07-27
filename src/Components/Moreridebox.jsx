import React from "react";
import { Col, Row } from "react-bootstrap";
import Men from "../Components/assets/men.png";
import { Button } from "react-bootstrap";

const data = [
  {
    image: Men,
    head: "Abuzer Firdousi",
    li: "22 Jun, 2022 at 02:00 PM Valencia, Lahore",
    li: "22 Jun, 2022 at 03:00 PM Gulberg III, Lahore",
    Pricename: "Price/Seat",
    Value: "Rs.2,400",
    Seat: "Seats",
    number: "2/4",
    Faci: "AC",
    note: "Yes",
  },
  {
    image: Men,
    head: "Abuzer Firdousi",
    li: "22 Jun, 2022 at 02:00 PM Valencia, Lahore",
    li: "22 Jun, 2022 at 03:00 PM Gulberg III, Lahore",
    Pricename: "Price/Seat",
    Value: "Rs.2,400",
    Seat: "Seats",
    number: "2/4",
    Faci: "AC",
    note: "Yes",
  },
  {
    image: Men,
    head: "Abuzer Firdousi",
    li: "22 Jun, 2022 at 02:00 PM Valencia, Lahore",
    li: "22 Jun, 2022 at 03:00 PM Gulberg III, Lahore",
    Pricename: "Price/Seat",
    Value: "Rs.2,400",
    Seat: "Seats",
    number: "2/4",
    Faci: "AC",
    note: "Yes",
  },
];

const Moreridebox = () => {
  return (
    <div>
      <Row>
        {data.map((e) => (
          <Col lg={4} md={12} sm={12}>
            <div className="rider-sub-detail">
              <div className="rider-detail-name">
                <img src={e.image} />
                <h3>{e.head}</h3>
              </div>
              <div className="rider-detail-list">
                <ul>
                  <li>{e.li}</li>
                  <li>{e.li}</li>
                </ul>
              </div>
              <div className="rider-price-detail">
                <div className="price-content">
                  <h6>{e.Pricename}</h6>
                  <h3>{e.Value}</h3>
                </div>
                <div className="price-content">
                  <h6>{e.Seat}</h6>
                  <h3>{e.number}</h3>
                </div>
                <div className="price-content">
                  <h6>{e.Faci}</h6>
                  <h3>{e.note}</h3>
                </div>
              </div>
              <div className="request-ride-butto">
                <Button varient="primary" className="">
                  Request Ride
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Moreridebox;
