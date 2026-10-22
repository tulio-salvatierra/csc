import AboutPage from "../components/AboutUs";
import FaqSectionFaq1 from "../components/faq/FaqSectionFaq1";
import FloatingCallbutton from "../components/floatingCallButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema, PersonSchema, FAQSchema } from "../components/SEO/StructuredData";

// FAQ data for the about page
const aboutFaqs = [
  {
    question: "What skincare treatments are best for anti aging?",
    answer: "I offer specialized anti aging facials, such as HydraFacial, Nano-Needling and customized facials, designed to target fine lines, wrinkles, and loss of elasticity. These treatments promote collagen production and leave your skin rejuvenated and glowing.",
  },
  {
    question: "How often should I get a deep cleansing facial?",
    answer: "For optimal results, I recommend a facial every 4 to 6 weeks. This helps maintain clear and healthy skin by removing impurities and preventing clogged pores.",
  },
  {
    question: "Is there any downtime after a HydraFacial?",
    answer: "No. HydraFacial is designed for immediate results with no downtime. You can return to normal activities and wear makeup right after.",
  },
  {
    question: "Does Nano-Needling hurt?",
    answer: "Most clients feel only a light prickling or pressure. It is significantly gentler than traditional microneedling and requires no numbing for most clients.",
  },
];

// Carolina's profile data for PersonSchema
const carolinaProfile = {
  name: "Carolina Alcalá",
  jobTitle: "Licensed Esthetician & Owner",
  description: "Carolina Alcalá is an experienced aesthetician with over 18 years in professional skincare. She combines European and naturopathic techniques with advanced medispa procedures to deliver personalized treatments that enhance and maintain skin health.",
  expertise: [
    "European Skincare Techniques",
    "Naturopathic Skincare",
    "HydraFacial Treatments",
    "Nano-Needling",
    "Lash Tinting",
    "Anti aging Treatments",
    "Dermaplaning",
    "Skin Analysis and Consultation",
  ],
};

export default function About() {
  return (
    <>
      <SEO
        title="About Carolina Skin Centre | Expert Esthetician in Midland, TX | 18+ Years Experience"
        description="Meet Carolina Alcalá, an experienced skin esthetician with over 18 years in skincare and facials. European and naturopathic techniques combined with advanced medispa procedures in Midland, Texas. Your local esthetician near me for customized skin care facials, skin care treatments, and spa and facial services serving Midland, Odessa & West Texas."
        keywords="esthetician near me, skin esthetician, facials, skin care facials, skin care treatments, skincare, Carolina Alcalá esthetician, Midland skincare expert, skin care professional Midland TX, experienced esthetician near me, 18 years experience, best esthetician West Texas, skincare specialist Permian Basin"
        url="/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <PersonSchema person={carolinaProfile} />
      <FAQSchema faqs={aboutFaqs} />
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <AboutPage />
          <FaqSectionFaq1 />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
      <FloatingCallbutton />
    </>
  );
}
