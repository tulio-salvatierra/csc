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
  const bgRef = useRef(null);

  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  // BG zoom: expand (scale up) as you scroll into section until it covers whole screen, then zoom out as you scroll away
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",   // section just entering from bottom
          end: "bottom top",     // section has left from top
          scrub: true,
        },
      });
      // First half of scroll: bg scales up (expands to cover screen)
      tl.fromTo(bg, { scale: 1 }, { scale: 1.2, duration: 0.5, ease: "none" }, 0);
      // Second half: bg scales back down (zooms out as you leave)
      tl.fromTo(bg, { scale: 1.2 }, { scale: 1, duration: 0.5, ease: "none" }, 0.5);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen p-4  flex flex-col items-center justify-center py-0 relative overflow-hidden"
    >
      {/* Background layer – scaled for zoom effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hlBg})`, willChange: "transform" }}
      />
      {/* Content above bg */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
      <h2
        ref={addToRefs}
        className="text-center text-white font-bold my-4 text-4xl sm:text-6xl lg:text-6xl px-4"
      >
        Why Choose Us
      </h2>
      <div className="w-full mx-auto px-4 grid grid-cols-1  md:gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-black/10 backdrop-blur-sm text-white border-2 m-2 md:m-0 rounded-lg"
          >
            <div className="p-4 sm:p-6 text-left">
              <h3
                style={{
                  fontFamily: "Grapevine",
                  textTransform: "uppercase",
                  fontSize: "clamp(4rem, 10vw, 150px)",
                }}
                className="text-gray-100 no-underline leading-none"
              >
                {highlight.id}
              </h3>
              <p
                className="font-bold text-white text-4xl md:text-6xl lg:text-6xl"
              >
                <span  style={{
                  fontFamily: "Grapevine",
                  textTransform: "uppercase",
                  fontSize: "clamp(3rem, 9vw, 100px)",
                  color: "#000",
                }}>
                  {highlight.title}
                </span>
              </p>
              <p style={{color: "#fff"}} className="mt-4 text-4xl sm:text-6xl lg:text-6xl text-white/90">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
