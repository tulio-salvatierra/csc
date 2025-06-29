import React, { useEffect, useRef } from 'react';
import "./BookingButton.css";

export default function BookingButton({ href, label }) {
  const textRef = useRef(null);

  useEffect(() => {
    
    const initButtonCharacterStagger = () => {
      const offsetIncrement = 0.01; 
      const button = textRef.current;
      if (!button) return;
      const text = button.textContent;
      button.innerHTML = '';

      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * offsetIncrement}s`;

        if (char === ' ') {
          span.style.whiteSpace = 'pre';
        }

        button.appendChild(span);
      });
    };

    initButtonCharacterStagger();
  }, []);

  return (
    <a href={href} aria-label={label} className="btn-animate-chars place-self-center">
      <div className="btn-animate-chars__bg"></div>
      <span
        ref={textRef}
        data-button-animate-chars
        className="btn-animate-chars__text"
      >
        {label}
      </span>
    </a>
  );
}