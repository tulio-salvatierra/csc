import { BOOKING_URL_2 } from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import BookingButton from "./../BookingButton/index";
import "./Hero.css";

export default function Hero() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  // separate refs for SplitText on the H1 only
  const splitRefs = useRef([]);
  splitRefs.current = [];
  const addToSplitRefs = (el) => {
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
    scrub: false,
  });

  return (
    <>
      <section className="bg-hero items-center" ref={addToRefs}>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center max-w-2/3">
            <h1 className="font-extrabold text-white" ref={addToSplitRefs}>
              Hydrate, renew and balance your skin
            </h1>
            <h2 className="bg-red-100 p-4 text-gray-800 mt-4" ref={addToRefs}>
              Improve the health and appearance of your skin through
              personalized facial treatments that will balance your skin by
              delivering visible and long-lasting results. we are located in the
              heart of Midland, TX.
            </h2>
            <BookingButton
              href={BOOKING_URL_2}
              label={"Book my appointment now!"}
              ref={addToRefs}
            />
          </div>
        </div>
      </section>
    </>
  );
}
