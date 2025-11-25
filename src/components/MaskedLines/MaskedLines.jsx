/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
// disable warning about ScrollTrigger with SSR
// Componente base que soporta variant: "lines" | "words"
function MaskedText({
  children,
  as: Component = "p",
  scroll = false,
  scrollStart = "top 80%",
  once = false,
  variant = "lines", // "lines" o "words"
  className = "", // clases Tailwind para el texto
}) {
  const textRef = useRef(null);

  useEffect(() => {
    let splitInstance;
    let tween;

    document.fonts
      ?.ready?.then(() => {
        const el = textRef.current;
        if (!el) return;

        // Asegurar que el texto sea visible cuando las fuentes estén listas
        gsap.set(el, { opacity: 1 });

        // Config de SplitText dependiendo del variant
        const splitConfig =
          variant === "words"
            ? {
                type: "words",
                autoSplit: true,
                mask: "words",
              }
            : {
                type: "words,lines",
                linesClass: "line",
                autoSplit: true,
                mask: "lines",
              };

        splitInstance = SplitText.create(el, splitConfig);

        // Config de animación dependiendo del variant
        const isWords = variant === "words";
        const targets = isWords ? splitInstance.words : splitInstance.lines;

        if (!targets || !targets.length) return;

        const animationConfig = {
          duration: isWords ? 1.1 : 1.6,
          yPercent: 120,
          opacity: 0,
          stagger: isWords ? 0.06 : 0.28,
          ease: "power3.out",
          delay: isWords ? 0.1 : 0.15,
        };

        if (scroll) {
          animationConfig.scrollTrigger = {
            trigger: el,
            start: scrollStart,
            toggleActions: once ? "play none none none" : "play none none reset",
          };
        }

        tween = gsap.from(targets, animationConfig);
      })
      .catch(() => {});

    return () => {
      if (tween) tween.kill();
      if (splitInstance) splitInstance.revert();
    };
  }, [scroll, scrollStart, once, children, variant]);

  return (
    <div className="container-text-masked-lines">
      <Component ref={textRef} className={`split ${className}`}>
        {children}
      </Component>
    </div>
  );
}

// Versión por líneas (default export)
export default function MaskedLines(props) {
  return <MaskedText {...props} variant="lines" />;
}

// Versión por palabras
export function MaskedWords(props) {
  return <MaskedText {...props} variant="words" />;
}

// Si quieres usar el genérico en algún momento:
export { MaskedText };