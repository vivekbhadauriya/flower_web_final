import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWhatsapp } from "react-icons/fa6";
import './AppCss.css';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // You can change this to your business phone number
  const whatsappNumber = '919639475868'; // Format: country code + phone number

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleWhatsAppClick = (product) => {
    // Create the message
    const message = `Hi! I would like to order:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price}\n\n` +
      `Please provide more details about delivery and payment.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">
          {category ? `${category} Products` : 'All Products'}
        </h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
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
                  <FaWhatsapp size={20} />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;