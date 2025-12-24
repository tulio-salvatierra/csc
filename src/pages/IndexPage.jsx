import FloatingCallbutton from "../components/floatingCallButton";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import BrandsSection from "../components/BrandSection/BrandsSectionLogoClouds1";
import Footer from "../components/Footer";
import "../App.css";
import Services from "../components/Services";
import SingleReviewCarousel from "../components/Review/Review";
import Solutions from "../components/Solution/Solution";
import HL from "../components/Highlights";
import CancellationPolicy from "../components/CancelationPolicy";
import { Banner } from "../components/Banner/Banner";

export default function IndexPage() {
  return (
    <>
      <main className="overflow-visible min-h-screen">
        <div className="header sticky top-0 z-50 bg-white shadow-lg">
          <Header />
        </div>
        <div className="parent-page min-h-screen overflow-visible grid grid-cols-1">
          <div className="col-span-1">
            <Hero />
          </div>
          <div className="col-span-1 min-h-screen">
            <Solutions />
          </div>
          <div className="col-span-1">
            <CancellationPolicy />
          </div>
          <div className="col-span-1">
            <Services />
          </div>
          <div className="col-span-1">
            <HL />
          </div>
          <div className="col-span-1">
            <Banner />
          </div>
          <div className="col-span-1">
            <SingleReviewCarousel />
          </div>
          <div className="col-span-1">
            <BrandsSection />
          </div>
          <div className="col-span-1">
            <ContactSection />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
      <FloatingCallbutton />
    </>
  );
}
