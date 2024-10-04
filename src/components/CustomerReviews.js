import React from 'react';
import "./review.css";

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: 'John Doe', content: 'Great service and beautiful flowers!', avatar: '/images/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', content: 'The bouquet was perfect for my wedding.', avatar: '/images/avatar2.jpg' },
    { id: 3, name: 'Bob Wilson', content: 'Fast delivery and fresh flowers every time.', avatar: '/images/avatar3.jpg' },
  ];

  return (
    <section className="customer-reviews">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <img src={review.avatar} alt={review.name} className="avatar" />
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="review-content">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
