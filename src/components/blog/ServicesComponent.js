import services from "./servicesPageCard";
import { BOOKING_URL_2 } from "../../constants";
import "./../../../src/App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const animated = useRef([]);

  useEffect(() => {
    const easeFromBelow = gsap.matchMedia();
    easeFromBelow.add("(min-width: 1200px)", () => {
      gsap.from(animated.current, {
        y: 25,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 80%",
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
        <div className="  h-96 bg-services bg-cover bg-center">
          <div className="row align-items-center justify-content-center mb-16 mb-md-20">
            <h1  ref={(el) => (animated.current[0] = el)} className="m-3 text-center text-white display-1">Services</h1>

            <p  ref={(el) => (animated.current[1] = el)} className="w-50 justify-content-center fw-lighter bg-danger-light p-4">
              At our Skin Wellness Studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include Luxurious Facials, HydraFacials,
              Microdermabrasion, Nanoneedle, Acne Facials and Professional
              Eyebrow Shaping and Tinting.
            </p>
          </div>
        </div>
        <div className="row mb-20">
          {services.map((service, index) => (
            <div
              key={`service ${index}`}
              ref={(el) => (animated.current[index + 2] = el)}
              className="col-12 col-md-4 mb-12 mb-md-0 p-5 justify-content-between h-auto"
            >
              <a className="text-decoration-none" href="#">
                <span className="badge bg-primary text-uppercase fw-lighter">
                  {service.category}
                </span>
              </a>
              <div className="mb-8">
                <img
                  style={{
                    objectFit: "cover",
                    width: "420px",
                    height: "280px",
                  }}
                  src={service.icon}
                  alt={service.name}
                />
              </div>
              <a className="d-inline-block text-decoration-none mb-6" href="#">
                <h2 className="text-start p-0 fs-2">{service.name}</h2>

                <p className="text-muted fs-5">{service.description}</p>
              </a>
              <div className="text-left">
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
