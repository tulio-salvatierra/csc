import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const UNDERLINE_LINK_SELECTOR = ".underline-link";

function enterAnimation(link) {
  if (link.tl) link.tl.tweenFromTo(0, "midway");
}

function leaveAnimation(link) {
  if (link.tl) link.tl.play();
}

/**
 * GSAP underline hover animation for links.
 * Attach the returned ref to a container that wraps links with class "underline-link".
 * Each link must contain a child element with class "underline".
 *
 * @param {Object} options
 * @param {number} [options.duration=0.3] - Animation duration in seconds
 * @returns {{ containerRef: React.RefObject }} - Ref to attach to the container
 */
export function useUnderlineAnimation(options = {}) {
  const containerRef = useRef(null);
  const duration = options.duration ?? 0.3;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const links = container.querySelectorAll(UNDERLINE_LINK_SELECTOR);
    const cleanups = [];

    links.forEach((link) => {
      const underline = link.querySelector(".underline");
      if (!underline) return;

      link.tl = gsap.timeline({ paused: true });

      link.tl.fromTo(
        underline,
        { width: "0%", left: "0%" },
        { width: "100%", duration }
      );

      link.tl.add("midway");

      link.tl.fromTo(
        underline,
        { width: "100%", left: "0%" },
        {
          width: "0%",
          left: "100%",
          duration,
          immediateRender: false,
        }
      );

      const onEnter = () => enterAnimation(link);
      const onLeave = () => leaveAnimation(link);

      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
        link.tl?.kill();
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [duration]);

  return { containerRef };
}
