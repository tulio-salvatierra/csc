import { useRef } from "react";
import { BOOKING_URL_2 } from "../../constants";
import "./Solution.css";
import SkinCare from "../../assets/images/solutions/skin-care.jpg";
import BookingButton from "../BookingButton";
import MaskedLines from "../MaskedLines/MaskedLines";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function Solutions() {
  // 1) Create an array-ref for elements we want to animate
  const fadeRefs = useRef([]);

  // 2) Hook: applies GSAP to everything in fadeRefs.current
  useFadeInAnimation(fadeRefs, {
    y: 40,
    duration: 1.2,
    start: "top 85%",
    ease: "power2.out",
  });

  // 3) Helper to register the image in the refs array
  const setSolutionImageRef = (el) => {
    if (!el) return;
    if (!fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <section className="p-4 my-32 h-screen d-flex flex-column justify-content-center relative">
      <div className="row align-items-center mb-5">
        <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">
          Transform Your Skin with Professional & Personalized Care
        </h2>

        <div className="grid grid-cols-2 items-center  h-100 d-flex flex-wrap gap-4 align-items-cente justify-content-center text-center">
          <div className="grid place-items-center m-auto text-left">
            <MaskedLines as="p" className="mb-10 text-muted text-left justify-center-safe w-100">
              Hey! I'm Carolina and I have over 18 years of experience in
              skincare. My journey began with my own struggle with acne, which
              led me to study at the Euro Institute of Skin Care in Seattle.
              Combining European and naturopathic techniques with advanced
              medispa procedures that led me to build a loyal customer base in
              Midland, Texas. My expertise and personalized approach ensure that
              each client receives the best care tailored to their unique skin
              needs.
              Get in touch to book your consultation today!
            </MaskedLines>

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
              style={{ width: "100%", height: "auto" }}
              ref={setSolutionImageRef}  // 👈 hooked into fade
            />
          </div>
        </div>
      </div>
    </section>
  );
}