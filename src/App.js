import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Services";
import FooterPage from "./pages/Footer";
import BrandsPage from "./pages/Brands";
import FindUsPage from "./pages/Find-us";
import About from "./pages/AboutPage";
import CalltoactionPage from "./pages/Calltoaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/about" element={<About />} />

      <Route path="/brands" element={<BrandsPage />} />

      <Route path="/findus" element={<FindUsPage />} />

      <Route path="/calltoaction" element={<CalltoactionPage />} />
    </Routes>
  );
}

export default App;
