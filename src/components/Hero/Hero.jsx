import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MaskedLines from "../../components/MaskedLines/MaskedLines";
import MaskedWords from "../MaskedLines/MaskedLines";
import BookingButton from "../BookingButton/BookingButton";
import { BOOKING_URL_2 } from "../../constants";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const textRef    = useRef(null);
  const buttonRef  = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
            duration: 0.7,
          },
          "-=0.4" // solapamos un poco
        )
        .from(
          buttonRef.current,
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
   return (
    <section
      ref={sectionRef}
      className="bg-hero grid place-items-center h-screen bg-cover bg-center"
    >
      <div className="grid m-auto sm:min-h-2/4 items-center sm:max-w-3/4 p2-4 text-center">
        <div ref={titleRef}>
          <MaskedWords
            scrollStart={false}
            as="h1"
            variant="words"
            once={true}
            className="font-extrabold h-auto overflow-visible text-white text-xl margin-0 leading-18 tracking-tighter"
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
            className="bg-red-100 p-4 mb-8 text-white text-left mt-4 font-light"
          >
            Improve the health and appearance of your skin through
            personalized facial treatments that will balance your skin by
            delivering visible and long-lasting results located in the
            heart of Midland, TX.
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