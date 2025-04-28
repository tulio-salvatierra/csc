import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import PolicyPage from "./pages/PolicyPage";
import FindUsPage from "./pages/Find-us";
import About from "./pages/AboutPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/policies" element={<PolicyPage />} />

      <Route path="/about" element={<About />} />

      <Route path="/findus" element={<FindUsPage />} />

    </Routes>
  );
}

export default App;
