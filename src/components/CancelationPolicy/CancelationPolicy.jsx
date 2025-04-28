import "./../../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CancellationPolicy() {
  const animated = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 1200px)", () => {
      // Desktop animation (movement + fade)
      gsap.from(animated.current, {
        y: 25,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  
    mm.add("(max-width: 1199px)", () => {
      // Mobile and Tablet animation (fade only, very smooth)
      gsap.from(animated.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 90%", // trigger a bit later for mobile
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  
    return () => mm.revert();
  }, []);

  return (
    <section ref={(el) => (animated.current[0] = el)} className="py-48 bg-white text-dark">
      <div className="container py-48 shadow-sm bg-primary-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 ref={(el) => (animated.current[1] = el)} className="text-center mb-4 fs-1 ">New Cancellation Policy </h2>
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <p ref={(el) => (animated.current[2] = el)} className="mb-4 text-muted">
                  To ensure customer satisfaction, we kindly ask as a courtesy for other customers, please provide a minimum of{" "}
                  <strong>48 hours notice</strong> for any cancellations or
                  rescheduling.
                </p>
                <ul className="mb-4 text-left ">
                  <li className="mb-2 text-muted">
                    <strong>Within 48 Hours:</strong> 50% of the service cost
                    will be charged.
                  </li>
                  <li className="mb-2 text-muted">
                    <strong>
                      Same-Day Cancellations / Rescheduling / No-Shows:
                    </strong>{" "}
                    Full service cost will be charged.
                  </li>
                </ul>
                <p className="text-muted mb-0">
                  Thank you for your understanding and cooperation!
                </p>
              </div>
              <a href="/policies" className="btn btn-dark p-4 mt-4 w-100 w-md-auto text-white fs-4 fs-sm-6">
                Read our policies
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
