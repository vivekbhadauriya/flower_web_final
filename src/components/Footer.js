import React from "react";
import "./AppCss.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fresh Bloom </h3>
            <p className="footer-description">
              At Fresh Bloom, we believe in spreading joy through the beauty of
              nature. Our handpicked, vibrant flowers are carefully selected to
              brighten your day and elevate any occasion. Experience the essence
              of nature with every petal at Fresh Bloom.
            </p>
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>

            <ul className="footer-list">
              <div>
                {" "}
                <a
                  href="https://maps.app.goo.gl/gQEvsspwys2TCqVL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                >
                  <FaLocationArrow className="h-10 w-10"></FaLocationArrow>
                  <li>Lodi Road,New Delhi</li>
                </a>
              </div>

              <li>Phone: (123) 456-7890</li>
              <li>Email: info@freshbloom.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
            <div className="mt-10 flex gap-5">
              <a
                href="https://www.facebook.com/share/qu543DJV3WLNA4o2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-10 w-10 "></FaFacebook>
              </a>
              <a
                href="https://www.instagram.com/the_fresh_bloom/profilecard/?igsh=Nmkyc3dwanB1bWcx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-10 w-10 "></FaInstagram>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FloralDream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
