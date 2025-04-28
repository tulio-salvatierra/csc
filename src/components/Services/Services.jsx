import "./../../App.css";
import CP from "./../../assets/images/servicesComponent/cp.jpeg";
import WAX from "./../../assets/images/servicesComponent/wax.jpg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
import Therapy from "./../../assets/images/servicesComponent/therapy.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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

  const animated = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 1200px)", () => {
      // Desktop animation (movement + fade)
      gsap.from(animated.current, {
        y: 25,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  
    mm.add("(max-width: 1199px)", () => {
      // Mobile and Tablet animation (fade only, very smooth)
      gsap.from(animated.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: animated.current,
          start: "top 90%", // trigger a bit later for mobile
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  
    return () => mm.revert();
  }, []);

  return (
    <section className="h-100 mt-32 py-24 mb-32">
      <h2  ref={(el) => (animated.current[0] = el)} className="text-center fs-1 fw-bold mb-4">Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div  ref={(el) => (animated.current[index + 1] = el)} key={index} className="col-md-6 p-5">
            <a href="/services" className="text-decoration-none text-dark">
              <div className="card border-0 service-card h-100 p-5 shadow-lg">
                <img
                  src={service.image}
                  className="card-img"
                  alt={service.title}
                />
                <div className="card-body">
                  <h2 className="card-title fs-3 p-0 text-dark d-flex align-items-center hlTitle">
                    {service.title}
                  </h2>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
