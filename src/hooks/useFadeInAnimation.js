import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin
gsap.registerPlugin(ScrollTrigger);


/**
 * Scroll-triggered fade-in for the elements collected in refsArray.
 * Runs once on mount. Options are read from a ref so that callers passing an
 * inline object (or none) don't re-run the animation on every re-render;
 * re-running reset every element to opacity 0, which looked like the section
 * "refreshing" whenever its state changed (e.g. the policy-card tooltip).
 */
export function useFadeInAnimation(refsArray, opts = {}) {
  const optionsRef = useRef(opts);

  useLayoutEffect(() => {
    const options = optionsRef.current;
    const ctx = gsap.context(() => {
      refsArray.current.forEach(el => {
        gsap.from(el, {
          y: options.y ?? 20,
          opacity: options.opacity ?? 0,
          duration: options.duration ?? 1,
          ease: options.ease || "power2.out",
          stagger: options.stagger ?? 0.2,
          scrollTrigger: {
            trigger: el,
            start: options.start || "top 90%",
            end: options.end || "bottom bottom",
            scrub: options.scrub ?? false,
          },
          onComplete: () => {
            if (typeof options.onComplete === "function") {
              options.onComplete(el);
            }
          },
        });
      });
    }, refsArray);

    return () => ctx.revert();
  }, [refsArray]);
}