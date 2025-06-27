import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import BookingButton from "../BookingButton";
import "./../../App.css";

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
      className="min-h-screen flex items-center justify-center bg-red-100 text-dark"
    >
      <div ref={addToRefs} className="container py-8 px-4 md:py-12 md:px-8 shadow-sm bg-white">
        <div className="row">
          <div className="place-justify-center mx-auto">
            <h2
              ref={addToRefs}
              className="text-center text-dark fw-black"
            >
              New Cancellation Policy
            </h2>
            <div className="card border-0 justify-content-center max-w-xl w-full mx-auto" ref={addToRefs}>
              <div className="card-body p-4">
                <p ref={addToRefs} className="mb-4">
                  To ensure customer satisfaction, we kindly ask as a courtesy
                  for other customers, please provide a minimum of{" "}
                  <strong className="font-black">48 hours notice</strong> for any cancellations or
                  rescheduling.
                </p>
                <ul className="mb-4">
                  <li ref={addToRefs} className="mb-2">
                  <strong className="font-black">Within 48 Hours:</strong> 50% of the service cost
                    will be charged.
                  </li>
                  <li ref={addToRefs} className="mb-2">
                  <strong className="font-black">
                      Same-Day Cancellations / Rescheduling / No-Shows:
                    </strong>{" "}
                    Full service cost will be charged.
                  </li>
                </ul>
                <p ref={addToRefs} className="mb-0">
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
