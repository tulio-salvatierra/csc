import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFadeInAnimation(targetRef, options = {}) {
  useEffect(() => {
    if (!targetRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      gsap.from(targetRef.current, {
        y: options.desktop?.y !== undefined ? options.desktop.y : 25,
        opacity: options.desktop?.opacity !== undefined ? options.desktop.opacity : 0,
        duration: options.desktop?.duration !== undefined ? options.desktop.duration : 1.5,
        ease: options.desktop?.ease || "power2.out",
        stagger: options.desktop?.stagger !== undefined ? options.desktop.stagger : 0.5,
        scrollTrigger: {
          trigger: targetRef.current,
          start: options.desktop?.start || "top 70%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });

    mm.add("(max-width: 1199px)", () => {
      gsap.from(targetRef.current, {
        y: options.mobile?.y !== undefined ? options.mobile.y : 0,
        opacity: options.mobile?.opacity !== undefined ? options.mobile.opacity : 0,
        duration: options.mobile?.duration !== undefined ? options.mobile.duration : 1,
        ease: options.mobile?.ease || "power1.out",
        stagger: options.mobile?.stagger !== undefined ? options.mobile.stagger : 0.4,
        scrollTrigger: {
          trigger: targetRef.current,
          start: options.mobile?.start || "top 90%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });

    return () => mm.revert();
  }, [targetRef, options]);
}