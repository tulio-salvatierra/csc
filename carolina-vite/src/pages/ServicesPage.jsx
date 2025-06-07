import ServicesComponent from "../components/blog/ServicesComponent";
import Header from "../components/Header";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import FloatingCallbutton from "../components/floatingCallButton";

export default function Services() {
  return (
    <>
      {" "}
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <ServicesComponent />
          <CallToAction />
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
