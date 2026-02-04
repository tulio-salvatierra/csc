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
        className="text-center text-white font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4"
      >
        Why Choose Us
      </h2>
      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-black/10 backdrop-blur-sm text-white border-2 m-2 md:m-0 rounded-lg"
          >
            <div className="p-4 sm:p-6 text-left">
              <h2
                style={{
                  fontFamily: "Grapevine",
                  textTransform: "uppercase",
                  fontSize: "clamp(4rem, 15vw, 250px)",
                }}
                className="text-gray-100 no-underline leading-none"
              >
                {highlight.id}
              </h2>
              <p
                className="font-bold text-white"
                style={{ fontSize: "clamp(1.5rem, 4vw, 70px)" }}
              >
                <span style={{ color: "#fff", fontFamily: "Grapevine", textTransform: "uppercase" }}>
                  {highlight.title}
                </span>
              </p>
              <p className="mt-4 text-sm sm:text-base text-white/90">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
