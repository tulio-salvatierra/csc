import React from "react";
import HYDRA from "../../assets/images/hydar.svg";
import GLO from "../../assets/images/glo_logo.svg";

export default function BrandsSectionLogoClouds1() {
  return (
    <>
      <>
        <section className="py-24 bg-white">
          <div className="container">
            <p className="text-muted mb-6 lh-lg text-center">
              Trusted by brands all over the world
            </p>
            <div className="row mx-sm-n4">
              <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 px-sm-6">
                <div
                  className="bg-primary-light d-flex align-items-center justify-content-center px-4"
                  style={{ height: 180 }}
                >
                  <img
                    className="img-fluid d-block mx-auto"
                    src={HYDRA}
                    alt="hydrafacial-logo"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 mb-6 mb-md-0 px-sm-6">
                <div
                  className="bg-secondary-light d-flex align-items-center justify-content-center px-4"
                  style={{ height: 180 }}
                >
                  <img
                    className="img-fluid d-block mx-auto"
                    src={GLO}
                    alt="GLO-LOGO"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
