import "../../App.css";

function Hero() {
  return (
    <>
      <div className="bg-hero d-flex flex-column flex-lg-row mt-20">
        <div className="  container d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6 p-2">
            <h1 className="display-1 fw-bolder w-100">
              Premier Skin Care Center
            </h1>
            <p className="fs-5  w-100 bg-danger-light m-1 p-4">
              We are a team of professionals dedicated to providing the best
              possible care for your skin. We offer a wide range of services to
              help you look and feel your best.
            </p>
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
        <p className="mb-2 m-5 lh-lg text-black display-5">
          Your Skin is the most expensive item you own
        </p>
      </div>
    </>
  );
}

export default Hero;
