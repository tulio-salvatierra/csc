import { BOOKING_URL_2 } from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./Solution.css";
import SkinCare from "../../assets/images/solutions/skin-care.jpg";
import BookingButton from "../BookingButton";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (section && content && image) {
      const contentAnimation = gsap.to(content, {
        yPercent: 19,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      const imageAnimation = gsap.to(image, {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom bottom",
          opacity: 0.8,
          scrub: true,
        },
      });

      // Cleanup function to kill animations on unmount

      return () => {
        contentAnimation.kill();
        imageAnimation.kill();
      };
    }
  }, []);

  return (
    <>
      <section
        className="py-24 p-4 h-screen d-flex flex-column justify-content-center relative"
        ref={sectionRef}
      >
        <div className="row align-items-center mb-5">
          <h2 className="mb-3">
            Transform Your Skin with Professional, Personalized Care
          </h2>
          <div className="parent d-flex flex-wrap gap-4 align-items-cente justify-content-center text-center" ref={contentRef}>
            <div>
              <p className="mb-10 text-muted">
                Hey! I'm Carolina and I have over 18 years of experience in
                skincare. My journey began with my own struggle with acne, which
                led me to study at the Euro Institute of Skin Care in Seattle.
                Combining European and naturopathic techniques with advanced
                medispa procedures that led me to build a loyal customer base in
                Midland, Texas. My expertise and personalized approach ensure
                that each client receives the best care tailored to their unique
                skin needs.
                
                Get in touch to book your consultation today!
              </p>
              <BookingButton
                href={BOOKING_URL_2}
                label={"Book my appointment now!"}
              />
            </div>
            <div className="grid place-items-center"> 
            <img
              src={SkinCare}
              alt="Skin Care Treatment"
              className="rounded shadow-xl object-cover justify-center"
              ref={imageRef}
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
