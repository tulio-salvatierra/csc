import services from "./services";
import { BOOKING_URL } from "../../constants";

export default function Services() {
  return (
    <>
      <section className="py-28 bg-white">
        <div className="header-bg h-96 bg-hero bg-cover bg-center">
          <div className="row align-items-center justify-content-center mb-16 mb-md-20">
            
              <h1 className="display-1 text-center text-white">Services</h1>
            
            
              <p className="w-50 justify-content-center fw-lighter bg-danger-light p-4">
                At our skin care clinic, we offer a range of expert facial
                treatments designed to rejuvenate and enhance your natural
                beauty. Our services include luxurious facials, advanced
                HydraFacials, and professional eyebrow shaping and tinting.
              </p>
            
          </div>
        </div>
        <div className="row mb-20">
          {services.map((service, index) => (
            <div
              key={`service ${index}`}
              className="col-12 col-md-4 mb-12 mb-md-0 p-5 justify-content-evenly h-100"
            >
              <a className="text-decoration-none" href="#">
                <span className="badge bg-primary text-uppercase fw-lighter">
                  {service.category}
                </span>
              </a>
              <div className="mb-8">
                <img
                  style={{
                    objectFit: "cover",
                    width: "420px",
                    height: "280px",
                  }}
                  src={service.icon}
                  alt={service.name}
                />
              </div>
              <a className="d-inline-block text-decoration-none mb-6" href="#">
                <h2 className="text-start p-0 fs-2">
                  {service.name}
                </h2>

                <p className="text-muted fs-5">{service.description}</p>
              </a>
              <div className="text-left">
                <a className="btn btn-dark w-auto" href={BOOKING_URL}>
                  Book my appointment now!
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
