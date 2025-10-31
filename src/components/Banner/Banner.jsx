import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import BF from "./../../assets/images/banner/banner.svg";
import "./Banner.css";

export function Banner() {
  const containerRef = useRef(null);
  const phraseRef = useRef(null);


  useEffect(() => {
    let wheelDelta = 0;
    let total = 0;
    const content = containerRef.current;
    const phraseWidth = phraseRef.current.clientWidth;
    const wrap = gsap.utils.wrap(-phraseWidth, 0);

    const xTo = gsap.quickTo(content, "x", {
      duration: 1,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(wrap),
      },
    });

    const tick = () => {
      total -= 1.2 + wheelDelta * 1;
      xTo(total);

      wheelDelta *= 0.9;
      if (Math.abs(wheelDelta) < 0.01) wheelDelta = 0;
    };

    const handleWheel = (e) => {
      wheelDelta += e.deltaY * 0.02;
    };

    gsap.ticker.add(tick);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <section className="mwg_effect013 h-screen flex items-center justify-center">
      <div className="inner">
        <div className="banner-container" ref={containerRef}>
          <p className="phrase flex" ref={phraseRef} style={{ height: "500px" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={index} src={BF} className="h-100" alt="Banner frame" />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
