import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import BF from "./../../assets/images/banner/banner.svg";
import "./Banner.css";

export function Banner() {
  const containerRef = useRef(null);
  const phraseRef = useRef(null);
  const imageRefs = useRef([]);
  const [imagesReady, setImagesReady] = useState(false);

  // Track when all images are loaded
  useEffect(() => {
    let mounted = true;
    let timeoutId;
    let fallbackTimeout;
    
    const initImageLoading = () => {
      const validRefs = imageRefs.current.filter(Boolean);
      if (validRefs.length === 0) {
        timeoutId = setTimeout(initImageLoading, 50);
        return;
      }
      
      let loadedCount = 0;
      const totalImages = validRefs.length;
      
      const checkAllLoaded = () => {
        if (!mounted) return;
        loadedCount++;
        if (loadedCount === totalImages) {
          // Small delay to ensure layout is calculated
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (mounted) setImagesReady(true);
            });
          });
        }
      };

      // Fallback: initialize after 2 seconds even if images haven't loaded
      fallbackTimeout = setTimeout(() => {
        if (mounted) {
          setImagesReady(true);
        }
      }, 2000);

      validRefs.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded, { once: true });
          img.addEventListener('error', checkAllLoaded, { once: true });
        }
      });
    };

    timeoutId = setTimeout(initImageLoading, 0);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !phraseRef.current || !imagesReady) return;
    
    // Wait for images to render and get accurate dimensions
    const initAnimation = () => {
      const content = containerRef.current;
      const phraseWidth = phraseRef.current.clientWidth;
      
      if (!phraseWidth || phraseWidth === 0) {
        requestAnimationFrame(initAnimation);
        return;
      }
      
      let wheelDelta = 0;
      let total = 0;
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
    };

    const cleanup = initAnimation();
    return cleanup;
  }, [imagesReady]);

  return (
    <section className="mwg_effect013 min-h-[450px] flex items-center justify-center">
      <div className="inner">
        <div className="banner-container" ref={containerRef} style={{ willChange: 'transform' }}>
          <p className="phrase flex" ref={phraseRef} style={{ height: "500px" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img 
                key={index} 
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                src={BF} 
                className="h-100" 
                alt="Banner frame"
                loading="eager"
                style={{ display: 'block', willChange: 'transform' }}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
