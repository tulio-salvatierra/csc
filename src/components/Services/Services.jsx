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
      description: "Waxing services for face and body",
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
    <section className="h-screen mt-16 mb-16 p-4 d-flex flex-column align-items-center justify-content-center">
      <h1 ref={addToRefs} className="mb-4">
        Services
      </h1>
      <a href="/services">
        <div ref={addToRefs} className="d-flex flex-column align-items-center justify-content-center h-100">
        <ImageCycle items={services.map(service => ({
            src: service.image,
            title: service.title,
            description: service.description
          }))} />
        </div>
      </a>
    </section>
  );
}
