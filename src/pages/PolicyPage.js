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
          <p>
            Business Policy: As part of our commitment to maintaining a relaxing
            and focused environment for all of our clients, we ask that children
            under 12 years old not be brought into the suite unless they are
            receiving services. Children who are 10 years or older and receiving
            services are welcome to be accompanied by their parents. Thank you
            so much for your understanding and cooperation!
          </p>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
      <FloatingCallbutton />
    </>
  );
}
