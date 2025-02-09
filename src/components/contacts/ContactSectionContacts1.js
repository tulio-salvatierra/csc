import { TELEPHONE, EMAIL } from "../../constants";

export default function ContactSection() {
  return (
    <>
      <>
        <section className="position-relative py-28 bg-white">
          <div className="container">
            <img
              className="position-absolute top-0 start-0 bottom-0 h-100 w-100"
              style={{ objectFit: "cover" }}
              src="pstls-assets/images/contacts/pink-shadows.png"
              alt=""
            />
            <div className="position-relative row mb-8 mb-md-24">
              <div className="col-6">
                <h2 className="display-4 font-heading">Contact</h2>
              </div>
            </div>
            <div className="position-relative row">
              
              <div className="col-12 col-md-6">
                <div className="row mb-12">
                  <div className="col-12 col-md-6 mb-12">
                    <p className="mb-0 text-muted">E-mail</p>
                    <a
                      className="text-decoration-none text-dark small align-bottom"
                      href={`mailto:${EMAIL}`}
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <div className="col-12 col-md-6 mb-12">
                    <p className="mb-0 text-muted">Phone</p>
                    <p className="mb-0 text-s">{TELEPHONE}</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-2 text-muted">Socials</p>
                    <div className="d-flex">
                      <a className="text-decoration-none" href="#">
                        <img
                          src="pstls-assets/images/contacts/facebook.png"
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
          </div>
        </section>
      </>
    </>
  );
}
