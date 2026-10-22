import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./../../App.css";
import "./Services.css";
import SERVICES from "../blog/servicesPageCard";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesComponent() {
  const rootRef = useRef(null);
  const pinHeightRef = useRef(null);
  const containerRef = useRef(null);
  const mediaRefs = useRef([]);

  const services = SERVICES.map((service) => ({
    title: service.name,
    slug: service.slug,
    description: service.tagline,
    image: service.icon,
  }));

  useEffect(() => {
    const root = rootRef.current;
    const pinHeight = pinHeightRef.current;
    const container = containerRef.current;
    const medias = mediaRefs.current.filter(Boolean);

    if (!root || !pinHeight || !container || medias.length === 0) return;

    const scrollTriggers = [];

    // Create ScrollTrigger pin
    const pinTrigger = ScrollTrigger.create({
      trigger: pinHeight,
      start: "top top",
      end: "bottom bottom",
      pin: container,
    });
    scrollTriggers.push(pinTrigger);

    const gap = 30;
    const distPerMedia =
      (pinHeight.clientHeight - window.innerHeight) / medias.length;

    // Set initial positions for all medias
    gsap.set(medias, {
      y: gap * (medias.length - 1),
      z: -gap * (medias.length - 1),
    });

    // Create animation for each media
    medias.forEach((media, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinHeight,
          start: "top top+=" + distPerMedia * index,
          end: "bottom bottom+=" + distPerMedia * index,
          scrub: 0.5,
        },
      });

      // Move through the deck
      for (let i = 0; i < medias.length - 1; i++) {
        tl.to(media, {
          // Gains one position in the deck queue
          y: "-=" + gap,
          z: "+=" + gap,
          ease: "back.inOut(3)", // Light bounce at the start and end of the animation
        });
      }

      // Final animation - move up and scale
      tl.to(media, {
        yPercent: -80, // Moves up by 80% of its height
        y: "-50vh", // Moves up to half the screen
        scale: 0.5, // The card slightly enlarges as it disappears
        rotation: (Math.random() - 0.5) * 50, // Will be different for each media
        ease: "power4.in", // Starts gradually
      });

      // Store the ScrollTrigger from the timeline
      if (tl.scrollTrigger) {
        scrollTriggers.push(tl.scrollTrigger);
      }
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className="mwg_effect042" ref={rootRef}>
      <div className="pin-height" ref={pinHeightRef}>
        <div className="container min-h-screen" ref={containerRef}>
          <div className="text">
            <h2 className="text-2xl font-bold">Premium Services</h2>
            <p className="text-gray-500" style={{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "Grapevine" }}>Click in the image to read more</p>
          </div>

          <div className="medias">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="media-wrapper"
                ref={(el) => {
                  if (el) mediaRefs.current[index] = el;
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="media"
                />
                <div className="media-content">
                  <h3 className="media-title" style={{ fontFamily: "Grapevine", textTransform: "uppercase" }}>{service.title}</h3>
                  <p className="media-description text-white">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}