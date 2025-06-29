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
      productSrc: HYDRAPRODUCT,
      logoSrc: HYDRA,
      altProduct: "HydraFacial product",
      altLogo: "HydraFacial logo",
    },
    {
      productSrc: GLOPRODUCT,
      logoSrc: GLO,
      altProduct: "GLO product",
      altLogo: "GLO logo",
    },
  ];
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-white mx-6">
        <div className="container">
          <p ref={addToRefs} className="text-gray-500 mb-6 leading-relaxed text-center">
            Trusted by brands all over the world
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brands.map(({ productSrc, logoSrc, altProduct, altLogo }, i) => (
              <div
                key={i}
                className="bg-red-100 flex flex-col items-center justify-center p-6"
                ref={addToRefs}
              >
                <img
                  className="max-w-full h-auto mb-4"
                  src={productSrc}
                  alt={altProduct}
                  ref={addToRefs}
                  loading="lazy"
                />
                <img
                  className="max-w-xs h-auto"
                  src={logoSrc}
                  alt={altLogo}
                  ref={addToRefs}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
