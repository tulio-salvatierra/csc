import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedLines from "../../components/MaskedLines/MaskedLines";
import MaskedWords from "../MaskedLines/MaskedLines";
import BookingButton from "../BookingButton/BookingButton";
import { BOOKING_URL_2 } from "../../constants";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  // Parallax effect for background
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
            scale: 1.5,
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
      className="relative grid place-items-center h-dvh min-h-[100svh] overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-hero bg-cover bg-center will-change-transform"
        style={{ transform: "scale(1.15)" }}
      />
      {/* Content overlay */}
      <div className="relative z-10 grid w-full m-auto sm:min-h-2/4 items-center sm:max-w-3/4 p-4 top-[10%] text-center">
        <div ref={titleRef}>
          <MaskedWords
            scrollStart={false}
            as="h1"
            variant="words"
            once={true}
            className="font-extrabold h-auto overflow-visible text-white tracking-tighter leading-none"
          >
            Hydrate, renew and balance your skin
          </MaskedWords>
        </div>

        <div ref={textRef}>
          <MaskedLines
            as="p"
            once={true}
            variant="lines"
            scrollStart={false}
            className="bg-red-100 rounded-sm shadow-lg mb-4 w-full sm:w-3/4 mx-auto p-4 text-white text-left mt-4 font-light"
          >
            Experience personalized skincare treatments designed to improve the
            health and appearance of your skin. With a focus on your individual
            skin needs, each treatment is customized to deliver visible,
            long-lasting results in a relaxing and professional environment in
            Midland, Texas.
          </MaskedLines>
        </div>

        <div ref={buttonRef}>
          <BookingButton
            href={BOOKING_URL_2}
            label={"Book my appointment now!"}
          />
        </div>
      </div>
    </section>
  );
}
