import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import ProductGrid from "./components/product.jsx";
import "./components/AppCss.css";
import AboutPage from "./page/AboutPage.js";
import MorePage from "./page/MorePage.js";
import PreviewGallery from "./components/Gallery/preview.jsx";
import cardDec from "./assets/Images/cardecoration - 24999rs.jpg";
import CarDec2 from "./assets/Images/cardecoration 2- 24999rs.jpg";
import flowers from "./assets/Images/Flower - 149rs.jpg";
import flowerBoquet from "./assets/Images/Flower bouquet - 799rs.jpg";
import flowerJewellery from "./assets/Images/flower jewelery - 1999rs.jpg";
import flowerjewellery2 from "./assets/Images/flower jewelery2 - 1999rs.jpg";
import flowerjewelery3 from "./assets/Images/flower jewelery 3- 1999rs.jpg";
import necklace from "./assets/Images/flower necklace - 999rs.jpg";
import gerbera from "./assets/Images/gerbera - 299rs.jpg";
import haldi from "./assets/Images/haldi-and-mehndi-decoration - 49999rs.jpg";
import lotus from "./assets/Images/lotus - 99rs.jpg";
import lotusVase from "./assets/Images/lotusVase- 99rs.jpg";
import rose from "./assets/Images/mixRoseBouquet - 649rs.jpg";
import pinkrose from "./assets/Images/pinkRoseVase - 399rs.jpg";
import daisy from "./assets/Images/smalldaisy - 49rs.jpg";
import tulip from "./assets/Images/smalltulip - 49rs.jpg";
import sunFlowerVase from "./assets/Images/sunflower vase - 599rs.jpg";
import Gallery from "./components/Gallery/gallery.jsx";
import newimage from "./assets/Images/new.jpg";
import newimage2 from "./assets/Images/new2.jpg";
import newimage3 from "./assets/Images/new3.jpg";
import newimage4 from "./assets/Images/new4.jpg";
import newimage5 from "./assets/Images/new5.jpg";
import newimage6 from "./assets/Images/new6.jpg";

