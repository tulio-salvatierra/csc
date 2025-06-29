import { TELEPHONE } from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

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
            <h2 className="fs-1 mb-6 leading-relaxed text-center px-xl-12 font-heading">
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
                  What skincare treatments are best for anti-aging?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  We offer specialized anti-aging facials, such as Hydrafacial,
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
                  For optimal results, we recommend a facial every 4-6 weeks.
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
                  Are the waxing services suitable for sensitive skin?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  Yes, our face and body waxing services are gentle and suitable
                  for sensitive skin. We use high-quality, hypoallergenic waxes
                  to minimize irritation and ensure a comfortable experience.
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
                  How long do eyelash extensions last, and how do I maintain
                  them?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-0">
                  Eyelash extensions typically last 4-6 weeks, depending on your
                  natural lash cycle and care routine. To maintain them, avoid
                  oil-based products near your lashes and schedule regular
                  touch-ups every 2-3 weeks.
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
            <h2 className="mb-4 text-4xl font-heading text-center">
              Have more questions?
            </h2>
            <p className="mb-8 leading-relaxed text-gray-500 text-center">
              Can’t find the answer you’re looking for? Please send us a
              message.
            </p>
            <a
              className="bg-black text-white text-sm py-2 px-4 rounded block md:inline-block"
              href={`${TELEPHONE}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
