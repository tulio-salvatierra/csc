import { useState, useRef } from "react";
import Logo from "../../assets/images/CSC.png";
import {
  MENU_ITEMS,
  WHATSAPP,
  INSTAGRAM,
  BOOKING_URL_2,
} from "../../constants/index.js";
import WA from "../../assets/icon/whatsapp.svg";
import IG from "../../assets/icon/instagram.svg";
import { useMenuAnimation } from "../../hooks/useMenuAnimation.js";
import { useMenuTransition } from "../../hooks/useMenuTransition.js";
import { gsap } from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const overlayRef = useRef(null);
  const socialIconsRef = useRef([]);
  const bookNowRef = useRef(null);

  const shouldRender = useMenuTransition(isOpen, 300);

  useMenuAnimation(
    isOpen,
    menuRef,
    overlayRef,
    menuLinksRef,
    socialIconsRef,
    bookNowRef
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseWithAnimation = () => {
    if (menuRef.current && overlayRef.current) {
      const tl = gsap.timeline();

      tl.to(bookNowRef.current, {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.out",
      })
      .to(
        socialIconsRef.current,
        {
          y: 30,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        menuLinksRef.current,
        {
          y: 50,
          autoAlpha: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(menuRef.current, {
        y: "-100%",
        autoAlpha: 0,
        duration: 0.8,
        ease: "power4.in",
      })
      .to(overlayRef.current, {
        autoAlpha: 0,
        backdropFilter: "blur(0px)",
        duration: 0.5,
      }, "-=0.6");
    }

    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Header NORMAL, no ref, no animación */}
      <section className="overflow-hidden sticky-top col-12 col-sm-12">
        <nav className="navbar py-10 navbar-expand-xl navbar-light bg-white justify-content-between shadow-xl">
          <a href="/">
            <img className="navbar-brand" src={Logo} alt="logo" width={155} />
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

          <div className="collapse navbar-collapse justify-content-end d-none d-xl-flex">
            <ul className="navbar-nav ms-32 mb-2 mb-lg-0">
              {MENU_ITEMS.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link fs-5" href={item.url}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Aquí SÍ el menú móvil animado */}
        {shouldRender && (
          <div
            ref={overlayRef}
            className="position-fixed top-0 start-0 end-0 bottom-0"
            style={{
              zIndex: 9998,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(8px)",
            }}
            onClick={handleCloseWithAnimation}
          >
            <div
              ref={menuRef}
              className={`navbar-menu ${
                isOpen ? "show" : "hide"
              } position-fixed top-0 start-0 end-0 bottom-0`}
              style={{
                zIndex: 9999,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="position-relative h-100 w-100 d-flex flex-column py-10 px-6 bg-white mobile-menu overflow-auto">
                <div className="d-flex align-items-center mb-12">
                  <a className="me-auto h4 mb-0 text-decoration-none" href="/">
                    <img src={Logo} alt="logo" width={132} />
                  </a>
                  <button
                    className="btn navbar-close"
                    type="button"
                    aria-label="Close"
                    onClick={handleOpen}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="20"
                        y1="4"
                        x2="4"
                        y2="20"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="nav flex-column">
                  {MENU_ITEMS.map((item, index) => (
                    <li className="nav-item py-3" key={index}>
                      <a
                        ref={(el) => (menuLinksRef.current[index] = el)}
                        className="nav-link text-dark fs-5"
                        href={item.url}
                        onClick={handleCloseWithAnimation}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="w-auto">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none"
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      ref={(el) => (socialIconsRef.current[0] = el)}
                    >
                      <img src={WA} alt="Whatsapp" />
                    </a>

                    <a
                      className="text-decoration-none"
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noreferrer"
                      ref={(el) => (socialIconsRef.current[1] = el)}
                    >
                      <img src={IG} alt="Instagram" />
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      ref={bookNowRef}
                      className="btn btn-dark w-100"
                      href={BOOKING_URL_2}
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
