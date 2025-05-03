import { TELEPHONE, EMAIL, INSTAGRAM, WHATSAPP, ADDRESS_URL } from "../../constants";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";
import { useRef } from "react";
import { useFadeInAnimation } from "./../../hooks/useFadeInAnimation"; 




export default function ContactSection() {

  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = el => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };
  useFadeInAnimation(fadeRefs);

  return (
    <>
      <>
        <section ref={addToRefs} className="position-relative py-28 bg-white">
          <div className="p-4">
            <div className="row mb-8 mb-md-24">
              <div className="col-12">
                <h2 className="display-3 mb-10 font-heading">Contact</h2>
                <p className="text-muted fs-3">
                  Get in touch with us today for all your skincare needs.
                </p>
              </div>
            </div>
            <div className="flex-wrap flex-md-row">
              <div ref={addToRefs} className="col-6 col-sm-12 p-4 text-left">
                <h3 className="mb-0 fs-2">Address</h3>
                <a
                  className="mb-0 text-muted fs-4 text-decoration-none"
                  href={ADDRESS_URL}
                >
                  Carolina Skin Centre, 705 W Wadley Ave Suite-23, Midland, TX
                  79705
                </a>
              </div>
              <div ref={addToRefs} className="col-6 col-sm-12 p-4">
                <h3 className="mb-0 fs-2">E-mail</h3>
                <a
                  className="text-decoration-none text-muted fs-4 align-bottom"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div ref={addToRefs} className="col-6 col-sm-12 p-4">
                <h3 className="mb-0 text-left fs-2">Phone</h3>
                <a
                  href={TELEPHONE}
                  className="mb-0 text-muted fs-4 text-decoration-none"
                >
                  432-638-0046
                </a>
              </div>
              <div ref={addToRefs} className="col-6 col-sm-12 p-4">
                <h3 className="mb-2 fs-2">Socials</h3>
                <div className="d-flex">
                  <a
                    className="text-decoration-none p-3"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={WA} alt="WhatsApp" />
                  </a>
                  <a className="text-decoration-none p-3" href={INSTAGRAM}>
                    <img src={IG} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div ref={addToRefs} className="row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5314245664918!2d-102.089112!3d32.0278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbd91880973d63%3A0x8959ca0465189d49!2sCarolina%20Skin%20Centre!5e0!3m2!1ses!2sus!4v1741568209833!5m2!1ses!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
