import services from "./services";
import { BOOKING_URL } from "../../constants";

export default function Services() {
  return (
    <>
      <section className="py-28 bg-white">
        <div className="container">
          <div className="header-bg">
            <div className="row align-items-center mb-16 mb-md-20">
              <div className="col-12 col-md-6">
                <h2 className="display-4 font-heading">Services</h2>
              </div>
              <div className="col-12 col-md-6">
                <p className="lh-lg fw-lighter p-4">
                  At our skin care clinic, we offer a range of expert facial
                  treatments designed to rejuvenate and enhance your natural
                  beauty. Our services include luxurious facials, advanced
                  HydraFacials, and professional eyebrow shaping and tinting.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {services.map((service, index) => (
              <div
                key={`service ${index}`}
                className="col-12 col-md-4 mb-12 mb-md-0 p-5 h-auto"
              >
                <a className="text-decoration-none" href="#">
                  <span className="badge bg-primary text-uppercase fw-lighter">
                    {service.category}
                  </span>
                </a>
                <div className="mb-8">
                  <img
                    style={{
                      objectFit: "fit",
                      width: "100%",
                    }}
                    src={service.icon}
                    alt={service.name}
                  />
                </div>
                <a
                  className="d-inline-block text-decoration-none mb-6"
                  href="#"
                >
                  <h2 className="text-start font-heading fw-bolder">
                    {service.name}
                  </h2>

                  <p className="mb-0 lh-lg text-dark">{service.description}</p>
                </a>
                <div className="text-left">
                  <a className="btn btn-dark" href={BOOKING_URL}>
                    Book now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
