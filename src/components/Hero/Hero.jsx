import "../../App.css";
import HeroReviewCarousel from "../transparentReview";

function Hero() {
  return (
    <>
      <div className="bg-hero d-flex flex-column flex-lg-row mt-20">
        <div className="  container d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6 p-2">
            <h1 className="display-1 w-100 heading">
              Glow in Midland: Where Radiant Skin Begins
            </h1>
            <p className="w-100 bg-danger-light m-1 p-4 welcome-text">
              Don't just take our word for it, see what our clients have to say
            </p>
            <HeroReviewCarousel />
            <a
              className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4"
              href="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c1185t201404101626pu568R8C68u8RJ4Pz98Mr&theme=651&p_mobile=y&p_start=1"
            >
              Book Now
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="mb-2 m-5 text-black">
          We are a team of professionals dedicated to providing the best
          possible care for your skin. We offer a wide range of services to help
          you look and feel your best.
        </p>
      </div>
    </>
  );
}

export default Hero;
