import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import BF from "./../../assets/images/banner/banner.svg";
import "./Banner.css";

export function Banner() {
  const containerRef = useRef(null);
  const phraseRef = useRef(null);
  let wheel = 0;
  let total = 0;
  let xTo;

  useEffect(() => {
    let isWheeling;
    let tickerId;

    const content = containerRef.current;
    const phraseWidth = phraseRef.current.clientWidth;
    const wrap = gsap.utils.wrap(-phraseWidth, 0);

    xTo = gsap.quickTo(content, "x", {
      duration: 0.5,
      ease: 'power3',
      modifiers: {
        x: gsap.utils.unitize(wrap),
      },
    });

    const tick = () => {
      if (wheel !== 0) {
        total -= wheel;
        xTo(total);
      }
    };

    tickerId = gsap.ticker.add(tick);

    const handleWheel = (e) => {
      wheel = e.deltaY;
      clearTimeout(isWheeling);
      isWheeling = setTimeout(() => {
        wheel = 0;
      }, 600);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <section className="mwg_effect013 h-100 mb-96">
      <div className="inner">
        <div className="container" ref={containerRef}>
          <p className="phrase flex" ref={phraseRef} style={{ height: "400px" }}>
            <img src={BF} className="h-100" />
          </p>
        </div>
      </div>
    </section>
  );
}
