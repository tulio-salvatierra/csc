import React from "react";
import "../../App.css";

function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center mb-20 mb-xl-24">
        <div className="col-12 col-md-6 col-xl-7 mb-6 mb-lg-0">
          <h1 className="mb-6 lh-sm">Carolina Skin Centre, Midland, TX.</h1>
          <a className="btn btn-dark d-block d-md-inline-block" href="#">
            Book an appointment
          </a>
        </div>
        <div className="col-12 col-md-6 col-xl-5">
          <p className="mb-0 lh-lg mw-md-sm">
            Welcome to our official website. We are a team of professionals
            dedicated to providing the best possible care for your skin. We
            offer a wide range of services to help you look and feel your best.
          </p>
        </div>
      </div>
      <div>
        <img
          className="w-100 mb-10"
          src="https://static.shuffle.dev/uploads/files/b7/b7a8ab519a99105f05c0ca69d36e7959d1e51d4c/Screenshot-2024-03-11-at-11-40-08-AM.png"
          alt=""
        />
        <div className="d-flex justify-content-center">
          <h5 className="mb-0">01</h5>
          <img
            className="img-fluid mx-4"
            src="pstls-assets/images/headers/header-2-line.svg"
            alt=""
          />
          <h5 className="mb-0">06</h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
