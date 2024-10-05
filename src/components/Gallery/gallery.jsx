import React from "react";
import "./Gallery.css"; // Import the custom CSS

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.image} alt={image.name} className="gallery-image" />
            <div className="gallery-info">
              <h2>{image.name}</h2>
              <p>{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
