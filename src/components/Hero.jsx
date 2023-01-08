import React from "react";
import "./Hero.css";
import HeroImage from "../assets/undraw_online_ad_re_ol62.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row hero-row">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="purple">Sign Up</span> for <br />{" "}
              <span className="blue">G</span>
              <span className="red">o</span>
              <span className="yellow">o</span>
              <span className="blue">g</span>
              <span className="green">l</span>
              <span className="red">e</span> <span className="green">A</span>
              <span className="yellow">d</span> Services!
            </h1>
            <div className="button-container">
              <button className="hero-button">Buy Now</button>
              <button className="hero-buttonAlt">Packages</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={HeroImage} alt="" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
