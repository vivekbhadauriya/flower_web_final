import React from "react";

const products = () => {
  const whatsappNumber = "919266315117"; // Format: country code + phone number

  const handleWhatsAppClick = (product) => {
    // Create the message
    const message =
      `Hi! I would like to order:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price}\n\n` +
      `Please provide more details about delivery and payment.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };
  return (
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
  );
};

export default products;
