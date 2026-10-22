import Cancellation from "./../../assets/images/policies/policy-cancellation.webp";
import Standing from "./../../assets/images/policies/policy-standing.webp";
import Children from "./../../assets/images/policies/policy-children.webp";
import GiftCard from "./../../assets/images/policies/policy-giftcard.webp";

/**
 * Studio policies — Carolina's copy (Oct 2026).
 * Single source for the Policies page AND the homepage cancellation section,
 * so the two can never say different things.
 */
export const policiesIntro =
  "Please review my studio policies before booking your appointment. These guidelines help maintain a professional, respectful, and comfortable experience for every client.";

export const policies = [
  {
    id: "cancellation",
    title: "Cancellation & Rescheduling Policy",
    image: Cancellation,
    imageAlt: "Appointment planner and gold pen on a neutral desk",
    paragraphs: [
      "Each appointment is reserved exclusively for you. A minimum of 48 hours’ notice is required for cancellations or rescheduling.",
    ],
    list: [
      {
        label: "Less than 48 hours’ notice:",
        text: "50% of the scheduled service cost will be charged.",
      },
      {
        label: "Same-day cancellations, rescheduling, or no-shows:",
        text: "100% of the scheduled service cost will be charged.",
      },
    ],
    closing: "Thank you for respecting my time and cancellation policy.",
  },
  {
    id: "standing",
    title: "Standing Appointments Policy",
    image: Standing,
    imageAlt: "Appointment cards beside a green plant",
    paragraphs: [
      "Three consecutive cancellations or rescheduled appointments may result in the loss of standing appointment privileges.",
    ],
  },
  {
    id: "children",
    title: "Children Policy",
    image: Children,
    imageAlt: "Olive branch in soft natural light",
    paragraphs: [
      "To maintain a relaxing and professional environment, children under 12 are not permitted in the studio unless they have a scheduled appointment.",
      "Children ages 10 and older receiving services may be accompanied by a parent or guardian.",
    ],
  },
  {
    id: "gift-card",
    title: "Gift Card Policy",
    image: GiftCard,
    imageAlt: "Gift card tied with a satin ribbon",
    paragraphs: [
      "Gift cards are non-refundable, non-transferable, and cannot be redeemed for cash, except as required by law.",
      "Gift cards may be used toward services or retail products at Carolina Skin Centre.",
    ],
  },
];

export const cancellationPolicy = policies[0];
