import "../../App.css";
import { BOOKING_URL } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

  const animated = useRef([]);

  useEffect(() => {
    const easeFromBelow = gsap.matchMedia();
    easeFromBelow.add("(min-width: 800px)", () => {
      gsap.from(animated.current, {
        y: 25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        ScrollTrigger: {
          trigger: animated.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: false,
        }
      }
    )})
    return () => {
      easeFromBelow.revert();
    }
   }, []);

 
  return (
    <>
      <section className="bg-hero d-flex align-items-center justify-content-center" ref={(el) => (animated.current[0] = el)}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className=" hero-content">
            <h1 className="display-4 heading text-white text-center" ref={(el) => (animated.current[3] = el)}>
              Hydrate, renew and balance your skin
            </h1>
            <p className="w-100 bg-danger-light m-1 p-4 welcome-text fs-6" ref={(el) => (animated.current[2] = el)}>
              Improve the health and appearance of their skin through
              personalized facial treatments that will balance your skin &
              delivering visible and long-lasting results, located in the heart
              of Midland, TX.
            </p>
            <a
              className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6"
              href={BOOKING_URL}
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