export const App = () => {
  const images = [
    {
      _id: "-1",
      name: "Wedding halls",
      price: 9999,
      description: "New Image",
      image: newimage2,
    },
    {
      _id: "-2",
      name: "Mandap Enterance",
      price: 9999,
      description: "New Image",
      image: newimage3,
    },
    {
      _id: "-3",
      name: "Flowers",
      price: 9999,
      description: "New Image",
      image: newimage4,
    },
    {
      _id: "-4",
      name: "Flower Necklace",
      price: 9999,
      description: "New Image",
      image: newimage5,
    },
    {
      _id: "-5",
      name: "Flower Necklace",
      price: 9999,
      description: "New Image",
      image: newimage6,
    },
    {
      _id: "0",
      name: "Mandap Decoration",
      price: 9999,
      description: "Fresh flowres for your special occasion",
      image: newimage,
    },
    {
      _id: "1",
      name: "Car Decoration",
      price: 24999,
      description: "Fresh flowres for your special occasion",
      image: cardDec,
    },
    {
      _id: "2",
      name: "Car Decoration 2",
      price: 24999,
      description: "Pure Japanese green tea leaves with natural antioxidants",
      image: CarDec2,
    },
    {
      _id: "3",
      name: "Flower",
      price: 149,
      description: "Fresh Flower",
      image: flowers,
    },
    {
      _id: "4",
      name: "Flower Boquuet",
      price: 799,
      description: "Fresh Flower Boquet",
      image: flowerBoquet,
    },
    {
      _id: "5",
      name: "Flower Jewelery",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerJewellery,
    },
    {
      _id: "6",
      name: "Flower Jewellery 2",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerjewellery2,
    },
    {
      _id: "7",
      name: "Flower Jewwllery 3",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerjewelery3,
    },
    {
      _id: "8",
      name: "Flower Necklace",
      price: 999,
      description: "Fresh Flower Necklace",
      image: necklace,
    },
    {
      _id: "9",
      name: "Gerbera",
      price: 299,
      description: "Fresh Gerbera",
      image: gerbera,
    },
    {
      _id: "10",
      name: "Haldi MHendi Decoration",
      price: 49999,
      description: "Fresh Flower for Haldi Mehendi Decoration",
      image: haldi,
    },
    {
      _id: "11",
      name: "Flower",
      price: 149,
      description: "Fresh Flower",
      image: flowers,
    },
    {
      _id: "12",
      name: "Lotus",
      price: 99,
      description: "Fresh Lotus",
      image: lotus,
    },
    {
      _id: "13",
      name: "Lotus Vase",
      price: 149,
      description: "Fresh Lotus Vase",
      image: lotusVase,
    },
    {
      _id: "14",
      name: "Rose Boquet",
      price: 699,
      description: "Fresh Flower Rose Boquet",
      image: rose,
    },
    {
      _id: "15",
      name: "Pink Roses",
      price: 399,
      description: "Fresh Pink Roses",
      image: pinkrose,
    },
    {
      _id: "16",
      name: "Daisy",
      price: 49,
      description: "Fresh Daisy",
      image: daisy,
    },
    {
      _id: "17",
      name: "Tulip",
      price: 149,
      description: "Fresh Tulip",
      image: tulip,
    },
    {
      _id: "18",
      name: "Sun Flower Vase",
      price: 149,
      description: "Fresh Sun Flower Vase",
      image: sunFlowerVase,
    },
  ];
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
          <Route path="/Gallery" element={<Gallery images={images} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  // Step 1: Define the array of image objects
  const images = [
    {
      _id: "1",
      name: "Car Decoration",
      price: 24999,
      description: "Fresh flowres for your special occasion",
      image: cardDec,
    },
    {
      _id: "2",
      name: "Car Decoration 2",
      price: 24999,
      description: "Pure Japanese green tea leaves with natural antioxidants",
      image: CarDec2,
    },
    {
      _id: "3",
      name: "Flower",
      price: 149,
      description: "Fresh Flower",
      image: flowers,
    },
    {
      _id: "4",
      name: "Flower Boquuet",
      price: 799,
      description: "Fresh Flower Boquet",
      image: flowerBoquet,
    },
    {
      _id: "5",
      name: "Flower Jewelery",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerJewellery,
    },
    {
      _id: "6",
      name: "Flower Jewellery 2",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerjewellery2,
    },
    {
      _id: "7",
      name: "Flower Jewwllery 3",
      price: 1999,
      description: "Fresh Flower Jewelery",
      image: flowerjewelery3,
    },
    {
      _id: "8",
      name: "Flower Necklace",
      price: 999,
      description: "Fresh Flower Necklace",
      image: necklace,
    },
    {
      _id: "9",
      name: "Gerbera",
      price: 299,
      description: "Fresh Gerbera",
      image: gerbera,
    },
    {
      _id: "10",
      name: "Haldi MHendi Decoration",
      price: 49999,
      description: "Fresh Flower for Haldi Mehendi Decoration",
      image: haldi,
    },
    {
      _id: "11",
      name: "Flower",
      price: 149,
      description: "Fresh Flower",
      image: flowers,
    },
    {
      _id: "12",
      name: "Lotus",
      price: 99,
      description: "Fresh Lotus",
      image: lotus,
    },
    {
      _id: "13",
      name: "Lotus Vase",
      price: 149,
      description: "Fresh Lotus Vase",
      image: lotusVase,
    },
    {
      _id: "14",
      name: "Rose Boquet",
      price: 699,
      description: "Fresh Flower Rose Boquet",
      image: rose,
    },
    {
      _id: "15",
      name: "Pink Roses",
      price: 399,
      description: "Fresh Pink Roses",
      image: pinkrose,
    },
    {
      _id: "16",
      name: "Daisy",
      price: 49,
      description: "Fresh Daisy",
      image: daisy,
    },
    {
      _id: "17",
      name: "Tulip",
      price: 149,
      description: "Fresh Tulip",
      image: tulip,
    },
    {
      _id: "18",
      name: "Sun Flower Vase",
      price: 149,
      description: "Fresh Sun Flower Vase",
      image: sunFlowerVase,
    },
  ];

  return (
    <>
      <Hero />
      <ProductList />
      <ProductGrid />
      {/* Step 2: Pass the images array to PreviewGallery */}
      <PreviewGallery images={images} />
      <CustomerReviews />
    </>
  );
};

const About = () => (
  <div className="about-container">
    <AboutPage />
    {/* Add your about page content */}
  </div>
);

const More = () => (
  <div className="more-container">
    <MorePage />
    {/* Add your more page content */}
  </div>
);
