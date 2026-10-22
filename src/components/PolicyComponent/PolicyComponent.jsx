import { policies, policiesIntro } from "./policies";
import StudioRoom from "../../assets/images/policies/studio-room.webp";
import { BOOKING_URL_2 } from "../../constants";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef, useEffect } from "react";
import BookingButton from "../BookingButton/BookingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PolicyComponent() {
  const animated = useRef([]);
  const headerSectionRef = useRef(null);
  const policyImageRefs = useRef([]);

  useFadeInAnimation(animated);

  // Parallax effect for header background
  useEffect(() => {
    const section = headerSectionRef.current;
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

  // Parallax effect for policy images
  useEffect(() => {
    const images = policyImageRefs.current.filter(Boolean);
    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      images.forEach((image) => {
        gsap.set(image, { scale: 1.1 });
        gsap.fromTo(
          image,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="bg-[#faf7f2]">
        <div
          ref={headerSectionRef}
          className="min-h-[65vh] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: `url(${StudioRoom})` }}
        >
          <div className="flex flex-col items-center justify-center px-4 pt-28 pb-16">
            <h1 style={{ fontFamily: "Grapevine", textTransform: "uppercase" }}
              ref={(el) => (animated.current[0] = el)}
              className="m-3 text-center text-white text-5xl md:text-7xl font-bold drop-shadow-lg"
            >
              Studio Policies
            </h1>

            <p
              ref={(el) => (animated.current[1] = el)}
              className="glass-panel w-full md:w-1/2 text-center text-lg font-light p-4"
            >
              {policiesIntro}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col gap-10 max-w-5xl">
          {policies.map((policy, index) => (
            <article
              key={policy.id}
              id={policy.id}
              ref={(el) => (animated.current[index + 2] = el)}
              className="policy-card grid grid-cols-1 md:grid-cols-[2fr_3fr] overflow-hidden rounded-lg bg-white shadow-sm border border-black/5 md:min-h-[18rem]"
            >
              <div className="relative overflow-hidden h-56 md:h-auto">
                <img
                  ref={(el) => {
                    if (el) policyImageRefs.current[index] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover will-change-transform"
                  src={policy.image}
                  alt={policy.imageAlt}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10 text-gray-800">
                <h2 className="text-2xl md:text-3xl mb-4 text-gray-900">
                  {policy.title}
                </h2>
                {policy.paragraphs.map((text) => (
                  <p key={text} className="text-lg font-light leading-relaxed mb-3">
                    {text}
                  </p>
                ))}
                {policy.list && (
                  <ul className="list-disc pl-5 my-3 space-y-2 text-lg font-light leading-relaxed">
                    {policy.list.map((item) => (
                      <li key={item.label}>
                        <strong className="font-semibold">{item.label}</strong>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {policy.closing && (
                  <p className="text-lg font-light leading-relaxed mt-3">
                    {policy.closing}
                  </p>
                )}
              </div>
            </article>
          ))}

          <div className="text-center pt-6">
            <BookingButton label={"Book now"} href={BOOKING_URL_2} />
          </div>
        </div>
      </section>
    </>
  );
}
