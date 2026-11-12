import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MaskedLines from "../../components/MaskedLines/MaskedLines";
import MaskedWords from "../MaskedLines/MaskedLines";
import BookingButton from "../BookingButton/BookingButton";
import { BOOKING_URL_2 } from "../../constants";
import studioRoom from "../../assets/images/hero/studio-room-hero.webp";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          bgRef.current,
          {
            duration: 1.5,
            opacity: 0.1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          textRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4", // solapamos un poco
        )
        .from(
          buttonRef.current,
          {
            y: 5,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-hero"
    >
      {/* Natural image height keeps both edges visible at every screen width. */}
      <div ref={bgRef} className="home-hero__media">
        <img
          src={studioRoom}
          alt=""
          width="1846"
          height="852"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {/* Warm tint so white text stays readable on the light studio photo */}
      <div
        aria-hidden="true"
        className="home-hero__tint"
      />
      {/* Copy sits below the photo on mobile and over it on desktop. */}
      <div className="home-hero__content">
        <div ref={titleRef}>
          <MaskedWords
            scrollStart={false}
            as="h1"
            variant="words"
            once={true}
            className="font-extrabold h-auto overflow-visible text-white tracking-tighter"
          >
            Elevated skin care, personalized for you
          </MaskedWords>
        </div>

        <div ref={textRef}>
          <MaskedLines
            as="p"
            once={true}
            variant="lines"
            scrollStart={false}
            className="glass-panel text-white text-left font-light"
          >
            Experience personalized skincare treatments designed to improve the
            health and appearance of your skin. With a focus on your individual
            skin needs, each treatment is customized to deliver visible,
            long lasting results in a relaxing and professional environment in
            Midland, Texas.
          </MaskedLines>
        </div>

        <div ref={buttonRef}>
          <BookingButton
            href={BOOKING_URL_2}
            label={"Book Your Experience"}
            variant="light"
            trackingSource="home:hero"
          />
        </div>
      </div>
    </section>
  );
}
