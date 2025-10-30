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
      className="min-h-100 sm:min-h-screen flex items-center justify-center text-dark bg-[url('src/assets/images/policies/policy_bg.jpg')] bg-cover bg-center bg-no-repeat py-10"
    >
      <a
        ref={addToRefs}
        href="#"
        class="flex flex-col mx-auto w-full h-1/2 items-center  rounded-md "
      >
        <div class="flex flex-col justify-between p-4 leading-normal w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 my-8 bg-white/70 rounded-md shadow-lg">
          <h2 ref={addToRefs} className="text-center text-dark fw-black">
            New Cancellation Policy
          </h2>
          <div className="p-8 sm:mx-16">
            <p ref={addToRefs} className="mb-4">
              To ensure customer satisfaction, we kindly ask as a courtesy for
              other customers, please provide a minimum of{" "}
              <strong className="font-black">48 hours notice</strong> for any
              cancellations or rescheduling.
            </p>
            <ul className="mb-4">
              <li ref={addToRefs} className="mb-2">
                <strong className="font-black">Within 48 Hours:</strong> 50% of
                the service cost will be charged.
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
           <BookingButton href={"/policies"} label={"Read Our Policies"} />
        </div>
       
      </a>
    </section>
  );
}
