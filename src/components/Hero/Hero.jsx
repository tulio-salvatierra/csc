import "../../App.css";
import { BOOKING_URL_2 } from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function Hero() {
  const animated = useRef([]);

  useFadeInAnimation(animated);

  return (
    <>
      <section
        className="bg-hero d-flex align-items-center justify-content-center"
        ref={(el) => (animated.current[0] = el)}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className=" hero-content">
            <h1
              className="display-4 heading text-white text-center"
              ref={(el) => (animated.current[3] = el)}
            >
              Hydrate, renew and balance your skin
            </h1>
            <h2
              className="w-100 bg-danger-light p-4 welcome-text fs-6"
              ref={(el) => (animated.current[2] = el)}
            >
              Improve the health and appearance of your skin through
              personalized facial treatments that will balance your skin by
              delivering visible and long-lasting results. we are located in the
              heart of Midland, TX.
            </h2>
            <a
              className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6"
              href={BOOKING_URL_2}
              ref={(el) => (animated.current[1] = el)}
            >
              Book my appointment now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
