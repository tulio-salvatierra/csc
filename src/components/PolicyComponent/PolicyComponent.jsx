import { policies } from "./policies";
import { BOOKING_URL_2 } from "../../constants";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef, useEffect } from "react";
import BookingButton from "../BookingButton/BookingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PolicyComponent() {
  const animated = useRef([]);
  const headerSectionRef = useRef(null);
  const policyImageRefs = useRef([]);

  useFadeInAnimation(animated);

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

  // Parallax effect for policy images
  useEffect(() => {
    const images = policyImageRefs.current.filter(Boolean);
    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      images.forEach((image) => {
        gsap.set(image, { scale: 1.1 });
        gsap.fromTo(
          image,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="bg-white">
        <div ref={headerSectionRef} className="h-96 bg-cover bg-center bg-policy relative">
          <div className="flex flex-col items-center justify-center mb-16 md:mb-20">
            <h1
              ref={(el) => (animated.current[0] = el)}
              className="m-3 text-center text-white text-5xl md:text-7xl font-bold"
            >
              Our Policies
            </h1>

            <p
              ref={(el) => (animated.current[1] = el)}
              className="w-full md:w-1/2 justify-center font-light bg-red-100 p-4"
            >
              At our skin care studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include luxurious facials, HydraFacials,
              microdermabrasion, nano needle, acne facials and professional
              eyebrow shaping and tinting.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly m-20 container mx-auto">
          {policies.map((policy, index) => (
            <div
              key={`service ${index}`}
              ref={(el) => (animated.current[index + 2] = el)}
              className="w-full mb-12 px-10"
            >
              <div className="flex justify-center overflow-hidden rounded-lg shadow-md">
                <img
                  ref={(el) => {
                    if (el) policyImageRefs.current[index] = el;
                  }}
                  className="will-change-transform"
                  style={{
                    objectFit: "cover",
                    width: "auto",
                    height: "80%",
                  }}
                  src={policy.image}
                  alt={policy.name}
                />
              </div>
              <div className="inline-block no-underline mb-6" href="#">
                <p className="text-gray-500 text-lg m-10">
                  {policy.description}
                </p>
              </div>
              <div className="text-center">
                <BookingButton
                  label={"Book my appointment now!"}
                  href={BOOKING_URL_2}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
