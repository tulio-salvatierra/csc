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
  // Enhanced service data with additional SEO-friendly information
  const serviceData = services.map((service) => ({
    title: service.name,
    description: service.description,
    category: service.category,
  }));

  return (
    <>
      <SEO
        title="Skincare Services | Facials, HydraFacials, Chemical Peels in Midland TX"
        description="Professional skincare services in Midland, TX: HydraFacials, chemical peels, dermaplaning, nano needle, carboxy therapy & waxing. Expert facial treatments serving Midland, Odessa & the Permian Basin."
        keywords="skincare services Midland TX, HydraFacial near me, chemical peels Midland, dermaplaning Midland Texas, nano needle therapy, carboxy therapy West Texas, facial treatments Odessa TX, waxing services Midland, skin rejuvenation Permian Basin, best facials near me"
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
