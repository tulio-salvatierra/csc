import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BOOKING_URL_2 } from "../../constants";
import "./Solution.css";
import SkinCare from "../../assets/images/solutions/skin-care.jpg";
import BookingButton from "../BookingButton";
import MaskedLines from "../MaskedLines/MaskedLines";

gsap.registerPlugin(useGSAP);

export default function Solutions() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const textRef    = useRef(null);
  const buttonRef  = useRef(null);
  const imageRef   = useRef(null);

  // ✨ GSAP React hook version
 useGSAP(
  () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",    // 🔥 when section top hits 75% of viewport
        toggleActions: "play none none reset",
      },
    });

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        imageRef.current,
        {
          scale: 1.2,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        buttonRef.current,
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4"
      );
  },
  { scope: sectionRef }
);

  return (
    <section
      ref={sectionRef}
      className="p-4 mt-8 h-screen flex flex-col justify-center relative"
    >
      <div className="grid items-center justify-center text-center mt-20">
        <h2 ref={titleRef} className="mb-3">
          Transform Your Skin with Professional & Personalized Care
        </h2>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 text-center items-center">
          <div className="grid place-items-center text-left">
            <div ref={textRef}>
              <MaskedLines
                as="p"
                scrollStart={true}
                once={true}
                variant="lines"
                className="mb-10 text-muted text-left justify-center-safe w-100"
              >
                Hey! I'm Carolina and I have over 18 years of experience in
                skincare. My journey began with my own struggle with acne, which
                led me to study at the Euro Institute of Skin Care in Seattle.
                Combining European and naturopathic techniques with advanced
                medispa procedures that led me to build a loyal customer base in
                Midland, Texas. Get in touch to book your consultation today!
              </MaskedLines>
            </div>

            <div ref={buttonRef}>
              <BookingButton
                href={BOOKING_URL_2}
                label={"Book my appointment now!"}
              />
            </div>
          </div>

          <div className="grid place-items-center">
            <img
              ref={imageRef}
              src={SkinCare}
              alt="Skin Care Treatment"
              className="rounded shadow-xl object-cover"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}