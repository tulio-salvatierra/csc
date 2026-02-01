import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for applying parallax effect to elements
 * @param {Object} options - Parallax configuration options
 * @param {number} options.speed - Parallax speed (0.1 to 1, default 0.3). Lower = slower parallax
 * @param {string} options.direction - Direction of parallax ('vertical' or 'horizontal', default 'vertical')
 * @param {string} options.start - ScrollTrigger start position (default "top bottom")
 * @param {string} options.end - ScrollTrigger end position (default "bottom top")
 * @returns {React.RefObject} - Ref to attach to the parallax element
 */
export function useParallax(options = {}) {
  const elementRef = useRef(null);
  const {
    speed = 0.3,
    direction = "vertical",
    start = "top bottom",
    end = "bottom top",
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const movement = 100 * speed;
    const axis = direction === "vertical" ? "y" : "x";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { [axis]: -movement },
        {
          [axis]: movement,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed, direction, start, end]);

  return elementRef;
}

/**
 * Custom hook for applying parallax effect to background images
 * @param {Object} options - Parallax configuration options
 * @param {number} options.speed - Background movement speed (default 0.5)
 * @returns {React.RefObject} - Ref to attach to the container element
 */
export function useBackgroundParallax(options = {}) {
  const containerRef = useRef(null);
  const { speed = 0.5 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        backgroundPositionY: `${100 * speed}%`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return containerRef;
}

export default useParallax;
