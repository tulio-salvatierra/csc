import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./transparentReview.css";
import { mockReviews } from "./mockedReviews";

// Background colors for each card (matching the CSS pattern)
const cardColors = [
  "#F14A3A", // card 1
  "#FB7350", // card 2
  "#F79C42", // card 3
  "#FFDF40", // card 4
  "#DEDA8D", // card 5
  "#71CFA3", // card 6
  "#C4EF7A", // card 7
  "#BCEFFF", // card 8
];

export default function HeroReviewCarousel() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const cardContentRefs = useRef([]);
  const currentPortionRef = useRef(0); // No portion hovered at the start

  // Duplicate reviews if needed to fill 8 cards, or use available reviews
  const displayReviews = [...mockReviews];
  while (displayReviews.length < 8) {
    displayReviews.push(...mockReviews);
  }
  displayReviews.splice(8); // Keep only 8 cards

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const cardContent = cardContentRefs.current.filter(Boolean);

    if (!container || cards.length === 0) return;

    let containerW = container.clientWidth;
    const cardsLength = cards.length;

    const updateContainerWidth = () => {
      containerW = container.clientWidth;
    };

    window.addEventListener("resize", updateContainerWidth);

    // Set initial random positions for all cards
    cards.forEach((card) => {
      gsap.set(card, {
        xPercent: (Math.random() - 0.5) * 10,
        yPercent: (Math.random() - 0.5) * 10,
        rotation: (Math.random() - 0.5) * 20,
      });
    });

    const resetPortion = (index) => {
      // Last active card
      gsap.to(cards[index], {
        xPercent: (Math.random() - 0.5) * 10,
        yPercent: (Math.random() - 0.5) * 10,
        rotation: (Math.random() - 0.5) * 20,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
      });
    };

    const newPortion = (i) => {
      gsap.to(cards[i], {
        // Reset transformation attributes
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        duration: 0.8,
        scale: 1.1,
        ease: "elastic.out(1, 0.75)", // Elastic movement at the end (out)
      });

      // For each card's child element
      cardContent.forEach((content, index) => {
        // If it's not the active card
        if (index !== i) {
          gsap.to(content, {
            // When index - i < 0, push left
            // When index - i > 0, push right
            // The further (index - i) moves from 0 in both ways, the smaller the displacement
            xPercent: 80 / (index - i),
            ease: "elastic.out(1, 0.75)",
            duration: 0.8,
          });
          // If it is the active card
        } else {
          // Center its child
          gsap.to(content, {
            xPercent: 0,
            ease: "elastic.out(1, 0.75)",
            duration: 0.8,
          });
        }
      });
    };

    const handleMouseMove = (e) => {
      // Cursor position relative to the left edge of the container
      const mouseX = e.clientX - container.getBoundingClientRect().left;
      // Cursor's horizontal percentage within the container
      const percentage = mouseX / containerW;
      // Round the value up to get a valid index
      const activePortion = Math.ceil(percentage * cardsLength);

      // If a new portion is hovered
      if (
        currentPortionRef.current !== activePortion &&
        activePortion > 0 &&
        activePortion <= cardsLength
      ) {
        // If a portion was already hovered, reset it
        // -1 to target the correct index in the card set
        if (currentPortionRef.current !== 0) {
          resetPortion(currentPortionRef.current - 1);
        }

        // Update the index of the new portion
        currentPortionRef.current = activePortion;
        // -1 to target the correct index in the card set
        newPortion(currentPortionRef.current - 1);
      }
    };

    const handleMouseLeave = () => {
      // -1 to target the correct index in the card set
      if (currentPortionRef.current !== 0) {
        resetPortion(currentPortionRef.current - 1);
      }
      // No portion is hovered anymore
      currentPortionRef.current = 0;

      // Recenter all direct child elements of the cards
      gsap.to(cardContent, {
        xPercent: 0,
        ease: "elastic.out(1, 0.75)",
        duration: 0.8,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  return (
    <section className="mwg_effect025">
      <p className="title">
        They say it better <br />
        than we do
      </p>
      <div className="container" ref={containerRef}>
        {displayReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="card"
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          >
            <div
              className="content"
              style={{ backgroundColor: cardColors[index] }}
              ref={(el) => {
                if (el) cardContentRefs.current[index] = el;
              }}
            >
              <p className="top">"{review.text}"</p>
              <div className="bottom">
                <div className="bubble">
                  <img src={review.photoUrl} alt={review.author} />
                </div>
                <div>
                  <p>{review.author}</p>
                  <p className="job">Client</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
