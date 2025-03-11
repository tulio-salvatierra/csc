import "../../App.css";
import { INSTAGRAM, TELEPHONE, EMAIL, ADDRESS } from "../../constants";
import Map from "../../assets/images/map.png";
export default function FindUsSectionContacts1() {
  return (
    <>
      <>
        <section className="pt-24 bg-white overflow-hidden">
          <div className="container mb-12 mb-md-0">
            <div className="mw-md mx-auto text-center mb-24">
              <h3 className="mb-6 text-primary">Get in touch with us</h3>
              <h2 className="display-4 lh-sm font-heading">
                Is the answer to your question missing?
              </h2>
            </div>
            <div className="row pb-14">
              <div className="col-12 col-md-4 mb-8 mb-md-0">
                <div className="text-center">
                  <h3 className="mb-4 font-heading">E-mail</h3>
                  <a
                    className="text-decoration-none fs-5 text-dark"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-8 mb-md-0">
                <div className="text-center">
                  <h3 className="mb-4 font-heading">Phone</h3>
                  <a
                    href={`tel:${TELEPHONE}`}
                    className="text-decoration-none fs-5 text-dark"
                  >
                    <p className="mb-0 text-center">{TELEPHONE}</p>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="text-center">
                  <h3 className="mb-4 font-heading">Socials</h3>
                  <div className="d-flex justify-content-center">
                    <a className="text-decoration-none" href="#">
                      <img
                        src="https://www.flaticon.com/free-icon/instagram_174855?term=instagram&page=1&position=2&origin=search&related_id=174855"
                        alt=""
                      />
                    </a>
                    <a className="text-decoration-none" href="#">
                      <img
                        src="pstls-assets/images/contacts/twitter.png"
                        alt=""
                      />
                    </a>
                    <a className="text-decoration-none" href="#">
                      <img
                        src="pstls-assets/images/contacts/google.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle d-inline-block mw-xs mt-n6 mt-md-0">
              <div className="position-relative pb-12 pt-6 pb-sm-6 px-4 text-center bg-dark">
                <img
                  className="position-absolute top-0 start-0 translate-middle"
                  src="pstls-assets/images/contacts/little-circle.png"
                  alt=""
                />
                <h2 className="text-white">Office</h2>
                <p className="text-white" style={{ fontSize: 20 }}>
                  {ADDRESS}
                </p>
              </div>
            </div>
            <img className="img-fluid w-100" src={Map} alt="" />
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5314245664918!2d-102.089112!3d32.0278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbd91880973d63%3A0x8959ca0465189d49!2sCarolina%20Skin%20Centre!5e0!3m2!1ses!2sus!4v1741568209833!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </>
    </>
  );
}
