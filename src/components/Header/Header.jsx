import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/CSC.png";
import { Link } from "react-router-dom";
import {
  MENU_ITEMS,
  WHATSAPP,
  INSTAGRAM,
  BOOKING_URL_2,
  TELEPHONE,
  PHONE_DISPLAY,
  ADDRESS,
  ADDRESS_URL,
} from "../../constants/index.js";
import "./Header.css";
import BookingButton from "../BookingButton";
import SERVICES from "../blog/servicesPageCard";

/**
 * Site header + "card" menu (Nov 2026, Carolina asked for something more
 * creative; reference: luxury-boutique menus). A white card grows out of the
 * top-left corner, the page blurs behind it, links dim except the hovered one,
 * and hovering a treatment previews its photo in the blurred space (desktop).
 */
export default function Header({ showBookButton = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  const close = () => {
    setIsOpen(false);
    setPreview(null);
  };

  // Esc to close, lock page scroll, move focus in/out of the menu
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 350);
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      clearTimeout(t);
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const mainLinks = MENU_ITEMS.filter((item) => item.title !== "Services");
  let i = 0; // running index for the stagger delay

  return (
    <>
      <section className="sticky top-0 w-full z-auto header site-navbar">
        <nav className="cm-bar" aria-label="Main">
          <button
            ref={triggerRef}
            type="button"
            className="cm-trigger"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            onClick={() => setIsOpen(true)}
          >
            <span className="cm-trigger__lines" aria-hidden>
              <span />
              <span />
            </span>
            <span className="cm-trigger__label">Menu</span>
          </button>

          <a href="/" className="cm-logo" aria-label="Carolina Skin Centre Home">
            <img src={Logo} alt="Carolina Skin Centre Logo" />
          </a>

          <div className="cm-cta">
            {showBookButton && (
              <BookingButton
                href={BOOKING_URL_2}
                label={"Book Your Experience"}
                variant="light"
                trackingSource="header"
              />
            )}
          </div>
        </nav>
      </section>

      <div
        id="site-menu"
        className="cm"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="cm-scrim" onClick={close} aria-hidden />

        {/* Treatment photo preview, floats in the blurred space (desktop) */}
        <div className="cm-preview" aria-hidden>
          {SERVICES.map((s) => (
            <figure key={s.slug} className="cm-preview__item" data-active={preview === s.slug}>
              <img src={s.icon} alt="" loading="lazy" />
              <figcaption>{s.tagline}</figcaption>
            </figure>
          ))}
        </div>

        <div className="cm-card">
          <button ref={closeRef} type="button" className="cm-close" aria-label="Close menu" onClick={close}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>

          <div className="cm-scroll">
            <p className="cm-eyebrow" style={{ "--i": i++ }}>Treatments</p>
            <ul className="cm-list" onMouseLeave={() => setPreview(null)}>
              {SERVICES.map((s) => (
                <li key={s.slug} style={{ "--i": i++ }}>
                  <Link
                    className="cm-link"
                    to={`/services/${s.slug}`}
                    onClick={close}
                    onMouseEnter={() => setPreview(s.slug)}
                    onFocus={(e) => e.target.matches(":focus-visible") && setPreview(s.slug)}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="cm-list cm-list--secondary">
              <li style={{ "--i": i++ }}>
                <Link className="cm-link" to="/services" onClick={close}>
                  All services
                </Link>
              </li>
              {mainLinks.map((item) => (
                <li key={item.title} style={{ "--i": i++ }}>
                  <Link className="cm-link" to={item.url} onClick={close}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="cm-foot" style={{ "--i": i++ }}>
              <div className="cm-book">
                <BookingButton
                  href={BOOKING_URL_2}
                  label={"Book Your Experience"}
                  variant="light"
                  trackingSource="menu"
                />
              </div>
              <ul className="cm-utility">
                <li><a href={TELEPHONE}>Call {PHONE_DISPLAY}</a></li>
                <li><a href={WHATSAPP[0].url} target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href={INSTAGRAM[0].url} target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
              <a className="cm-address" href={ADDRESS_URL} target="_blank" rel="noreferrer">
                {ADDRESS}
              </a>
              <p className="cm-legal">
                <Link to="/policies" onClick={close}>Studio policies</Link>
                <span>© {new Date().getFullYear()} Carolina Skin Centre</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
