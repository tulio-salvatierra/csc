import { MENU_ITEMS, WHATSAPP, INSTAGRAM } from "../../constants";
import Logo from "../../assets/images/CSC.svg";
import { Link } from "react-router-dom";
import { useUnderlineAnimation } from "../../hooks/useUnderlineAnimation";

const TULIO_URL = "https://tuliosalvatierra.com";

export default function Footer() {
  const { containerRef: footerLinksRef } = useUnderlineAnimation({ duration: 0.35 });

  return (
    <footer className="bg-white border-t border-gray-600 bg-gray-200">
      <div ref={footerLinksRef} className="w-full mx-auto px-1 p-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Logo Section */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="flex flex-col items-start">
              <div className="w-100 h-100 sm:w-100 sm:h-100  flex items-center justify-center mb-8">
                <span className="text-white font-bold text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
                  <Link to="/" aria-label="Carolina Skin Centre Home">
                    <img className="" src={Logo} alt="Carolina Skin Centre Logo" />
                  </Link>
                </span>
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 text-2xl leading-relaxed max-w-2xl">
                  Hydrate, renew and balance your skin
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="lg:col-span-3 xl:col-span-2 lg:pl-8">
            <h3 className="text-sm font-semibold text-gray-900 tracking-normal mb-8" style={{ fontFamily: "Grapevine", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Navigation
            </h3>
            <nav className="space-y-6">
              <ul className="list-none p-0 m-0">
                {MENU_ITEMS.map((item, index) => (
                  <li key={index + 1}>
                    <Link
                      to={item.url}
                      key={index}
                      className="underline-link block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl cursor-pointer w-fit"
                      style={{ cursor: "pointer" }}
                    >
                      {item.title}
                      <span className="underline" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="lg:col-span-3 xl:col-span-3 lg:pl-8">
            <h3 className="text-sm font-semibold text-gray-900 tracking-normal mb-8" style={{ fontFamily: "Grapevine", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Connect
            </h3>
            <nav className="space-y-2 flex flex-col items-start">
              <a
                href={WHATSAPP[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl cursor-pointer w-fit"
                style={{ cursor: "pointer" }}
              >
                WhatsApp
                <span className="underline" aria-hidden />
              </a>
              <a
                href={INSTAGRAM[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl cursor-pointer w-fit"
                style={{ cursor: "pointer" }}
              >
                Instagram
                <span className="underline" aria-hidden />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Carolina Skin Centre
            </p>
            <div className="flex space-x-6">
              <Link
                to="/policies"
                className="underline-link text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Cancellation Policy
                <span className="underline" aria-hidden />
              </Link>
              <a
                href={TULIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Made by Tulio Salvatierra
                <span className="underline" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
