import services from "./servicesPageCard";
import { BOOKING_URL_2 } from "../../constants";
import "./../../../src/App.css";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import BookingButton from "../BookingButton";

export default function Services() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  return (
    <>
      <section className="bg-white">
        <div className="h-72 bg-cover bg-center bg-services">
          <div className="flex flex-col items-center justify-center mb-16 mb-md-20">
            <h1
              ref={addToRefs}
              className="m-3 text-center text-white text-5xl md:text-7xl font-bold"
            >
              Services
            </h1>

            <p
              ref={addToRefs}
              className="w-full md:w-1/2 justify-center font-light bg-red-100 p-4"
            >
              At our Skin Wellness Studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include Luxurious Facials, HydraFacials,
              Microdermabrasion, Nanoneedle, Acne Facials and Professional
              Eyebrow Shaping and Tinting.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-20 mt-8 p-2">
          {services.map((service, index) => (
            <div
              key={`service ${index}`}
              ref={addToRefs}
              className="w-full md:w-1/3 mb-12 px-5 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-sm md:mx-2 bg-white hover:bg-gray-50 p-4"
            >
              <a className="no-underline" href="#">
                <span className="mb-4 inline-block bg-blue-500 uppercase text-white text-sm font-light px-2 py-1 rounded">
                  {service.category}
                </span>
              </a>
              <div className="mb-8">
                <img
                  className="mx-auto mb-4 position-relative h-80 w-100 object-cover"
                  src={service.icon}
                  alt={service.name}
                />
              </div>
              <a className="inline-block no-underline mb-6" href="#">
                <h2 className="text-left p-0font-semibold">
                  {service.name}
                </h2>

                <p className="text-gray-500">{service.description}</p>
              </a>
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
