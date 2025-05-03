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
      <section className="mb-5 py-28 align-items-center justify-content-center">
        <div className="bg-about bg-cover bg-center flex-column flex justify-content-center align-items-center">
          <h2 ref={addToRefs} className="mb-3 text-white display-1">
            Our Story
          </h2>
          <p ref={addToRefs} className="w-50 fw-lighter bg-danger-light p-4">
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
      <section ref={addToRefs} className="mb-5">
        <h2 className="mb-3 fs-1">About me</h2>
        <div className="row g-4 justify-content-center mt-10">
          {teamMembers.map((member) => (
            <div
              ref={addToRefs}
              className="col-12 col-md-8 col-lg-8"
              key={member.name}
            >
              <div className="card text-center h-100">
                <div className="card-header bg-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" mx-auto"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-muted text-center">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section ref={addToRefs} className="mb-5 mt-10">
        <h2 className="fs-1 mb-3">Our Mission</h2>
        <blockquote className="blockquote border-start ps-3">
          <p className="text-muted">
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
