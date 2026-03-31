import Lenis from "lenis";
import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PolicyPage from "./pages/PolicyPage";
import About from "./pages/AboutPage";
import NotFound from "./pages/notFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PromoModal from "./components/PromoModal/PromoModal";
import promoModalBackground from "./assets/images/hydra.jpg";
import { pushPageView } from "./utils/gtm";

function App() {
  const location = useLocation();

  // Push page_view to GTM dataLayer on SPA route change
  useEffect(() => {
    pushPageView(location.pathname, document.title);
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis();
    // Make Lenis accessible globally for ScrollToTop component
    window.lenis = lenis;
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Cleanup
      if (window.lenis) {
        window.lenis.destroy();
        delete window.lenis;
      }
    };
  }, []);
  return (
    <>
      <PromoModal
        backgroundImage={promoModalBackground}
        title="Platinum HydraFacial:"
        buttonLabel="Book now"
      >
        <p>
          <strong>First Platinum HydraFacial - Introductory Offer</strong>
        </p>
        <p>
          Experience the ultimate in skincare with your first Platinum HydraFacial. This
          signature treatment deeply cleanses, exfoliates, and hydrates your skin, leaving it
          radiant and refreshed.
        </p>
        <p>
          <span className="promo-modal-price promo-modal-price--was">$285</span>{" "}
          <span className="promo-modal-price promo-modal-price--now">$235</span> - Save $50 on
          your first Platinum HydraFacial
        </p>
        <p>Book now and treat yourself to the luxury your skin deserves.</p>
      </PromoModal>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} errorElement={NotFound} />
        <Route path="/services" element={<ServicesPage />} errorElement={NotFound}/>
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} errorElement={NotFound}/>
        <Route path="/policies" element={<PolicyPage />} errorElement={NotFound}/>
        <Route path="/about" element={<About />} errorElement={NotFound}/>
      </Routes>
    </>
  );
}

export default App;
