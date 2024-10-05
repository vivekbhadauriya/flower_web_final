import React, { useState } from "react";
import Gallery from "./gallery";
import "./PreviewGallery.css"; // Import the custom CSS

const PreviewGallery = ({ images }) => {
  const [showAll, setShowAll] = useState(false);

  // Handle "View More" click
  const handleViewMore = () => {
    setShowAll(true);
  };
  const handleViewLess = () => {
    setShowAll(false);
  };

  // Show the first 5 images in preview mode
  const previewImages = images.slice(0, 4);

  return (
    <>
      {!showAll ? (
        <div className="preview-gallery-container">
          <h1 className="preview-gallery-title">Photo Gallery</h1>
          <div className="preview-gallery-grid">
            {previewImages.map((image, index) => (
              <div key={index} className="preview-gallery-item">
                <img
                  src={image.image}
                  alt={image.name}
                  className="preview-gallery-image"
                />
                <div className="preview-gallery-info">
                  <h2>{image.name}</h2>
                  <p>{image.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-more-btn-container">
            <button onClick={handleViewMore} className="view-more-btn">
              View More
            </button>
          </div>
        </div>
      ) : (
        <>
          <Gallery images={images} />
          <div className="view-more-btn-container">
            <button onClick={handleViewLess} className="view-more-btn">
              View Less
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PreviewGallery;
