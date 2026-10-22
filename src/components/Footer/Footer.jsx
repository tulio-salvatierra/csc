import { MENU_ITEMS, WHATSAPP, INSTAGRAM, ADDRESS_URL } from "../../constants";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Logo from "../../assets/images/CSC.png";
import { Link } from "react-router-dom";
import { useUnderlineAnimation } from "../../hooks/useUnderlineAnimation";

const CICERO_URL = "https://cicerowebstudio.xyz";

export default function Footer() {
  const { containerRef: footerLinksRef } = useUnderlineAnimation({ duration: 0.35 });

  return (
    <footer className="bg-[#faf7f2] px-4 border-t border-black/10">
      <div ref={footerLinksRef} className="w-full max-w-7xl mx-auto pt-20 pb-10 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Logo + tagline */}
          <div className="lg:col-span-7 flex flex-col items-center text-center">
            <Link to="/" aria-label="Carolina Skin Centre Home">
              <img className="w-[200px] sm:w-[300px] h-auto mx-auto" src={Logo} alt="Carolina Skin Centre Logo" />
            </Link>
            <span className="block w-16 h-px bg-[#c9b8a6] my-6" aria-hidden />
            <p className="footer-tagline text-gray-700 text-xl leading-relaxed max-w-sm font-light">
              Personalized skincare and professional facial treatments in
              Midland, Texas.
            </p>
          </div>

          {/* Menu + Connect, separated by a thin vertical rule on desktop */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-black/10">
            <div className="px-8 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-8" style={{ fontFamily: "Grapevine", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Menu
              </h3>
              <nav>
                <ul className="list-none p-0 m-0 space-y-4">
                  {MENU_ITEMS.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        className="underline-link block text-gray-700 hover:text-gray-900 transition-colors duration-200 text-xl w-fit"
                      >
                        {item.title}
                        <span className="underline" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="px-8 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-8" style={{ fontFamily: "Grapevine", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Connect
              </h3>
              <ul className="list-none p-0 m-0 space-y-4">
                {[
                  { href: WHATSAPP[0].url, label: "WhatsApp", Icon: FaWhatsapp },
                  { href: INSTAGRAM[0].url, label: "Instagram", Icon: FaInstagram },
                  { href: ADDRESS_URL, label: "Midland, Texas", Icon: LuMapPin },
                ].map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-link footer-connect-link flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-xl w-fit"
                    >
                      <Icon className="w-6 h-6 shrink-0" aria-hidden />
                      {label}
                      <span className="underline" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-black/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Carolina Skin Centre. All rights reserved.
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
                href={CICERO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Made by Cicero Web Studio
                <span className="underline" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
