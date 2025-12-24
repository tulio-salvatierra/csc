import AboutPage from "../components/AboutUs";
import FaqSectionFaq1 from "../components/faq/FaqSectionFaq1";
import FloatingCallbutton from "../components/floatingCallButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema } from "../components/SEO/StructuredData";

export default function About() {
  return (
    <>
      <SEO
        title="About Carolina Skin Centre - Expert Esthetician in Midland, TX"
        description="Meet Carolina, an experienced esthetician with over 18 years in skincare. European and naturopathic techniques combined with advanced medispa procedures in Midland, Texas."
        keywords="Carolina esthetician, Midland skincare expert, experienced esthetician, skin care professional, Midland TX esthetician, 18 years experience"
        url="/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
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
