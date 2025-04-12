import { TELEPHONE, EMAIL, INSTAGRAM, WHATSAPP } from "../../constants";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";

export default function ContactSection() {
  return (
    <>
      <>
        <section className="position-relative py-28 bg-white">
          <div className="p-4">
            <div className="row mb-8 mb-md-24">
              <div className="col-12">
                <h2 className="display-3 font-heading">Contact</h2>
                <p className="text-muted fs-3">
                  Get in touch with us today for all your skincare needs.
                </p>
              </div>
            </div>
            <div className="flex-wrap flex-md-row">
              <div className="col-6 col-sm-12 p-4">
                <p className="mb-0 fs-2">E-mail</p>
                <a
                  className="text-decoration-none text-muted fs-4 align-bottom"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div className="col-6 col-sm-12 p-4">
                <p className="mb-0 fs-2">Phone</p>
                <a
                  href={TELEPHONE}
                  className="mb-0 text-muted fs-4 text-decoration-none"
                >
                  {TELEPHONE}
                </a>
              </div>
              <div className="col-6 col-sm-12 p-4">
                <p className="mb-2 fs-2">Socials</p>
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
            <div className="row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5314245664918!2d-102.089112!3d32.0278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbd91880973d63%3A0x8959ca0465189d49!2sCarolina%20Skin%20Centre!5e0!3m2!1ses!2sus!4v1741568209833!5m2!1ses!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
