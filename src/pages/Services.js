import ServicesComponent from "../components/blog/ServicesComponent";
import Header from "../components/Header";
import CallToAction from "../components/Call-to-action";
import Footer from "./Footer";
import Contact from "./Contact";
import ContactSection from "../components/contacts/ContactSectionContacts1";

export default function Services() {
  return (
    <> <div className="parent-page">
    <div className="header">
      <Header />
    </div>
    <div className="content">
      <ServicesComponent />
      <CallToAction />
      <ContactSection /></div>
      <div className="footer">
          <Footer />
        </div>
    </div>
    </>
  );
}
