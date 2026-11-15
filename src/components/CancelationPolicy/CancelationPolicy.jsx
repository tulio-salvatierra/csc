import { useRef } from "react";
import { Link } from "react-router-dom";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import { cancellationPolicy } from "../PolicyComponent/policies";
import "./../../App.css";
import "./CancelationPolicy.css";
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

  // Cursor-following tooltip (pointer devices only; hidden on touch via CSS).
  // Moved via the DOM directly so mouse movement never re-renders the section.
  const tooltipRef = useRef(null);
  const handleMove = (e) => {
    const tip = tooltipRef.current;
    if (!tip) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tip.style.opacity = "1";
    tip.style.transform = `translate(${e.clientX - rect.left + 16}px, ${e.clientY - rect.top + 16}px)`;
  };
  const hideTooltip = () => {
    if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
  };

  const { paragraphs, list, closing } = cancellationPolicy;
  // Homepage title is "Cancellation Policy"; the full title lives on /policies.
  const sectionTitle = "Cancellation Policy";

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
        <Link
          to="/policies"
          aria-label={`${sectionTitle}: read all studio policies`}
          onMouseMove={handleMove}
          onMouseLeave={hideTooltip}
          className="cancellation-card relative block p-10 backdrop-blur-sm w-full sm:w-3/4 md:w-1/2 bg-white/50 rounded-md shadow-lg text-black no-underline"
        >
          <h2 ref={addToRefs} className="text-center mt-2 mb-6 text-3xl font-bold">
            {sectionTitle}
          </h2>
          <div className="sm:mx-8 text-lg leading-relaxed">
            {paragraphs.map((text) => (
              <p key={text} ref={addToRefs} className="mb-4 font-normal">
                {text}
              </p>
            ))}
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {list.map((item) => (
                <li key={item.label} ref={addToRefs}>
                  <strong className="font-semibold">{item.label}</strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p ref={addToRefs} className="font-normal">
              {closing}
            </p>
          </div>

          {/* Shown only on touch screens, where there is no hover tooltip */}
          <p className="cancellation-touch-cta mt-6 text-center font-semibold">
            Read policies →
          </p>

          <span
            ref={tooltipRef}
            className="cancellation-tooltip"
            aria-hidden="true"
            style={{ opacity: 0 }}
          >
            Click here to read cancellation policies
          </span>
        </Link>
      </div>
    </section>
  );
}
