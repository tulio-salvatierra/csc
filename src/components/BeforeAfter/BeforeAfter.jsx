import { useState } from "react";
import BookingButton from "../BookingButton";
import { BOOKING_URL_2 } from "../../constants";
import comparisonOne from "../../assets/images/results/comparison-01.webp";
import comparisonTwo from "../../assets/images/results/comparison-02.webp";
import comparisonThree from "../../assets/images/results/comparison-03.webp";
import treatment from "../../assets/images/results/treatment.webp";
import "./BeforeAfter.css";

const comparisons = [
  { image: comparisonOne, alt: "Nano-Needling comparison showing two views of a client's cheek and forehead" },
  { image: comparisonTwo, alt: "Nano-Needling comparison showing two views of a client's cheek and eye" },
  { image: comparisonThree, alt: "Nano-Needling comparison showing side-by-side views of skin texture" },
];

export default function BeforeAfter() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="before-and-after" className="results-section" aria-labelledby="results-heading">
      <div className="results-inner">
        <header className="results-heading">
          <p className="results-eyebrow">A closer look</p>
          <h2 id="results-heading">Before &amp; after</h2>
          <p>Explore these skincare comparisons, then let’s talk about your skin’s individual needs.</p>
        </header>

        <div className="results-layout">
          <div>
            <figure className="results-comparison" id="results-comparison">
              <img
                key={comparisons[selected].image}
                src={comparisons[selected].image}
                alt={comparisons[selected].alt}
                width="1600"
                height="1600"
                loading="lazy"
                decoding="async"
              />
              <figcaption aria-live="polite" aria-atomic="true">Nano-Needling · Comparison {selected + 1} of {comparisons.length}</figcaption>
            </figure>
            <div className="results-selector" role="group" aria-label="Choose a skincare comparison">
              {comparisons.map((comparison, index) => (
                <button
                  key={comparison.image}
                  type="button"
                  aria-label={`View comparison ${index + 1}`}
                  aria-pressed={selected === index}
                  aria-controls="results-comparison"
                  onClick={() => setSelected(index)}
                >
                  <img src={comparison.image} alt="" width="80" height="80" loading="lazy" />
                  <span>0{index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="results-care">
            <div className="results-treatment-image">
              <img src={treatment} alt="Dermaplaning treatment in progress" width="945" height="2048" loading="lazy" decoding="async" />
            </div>
            <p className="results-eyebrow">Dermaplaning</p>
            <h3>Your skin. Your treatment.</h3>
            <p>Every visit starts with you. I tailor your care to your skin concerns and goals, and help you choose a treatment that fits your needs.</p>
            <BookingButton href={BOOKING_URL_2} label="Book a visit" />
          </aside>
        </div>
        <p className="results-note">Individual results vary. Photos show individual examples and do not guarantee a particular outcome.</p>
      </div>
    </section>
  );
}
