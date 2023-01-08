import React, { useState } from "react";
import Hero from "./Hero";
import "./Navbar.css";

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  function updateScrollHeight() {
    if (window.scrollY > 0) {
      setScrollHeight(true);
    } else {
      setScrollHeight(false);
    }
  }
  window.addEventListener("scroll", updateScrollHeight);
  return (
    <div className={`navbar ${scrollHeight ? "navbar-move" : null}`}>
      <div className={`row`}>
        <h1 className="navbar-title">Malik's Ads</h1>
        <div className="navbar-list">
          <li className="navbar-links">
            <a href="" className="link">
              Contact
            </a>
          </li>
          <li className="navbar-links">
            <a href="" className="link">
              About Us
            </a>
          </li>
          <li className="navbar-links">
            <a href="#Services" className="link">
              Services
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
