import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import ProductGrid from "./components/product.jsx";
import "./components/AppCss.css";
import AboutPage from "./page/AboutPage.js"
import MorePage from "./page/MorePage.js";
export const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/romance-love" element={<ProductGrid />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Hero />
    <ProductList></ProductList>
    <ProductGrid />
    <CustomerReviews />
  </>
);

const About = () => (
  <div className="about-container">
    <AboutPage/>
    {/* Add your about page content */}
  </div>
);

const More = () => (
  <div className="more-container">
    <MorePage/>
    {/* Add your more page content */}
  </div>
);
