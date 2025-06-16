import React from "react";
import HYDRA from "../../assets/images/hydar.svg";
import GLO from "../../assets/images/glo_logo.svg";
import HYDRAPRODUCT from "./../../assets/images/hf.webp";
import GLOPRODUCT from "./../../assets/images/glo.webp";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import {  useRef } from "react";


export default function BrandsSectionLogoClouds1() {

  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);
  return (
    <>
      <section className="py-48 bg-white">
        <div className="container">
          <p  ref={addToRefs} className="text-muted mb-6 lh-lg text-center">
            Trusted by brands all over the world
          </p>
          <div className="row mx-sm-n4">
            <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 px-sm-6">
              {" "}
         
              <div
                className="bg-red-100 d-flex align-items-center justify-content-center p-6"
                
                ref={addToRefs}
              >
                     <img
                className="img-fluid mx-auto"
                src={HYDRAPRODUCT}
                alt="hydrafacial-product-logo"
                
                ref={addToRefs}
              />
                <img
                  className="img-fluid my-6"
                  src={HYDRA}
                  alt="hydrafacial-logo"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 p-6">
        
              <div
                className="bg-red-100 d-flex align-items-center justify-content-center p-4"
              >
                    <img
                className="img-fluid mx-auto"
                src={GLOPRODUCT}
                alt="hydrafacial-product-logo"
                
                ref={addToRefs}
              />
                <img
                  className="img-fluid d-block my-auto"
                  src={GLO}
                  alt="GLO-LOGO"
                  ref={addToRefs}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
