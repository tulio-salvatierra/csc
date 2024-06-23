import "../../App.css";

function Hero() {
  return (
    <>
      <div className="bg-hero d-sm-flex">
        <div className="container-xl align-content-lg-start">
          <div className="col w-sm-100 w-50 p-2 ">
            <h1 className="display-1 fw-bolder bg-danger-light align-content-sm-start w-75">
              Premier Skin Care Clinic
            </h1>
            <p className="fs-3 --bs-danger-bg-subtle w-100">
              We are a team of professionals dedicated to providing the best
              possible care for your skin. We offer a wide range of services to
              help you look and feel your best.
            </p>
            <a
              className="btn btn-dark d-block d-md-inline-block p-4 mt-4 m-5 w-sm-100 text-white fs-4"
              href="#"
            >
              Book Now
            </a>
          </div>
          <div className="col w-sm-100 w-50"></div>
        </div>
        <div className="hero-bottom">
          <p className="mb-2 m-5 lh-lg text-black display-5">
            Your Skin in the most expensive item you own
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
