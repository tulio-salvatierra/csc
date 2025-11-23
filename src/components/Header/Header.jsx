import { useState, useRef } from "react";
import Logo from "../../assets/images/CSC.png";
import LogoBG from "../../assets/images/CSC.svg";
import { Link } from "react-router-dom";
import {
  MENU_ITEMS,
  WHATSAPP,
  INSTAGRAM,
  BOOKING_URL_2,
} from "../../constants/index.js";
import "./Header.css";
import BookingButton from "../BookingButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const overlayRef = useRef(null);
  const socialIconsRef = useRef([]);

  // Animation hooks removed

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Animation close handler removed, use direct close

  return (
    <>
      {/* Header NORMAL, no ref, no animación */}
      <section className="sticky top-0 w-full z-auto shadow-2xl header">
        <nav className="flex items-center justify-between bg-white py-10 shadow-xl px-4 xl:px-8">
          <a href="/">
            <img className="w-[155px] h-auto" src={LogoBG} alt="logo" />
          </a>

          <button className="block lg:hidden p-0 z-50" onClick={handleOpen}>
            <svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="#000"
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

          <div className="hidden lg:flex justify-end items-center space-x-8">
            <ul className="flex space-x-8">
              {MENU_ITEMS.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="text-2xl text-black no-underline hover:underline"
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <BookingButton href={BOOKING_URL_2} label={"Book now!"} />
          </div>
        </nav>
      </section>

      {/* Aquí SÍ el menú móvil animado */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 transition-[opacity,backdrop-filter] duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-sm"
            : "opacity-0 pointer-events-none backdrop-blur-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          ref={menuRef}
          className="pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <nav
            className={`relative z-10 flex flex-col py-10 px-6 bg-white shadow-xl transform transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: `url(${LogoBG})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backdropFilter: "blur(4px)",
                opacity: 0.05,
              }}
            />
            <div className="absolute inset-0 bg-white opacity-0 z-0 pointer-events-none" />
            <div className="flex items-center mb-12">
              <a
                className="flex-1 text-2xl font-semibold mb-0 no-underline"
                href="/"
              >
                <img src={Logo} alt="logo" width={132} />
              </a>
              <button
                className="p-2"
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

            <ul className="flex flex-col space-y-4">
              <h2 className="text-sm font-semibold text-black tracking-normal mb-2">
                Navigation
              </h2>
              {MENU_ITEMS.map((item, index) => (
                <li className="py-2" key={index}>
                  <a
                    ref={(el) => (menuLinksRef.current[index] = el)}
                    className="text-lg text-black no-underline hover:underline"
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-sm font-semibold text-black  tracking-normal mt-8">
              Connect
            </h2>
            <div className="flex space-x-4 justify-evenly py-4">
              <a
                className="no-underline hover:underline w-auto"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                ref={(el) => (socialIconsRef.current[0] = el)}
              >
                Whatsapp
              </a>

              <a
                className="no-underline hover:underline"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                ref={(el) => (socialIconsRef.current[1] = el)}
              >
                Instagram
              </a>
            </div>
            <div className="py-6">
              <BookingButton href={BOOKING_URL_2} label={"Book now"} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
