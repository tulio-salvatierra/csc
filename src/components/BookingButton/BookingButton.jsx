import React, { useEffect, useRef } from "react";
import "./BookingButton.css";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function BookingButton({ href, label }) {
  const textRef = useRef(null);
  const fadeRefs = useRef([]);

  // Attach GSAP fade-in animation to this button
  useFadeInAnimation(fadeRefs);

  const setFadeRef = (el) => {
    if (!el) return;
    // Keep a single DOM node for this button
    fadeRefs.current[0] = el;
  };

  useEffect(() => {
    const initButtonCharacterStagger = () => {
      const offsetIncrement = 0.01;
      const button = textRef.current;
      if (!button) return;
      const text = button.textContent;
      button.innerHTML = "";

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.transitionDelay = `${index * offsetIncrement}s`;

        if (char === " ") {
          span.style.whiteSpace = "pre";
        }

        button.appendChild(span);
      });
    };

    initButtonCharacterStagger();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="btn-animate-chars place-self-center"
      ref={setFadeRef}
      style={{ 
        textDecoration: "none", 
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        zIndex: 1
      }}
    >
      <div className="btn-animate-chars__bg"></div>
      <span
        ref={textRef}
        data-button-animate-chars
        className="btn-animate-chars__text"
        style={{ position: "relative", zIndex: 2 }}
      >
        {label}
      </span>
    </a>
  );
}