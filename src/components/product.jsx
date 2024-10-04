import React from "react";
import { FaWhatsapp } from "react-icons/fa";
// Import all images
import cardDec from "../assets/Images/cardecoration - 24999rs.jpg";
import CarDec2 from "../assets/Images/cardecoration 2- 24999rs.jpg";
import flowers from "../assets/Images/Flower - 149rs.jpg";
import flowerBoquet from "../assets/Images/Flower bouquet - 799rs.jpg";
import flowerJewellery from "../assets/Images/flower jewelery - 1999rs.jpg";
import flowerjewellery2 from "../assets/Images/flower jewelery2 - 1999rs.jpg";
import flowerjewelery3 from "../assets/Images/flower jewelery 3- 1999rs.jpg";
import necklace from "../assets/Images/flower necklace - 999rs.jpg";
import gerbera from "../assets/Images/gerbera - 299rs.jpg";
import haldi from "../assets/Images/haldi-and-mehndi-decoration - 49999rs.jpg";
import lotus from "../assets/Images/lotus - 99rs.jpg";
import lotusVase from "../assets/Images/lotusVase- 99rs.jpg";
import rose from "../assets/Images/mixRoseBouquet - 649rs.jpg";
import pinkrose from "../assets/Images/pinkRoseVase - 399rs.jpg";
import daisy from "../assets/Images/smalldaisy - 49rs.jpg";
import tulip from "../assets/Images/smalltulip - 49rs.jpg";
import sunFlowerVase from "../assets/Images/sunflower vase - 599rs.jpg";

const products = [
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

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = (product) => {
    const message =
      `Hi! I would like to order:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price}\n\n` +
      `Please provide more details about delivery and payment.`;

    const whatsappNumber = "919266315117"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button
          className="whatsapp-button"
          onClick={() => handleWhatsAppClick(product)}
        >
          <FaWhatsapp className="whatsapp-icon" />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <style>{`
        .products-container {
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 cards per row for laptops */
          gap: 20px;
          padding: 20px;
        }

        .product-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 100%; /* Allow cards to fill their grid space */
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .product-image {
          position: relative;
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          overflow: hidden;
        }

        .product-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 16px;
        }

        .product-info h3 {
          margin: 0 0 8px 0;
          font-size: 1.2rem;
          color: #333;
          font-weight: 600;
        }

        .price {
          font-size: 1.4rem;
          font-weight: bold;
          color: #2c5282;
          margin: 8px 0;
        }

        .description {
          color: #666;
          margin: 8px 0 16px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background-color: #25D366;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.2s;
          font-size: 1rem;
        }

        .whatsapp-button:hover {
          background-color: #128C7E;
        }

        .whatsapp-icon {
          width: 20px;
          height: 20px;
        }

        /* Tablet view - 3 cards per row */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        /* Mobile view - 1 card per row */
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px;
          }

          .product-card {
            max-width: 100%;
          }

          .product-info h3 {
            font-size: 1.1rem;
          }

          .price {
            font-size: 1.2rem;
          }

          .whatsapp-button {
            padding: 10px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
