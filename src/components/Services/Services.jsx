import CP from "./../../assets/images/servicesComponent/cp.jpeg";
import WAX from "./../../assets/images/servicesComponent/wax.jpg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
import Therapy from "./../../assets/images/servicesComponent/therapy.png";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import { useRef } from "react";
import ImageCycle from "./ServicesSlider";
import "./Services.css";

export default function ServicesComponent() {
  const services = [
    {
      title: "Chemical Peels",
      description: "Exfoliation and Skin Rejuvenation",
      image: CP,
    },
    {
      title: "Waxing Services",
      description: "for face and body",
      image: WAX,
    },
    {
      title: "Nano Needle",
      description: "Non-invasive Skin Rejuvination Treatment",
      image: NN,
    },
    {
      title: "Carboxy Therapy",
      description:
        "A minimally invasive treatment that uses Carbon Dioxide to improve skin elasticity, reduce cellulite, and enhance circulation.",
      image: Therapy,
    },
  ];

  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 ref={addToRefs} className="mb-4">
        Services
      </h1>
      
        <div
          ref={addToRefs}
          className="w-full max-w-2xl flex flex-1 justify-center items-center h-full"
          
        >
          <ImageCycle
            items={services.map((service) => ({
              src: service.image,
              title: service.title,
              description: service.description,
            }))}
          />
        </div>
      
    </section>
  );
}