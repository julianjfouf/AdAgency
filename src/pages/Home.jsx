import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <section id="Services">
        <Services />
      </section>
      <section id="AboutUs">
        <AboutUs />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
