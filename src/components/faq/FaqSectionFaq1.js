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
      <section className="py-24 bg-light" ref={addToRefs}>
        <div className="container">
          <div className="mw-xl mx-auto text-center mb-20 mb-xl-16">
            <h1 className="fs-1 mb-6 lh-sm text-center px-xl-12 font-heading">
              FAQ
            </h1>
          </div>
          <div className="row mb-20 mb-xl-24">
            <div className="col-12 col-md-6 px-xl-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 px-md-16">
                <img
                  className="img-fluid mx-auto d-block"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h2 className="mt-6 lh-lg mb-5 font-heading">
                  What skincare treatments are best for anti-aging?
                </h2>
                <p className="text-muted lh-lg mb-0">
                  We offer specialized anti-aging facials, such as Hydrafacial,
                  Nano Needling, and chemical peels, designed to target fine
                  lines, wrinkles, and loss of elasticity. These treatments
                  promote collagen production and leave your skin rejuvenated
                  and glowing.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 px-xl-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 px-md-16">
                <img
                  className="img-fluid mx-auto d-block"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h2 className="mt-6 lh-lg mb-5 font-heading">
                  How often should I get a deep cleansing facial?
                </h2>
                <p className="text-muted lh-lg mb-0">
                  For optimal results, we recommend a facial every 4-6 weeks.
                  This helps maintain clear and healthy skin by removing
                  impurities and preventing clogged pores.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 px-xl-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 px-md-16">
                <img
                  className="img-fluid mx-auto d-block"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h2 className="mt-6 lh-lg mb-5 font-heading">
                  Are the waxing services suitable for sensitive skin?
                </h2>
                <p className="text-muted lh-lg mb-0">
                  Yes, our face and body waxing services are gentle and suitable
                  for sensitive skin. We use high-quality, hypoallergenic waxes
                  to minimize irritation and ensure a comfortable experience.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 px-xl-4 mb-8" ref={addToRefs}>
              <div className="bg-white py-12 px-6 px-md-16 text-center">
                <img
                  className="img-fluid mx-auto d-block"
                  src="pstls-assets/icons/faq-info.svg"
                  alt=""
                />
                <h2 className="mt-6 lh-lg mb-5 font-heading">
                  How long do eyelash extensions last, and how do I maintain
                  them?
                </h2>
                <p className="text-muted lh-lg mb-0">
                  Eyelash extensions typically last 4-6 weeks, depending on your
                  natural lash cycle and care routine. To maintain them, avoid
                  oil-based products near your lashes and schedule regular
                  touch-ups every 2-3 weeks.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center align-items-center justify-content-center" ref={addToRefs}>
            <img
              className="img-fluid"
              src="pstls-assets/icons/faq-info.svg"
              alt=""
            />
            <h1 className="mb-4 fs-1 font-heading text-center">
              Have more questions?
            </h1>
            <p className="mb-8 lh-lg text-muted text-center">
              Can’t find the answer you’re looking for? Please send us a
              message.
            </p>
            <a
              className="btn btn-dark fs-6 d-block d-md-inline-block"
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
