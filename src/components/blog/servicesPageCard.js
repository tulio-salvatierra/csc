import DP from "./../../assets/images/ServicesPageCard/dp.jpg";
import HF from "./../../assets/images/servicesComponent/hf.jpeg";
import EF from "./../../assets/images/ServicesPageCard/ef.jpg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
// TODO: replace with a lash tinting photo once Carolina provides one (open handoff item).
import LT from "./../../assets/images/ServicesPageCard/ef.jpg";

/**
 * Single source of truth for Carolina's services, in display order.
 * Used by the nav dropdown, homepage services stack, services page,
 * detail pages and schema. Change a name here and it changes everywhere.
 */
const servicesCardInfo = [
  {
    id: 1,
    name: "HydraFacial",
    slug: "hydrafacial-midland-tx",
    seoName: "HydraFacial",
    tagline: "Deep cleansing, exfoliation and hydration",
    description:
      "A HydraFacial is a non invasive multi step facial treatment that deeply cleanses, exfoliates, extracts impurities, and hydrates the skin using a specialized device. It combines gentle suction with nourishing serums for personalized cleansing and hydration.",
    icon: HF,
    category: "HydraFacial",
  },
  {
    id: 2,
    name: "Customized Facials",
    slug: "facials-midland-tx",
    seoName: "Customized Facials",
    tagline: "Tailored to your skin's unique needs",
    description:
      "My customized facials are designed to cleanse, nourish, and rejuvenate your skin, resulting in a healthy, radiant glow. Each treatment is tailored to your unique skin type and concerns, whether you need deep hydration, gentle exfoliation, or targeted solutions for acne, aging, or sensitivity. Using high quality products and expert techniques, my facials deliver both relaxation and noticeable results and help you look and feel your best.",
    icon: EF,
    category: "Facials",
  },
  {
    id: 3,
    name: "Nano-Needling",
    slug: "nano-needling-midland-tx",
    seoName: "Nano-Needling",
    tagline: "Non invasive skin rejuvenation",
    description:
      "An advanced and non invasive skincare procedure designed to rejuvenate your skin at a cellular level. This cutting edge treatment uses ultra fine nano needles to create microscopic channels on the skin’s surface, enhancing the absorption of serums and stimulating collagen production without pain or downtime.",
    icon: NN,
    category: "Skin rejuvenation",
  },
  {
    id: 4,
    name: "Dermaplaning",
    slug: "dermaplaning-midland-tx",
    seoName: "Dermaplaning",
    tagline: "Smoother, brighter skin in one visit",
    description:
      "Dermaplaning is a non invasive skincare treatment that involves using a sterile, surgical scalpel to gently exfoliate the top layer of dead skin cells and remove fine vellus hair (peach fuzz) from the face. This process helps to reveal smoother, brighter skin, allowing for better product absorption and a flawless makeup application.",
    icon: DP,
    category: "Facial treatments",
  },
  {
    id: 5,
    name: "Lash Tinting",
    slug: "lash-tinting-midland-tx",
    seoName: "Lash Tinting",
    tagline: "Defined natural lashes, no mascara",
    description:
      "A semi permanent tint that darkens and defines your natural lashes from root to tip, so you can skip the mascara. Lash tinting only; no extensions.",
    icon: LT,
    category: "Lashes",
  },
];

export default servicesCardInfo;
