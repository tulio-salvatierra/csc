import "./../../App.css";
import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";

export default function CancellationPolicy() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  useFadeInAnimation(fadeRefs);

  return (
    <section
      ref={addToRefs}
      className="py-48 bg-white text-dark"
    >
      <div  ref={addToRefs} className="container py-48 shadow-sm bg-primary-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2
              ref={addToRefs}
              className="text-center mb-4 fs-1 "
            >
              New Cancellation Policy{" "}
            </h2>
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <p
                  ref={addToRefs}
                  
                  className="mb-4 text-muted"
                >
                  To ensure customer satisfaction, we kindly ask as a courtesy
                  for other customers, please provide a minimum of{" "}
                  <strong>48 hours notice</strong> for any cancellations or
                  rescheduling.
                </p>
                <ul className="mb-4 text-left ">
                  <li
                  ref={addToRefs}
                  className="mb-2 text-muted">
                    <strong>Within 48 Hours:</strong> 50% of the service cost
                    will be charged.
                  </li>
                  <li 
                  ref={addToRefs}
                  className="mb-2 text-muted">
                    <strong>
                      Same-Day Cancellations / Rescheduling / No-Shows:
                    </strong>{" "}
                    Full service cost will be charged.
                  </li>
                </ul>
                <p ref={addToRefs} className="text-muted mb-0">
                  Thank you for your understanding and cooperation!
                </p>
              </div>
              <a
                href="/policies"
                className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6"
                ref={addToRefs}
              >
                Read our policies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
