import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import haldi from "../assets/Images/haldidecoration - 49999rs.jpg"
import mhendi from "../assets/Images/haldi-and-mehndi-decoration - 49999rs.jpg"
import necklace from "../assets/Images/flower necklace - 999rs.jpg"
import earings from "../assets/Images/flower jewelery2 - 1999rs.jpg"
import mandap from "../assets/Images/mandap.jpg"
import mandap2 from "../assets/Images/mandap2.jpg" 
const MorePage = () => {
  return (
    <div className="more-page">
      <section className="hero">
        <div className="hero-content">
          <h1>"Where dreams meet design, and love is celebrated in every detail."</h1>
          <button className="cta-button">Get in Touch</button>
        </div>
        <div className="hero-image">
          <img src="/path/to/wedding-image.jpg" alt="Wedding ceremony" />
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
        <button className="cta-button">Get in touch</button>
      </section>
      <Footer/>
      <Header/>
    </div>
  );
};

export default MorePage;