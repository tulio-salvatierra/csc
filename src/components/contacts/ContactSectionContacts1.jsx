import {
  TELEPHONE,
  EMAIL,
  INSTAGRAM,
  WHATSAPP,
  ADDRESS_URL,
} from "../../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

export default function ContactSection() {
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  return (
    <>
      <section ref={addToRefs} className="min-h-screen flex items-center justify-center m-6">
        <div className="row w-full">
          <h2 className="mb-10">Contact</h2>
          <p className="text-muted text-left mb-6 lh-lg">
            Get in touch with us today for all your skincare needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div ref={addToRefs} className="p-4 text-left">
                <h3 className="">Address</h3>
                <a
                  className="mb-0 text-muted text-decoration-none"
                  href={ADDRESS_URL}
                >
                  Carolina Skin Centre, 705 W Wadley Ave Suite-23, Midland, TX
                  79705
                </a>
              </div>
              <div ref={addToRefs} className="text-left p-4">
                <h3 className="">E-mail</h3>
                <a
                  className="text-decoration-none text-muted fs-4 align-bottom"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div ref={addToRefs} className="p-4">
                <h3 className="mb-0 text-left fs-2">Phone</h3>
                <a href={TELEPHONE} className="text-muted text-decoration-none">
                  432-638-0046
                </a>
              </div>
              <div ref={addToRefs} className="text-left p-4">
                <h3 className="">Socials</h3>
                <div className="d-flex justify-content-left">
                  <a
                    className="text-decoration-none p-3"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a className="text-decoration-none p-3" href={INSTAGRAM}>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5314245664918!2d-102.089112!3d32.0278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbd91880973d63%3A0x8959ca0465189d49!2sCarolina%20Skin%20Centre!5e0!3m2!1ses!2sus!4v1741568209833!5m2!1ses!2sus"
                width="100%"
                height="350"
                className="w-full h-[350px] rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
