import { Link } from "react-router-dom";
import services from "./servicesPageCard";
import { BOOKING_URL_2 } from "../../constants";
import "./../../../src/App.css";
import { useRef, useEffect } from "react";
import BookingButton from "../BookingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headerSectionRef = useRef(null);
  const imageRefs = useRef([]);

  // Parallax effect for header background
  useEffect(() => {
    const section = headerSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Parallax effect for service card images
  useEffect(() => {
    const images = imageRefs.current.filter(Boolean);
    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      images.forEach((image) => {
        gsap.set(image, { scale: 1.15 });
        gsap.fromTo(
          image,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="bg-white">
        <div ref={headerSectionRef} className="bg-cover bg-center bg-services">
          <div className="flex flex-col items-center justify-center mb-16 mb-md-20 pt-24 pb-8">
            <h1 className="m-3 text-center text-white text-5xl md:text-7xl font-bold">
              Services
            </h1>

            <p className="w-full md:w-1/2 justify-center font-light bg-red-100 p-4 text-gray-800">
              At my skin care studio, I offer a range of expert skin care facials
              and spa and facial treatments designed to rejuvenate and enhance
              your natural beauty. My skincare services include Luxurious
              Facials, HydraFacials, Microdermabrasion, Nanoneedle, Acne Facials
              and Professional Eyebrow Shaping and Tinting—skin care treatments
              near you in Midland, TX.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-20 mt-8 p-2">
          {services.map((service, index) => (
            <div
              key={`service ${index}`}
              className="p-4 my-8 w-full mb-1  flex flex-col justify-between hover:shadow-lg rounded-sm  bg-white hover:bg-gray-50 hover:border-1 hover:border-black/10 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link className="no-underline" to={`/services/${service.slug}`}>
                <span className="mb-4 font-[Grapevine] inline-block bg-black/20 uppercase text-black text-sm font-light px-2 py-1 rounded">
                  {service.category}
                </span>
              </Link>
              <Link to={`/services/${service.slug}`} className="no-underline">
                <div className="mb-8 overflow-hidden">
                  <img
                    ref={(el) => {
                      if (el) imageRefs.current[index] = el;
                    }}
                    className="mx-auto mb-1 w-100 h-100 object-cover will-change-transform"
                    src={service.icon}
                    alt={`${service.name} skincare facial treatment at Carolina Skin Centre`}
                  />
                </div>
              </Link>
              <Link className="inline-block no-underline mb-6" to={`/services/${service.slug}`}>
                <h2
                  className="text-left p-0 font-semibold text-2xl md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "Grapevine",
                    textTransform: "uppercase",
                  }}
                >
                  {service.name}
                </h2>

                <p className="text-gray-500">{service.description}</p>
              </Link>
              <div className="text-center">
                <BookingButton
                  href={BOOKING_URL_2}
                  label={"Book my appointment now!"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
