import "./../../App.css";
import Caro from "./../../assets/images/about/carolina.jpg";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import { useRef } from "react";

export default function AboutPage() {
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
      {/* Our Story Section */}
      <section className="mb-20 flex items-center justify-center">
        <div className="bg-about grid place-items-center w-full p-6">
          <h1 ref={addToRefs} className="mb-3 text-white text-5xl md:text-7xl font-bold mt-28">
            Our Story
          </h1>
          <p ref={addToRefs} className="w-full md:w-1/2 font-light bg-red-100 p-4 mt-4">
            I battled acne in my late teens and early twenties, which shook my
            confidence. After seeing real results from professional treatments,
            I felt renewed and inspired to help others achieve that same boost.
            As an esthetician, I’m dedicated to delivering personalized,
            effective skincare so every client can feel confident and supported
            on their unique journey.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={addToRefs} className="mb-20 mx-6">
        <h2 className="mb-3 text-4xl font-bold">About me</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {teamMembers.map((member) => (
            <div
              ref={addToRefs}
              className="w-full md:w-2/3 lg:w-2/3"
              key={member.name}
            >
              <div className="bg-white rounded-lg shadow-md text-center h-full">
                <div className="bg-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-semibold">{member.name}</h5>
                  <p className="text-gray-500 text-center">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section ref={addToRefs} className="mb-20 mt-10 mx-6">
        <h2 className="text-4xl font-bold mb-3">Our Mission</h2>
        <blockquote className="border-l-4 border-gray-300 pl-3">
          <p className="text-gray-500">
            "Our mission is to enhance your natural beauty and boost your
            confidence by providing personalized, results-driven skincare
            treatments and luxurious beauty services. From rejuvenating facials
            to expert lash and brow care, we are dedicated to helping you look
            and feel your best."
          </p>
        </blockquote>
      </section>
    </>
  );
}

const teamMembers = [
  {
    name: "Carolina Alcalá",
    role: "CEO & Founder",
    image: Caro,
  },
];
