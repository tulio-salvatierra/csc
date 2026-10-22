import { useRef, useState } from "react";
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

  // Cursor-following tooltip (pointer devices only; hidden on touch via CSS)
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ visible: true, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const hideTooltip = () => setTooltip((t) => ({ ...t, visible: false }));

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
            className="cancellation-tooltip"
            aria-hidden="true"
            style={{
              opacity: tooltip.visible ? 1 : 0,
              transform: `translate(${tooltip.x + 16}px, ${tooltip.y + 16}px)`,
            }}
          >
            Click here to read cancellation policies
          </span>
        </Link>
      </div>
    </section>
  );
}
