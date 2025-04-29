import "./../../App.css";
import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";

export default function HL() {
  const highlights = [
    {
      id: 1,
      title: "Expert aesthetician",
      description:
        "Board-certified professional with over 10 years of experience",
    },
    {
      id: 2,
      title: "Cutting-edge Technology",
      description: "State-of-the-art equipment for optimal results",
    },
    {
      id: 3,
      title: "Personalized Care",
      description: "Tailored treatments to meet your unique skin needs",
    },
  ];

  const animated = useRef([]);

  useFadeInAnimation(animated);

  return (
    <section className="mt-32 mb-32 py-56 why">
      <h2
        ref={(el) => (animated.current[0] = el)}
        className="text-center fw-bold mb-4 fs-1"
      >
        Why Choose Us
      </h2>
      <div className="row text-left g-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            ref={(el) => (animated.current[index + 1] = el)}
            className="col-md-4 bg-black text-white card"
          >
            <div className="card-body p-4">
              <h2 className="text-muted fs-1 text-left p-4 text-decoration-none">
                {highlight.id}
              </h2>
              <h5 className="fw-bold hlTitle fs-3 text-white">
                {highlight.title}
              </h5>
              <p className="text-muted mt-4">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
