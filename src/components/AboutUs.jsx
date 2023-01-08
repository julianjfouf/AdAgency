import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="container aboutUs-container">
        <div className="row aboutUs-row">
          <h1 className="aboutUs-title">
            <span className="purple">About Us</span>
          </h1>
          <p className="aboutUs-description">
            Founded by Malik, a 16 year old highschooler, working with local businesses to make effective advertising campaigns to boost customer interactions and promote sales.
          </p>
        </div>
        <div className="row contactUs-row">
          <h1 className="contactUs-title">
            <span className="purple">Contact Info</span>
          </h1>
          <p className="contactUs-description">
            Email: Malik@gmail.com <br />
            Phone: (209) 209-2092 <br />
            Facebook: Malik <br />
            Instagram: Malik <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
