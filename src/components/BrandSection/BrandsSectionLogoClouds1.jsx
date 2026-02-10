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
      <section className="min-h-auto flex flex-col items-center justify-center bg-white mx-auto mb-12">
        <div className="">
          <p ref={addToRefs} className="text-gray-500 mb-6 leading-relaxed text-center text-[4rem] sm:text-[6rem]">
            Trusted by brands all over the world
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {brands.map(({ productSrc, logoSrc, altProduct, altLogo }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-evenly p-1"
                ref={addToRefs}
              >
                <img
                  className="object-cover w-full min-h-full"
                  style={{ width: '100%', objectFit: 'cover' }}
                  src={productSrc}
                  alt={altProduct}
                  ref={addToRefs}
                  loading="lazy"
                />
                <img
                  className="w-48 h-16 m-2 object-contain"
                  src={logoSrc}
                  alt={altLogo}
                  ref={addToRefs}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
