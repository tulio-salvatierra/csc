import React from "react";
import HYDRA from "../../assets/images/hydar.svg";
import GLO from "../../assets/images/glo_logo.svg";
import HYDRAPRODUCT from "./../../assets/images/hf.webp";
import GLOPRODUCT from "./../../assets/images/glo.webp";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import {  useRef } from "react";


export default function BrandsSectionLogoClouds1() {

  const animated = useRef([]);
  useFadeInAnimation(animated);
  return (
    <>
      <section className="py-48 bg-white">
        <div className="container">
          <p  ref={(el) => (animated.current[0] = el)} className="text-muted mb-6 lh-lg text-center">
            Trusted by brands all over the world
          </p>
          <div className="row mx-sm-n4">
            <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 px-sm-6">
              {" "}
              <img
                className="img-fluid mx-auto"
                src={HYDRAPRODUCT}
                alt="hydrafacial-product-logo"
                style={{ height: 526, width: "auto" }}
                ref={(el) => (animated.current[1] = el)}
              />
              <div
                className="bg-primary-light d-flex align-items-center justify-content-center px-4"
                style={{ height: 380 }}
                ref={(el) => (animated.current[2] = el)}
              >
                <img
                  className="img-fluid mx-auto"
                  src={HYDRA}
                  alt="hydrafacial-logo"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 px-sm-6">
            <img
                className="img-fluid mx-auto"
                src={GLOPRODUCT}
                alt="hydrafacial-product-logo"
                style={{ height: 526, width: "auto" }}
                ref={(el) => (animated.current[3] = el)}
              />
              <div
                className="bg-secondary-light d-flex align-items-center justify-content-center px-4"
                style={{ height: 380 }}
              >
                <img
                  className="img-fluid d-block mx-auto"
                  src={GLO}
                  alt="GLO-LOGO"
                  ref={(el) => (animated.current[4] = el)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
