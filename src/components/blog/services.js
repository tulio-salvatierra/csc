import DP from "./../../assets/images/services/dp.jpg";
import HF from "./../../assets/images/services/hf.jpg";
import MD from "./../../assets/images/services/md.jpg";
import EF from "./../../assets/images/services/ef.jpg";
import CP from "./../../assets/images/services/cp.jpg";
import WAX from "./../../assets/images/services/wax.jpg";
import NN from "./../../assets/images/services/nano.jpg";
import Therapy from "./../../assets/images/services/therapy.jpg";


const services = [
  {
    id: 1,
    name: "Dermaplaning",
    description: "Dermaplaning is a non-invasive skincare treatment that involves using a sterile, surgical scalpel to gently exfoliate the top layer of dead skin cells and remove fine vellus hair (peach fuzz) from the face. This process helps to reveal smoother, brighter skin, allowing for better product absorption and a flawless makeup application.",
    icon: DP,
    category: "Facial treatments",
  },
  {
    id: 2,
    name: "HydraFacials",
    description: "A HydraFacial is a non-invasive, multi-step facial treatment that deeply cleanses, exfoliates, extracts impurities, and hydrates the skin using a specialized device. It combines gentle suction with nourishing serums to improve skin texture, tone, and overall radiance.",
    icon: HF,
    category: "HydraFacials",
  },
  {
    id: 3,
    name: "Microdermabrasion",
    description: "Microdermabrasion is a non-invasive exfoliation treatment that gently removes the outermost layer of dead skin cells using a specialized device. The procedure typically uses either a diamond-tipped wand or fine crystals combined with suction to resurface the skin, promoting cell turnover and collagen production.",
    icon: MD,
    category: "Eyebrow services",
  },
  {
    id: 4,
    name: "Facials",
    description: "Pamper yourself with our luxurious facial designed to relax, rejuvenate, and refresh your skin. From exfoliating scrubs to detoxifying wraps, our experienced therapist will help you achieve the smooth, glowing skin you desire. Treat yourself to a day of indulgence and relaxation with our expert facial treatment.",
    icon: EF,
    category: "Body treatments",
  },
  {
    id: 5,
    name: "Chemical Peels",
    description: "designed to exfoliate and renew your skin, revealing a fresher, more radiant complexion. Using carefully selected acids, chemical peels remove dead skin cells, unclog pores, and stimulate collagen production, improving skin texture, tone, and overall clarity.",
    icon: CP,
    category: "Skin rejuvenation",
  },
  {
    id: 6,
    name: "Waxing Services",
    description: "Say goodbye to unwanted hair with our expert waxing services. From brows to bikini lines, our skilled aestheticians will help you achieve smooth, hair-free skin. We use high-quality waxes and techniques to ensure a comfortable and effective waxing experience. Book your appointment today and enjoy silky-smooth skin.",
    icon: WAX,
    category: "Waxing services",
  },
  {
    id: 7,
    name: "Nano Needle",
    description: "An advanced and non-invasive skincare procedure designed to rejuvenate your skin at a cellular level. This cutting-edge treatment uses ultra-fine nano needles to create microscopic channels on the skin’s surface, enhancing the absorption of serums and stimulating collagen production without pain or downtime.",
    category: "Skin rejuvenation",
    icon: NN,
  },
  {
    id: 8,
    name: "Carboxy Therapy",
    description: "A non-invasive skin treatment that involves infusing carbon dioxide (CO₂) into the skin to boost oxygen flow, improve circulation, and stimulate collagen production. It is used for facial rejuvenation, cellulite reduction, dark circles, and scar treatment.",
    category: "Skin rejuvenation",
    icon: Therapy,
  },
];

export default services;
