import "./../../App.css";
import { useRef, useEffect } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import hlBg from "../../assets/images/hl_bg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const fadeRefs = useRef([]);
  const sectionRef = useRef(null);
  
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  // Parallax effect for background
  useEffect(() => {
    const section = sectionRef.current;
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

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${hlBg})` }}
      className="min-h-screen flex flex-col items-center justify-center py-0 bg-cover bg-center bg-no-repeat"
    >
      <h2
        ref={addToRefs}
        className="text-center text-white fw-bold mb-4 fs-1"
      >
        Why Choose Us
      </h2>
      <div className="row text-left g-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="col-md-4 bg-black/80 text-white border-2 m-2.5 rounded-lg"
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
