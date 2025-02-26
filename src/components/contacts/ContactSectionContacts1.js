import { TELEPHONE, EMAIL, INSTAGRAM, WHATSAPP } from "../../constants";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";

export default function ContactSection() {
  return (
    <>
      <>
        <section className="position-relative py-28 bg-white">
          
          <div className="container">
            <div className="row mb-8 mb-md-24">
              <div className="col-12">
                <h2 className="display-1 font-heading">Contact</h2>
                <p className="text-muted fs-3">
                  Get in touch with us today for all your skincare needs.
                </p>
              </div>
            </div>
            <div className="flex-wrap flex-md-row">
              <div className="col-6 col-sm-12">
                <p className="mb-0 fs-1">E-mail</p>
                <a
                  className="text-decoration-none text-dark fs-3 align-bottom"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div className="col-6 col-sm-12">
                <p className="mb-0 fs-1">Phone</p>
                <a href={TELEPHONE} className="mb-0 fs-3 text-decoration-none">{TELEPHONE}</a>
              </div>
              <div className="col-6 col-sm-12">
                <p className="mb-2 fs-1">Socials</p>
                <div className="d-flex">
                  <a className="text-decoration-none" href={WHATSAPP} target="_blank" rel="noreferrer">
                    <img src={WA} alt="WhatsApp" />
                  </a>
                  
                  <a className="text-decoration-none" href={INSTAGRAM}>
                    <img src={IG} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
