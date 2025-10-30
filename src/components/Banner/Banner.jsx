import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import BF from "./../../assets/images/banner/banner.svg";
import "./Banner.css";

export function Banner() {
  const containerRef = useRef(null);
  const phraseRef = useRef(null);


  useEffect(() => {
    const content = containerRef.current;
    const phraseEl = phraseRef.current;
    if (!content || !phraseEl) return;
  
    let wheelDelta = 0;
    let total = 0;
    let cleanupFns = [];
  
    const setup = () => {
      const phraseWidth = phraseEl.scrollWidth; // more reliable than clientWidth for overflowing content
      if (!phraseWidth || phraseWidth <= 0) return false; // guard: avoid wrap with 0 range
  
      const wrap = gsap.utils.wrap(-phraseWidth, 0);
      const xTo = gsap.quickTo(content, "x", {
        duration: 1,
        ease: "none",
        modifiers: { x: gsap.utils.unitize(wrap) }
      });
  
      const tick = () => {
        total -= 1.2 + wheelDelta * 1;
        xTo(total);
        wheelDelta *= 0.9;
        if (Math.abs(wheelDelta) < 0.01) wheelDelta = 0;
      };
  
      const handleWheel = (e) => { wheelDelta += e.deltaY * 0.02; };
  
      gsap.ticker.add(tick);
      window.addEventListener("wheel", handleWheel, { passive: true });
  
      cleanupFns.push(() => {
        gsap.ticker.remove(tick);
        window.removeEventListener("wheel", handleWheel);
      });
  
      return true;
    };
  
    const waitForImages = async () => {
      const imgs = Array.from(phraseEl.querySelectorAll("img"));
      const missing = imgs.filter(img => !img.complete);
      if (missing.length === 0) return;
      await Promise.all(
        missing.map(
          img =>
            new Promise(resolve => {
              const done = () => resolve();
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
            })
        )
      );
    };
  
    let initialized = false;
    const init = async () => {
      await waitForImages();
      // if previously initialized, run cleanups before re-setting
      if (initialized) {
        cleanupFns.forEach(fn => fn());
        cleanupFns = [];
      }
      initialized = !!setup();
    };
  
    // Initial run
    init();
  
    // Re-init on resize (e.g., different image sizes or viewport changes)
    const ro = new ResizeObserver(() => init());
    ro.observe(phraseEl);
    cleanupFns.push(() => ro.disconnect());
  
    return () => {
      cleanupFns.forEach(fn => fn());
      cleanupFns = [];
    };
  }, []);

  return (
    <section className="mwg_effect013 h-screen flex items-center justify-center">
      <div className="inner">
        <div className="banner-container" ref={containerRef}>
          <p className="phrase flex" ref={phraseRef} style={{ height: "500px" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={index} src={BF} className="h-100" alt="Banner frame" loading="lazy" width="200" height="200" />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
