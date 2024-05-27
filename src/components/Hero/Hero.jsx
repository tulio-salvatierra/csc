import "../../App.css";
import Landing from "../../assets/images/herobg.png";

function Hero() {
  return (
    <>
      <div className="bg-hero">
        <p className="mb-2 m-5 lh-lg text-white fs-1.5 w-50 sm-w-75">
          We are a team of professionals dedicated to providing the best
          possible care for your skin. We offer a wide range of services to help
          you look and feel your best.
        </p>
        <a
          className="btn btn-dark d-block d-md-inline-block p-4 mt-4 m-5 w-25 text-white fs-4"
          href="#"
        >
          Book Now
        </a>
      </div>
      <div className="hero-bottom">
        <p className="bottom-banner-text">Midland's Premier Skin Care Clinic</p>
        <p className="fs-4">Your skin is the most expensive item you own</p>
      </div>
    </>
  );
}

export default Hero;
