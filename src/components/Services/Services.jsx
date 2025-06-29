import "./../../App.css";
import CP from "./../../assets/images/servicesComponent/cp.jpeg";
import WAX from "./../../assets/images/servicesComponent/wax.jpg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
import Therapy from "./../../assets/images/servicesComponent/therapy.png";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation";
import {  useRef } from "react";



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
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  return (
    <section className="min-h-screen mt-32 py-24 mb-32">
      <h2  ref={addToRefs} className="text-center text-4xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div  ref={addToRefs} key={index} className="p-5">
            <a href="/services" className="no-underline text-black">
              <div className="bg-white h-full p-5 shadow-lg rounded-lg">
                <img
                  src={service.image}
                  className="w-full h-100 object-cover rounded"
                  alt={service.title}
                />
                <div className="mt-4">
                  <h3 className="text-xl p-0 text-black flex items-center font-semibold hlTitle">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}