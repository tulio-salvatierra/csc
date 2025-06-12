import "./CancelationPolicy.css";
import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import BookingButton from "../BookingButton";

export default function CancellationPolicy() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  useFadeInAnimation(fadeRefs);

  return (
    <section
      ref={addToRefs}
      className="py-48 bg-red-100 text-dark grid place-items-center"
    >
      <div ref={addToRefs} className="container py-48 shadow-sm bg-white">
        <div className="row">
          <div className="col-lg-8 place-justify-center mx-auto">
            <h2
              ref={addToRefs}
              className="text-center text-dark fw-black mb-4 fs-2 fs-sm-3 fs-md-4 fs-lg-5"
            >
              New Cancellation Policy{" "}
            </h2>
            <div className="card border-0 rounded-4 justify-content-center">
              <div className="card-body p-4">
                <p ref={addToRefs} className="mb-4">
                  To ensure customer satisfaction, we kindly ask as a courtesy
                  for other customers, please provide a minimum of{" "}
                  <a className="font-black">48 hours notice</a> for any cancellations or
                  rescheduling.
                </p>
                <ul className="mb-4 text-left ">
                  <li ref={addToRefs} className="mb-2 text-muted">
                  <a className="font-black">Within 48 Hours:</a> 50% of the service cost
                    will be charged.
                  </li>
                  <li ref={addToRefs} className="mb-2 text-muted">
                  <a className="font-black">
                      Same-Day Cancellations / Rescheduling / No-Shows:
                    </a>{" "}
                    Full service cost will be charged.
                  </li>
                </ul>
                <p ref={addToRefs} className="text-muted mb-0">
                  Thank you for your understanding and cooperation!
                </p>
              </div>
              
            </div>
            <BookingButton href={"/policies"} label={"Read Our Policies"} />
          </div>
        </div>
      </div>
    </section>
  );
}
