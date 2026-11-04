import ServicesComponent from "../components/blog/ServicesComponent";
import Header from "../components/Header";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import FloatingCallbutton from "../components/floatingCallButton";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema, ServiceSchema } from "../components/SEO/StructuredData";
import services from "../components/blog/servicesPageCard";
import { PAGE_SEO } from "../data/seoMeta";

export default function Services() {
  // Enhanced service data with additional SEO-friendly information
  const serviceData = services.map((service) => ({
    title: service.name,
    description: service.description,
    category: service.category,
    url: `/services/${service.slug}`,
  }));

  return (
    <>
      <SEO
        title={PAGE_SEO["/services"].title}
        description={PAGE_SEO["/services"].description}
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
