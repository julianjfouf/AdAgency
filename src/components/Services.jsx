import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div class="container container__pricing">
        <div class="row services-row">
          <div class="pricing__text">
            <div class="section__subtitle pricing__subtitle">PRICING</div>
            <div class="section__title pricing__title">
              <span class="purple">Reasonable & Flexible Plans</span>
            </div>
            <p class="section__description pricing__description">
              We are able to negotiate pricing based on a client's spending
              capacity and budget.
            </p>
          </div>
          <div class="pricing__plans">
            <div class="pricing__plan">
              <div class="highlight"></div>
              <div class="pricing__plan--wrapper">
                <span class="name">PERSONAL</span>
                <span class="price">$17.99</span>
                <span class="duration">MONTHLY</span>
              </div>
              <div class="features--wrapper">
                <span class="title">For Individuals</span>
                <span class="feature">30 Templates</span>
                <span class="feature">7 Landing Pages</span>
                <span class="feature">12 Internal Pages</span>
                <span class="feature">Basic Assistance</span>
              </div>
              <figure class="feature1button--wrapper feature1button--wrapper1">
                <button class="btn feature1button feature__button1 cursor__pointer">
                  BUY NOW
                </button>
              </figure>
            </div>
            <div class="pricing__plan pricing__plan--blue">
              <div class="highlight highlight--blue"></div>
              <div class="pricing__plan--wrapper">
                <span class="name name--blue">BUSINESS</span>
                <span class="price price--blue">$37.99</span>
                <span class="duration duration--blue">MONTHLY</span>
              </div>
              <div class="features--wrapper features--wrapper--blue">
                <span class="title title--blue">For Small Businesses </span>
                <span class="feature feature--blue">60 Templates</span>
                <span class="feature feature--blue">15 Landing Pages</span>
                <span class="feature feature--blue">22 Internal Pages</span>
                <span class="feature feature--blue">Priority Assistance</span>
              </div>
              <figure class="feature1button--wrapper">
                <button class="btn feature1button feature__button2 cursor__pointer">
                  BUY NOW
                </button>
              </figure>
            </div>
            <div class="pricing__plan">
              <div class="highlight highlight--coral"></div>
              <div class="pricing__plan--wrapper">
                <span class="name">ENTERPRISE</span>
                <span class="price">$57.99</span>
                <span class="duration">MONTHLY</span>
              </div>
              <div class="features--wrapper">
                <span class="title">For Large Companies</span>
                <span class="feature">90 Templates</span>
                <span class="feature">27 Landing Pages</span>
                <span class="feature">37 Internal Pages</span>
                <span class="feature">Personal Assistance</span>
              </div>
              <figure class="feature1button--wrapper">
                <button class="btn feature1button feature__button3 cursor__pointer">
                  BUY NOW
                </button>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
