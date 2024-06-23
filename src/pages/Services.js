import ServicesComponent from "../components/blog/ServicesComponent";
import Header from "../components/Header";
import CallToAction from "../components/Call-to-action";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Services() {
  return (
    <>
      <Header />
      <ServicesComponent />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
