import { TELEPHONE } from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

import BookingButton from "../BookingButton/BookingButton";

export default function FaqSectionFaq1() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    start: "top 90%"
  });
  return (
    <>
      <section className="py-24 bg-gray-100 grid place-items-center" ref={addToRefs}>
        <div className="container">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 style={{ fontFamily: "Grapevine", textTransform: "uppercase" }} className="fs-1 mb-6 leading-relaxed text-center px-xl-12 font-heading">
              FAQ
            </h2>
          </div>
          <div className="row mb-20 mb-xl-24 flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 md:px-16">
                <img
                  className="mx-auto"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h3 className="mt-6 leading-relaxed mb-5 font-heading">
                  What skincare treatments are best for anti aging?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  I offer specialized anti aging facials, such as HydraFacial,
                  Nano Needling, and chemical peels, designed to target fine
                  lines, wrinkles, and loss of elasticity. These treatments
                  promote collagen production and leave your skin rejuvenated
                  and glowing.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 md:px-16">
                <img
                  className="mx-auto"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h3 className="mt-6 leading-relaxed mb-5 font-heading">
                  How often should I get a deep cleansing facial?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  For optimal results, I recommend a facial every 4 to 6 weeks.
                  This helps maintain clear and healthy skin by removing
                  impurities and preventing clogged pores.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 md:px-16">
                <img
                  className="mx-auto"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h3 className="mt-6 leading-relaxed mb-5 font-heading">
                  Is there any downtime after a HydraFacial?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  No. HydraFacial is designed for immediate results with no
                  downtime. You can return to normal activities and wear makeup
                  right after.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 md:px-16 text-center">
                <img
                  className="mx-auto"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h3 className="mt-6 leading-relaxed mb-5 font-heading">
                  Does Nano Needle hurt?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  Most clients feel only a light prickling or pressure. It is
                  significantly gentler than traditional microneedling and
                  requires no numbing for most clients.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col items-center justify-center" ref={addToRefs}>
            <img
              className="mx-auto"
              src="pstls-assets/icons/faq-info.svg"
              alt=""
            />
            <h2 style={{ fontFamily: "Grapevine", textTransform: "uppercase" }} className="mb-4 text-4xl font-heading text-center">
              Have more questions?
            </h2>
            <p className="mb-8 leading-relaxed text-gray-500 text-center">
              Can’t find the answer you’re looking for? Please send me a
              message.
            </p>
            <BookingButton href={`${TELEPHONE}`} label="Get in Touch" />  
          </div>
        </div>
      </section>
    </>
  );
}
