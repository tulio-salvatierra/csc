import { MENU_ITEMS, WHATSAPP, INSTAGRAM } from "../../constants";
import Logo from "../../assets/images/CSC.svg";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";

export default function Footer() {
  const TULIO_URL = "https://tuliosalvatierra.com";

  return (
    <section className="pt-20 pt-md-24 bg-white">
      <div className="container">
        <div className="row pb-12 pb-md-24">
          <div className="col-12 col-sm-4 col-lg-3">
            <a href="/">
              <img className="img-fluid" src={Logo} alt="logo" width="5000" />
            </a>
          </div>
          <div className="col-12 col-sm-8 col-lg-9">
            <ul className="list-unstyled mb-0 mt-12 mt-sm-0 d-sm-flex justify-content-sm-end">
              {MENU_ITEMS.map((item, index) => (
                <li className="me-0 me-sm-6" key={index}>
                  <a className="fs-2 text-decoration-none" href={item.url}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-20 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-sm-auto mb-8 mb-sm-0">
              <p className="text-muted fs-3 small mb-0 lh-sm">
                made by <a href={TULIO_URL}>Tulio Salvatierra</a>
              </p>
            </div>
            <div className="d-flex">
              <a
                className="text-decoration-none"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
               <img src={WA}/>
              </a>

              <a className="text-decoration-none" href={INSTAGRAM}>
                <img src={IG} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
