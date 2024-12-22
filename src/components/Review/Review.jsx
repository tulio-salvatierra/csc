import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { mockReviews } from "./mockedReviews"; // Replace with actual review data

// StarRating component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="d-flex">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-warning me-1" />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="text-warning me-1" />;
        } else {
          return <Star key={i} className="text-muted me-1" />;
        }
      })}
    </div>
  );
}

// SingleReviewCarousel component
export default function SingleReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = mockReviews[currentIndex];

  const goToPrevious = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? mockReviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastReview = currentIndex === mockReviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mt-16 shadow-lg p-4">
      <h1 className="display-1">What our client say about us</h1>
      <div
        className="card mx-auto mt-16"
        style={{ maxWidth: "600px", height: "400px" }}
      >
        <div className="card-body border-0">
          <div className="d-flex justify-content-around align-items-center mb-3">
            <button
              className="btn btn-light"
              onClick={goToPrevious}
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <StarRating rating={currentReview.rating} />
            <button
              className="btn btn-light"
              onClick={goToNext}
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <blockquote className="blockquote text-center">
            <p className="mb-3">{currentReview.text}</p>
          </blockquote>
          <div className="d-flex align-items-center">
            <img
              src={currentReview.photoUrl}
              alt={currentReview.author}
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <p className="mb-0 fw-bold">{currentReview.author}</p>
              <small className="text-muted">{currentReview.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
