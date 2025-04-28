import "./../../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 1200px)", () => {
      // Desktop animation (movement + fade)
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
  
    mm.add("(max-width: 1199px)", () => {
      // Mobile and Tablet animation (fade only, very smooth)
      gsap.from(animated.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 90%", // trigger a bit later for mobile
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  
    return () => mm.revert();
  }, []);

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
