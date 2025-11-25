import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import BookingButton from "../BookingButton";
import "./../../App.css";
import policyBg from "../../assets/images/policies/policy_bg.jpg";

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
      style={{ backgroundImage: `url(${policyBg})` }}
      className="min-h-screen sm:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat my-10"
    >
      <div
        ref={addToRefs}
        className="flex flex-col mx-auto p-2 w-full h-1/2 items-center rounded-md"
      >
        <div className="card p-10 justify-between leading-normal w-5/6 sm:w-3/4  bg-white/60 rounded-md shadow-lg">
          <h2 ref={addToRefs} className="text-center mt-2 mb-8 text-3xl font-bold">
            New Cancellation Policy
          </h2>
          <div className="sm:mx-16">
            <p ref={addToRefs} className="mb-4 text-lg" style={{ color: "black"}}>
              To ensure customer satisfaction, we kindly ask as a courtesy for
              other customers, please provide a minimum of{" "}
              <strong className="font-black italic">48 hours notice</strong> for any
              cancellations or rescheduling.
            </p>
            <ul className="mb-8 mt-8 font-black list-disc list-inside text-black">
              <li ref={addToRefs} className="mb-2">
                <strong style={{ color: "black"}}>Within 48 Hours:</strong> 50% of
                the service cost will be charged.
              </li>
              <li ref={addToRefs} className="m-2 ">
                <strong style={{ color: "black"}}>
                  Same-Day Cancellations / Rescheduling / No-Shows:
                </strong>{" "} <br />
                <strong className="italic" style={{ color: "black", marginTop: "0.5rem" }}>
                Full service cost will be charged.
                </strong>
              </li>
            </ul>
            <p ref={addToRefs} className="my-8" style={{ color: "black" }}>
              Thank you for your understanding and cooperation!
            </p>
          </div>
          <BookingButton href={"/policies"} label={"Read Our Policies"} />
        </div>
      </div>
    </section>
  );
}
