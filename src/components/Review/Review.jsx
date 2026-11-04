import { useEffect, useState } from "react";
import "./review.css";
import { reviews, reviewCountLabel } from "./reviews";

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const autoPlaying = !paused && !hovered && !focused;

  useEffect(() => {
    if (!autoPlaying || reviews.length < 2) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, autoPlaying]);

  const review = reviews[active];
  if (!review) return null;

  return (
    <section
      id="client-reviews"
      className="client-reviews"
      aria-labelledby="client-reviews-heading"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="client-reviews-inner">
        <p className="client-reviews-eyebrow">Client experiences</p>
        <h2 id="client-reviews-heading">What my clients say about me</h2>
        <p className="client-reviews-highlight"><strong>{reviewCountLabel} five-star reviews</strong> on Google</p>
        <p className="client-reviews-intro">Kind words from clients who trust Carolina with their skincare.</p>
        <div className="client-review-stage" aria-live={autoPlaying ? "off" : "polite"} aria-atomic="true">
          <figure key={review.id} className="client-review" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${reviews.length}`}>
            <p className="client-review-stars" aria-label={`${review.rating} out of 5 stars`}>
              <span aria-hidden="true">{"★".repeat(review.rating)}</span>
            </p>
            <blockquote><p>“{review.text}”</p></blockquote>
            <figcaption>
              <span className="client-review-avatar" aria-hidden="true">{review.author.split(/\s+/).slice(0, 2).map((part) => part[0]).join("")}</span>
              <span>{review.author}</span>
            </figcaption>
          </figure>
        </div>
        <div className="client-review-controls">
          <button type="button" aria-label="Previous review" onClick={() => setActive((current) => (current - 1 + reviews.length) % reviews.length)}>←</button>
          <span className="client-review-counter">{active + 1} / {reviews.length}</span>
          <button type="button" aria-label="Next review" onClick={() => setActive((current) => (current + 1) % reviews.length)}>→</button>
          <button className="client-review-pause" type="button" aria-pressed={paused} onClick={() => setPaused((current) => !current)}>{paused ? "Play" : "Pause"}</button>
        </div>
      </div>
    </section>
  );
}
