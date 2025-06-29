import AboutPage from "../components/AboutUs";
import FaqSectionFaq1 from "../components/faq/FaqSectionFaq1";
import FloatingCallbutton from "../components/floatingCallButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
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
