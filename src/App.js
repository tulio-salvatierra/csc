import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import ContactPage from "./pages/Contact.js";
import ServicesPage from "./pages/Services.js";
import FooterPage from "./pages/Footer.js";
import BrandsPage from "./pages/Brands.js";
import FindUsPage from "./pages/Find-us.js";
import FaqPage from "./pages/Faq.js";
import CalltoactionPage from "./pages/Calltoaction.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/footer" element={<FooterPage />} />

      <Route path="/brands" element={<BrandsPage />} />

      <Route path="/findus" element={<FindUsPage />} />

      <Route path="/faq" element={<FaqPage />} />

      <Route path="/calltoaction" element={<CalltoactionPage />} />
    </Routes>
  );
}

export default App;
