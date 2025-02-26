import "../../App.css";
import { BOOKING_URL } from "../../constants";

function Hero() {
  return (
    <>
      <section className="bg-hero d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className=" hero-content">
            <h1 className="display-4 heading text-white text-center">
              Hydrate, renew and balance your skin
            </h1>
            <p className="w-100 bg-danger-light m-1 p-4 welcome-text fs-6">
              Improve the health and appearance of their skin through
              personalized facial treatments that will balance your skin &
              delivering visible and long-lasting results, located in the heart
              of Midland, TX.
            </p>
            <a
              className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6"
              href={BOOKING_URL}
            >
              Book my appointment now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
