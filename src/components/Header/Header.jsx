import { useState } from "react";
import Logo from "../../assets/images/CSC.svg";
import { MENU_ITEMS, BOOKING_URL, WHATSAPP, INSTAGRAM } from "../../constants/index.js";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <section className="overflow-hidden sticky-top col-12 col-sm-12">
        <nav className="navbar py-10 navbar-expand-xl navbar-light bg-white justify-content-between">
          <a href="/">
            <img className="navbar-brand" src={Logo} alt="logo" width={165} />
          </a>
          <button
            className="btn p-0 d-xl-none navbar-burger"
            onClick={handleOpen}
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                fill="#000"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse justify-content-between ">
            <nav className="navbar-nav ms-auto">
              <ul className="navbar-nav ms-32 mb-2 mb-lg-0">
                {MENU_ITEMS.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link fs-2" href={item.url}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <div className="ms-auto w-100">
                <a className="btn btn-dark mt-md-0 w-100" href={BOOKING_URL}>
                  Book now
                </a>
              </div>
            </nav>
          </div>
        </nav>

        <div
          className={`navbar-menu ${
            isOpen ? "show" : "hide"
          } position-fixed top-0 start-0 bottom-0 w-75 mw-sm`}
          style={{ zIndex: 9999 }}
        >
          <div
            className="navbar-close position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
            
          />
          <nav className="position-relative h-100 w-100 d-flex flex-column py-10 px-6 bg-white mobile-menu overflow-auto">
            <div className="d-flex align-items-center mb-12">
              <a className="me-auto h4 mb-0 text-decoration-none" href="/">
                <img src={Logo} alt="logo" width={102} />
              </a>
              <button
                className="btn navbar-close"
                type="button"
                aria-label="Close"
                onClick={handleOpen}
              >
                <img src="pstls-assets/images/navigations/x2.svg" alt="" />
              </button>
            </div>
            <div className="w-auto">
              <ul className="nav flex-column">
                {MENU_ITEMS.map((item, index) => (
                  <li className="nav-item py-3" key={index}>
                    <a
                      className="nav-link fw-bold text-dark fs-2"
                      href={item.url}
                      onClick={handleOpen}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-auto ">
            <div className="d-flex">
                  <a className="text-decoration-none" href={WHATSAPP} target="_blank" rel="noreferrer">
                    <img src={WA} alt="Whatsapp"/>
                  </a>
                  
                  <a className="text-decoration-none" href={INSTAGRAM}>
                    <img src={IG} alt="Instagram"/>
                  </a>
                </div>
              <div className="py-6">
                <a
                  className="btn btn-dark w-100"
                  href={BOOKING_URL}
                >
                  Book now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}


