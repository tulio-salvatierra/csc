import React, { useState, useEffect } from "react";
import "./review.css";
import { Star, StarHalf } from "lucide-react";
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
  const [transition, setTransition] = useState(false);

  const currentReview = mockReviews[currentIndex];

  const goToPrevious = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? mockReviews.length - 1 : currentIndex - 1;
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransition(false);
    }, 500); // Transition duration
  };

  const goToNext = () => {
    const isLastReview = currentIndex === mockReviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransition(false);
    }, 500); // Transition duration
  };

  // Auto-switch reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="mt-16 p-4">
      <h2 className="fs-2 text-left text-muted">
        What our clients say about us?
      </h2>
      <h3 className="text-left display-3">
        Don't just take our word for, see what iur customers say about us:
      </h3>

      <div
        className={`border-0  p-10 comment-grid ${transition ? "fade-in-out" : ""}`}
      >
        <div className="flex mt-4 text-center justify-content-center fs-4 comment">
          <p className="mb-3 mt-6">{currentReview.text}</p>
          <StarRating rating={currentReview.rating} />
          <div className="d-flex mt-4 p-10 align-items-center ">
            <img src={currentReview.photoUrl} className="p-2"></img>

            <p className="mb-0 fw-bold fs-4">{currentReview.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
