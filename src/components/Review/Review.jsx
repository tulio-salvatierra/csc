import React, { useRef } from "react";
import "./review.css";
import { mockReviews } from "./mockedReviews";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function ReviewCards() {
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const addToRefs = el => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useFadeInAnimation(cardsRef, {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    stagger: 0.3,
    start: "top 70%",
  });

  return (
    <section className="container mt-5">
      <h2 ref={addToRefs} className="fs-2 text-left text-muted">
        What our clients say about us?
      </h2>
      <h3 ref={addToRefs} className="text-left display-3 mb-4">
        See the feedback we received in our Google My Business profile:
      </h3>
      <div className="row">
        {mockReviews.map((review, idx) => (
          <div key={idx} className="col-md-4 mb-4" ref={addToRefs}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <p className="card-text">{review.text}</p>
                <div className="mt-auto d-flex align-items-center">
                  <img
                    src={review.photoUrl}
                    alt={review.author}
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">{review.author}</h6>
                    <small className="text-muted">{review.date}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
