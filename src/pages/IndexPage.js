import CallToAction from "../components/Call-to-action";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import Brands from "./Brands";
import Footer from "./Footer";
import FindUs from "./Find-us";
import "../App.css";
import Services from "../components/Services";
import SingleReviewCarousel from "../components/Review/Review";
import Problem from "../components/Problem";
import Solutions from "../components/Solution/Solution";
import HL from "../components/Highlights";

export default function IndexPage() {
  return (
    <>
      <div className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Hero />
          <Solutions />
          <Services />
          <HL />
          <SingleReviewCarousel />
          <Brands />
          <ContactSection />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
