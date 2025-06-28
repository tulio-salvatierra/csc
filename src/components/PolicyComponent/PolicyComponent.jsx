import { policies } from "./policies";
import { BOOKING_URL_2 } from "../../constants";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef } from "react";



export default function PolicyComponent() {
  const animated = useRef([]);

  useFadeInAnimation(animated);
  return (
    <>
      <section className="bg-white">
        <div className="h-96 bg-cover bg-center bg-services relative">
          <div className="flex flex-col items-center justify-center mb-16 md:mb-20">
            <h1 ref={(el) => (animated.current[0] = el)} className="m-3 text-center text-white text-5xl md:text-7xl font-bold">Our Policies</h1>

            <p ref={(el) => (animated.current[1] = el)} className="w-full md:w-1/2 justify-center font-light bg-red-100 p-4">
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
                <div className="flex justify-center">
              
                <img
                  className="rounded-lg shadow-md"
                  style={{
                    objectFit: "cover",
                    width: "auto",
                    height: "80%",
                  }}
                  src={policy.image}
                  alt={policy.name}
                />
              </div>
              <a className="inline-block no-underline mb-6" href="#">
                
                <p className="text-gray-500 text-lg m-10">{policy.description}</p>
              </a>
              <div className="text-center">
                <a className="bg-black text-white px-4 py-2 rounded" href={BOOKING_URL_2}>
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
