import { useEffect } from "react";
import gsap from "gsap";

export function useMenuAnimation(ref, isOpen, options = {}) {
  const {
    durationOpen = 0.5,
    durationClose = 0.5,
    easeOpen = "power2.out",
    easeClose = "power2.in",
    openX = 0,
    closeX = "-100%",
  } = options;

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) {
      gsap.set(ref.current, { display: "block" });
      gsap.to(ref.current, {
        x: openX,
        opacity: 1,
        duration: durationOpen,
        ease: easeOpen,
      });
    } else {
      gsap.to(ref.current, {
        x: closeX,
        opacity: 0,
        duration: durationClose,
        ease: easeClose,
        onComplete: () => {
          gsap.set(ref.current, { display: "none" });
        },
      });
    }
  }, [isOpen, ref, durationOpen, durationClose, easeOpen, easeClose, openX, closeX]);
}