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
        title="Skincare Services | HydraFacials, Facials & Nano-Needling in Midland TX"
        description="Professional skincare services in Midland, TX: HydraFacials, customized facials, Nano-Needling, dermaplaning & lash tinting. Skin care treatments and spa and facial services from a licensed skin esthetician serving Midland, Odessa & the Permian Basin."
        keywords="esthetician near me, face and spa, facials, skin care facials, skin care treatment near me, skin care treatments, skin esthetician, skin near me, skincare, spa and facial, skincare services Midland TX, HydraFacial near me, Nano-Needling Midland, dermaplaning Midland Texas, lash tinting Midland, facial treatments Odessa TX, skin rejuvenation Permian Basin, best facials near me"
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
