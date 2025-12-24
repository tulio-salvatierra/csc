import ServicesComponent from "../components/blog/ServicesComponent";
import Header from "../components/Header";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import FloatingCallbutton from "../components/floatingCallButton";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema, ServiceSchema } from "../components/SEO/StructuredData";
import services from "../components/blog/servicesPageCard";

export default function Services() {
  const serviceData = services.map((service) => ({
    title: service.name,
    description: service.description,
  }));

  return (
    <>
      <SEO
        title="Skincare Services - Carolina Skin Centre, Midland TX"
        description="Professional skincare services including chemical peels, nano needle treatments, carboxy therapy, and waxing services. Expert facial treatments in Midland, Texas."
        keywords="skincare services Midland, chemical peels, nano needle, carboxy therapy, facial treatments, waxing services, skin rejuvenation, Midland TX esthetician"
        url="/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <ServiceSchema services={serviceData} />
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <ServicesComponent />
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
