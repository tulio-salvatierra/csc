import React from "react";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function CalltoactionSectionCallToAction1() {
  // collect refs of elements to animate
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  // apply fade-in animation on scroll
  useFadeInAnimation(fadeRefs, {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    start: "top 90%"
  });
  return (
    <>
      <>
        <section className="py-24 bg-white" ref={addToRefs}>
          <div className="container">
            <div
              className="py-10 px-12 bg-warning-light"
              style={{
                backgroundImage:
                  'url("pstls-assets/images/call-to-action/banner-color.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-xl-auto mb-6 mb-xl-0">
                  <h2 className="mw-sm lh-sm font-heading" ref={addToRefs}>
                    Enroll in our mailing list for exclusive offers and updates
                    on our latest products and services.
                  </h2>
                </div>
                <div className="col-12 col-md-6 col-xl-auto mb-6 mb-xl-0">
                  <p className="mw-sm lh-lg" ref={addToRefs}>
                    Sign in to our newsletter to receive the latest news and
                    revice exclusive offers.
                  </p>
                </div>
                <div className="col-12 col-md-auto mx-auto me-xl-0 ms-xl-auto">
                  <a className="btn btn-primary" href="#" ref={addToRefs}>
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
