import React, { useState, useEffect } from "react";
import "./transparentReview.css";
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
export default function HeroReviewCarousel() {
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
    }, 500);
  };

  const goToNext = () => {
    const isLastReview = currentIndex === mockReviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransition(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="hero-review-carousel position-relative"
      style={{
        maxWidth: "80%",
        height: "300px",
        margin: "0 auto",
        padding: "1rem",
        background: "rgba(255, 255, 255, 0.1)", // Translucent background
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <div
        className={`carousel-content ${transition ? "fade-in-out" : ""}`}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <blockquote className="blockquote">
          <p className="review-text">{currentReview.text}</p>
        </blockquote>
        <div className="d-flex justify-content-center align-items-center my-3">
          <StarRating rating={currentReview.rating} />
        </div>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="author mb-0">{currentReview.author}</p>
            <small className="text-muted">{currentReview.date}</small>
          </div>
        </div>
      </div>
      <div className="carousel-controls mt-3"></div>
    </div>
  );
}
