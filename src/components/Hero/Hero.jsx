import "../../App.css";
import { BOOKING_URL_2 } from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function Hero() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  // separate refs for SplitText on the H1 only
  const splitRefs = useRef([]);
  splitRefs.current = [];
  const addToSplitRefs = el => {
    if (el && !splitRefs.current.includes(el)) {
      splitRefs.current.push(el);
    }
  };
  // animate H1 with SplitText (per-char)
  useFadeInAnimation(splitRefs, {
    splitText: true,
    splitType: "chars",
    y: 20,
    opacity: 0,
    duration: 2,
    ease: "back.out(1.4)",
    stagger: 0.05,
    start: "top 80%",
  });
  // animate the rest of the elements
  useFadeInAnimation(fadeRefs, {
    y: 20,
    opacity: 0,
    duration: 3,
    ease: "power2.out",
    stagger: 0.7,
    start: "top 90%",
    scrub: false
  });

  return (
    <>
      <section
        className="bg-hero d-flex align-items-center justify-content-center"
        ref={addToRefs}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className=" hero-content">
            <h1
              className="display-4 heading text-white text-center"
              ref={addToSplitRefs}
            >
              Hydrate, renew and balance your skin
            </h1>
            <h2
              className="w-100 bg-danger-light p-4 welcome-text fs-6"
              ref={addToRefs}
            >
              Improve the health and appearance of your skin through
              personalized facial treatments that will balance your skin by
              delivering visible and long-lasting results. we are located in the
              heart of Midland, TX.
            </h2>
            <a
              className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6"
              href={BOOKING_URL_2}
              ref={addToRefs}
            >
              Book my appointment now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
