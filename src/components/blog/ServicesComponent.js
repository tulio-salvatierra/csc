import services from "./services";
import { BOOKING_URL_2 } from "../../constants";
import "./../../../src/App.css";

export default function Services() {
  return (
    <>
      <section className="py-28 bg-white">
        <div className="  h-96 bg-services bg-cover bg-center">
          <div className="row align-items-center justify-content-center mb-16 mb-md-20">
            <h1 className="m-3 text-center text-white display-1">Services</h1>

            <p className="w-50 justify-content-center fw-lighter bg-danger-light p-4">
              At our skin care studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include luxurious facials, HydraFacials,
              microdermabrasion, nano needle, acne facials and professional
              eyebrow shaping and tinting.
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
                <h2 className="text-start p-0 fs-2">{service.name}</h2>

                <p className="text-muted fs-5">{service.description}</p>
              </a>
              <div className="text-left">
                <a className="btn btn-dark w-auto" href={BOOKING_URL_2}>
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
