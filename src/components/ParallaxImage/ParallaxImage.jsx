import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxImage - A component that applies parallax effect to images
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Additional classes for the image
 * @param {string} props.containerClassName - Additional classes for the container
 * @param {Object} props.style - Additional styles for the image
 * @param {Object} props.containerStyle - Additional styles for the container
 * @param {number} props.speed - Parallax speed (0.1 to 1, default 0.3)
 * @param {number} props.scale - Initial scale for zoom effect (default 1.2)
 * @param {React.Ref} props.imageRef - Optional ref to pass to the image element
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  style = {},
  containerStyle = {},
  speed = 0.3,
  scale = 1.2,
  imageRef: externalRef,
}) {
  const containerRef = useRef(null);
  const internalImageRef = useRef(null);
  const imageRef = externalRef || internalImageRef;

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const movement = 50 * speed;

    const ctx = gsap.context(() => {
      // Set initial scale for overflow effect
      gsap.set(image, { scale });

      // Parallax movement on scroll
      gsap.fromTo(
        image,
        { yPercent: -movement },
        {
          yPercent: movement,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed, scale, imageRef]);

  return (
    <div
      ref={containerRef}
      className={`parallax-container ${containerClassName}`}
      style={{
        overflow: "hidden",
        position: "relative",
        ...containerStyle,
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          willChange: "transform",
          ...style,
        }}
      />
    </div>
  );
}
