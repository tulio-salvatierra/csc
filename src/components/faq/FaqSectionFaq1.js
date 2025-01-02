import { TELEPHONE } from "../../constants";

export default function FaqSectionFaq1() {
  return (
    <>
      <>
        <section className="py-24 bg-light">
          <div className="container">
            <div className="mw-xl mx-auto text-center mb-20 mb-xl-16">
              <h1 className="mb-6 lh-sm px-xl-12 font-heading">
                Frequently asked questions
              </h1>
            </div>
            <div className="row mb-20 mb-xl-24">
              <div className="col-12 col-md-6 px-xl-4 mb-8">
                <div className="bg-white py-12 px-6 px-md-16">
                  <img
                    className="img-fluid"
                    src="pstls-assets/icons/faq-info.svg"
                    alt=""
                  />
                  <h5 className="mt-6 lh-lg mb-5 font-heading">
                    What skincare treatments are best for anti-aging?
                  </h5>
                  <p className="text-muted lh-lg mb-0">
                    We offer specialized anti-aging facials, such as
                    Hydrafacial, Nano Needling, and chemical peels, designed to
                    target fine lines, wrinkles, and loss of elasticity. These
                    treatments promote collagen production and leave your skin
                    rejuvenated and glowing.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 px-xl-4 mb-8">
                <div className="bg-white py-12 px-6 px-md-16">
                  <img
                    className="img-fluid"
                    src="pstls-assets/icons/faq-info.svg"
                    alt=""
                  />
                  <h5 className="mt-6 lh-lg mb-5 font-heading">
                    How often should I get a deep cleansing facial?
                  </h5>
                  <p className="text-muted lh-lg mb-0">
                    For optimal results, we recommend a deep cleansing facial
                    every 4-6 weeks. This helps maintain clear and healthy skin
                    by removing impurities and preventing clogged pores.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 px-xl-4 mb-8">
                <div className="bg-white py-12 px-6 px-md-16">
                  <img
                    className="img-fluid"
                    src="pstls-assets/icons/faq-info.svg"
                    alt=""
                  />
                  <h5 className="mt-6 lh-lg mb-5 font-heading">
                    Are the waxing services suitable for sensitive skin?
                  </h5>
                  <p className="text-muted lh-lg mb-0">
                    Yes, our face and body waxing services are gentle and
                    suitable for sensitive skin. We use high-quality,
                    hypoallergenic waxes to minimize irritation and ensure a
                    comfortable experience.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 px-xl-4 mb-8">
                <div className="bg-white py-12 px-6 px-md-16">
                  <img
                    className="img-fluid"
                    src="pstls-assets/icons/faq-info.svg"
                    alt=""
                  />
                  <h5 className="mt-6 lh-lg mb-5 font-heading">
                    How long do eyelash extensions last, and how do I maintain
                    them?
                  </h5>
                  <p className="text-muted lh-lg mb-0">
                    Eyelash extensions typically last 4-6 weeks, depending on
                    your natural lash cycle and care routine. To maintain them,
                    avoid oil-based products near your lashes and schedule
                    regular touch-ups every 2-3 weeks.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid"
                src="pstls-assets/icons/faq-info.svg"
                alt=""
              />
              <h1 className="mb-4 lh-sm font-heading">Have more questions?</h1>
              <p className="mb-8 lh-lg">
                Can’t find the answer you’re looking for? Please send us a
                message.
              </p>
              <a
                className="btn btn-primary d-block d-md-inline-block"
                href={`tel:${TELEPHONE}`}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
