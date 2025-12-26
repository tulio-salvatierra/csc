import Lenis from "lenis";
import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import PolicyPage from "./pages/PolicyPage";
import About from "./pages/AboutPage";
import NotFound from "./pages/notFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} errorElement={NotFound} />
        <Route path="/services" element={<ServicesPage />} errorElement={NotFound}/>
        <Route path="/policies" element={<PolicyPage />} errorElement={NotFound}/>
        <Route path="/about" element={<About />} errorElement={NotFound}/>
      </Routes>
    </>
  );
}

export default App;
