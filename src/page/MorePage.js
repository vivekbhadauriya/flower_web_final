import React from "react";
// import { Link } from 'react-router-dom';

import haldi from "../assets/Images/haldidecoration - 49999rs.jpg";
import mhendi from "../assets/Images/haldi-and-mehndi-decoration - 49999rs.jpg";
import necklace from "../assets/Images/flower necklace - 999rs.jpg";
import earings from "../assets/Images/flower jewelery2 - 1999rs.jpg";
import mandap from "../assets/Images/mandap.jpg";
import mandap2 from "../assets/Images/mandap2.jpg";
const MorePage = () => {
  const message = "Hello, I would like to plan a special day.";
  const whatsappNumber = "919266315117";
  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="more-page">
      <section className="hero">
        <div className="hero-content">
          <h1>
            "Where dreams meet design, and love is celebrated in every detail."
          </h1>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button">Get in Touch</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={mandap2} alt="Wedding ceremony" />
        </div>
      </section>

      <section className="services">
        <div className="service-category">
          <h2>Haldi & Mehndi Ceremony</h2>
          <div className="service-images">
            <img src={haldi} alt="Haldi ceremony" />
            <img src={mhendi} alt="Mehndi ceremony" />
          </div>
        </div>
        <div className="service-category">
          <h2>Flower jewelery</h2>
          <div className="service-images">
            <img src={necklace} alt="Flower necklace" />
            <img src={earings} alt="Flower earrings" />
          </div>
        </div>
        <div className="service-category">
          <h2>Mandap decoration</h2>
          <div className="service-images">
            <img src={mandap} alt="Mandap decoration" />
            <img src={mandap2} alt="Wedding venue" />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Are you ready to plan a special day.</h2>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button">Get in Touch</button>
        </a>
      </section>
      {/* <Footer/>
      <Header/> */}
    </div>
  );
};

export default MorePage;
