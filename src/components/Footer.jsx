import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row footer-row">
          <div className="footer-left">
            <h1 className="footer-logo">
              <a className="footer-logoLink" href="#">
                Malik
              </a>
            </h1>
          </div>
          <div className="footer-right">
            <p className="footer-description">Links</p>
            <ul className="footer-list">
              <div className="list-right">
                <li className="footer-links">
                  <a className="link" href="">
                    Facebook
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    Instagram
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    YouTube
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    Twitter
                  </a>
                </li>
              </div>

              <div className="list-left">
                <li className="footer-links">
                  <a className="link" href="">
                    Email
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    LinkedIn
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    Phone
                  </a>
                </li>
                <li className="footer-links">
                  <a className="link" href="">
                    Location
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            lineHeight: "1.625rem",
          }}
        >
          &copy;2022 Malik's Ads | All Rights Reserved <br /> Website Created by Julian
          Jfouf
        </div>
      </div>
    </div>
  );
};

export default Footer;
