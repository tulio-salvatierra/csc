import DP from "./../../assets/images/ServicesPageCard/dp.jpg";
import HF from "./../../assets/images/servicesComponent/hf.jpeg";
import MD from "./../../assets/images/ServicesPageCard/md.jpg";
import EF from "./../../assets/images/ServicesPageCard/ef.jpg";
import CP from "./../../assets/images/servicesComponent/cp.jpeg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
import Therapy from "./../../assets/images/servicesComponent/therapy.png"

/** Slug for URL: lowercase, no separators */
export function getServiceSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "");
}

const servicesCardInfo = [
  {
    id: 1,
    name: "Dermaplaning",
    slug: "dermaplaning-midland-tx",
    seoName: "Dermaplaning",
    seoDescription:
      "Dermaplaning in Midland, TX to remove dead skin and peach fuzz for smoother, brighter skin. Book with Carolina Skin Centre.",
    description:
      "Dermaplaning is a non invasive skincare treatment that involves using a sterile, surgical scalpel to gently exfoliate the top layer of dead skin cells and remove fine vellus hair (peach fuzz) from the face. This process helps to reveal smoother, brighter skin, allowing for better product absorption and a flawless makeup application.",
    icon: DP,
    category: "Facial treatments",
  },
  {
    id: 2,
    name: "HydraFacials",
    slug: "hydrafacial-midland-tx",
    seoName: "HydraFacial",
    seoDescription:
      "HydraFacial in Midland, TX: deep cleansing, exfoliation, extractions and hydration in one visit, with no downtime. Book with Carolina Skin Centre.",
    description:
      "A HydraFacial is a non invasive multi step facial treatment that deeply cleanses, exfoliates, extracts impurities, and hydrates the skin using a specialized device. It combines gentle suction with nourishing serums to improve skin texture, tone, and overall radiance.",
    icon: HF,
    category: "HydraFacials",
  },
  {
    id: 3,
    name: "Microdermabrasion",
    slug: "microdermabrasion-midland-tx",
    seoName: "Microdermabrasion",
    seoDescription:
      "Microdermabrasion in Midland, TX: gentle exfoliation that refreshes skin texture and tone. Book with Carolina Skin Centre.",
    description:
      "Microdermabrasion is a non invasive exfoliation treatment that gently removes the outermost layer of dead skin cells using a specialized device. The procedure typically uses either a diamond tipped wand or fine crystals combined with suction to resurface the skin by promoting cell turnover and collagen production.",
    icon: MD,
    category: "Skin Rejuvenation",
  },
  {
    id: 4,
    name: "Facials",
    slug: "facials-midland-tx",
    seoName: "Facials",
    seoDescription:
      "Custom facials in Midland, TX tailored to your skin, from deep hydration to acne and anti-aging care. Book with Carolina Skin Centre.",
    description:
      "My customized facials are designed to cleanse, nourish, and rejuvenate your skin, resulting in a healthy, radiant glow. Each treatment is tailored to your unique skin type and concerns, whether you need deep hydration, gentle exfoliation, or targeted solutions for acne, aging, or sensitivity. Using high quality products and expert techniques, my facials deliver both relaxation and noticeable results and help you look and feel your best.",
    icon: EF,
    category: "Facials",
  },
  {
    id: 5,
    name: "Chemical Peels",
    slug: "chemical-peels-midland-tx",
    seoName: "Chemical Peels",
    seoDescription:
      "Chemical peels in Midland, TX to renew skin texture, tone and clarity, with options for all skin tones. Book with Carolina Skin Centre.",
    description:
      "Designed to exfoliate and renew your skin by revealing a fresher, more radiant complexion. Using carefully selected acids, chemical peels remove dead skin cells, unclog pores, and stimulate collagen production to improve skin texture, tone, and overall clarity.",
    icon: CP,
    category: "Skin rejuvenation",
  },
  {
    id: 7,
    name: "Nano Needle",
    slug: "nano-needling-midland-tx",
    seoName: "Nano Needling",
    seoDescription:
      "Nano needling in Midland, TX: a gentle, non-invasive treatment that boosts serum absorption and collagen. Book with Carolina Skin Centre.",
    description:
      "An advanced and non invasive skincare procedure designed to rejuvenate your skin at a cellular level. This cutting edge treatment uses ultra fine nano needles to create microscopic channels on the skin’s surface, enhancing the absorption of serums and stimulating collagen production without pain or downtime.",
    category: "Skin rejuvenation",
    icon: NN,
  },
  {
    id: 8,
    name: "Carboxy Therapy",
    slug: "carboxy-therapy-midland-tx",
    seoName: "Carboxy Therapy",
    seoDescription:
      "Carboxy therapy in Midland, TX: a CO2 skin treatment for facial rejuvenation, dark circles and scars. Book with Carolina Skin Centre.",
    description:
      "A non invasive skin treatment that involves infusing carbon dioxide (CO₂) into the skin to boost oxygen flow, improve circulation, and stimulate collagen production. It is used for facial rejuvenation, dark circles, and scar treatment.",
    category: "Skin rejuvenation",
    icon: Therapy,
  },
];

export default servicesCardInfo;


