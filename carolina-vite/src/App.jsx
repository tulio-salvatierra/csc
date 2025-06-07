import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import PolicyPage from "./pages/PolicyPage";
import About from "./pages/AboutPage";
import NotFound from "./pages/notFound";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    
      <Routes>
        <Route path="/" element={<IndexPage />} errorElement={NotFound} />
        <Route path="/services" element={<ServicesPage />} errorElement={NotFound}/>
        <Route path="/policies" element={<PolicyPage />} errorElement={NotFound}/>
        <Route path="/about" element={<About />} errorElement={NotFound}/>
      </Routes>
    
  );
}

export default App;
