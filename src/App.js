import React, {useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import PolicyPage from "./pages/PolicyPage";
import About from "./pages/AboutPage";


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
      <Route path="/" element={<IndexPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/policies" element={<PolicyPage />} />

      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;
