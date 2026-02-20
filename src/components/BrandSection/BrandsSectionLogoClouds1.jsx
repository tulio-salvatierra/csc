import React from "react";
import HYDRA from "../../assets/images/hydar.svg";
import GLO from "../../assets/images/glo_logo.svg";
import HYDRAPRODUCT from "./../../assets/images/hf.webp";
import GLOPRODUCT from "./../../assets/images/glo.webp";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef } from "react";

export default function BrandsSectionLogoClouds1() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  const brands = [
    {
      name: "HydraFacial",
      productSrc: HYDRAPRODUCT,
      logoSrc: HYDRA,
      altProduct: "HydraFacial product",
      altLogo: "HydraFacial logo",
    },
    {
      name: "GLO",
      productSrc: GLOPRODUCT,
      logoSrc: GLO,
      altProduct: "GLO product",
      altLogo: "GLO logo",
    },
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-white mx-auto mb-12">
        <div className="">
          <p ref={addToRefs} className="brands-trust-heading text-black mb-12 leading-relaxed text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3" style={{ fontFamily: "Grapevine", color: "#000", textTransform: "uppercase" }}>
            Trusted by brands all over the world
            <svg
              className="globe-spin inline-block flex-shrink-0"
              style={{ height: "1em", width: "auto" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </p>
          <div className="p-1 mt-10 w-screen grid grid-cols-1 md:grid-cols-2 gap-1 mx-auto w-full">
            {brands.map(({ name, productSrc, logoSrc, altProduct, altLogo }, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="group relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-sm"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  src={productSrc}
                  alt={altProduct}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 group-hover:bg-gray-100/40 transition-colors duration-300">
                  <img
                    className="w-40 h-12 sm:w-48 sm:h-16 object-contain drop-shadow-sm"
                    src={logoSrc}
                    alt={altLogo}
                  />
                  <span className="sr-only">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
