import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import {
  MENU_ITEMS,
  WHATSAPP,
  INSTAGRAM,
  BOOKING_URL_2,
} from "../../constants/index.js";
import Logo from "./../../assets/images/CSC.png";

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navWrap = useRef(null);
  const overlay = useRef(null);
  const menu = useRef(null);
  const bgPanels = useRef([]);
  const menuLinks = useRef([]);
  const fadeTargets = useRef([]);
  const menuButtonTexts = useRef([]);
  const menuButtonIcon = useRef(null);
  const tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
    gsap.defaults({
      ease: "main",
      duration: 0.7,
    });

    tl.current = gsap.timeline({ paused: true });

    // Initialize refs arrays length
    bgPanels.current = bgPanels.current.slice(0, 3);
    menuLinks.current = menuLinks.current.slice(0, 5);
    fadeTargets.current = fadeTargets.current.slice(0, 8);
    menuButtonTexts.current = menuButtonTexts.current.slice(0, 2);
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      navWrap.current.style.display = "block";

      tl.current
        .clear()
        .set(navWrap.current, { display: "block" })
        .set(menu.current, { xPercent: 0 }, "<")
        .fromTo(
          menuButtonTexts.current,
          { yPercent: 0 },
          { yPercent: -100, stagger: 0.2 }
        )
        .fromTo(menuButtonIcon.current, { rotate: 0 }, { rotate: 315 }, "<")
        .fromTo(overlay.current, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
        .fromTo(
          bgPanels.current,
          { xPercent: 101 },
          { xPercent: 0, stagger: 0.12, duration: 0.575 },
          "<"
        )
        .fromTo(
          menuLinks.current,
          { yPercent: 140, rotate: 10 },
          { yPercent: 0, rotate: 0, stagger: 0.05 },
          "<+=0.35"
        )
        .fromTo(
          fadeTargets.current,
          { autoAlpha: 0, yPercent: 50 },
          { autoAlpha: 1, yPercent: 0, stagger: 0.04 },
          "<+=0.2"
        );
      tl.current.play();
    } else {
      tl.current
        .clear()
        .to(overlay.current, { autoAlpha: 0 })
        .to(menu.current, { xPercent: 120 }, "<")
        .to(menuButtonTexts.current, { yPercent: 0 }, "<")
        .to(menuButtonIcon.current, { rotate: 0 }, "<")
        .set(navWrap.current, { display: "none" });
      tl.current.play();
    }
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const socials = [...WHATSAPP, ...INSTAGRAM];

  return (
    <header className="top-0.5">
      <div class="header-logo flex justify-center items-baseline p-4">
          <img className="h-28 w-auto " src={Logo} alt="Carolina Skin Center Logo"/>
        </div>
      <button
        className="menu-button fixed top-8 right-8 z-60 flex flex-col items-center justify-center space-y-1 bg-white p-2 rounded-md shadow-md cursor-pointer"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        ref={(el) => {
          if (el && !menuButtonTexts.current.includes(el))
            menuButtonTexts.current.push(el);
        }}
      >       
        <svg
          ref={menuButtonIcon}
          className="menu-button-icon w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
          
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div
        ref={navWrap}
        className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}
        data-nav={isOpen ? "open" : "closed"}
      >
        <div
          ref={overlay}
          className="fixed inset-0 bg-black/50 backdrop-blur-lg"
          data-menu-toggle=""
          onClick={() => setIsOpen(false)}
        ></div>
        <nav
          ref={menu}
          className="absolute inset-y-0 right-0 w-3/4 md:w-1/3"
        >
          <div className="menu-bg">
            <div
              ref={(el) => {
                if (el && !bgPanels.current.includes(el))
                  bgPanels.current.push(el);
              }}
              className="bg-panel first"
            ></div>
            <div
              ref={(el) => {
                if (el && !bgPanels.current.includes(el))
                  bgPanels.current.push(el);
              }}
              className="bg-panel second"
            ></div>
            <div
              ref={(el) => {
                if (el && !bgPanels.current.includes(el))
                  bgPanels.current.push(el);
              }}
              className="bg-panel"
            ></div>
          </div>
          <div className="menu-inner">
            <h2 className="p-6 text-gray-500 text-xl sm:text-sm  font-normal">Menu</h2>
            <ul className="menu-list flex flex-col p-6 space-y-4">
              {MENU_ITEMS.map(({ title, number, url },idx) => (
                
                <li key={idx} className="menu-list-item">
                  <a
                    href={`${url}`}
                    className="menu-link w-inline-block flex justify-between items-center"
                    ref={(el) => {
                      if (el && !menuLinks.current.includes(el))
                        menuLinks.current.push(el);
                    }}
                  >
                    <p className="menu-link-heading text-2xl font-semibold">
                      {title}
                    </p>
                    <p className="eyebrow text-sm text-gray-500">{number}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="menu-details p-6 space-y-2">
              <h2
                data-menu-fade=""
                className="text-gray-500 text-xl font-bold"
                ref={(el) => {
                  if (el && !fadeTargets.current.includes(el))
                    fadeTargets.current.push(el);
                }}
              >
                Socials
              </h2>
              <div className="socials-row flex flex-wrap gap-4">
                {socials.map(
                  ({url, title}, idx) => (
                    <a
                      key={idx}
                      href={url}
                      data-menu-fade=""
                      className="p-large text-link text-lg text-blue-600 hover:underline"
                      ref={(el) => {
                        if (el && !fadeTargets.current.includes(el))
                          fadeTargets.current.push(el);
                      }}
                    >
                      {title}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
