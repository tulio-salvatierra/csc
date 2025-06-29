import React, { useRef } from "react";
import "./review.css";
import { mockReviews } from "./mockedReviews";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function ReviewCards() {
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const addToRefs = (el) => {
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
    <section className="min-h-60 flex flex-col items-center justify-center bg-white mx-6">
      <h2 ref={addToRefs} className="">
        What our clients say about us?
      </h2>
      <h3 ref={addToRefs} className="text-gray-500">
        See the feedback we received in our Google My Business profile:
      </h3>
      <div className="row flex flex-wrap justify-center">
        {mockReviews.map((review, idx) => (
          <div key={idx} className="flex mb-4" ref={addToRefs}>
            <div className="w-100 h-75 content-evenly shadow-lg m-4 p-4 rounded-lg bg-gray-100">
              <p className="">{review.text}</p>
              <div className="">
                <img
                  src={review.photoUrl}
                  alt={review.author}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-3">
                  <p className="">{review.author}</p>
                  <small className="">{review.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
