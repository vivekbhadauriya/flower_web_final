import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppCss.css"; // Ensure this file is linked
import pic from "../assets/Untitled.jpg";
const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/productlist");
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left-content">
            {/* New Flower Label */}
            <div className="hero-label">
              <span>New</span>
              <span>Flower</span>
              <span>━━</span>
            </div>

            {/* Main Heading */}
            <div className="hero-headings">
              <h1 className="hero-main-heading">Uniquely Pink Blooms</h1>
              <h2 className="hero-main-heading">A Special Touch The</h2>
              <h2 className="hero-main-heading">Beauty Charm</h2>
            </div>

            {/* Description */}
            <p className="hero-description">
              Impolitely disintermediate strategic materials for visionary the
              mindshare. Professionally syndicate competitive ideas
            </p>

            {/* Price and Actions */}
            <div className="hero-price-actions">
              <div className="hero-price">
                <span>$20.00</span>
                <select className="hero-select">
                  <option>20 Flower</option>
                </select>
                <select className="hero-select">
                  <option>Location</option>
                </select>
              </div>
              <button onClick={handleShopNowClick} className="hero-button">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hero-image-container">
            <img src={pic} alt="Pink roses bouquet" className="hero-image" />
            {/* Floating Decorative Elements */}
            <div
              className="float-element float-element-small"
              style={{ top: "-16px", left: "48px" }}
            ></div>
            <div
              className="float-element float-element-medium animate-float-delay"
              style={{ top: "25%", right: "-16px" }}
            ></div>
            <div
              className="float-element float-element-large"
              style={{ bottom: "25%", left: "25%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
