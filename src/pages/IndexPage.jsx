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
import SEO from "../components/SEO/SEO";
import { LocalBusinessSchema, WebSiteSchema, FAQSchema } from "../components/SEO/StructuredData";

// FAQ data for structured data
const homeFaqs = [
  {
    question: "What skincare treatments are best for anti-aging?",
    answer: "We offer specialized anti-aging facials, such as HydraFacial, Nano Needling, and chemical peels, designed to target fine lines, wrinkles, and loss of elasticity. These treatments promote collagen production and leave your skin rejuvenated and glowing.",
  },
  {
    question: "How often should I get a deep cleansing facial?",
    answer: "For optimal results, we recommend a facial every 4-6 weeks. This helps maintain clear and healthy skin by removing impurities and preventing clogged pores.",
  },
  {
    question: "Are the waxing services suitable for sensitive skin?",
    answer: "Yes, our face and body waxing services are gentle and suitable for sensitive skin. We use high-quality, hypoallergenic waxes to minimize irritation and ensure a comfortable experience.",
  },
  {
    question: "Where is Carolina Skin Centre located?",
    answer: "Carolina Skin Centre is located at 705 W Wadley Ave Suite-23, Midland, TX 79705. We serve clients from Midland, Odessa, Andrews, Big Spring, and throughout the Permian Basin region of West Texas.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us at 432-638-0046 or using our online booking system. We recommend scheduling in advance to ensure availability for your preferred time.",
  },
];

export default function IndexPage() {
  return (
    <>
      <SEO
        title="Carolina Skin Centre | Skincare & Facials in Midland TX | Esthetician Near Me"
        description="Professional skincare & facial treatments in Midland, TX. HydraFacials, chemical peels, dermaplaning & more. Serving Midland, Odessa & West Texas. 18+ years experience. Book today!"
        keywords="skincare Midland TX, facial treatments near me, esthetician Midland Texas, HydraFacial Midland, chemical peels Midland TX, dermaplaning near me, skincare Odessa TX, best facials Midland, anti-aging treatments West Texas"
        url="/"
      />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema faqs={homeFaqs} />
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
