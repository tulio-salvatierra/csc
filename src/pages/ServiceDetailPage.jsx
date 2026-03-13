import { useParams, Navigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import FloatingCallbutton from "../components/floatingCallButton";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema, FAQSchema } from "../components/SEO/StructuredData";
import services from "../components/blog/servicesPageCard";
import { getServiceDetailContent } from "../data/serviceDetailContent";
import BookingButton from "../components/BookingButton";
import { BOOKING_URL_2 } from "../constants";
import { useRef } from "react";
import { useFadeInAnimation } from "../hooks/useFadeInAnimation";
import "../App.css";

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);
  const content = service ? getServiceDetailContent(serviceSlug) : null;

  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };
  useFadeInAnimation(fadeRefs);

  if (!service || !content) {
    return <Navigate to="/services" replace />;
  }

  const { article, faqs } = content;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` },
  ];

  return (
    <>
      <SEO
        title={`${service.name} | Carolina Skin Centre | Midland TX | Skin Care Facials`}
        description={`${service.description} Esthetician near me in Midland, TX offering ${service.name.toLowerCase()} as part of professional skin care treatments, facials, and spa and facial services.`}
        keywords={`${service.name} Midland TX, ${service.category}, Carolina Skin Centre, skincare ${service.name.toLowerCase()}, esthetician near me, skin care facials, skin care treatments, skincare, spa and facial, skin esthetician`}
        url={`/services/${service.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          {/* Hero: service name + image */}
          <section ref={addToRefs} className="bg-white">
            <div className="bg-cover bg-center bg-services">
              <div className="flex flex-col items-center justify-center mb-16 pt-24 pb-12">
               
                <h1 className="m-3 text-center text-white text-5xl md:text-7xl font-bold">
                  {service.name}
                </h1>
                <Link
                  to="/services"
                  style={{ fontFamily: "Grapevine", textTransform: "uppercase" }}
                  className="mb-4 font-[Grapevine] inline-block bg-black/20 uppercase text-white text-sm font-light px-2 py-1 rounded no-underline hover:bg-black/30 transition-colors"
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </section>

          {/* Article + featured image */}
          <section ref={addToRefs} className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="mb-10 overflow-hidden rounded-sm">
                <img
                  src={service.icon}
                  alt={`${service.name} skin care facial treatment at Carolina Skin Centre`}
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>
              <div className="prose-like">
                {article.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-6 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              <div className="mt-10 text-center">
                <BookingButton href={BOOKING_URL_2} label="Book my appointment" />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-100 grid place-items-center" ref={addToRefs}>
            <div className="container w-full max-w-5xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="fs-1 mb-6 leading-relaxed text-center font-heading">
                  FAQ
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Common questions about my {service.name} service.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className="bg-white py-8 px-6 md:px-10 rounded-sm shadow-sm"
                  >
                    <h3 className="leading-relaxed mb-4 font-heading text-xl md:text-2xl">
                      {faq.question}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-0">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="mb-6 text-gray-500">Have more questions?</p>
                <BookingButton href={BOOKING_URL_2} label="Get in Touch" />
              </div>
            </div>
          </section>

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
