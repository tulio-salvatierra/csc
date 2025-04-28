import { policies } from "./policies";
import { BOOKING_URL_2 } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function PolicyComponent() {
  const animated = useRef([]);

  useEffect(() => {
    const easeFromBelow = gsap.matchMedia();
    easeFromBelow.add("(min-width: 1200px)", () => {
      gsap.from(animated.current, {
        y: 25,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
    return () => {
      easeFromBelow.revert();
    };
  }, []);
  return (
    <>
      <section className="py-28 bg-white">
        <div className="  h-96 bg-policies bg-cover bg-center">
          <div className="row align-items-center justify-content-center mb-16 mb-md-20">
            <h1 ref={(el) => (animated.current[0] = el)} className="m-3 text-center text-white display-1">Our Policies</h1>

            <p ref={(el) => (animated.current[1] = el)} className="w-50 justify-content-center fw-lighter bg-danger-light p-4">
              At our skin care studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include luxurious facials, HydraFacials,
              microdermabrasion, nano needle, acne facials and professional
              eyebrow shaping and tinting.
            </p>
          </div>
        </div>
        <div className="row mb-20 container mx-auto flex-column justify-content-evenly">
          {policies.map((policy, index) => (
            <div
              key={`service ${index}`}
              ref={(el) => (animated.current[index + 2] = el)}
              className="col-12 mb-12 mb-md-0 p-10"
            >
                <div className="justify-content-center">
              
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  src={policy.image}
                  alt={policy.name}
                />
              </div>
              <a className="d-inline-block text-decoration-none mb-6" href="#">
                
                <p className="text-muted fs-5 m-10">{policy.description}</p>
              </a>
              <div className="text-center">
                <a className="btn btn-dark w-auto" href={BOOKING_URL_2}>
                  Book my appointment now!
                </a>
              </div>
              </div>
            
          ))}
        </div>
      </section>
    </>
  );
}
