import FloatingCallbutton from "../components/floatingCallButton";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import Brands from "./Brands";
import Footer from "./Footer";

import "../App.css";
import Services from "../components/Services";
import SingleReviewCarousel from "../components/Review/Review";

import Solutions from "../components/Solution/Solution";
import HL from "../components/Highlights";
import CancellationPolicy from "../components/CancelationPolicy";

export default function IndexPage() {
  return (
    <>
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          
          <Hero />
          <Solutions />
          <CancellationPolicy />
          <Services />
          <HL />
          <SingleReviewCarousel />
          <Brands />
          <ContactSection />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
      <FloatingCallbutton />
    </>
  );
}
