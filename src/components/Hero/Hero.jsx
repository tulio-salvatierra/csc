import React from "react";
import "../../App.css";
import Landing from "../../assets/images/CSC.svg";

function Hero() {
  return (
    <div className="container">
      <div className="background-hero">
        <div className="row align-items-center mb-20 mb-xl-24">
          <div className="col-12 col-md-6 col-xl-7 mb-6 mb-lg-0">
            {/* <h1 className="mb-6 lh-sm">Carolina Skin Centre, Midland, TX.</h1> */}
            <a className="btn btn-dark d-block d-md-inline-block" href="#">
              Book an appointment
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-5">
          <p className="mb-0 lh-lg mw-md-sm text-white">
            We are a team of professionals dedicated to providing the best
            possible care for your skin. We offer a wide range of services to
            help you look and feel your best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
