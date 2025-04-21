import { policies } from "./policies";
import { BOOKING_URL_2 } from "../../constants";

export default function PolicyComponent() {
  return (
    <>
      <section className="py-28 bg-white">
        <div className="  h-96 bg-policies bg-cover bg-center">
          <div className="row align-items-center justify-content-center mb-16 mb-md-20">
            <h1 className="m-3 text-center text-white display-1">Our Policies</h1>

            <p className="w-50 justify-content-center fw-lighter bg-danger-light p-4">
              At our skin care studio, we offer a range of expert facial
              treatments designed to rejuvenate and enhance your natural beauty.
              Our services include luxurious facials, HydraFacials,
              microdermabrasion, nano needle, acne facials and professional
              eyebrow shaping and tinting.
            </p>
          </div>
        </div>
        <div className="row mb-20 container mx-auto flex-column justify-content-evenly">
          {policies.map((policy, index) => (
            <div
              key={`service ${index}`}
              className="col-12 mb-12 mb-md-0 p-10"
            >
                <div className="justify-content-center">
              
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  src={policy.image}
                  alt={policy.name}
                />
              </div>
              <a className="d-inline-block text-decoration-none mb-6" href="#">
                
                <p className="text-muted fs-5 m-10">{policy.description}</p>
              </a>
              <div className="text-center">
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
