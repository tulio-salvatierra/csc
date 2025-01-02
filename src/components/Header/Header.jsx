import { useState } from "react";
import Logo from "../../assets/images/CSC.svg";
import { MENU_ITEMS, BOOKING_URL } from "../../constants/index.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <section className="overflow-hidden sticky-top">
        <nav className="navbar py-10 navbar-expand-xl navbar-light bg-white">
          <div className="container">
            <a href="/">
              <img className="navbar-brand" src={Logo} alt="logo" width={152} />
            </a>
            <button
              className="btn p-0 d-xl-none navbar-burger"
              onClick={handleOpen}
            >
              <svg
                width={24}
                height={24}
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
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-32 mb-2 mb-lg-0">
                {MENU_ITEMS.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={item.url}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="ms-auto">
                <a className="btn btn-dark mt-3 mt-md-0" href={BOOKING_URL}>
                  Book now
                </a>
              </div>
            </div>
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
            style={{ opacity: "75%" }}
          />
          <nav className="position-relative h-100 w-100 d-flex flex-column py-10 px-6 bg-white overflow-auto">
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
            <div>
              <ul className="nav flex-column">
                {MENU_ITEMS.map((item, index) => (
                  <li className="nav-item py-3" key={index}>
                    <a
                      className="nav-link fw-bold text-dark"
                      href={item.url}
                      onClick={handleOpen}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="py-6">
                <a
                  className="btn btn-dark w-100"
                  href="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c1185t201404101626pu568R8C68u8RJ4Pz98Mr&theme=651&p_mobile=y&p_start=1"
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

export default Header;
