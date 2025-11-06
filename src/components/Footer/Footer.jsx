import { MENU_ITEMS, WHATSAPP, INSTAGRAM, TULIO_URL } from "../../constants";
import Logo from "../../assets/images/CSC.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const TULIO_URL = "https://tuliosalvatierra.com";

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Logo Section */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="flex flex-col items-start">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-white font-bold text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
                  <Link href="/">
                    <img className="" src={Logo} alt="logo" />
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
            <h3 className="text-sm font-semibold text-gray-900 tracking-normal mb-8">
              Navigation
            </h3>
            <nav className="space-y-6">
              <ul className="list-none p-0 m-0">
                {MENU_ITEMS.map((item, index) => (
                  <li key={index + 1}>
                    <Link
                      href={item.url}
                      key={index}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="lg:col-span-3 xl:col-span-3 lg:pl-8">
            <h3 className="text-sm font-semibold text-gray-900 tracking-normal mb-8">
              Connect
            </h3>
            <nav className="space-y-6">
              <a
                href={WHATSAPP[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-2xl"
              >
                Instagram
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
                href="/policies"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                Cancellation Policy
              </Link>
              <a
                href={TULIO_URL}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                Made by Tulio Salvatierra
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
