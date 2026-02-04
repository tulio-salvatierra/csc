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
    <section className="min-h-screen flex flex-col items-center justify-evenly bg-white mx-6">
      <h2 ref={addToRefs} className="text-4xl md:text-3xl lg:text-4xl">
        What our clients say about<span style={{ fontFamily: "Grapevine" }}> us?</span>
      </h2>
      <p ref={addToRefs} className="text-gray-500 text-lg md:text-xl lg:text-2xl">
        See the feedback we received in our Google My Business profile:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockReviews.map((review, idx) => (
          <div key={idx} className="flex mb-4 col-span-1" ref={addToRefs}>
            <div className="w-100 h-100 content-between flex flex-col justify-between shadow-lg m-4 p-4 rounded-lg bg-gray-100">
              <p className="" style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)", fontFamily: "Grapevine" }}>{review.text}</p>
              <div className="">
                <img
                  src={review.photoUrl}
                  alt={review.author}
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="ms-3">
                  <p className="" style={{ fontSize: "1.5rem", fontFamily: "Grapevine" }}>{review.author}</p>
                  <small className="" style={{ fontSize: "1rem", fontFamily: "Grapevine" }}>{review.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
