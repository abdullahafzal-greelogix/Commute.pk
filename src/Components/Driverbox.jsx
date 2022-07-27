import React from "react";
import Men from "../Components/assets/men.png";
import datemg from "../Components/assets/date.png";
import Clockmg from "../Components/assets/clock.png";
import Thermomg from "../Components/assets/thermo.png";
import moneymg from "../Components/assets/Money.png";
import Dotmg from "../Components/assets/dot.png";
import Squaremg from "../Components/assets/square.png";
import Petmg from "../Components/assets/pet.png";
import Smokemg from "../Components/assets/smoke.png";
import Luguagemg from "../Components/assets/luguage.png";
import Notimg from "../Components/assets/noti.png";

const Driverbox = () => {
  return (
    <div className="driver-box-main">
      <div className="driver-alert">
        <p>
          <img src={Notimg} /> Login to see the following details
        </p>
      </div>
      <div className="driver-heading">
        <img src={Men} />
        <h3>Abuzer Firdousi</h3>
      </div>
      <div className="pickup-location travel-detail">
        <img src={Dotmg} />
        <div className="pickup-content">
          <p>Pickup Location</p>
          <h3>Valencia, Lahore</h3>
        </div>
      </div>
      <div className="dropoff-location travel-detail">
        <img src={Squaremg} />
        <div className="dropoff-content">
          <p>Dropoff Location</p>
          <h3>Gulberg III, Lahore</h3>
        </div>
      </div>
      <div className="travel-detail">
        <img src={datemg} />
        <div className="pick-date">
          <p>Date</p>
          <h3>22 Jun, 2022</h3>
        </div>
      </div>
      <div className="travel-detail">
        <img src={Clockmg} />
        <div className="pick-time">
          <p>Time</p>
          <h3>02:00 PM</h3>
        </div>
      </div>
      <div className="travel-detail">
        <img src={moneymg} />
        <div className="pick-seat">
          <p>Price/Seat</p>
          <h3>Rs.2,400</h3>
        </div>
      </div>
      <div className="travel-detail">
        <img src={Thermomg} />
        <div className="pick-ac">
          <p>AC</p>
          <h3>Yes</h3>
        </div>
      </div>
      <div className="restrictions">
        <div className="restriction-content">
          <img src={Petmg} />
          <h3>No Pet</h3>
        </div>
        <div className="restriction-content">
          <img src={Smokemg} />
          <h3>No Smoking</h3>
        </div>
        <div className="restriction-content">
          <img src={Luguagemg} />
          <h3>Luggage</h3>
        </div>
      </div>
    </div>
  );
};

export default Driverbox;
