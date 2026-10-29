import { useParams, Navigate, Link } from "react-router-dom";
import { Fragment, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import FloatingCallbutton from "../components/floatingCallButton";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "../components/SEO/StructuredData";
import services from "../components/blog/servicesPageCard";
import { getServiceDetailContent } from "../data/serviceDetailContent";
import { SERVICE_SEO } from "../data/seoMeta";
import BookingButton from "../components/BookingButton";
import { BOOKING_URL_2, TELEPHONE } from "../constants";
import { pushBookingClick } from "../utils/gtm";
import { useFadeInAnimation } from "../hooks/useFadeInAnimation";
import "../App.css";

const PHONE_DISPLAY = "(432) 638-0046";

/**
 * Renders a string with [text](/path) markers as internal links.
 * Only site-relative paths are linked; anything else stays plain text.
 */
function RichText({ text }) {
  const parts = [];
  const pattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} to={match[2]} className="underline underline-offset-4 text-black hover:text-gray-600">
        {match[1]}
      </Link>
    );
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}

function Paragraphs({ text, className = "text-gray-600 mb-6 leading-relaxed" }) {
  return text.split("\n\n").map((paragraph, i) => (
    <p key={i} className={className}>
      <RichText text={paragraph.trim()} />
    </p>
  ));
}

function PhoneLink({ source }) {
  return (
    <a
      href={TELEPHONE}
      onClick={() => pushBookingClick(source, "phone")}
      className="text-gray-600 underline underline-offset-4 hover:text-black"
    >
      {PHONE_DISPLAY}
    </a>
  );
}

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

  const { faqs } = content;
  const seoName = service.seoName || service.name;
  const seo = SERVICE_SEO[service.slug] || {};
  const pageUrl = `/services/${service.slug}`;
  const track = (spot) => `service:${service.slug}:${spot}`;
  const relatedServices = (content.related || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: pageUrl },
  ];

  return (
    <>
      <SEO
        title={seo.title || `${seoName} in Midland, TX | Carolina Skin Centre`}
        description={seo.description || service.seoDescription || `${seoName} in Midland, TX at Carolina Skin Centre. ${service.description}`}
        keywords={`${seoName} Midland TX, ${seoName} near me, ${service.category} Midland Texas, ${seoName} Odessa TX, Carolina Skin Centre, esthetician Midland TX, esthetician near me, facials near me`}
        url={pageUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        services={[{ title: seoName, description: service.description, url: pageUrl }]}
      />
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          {/* Hero */}
          <section ref={addToRefs} className="bg-white">
            <div className="bg-cover bg-center bg-services">
              <div className="flex flex-col items-center justify-center mb-16 pt-24 pb-12 px-4">
                <nav aria-label="Breadcrumb" className="mb-2">
                  <ol className="flex flex-wrap gap-2 text-white/90 text-sm list-none p-0 m-0">
                    <li><Link to="/" className="text-white/90 no-underline hover:underline">Home</Link></li>
                    <li aria-hidden="true">/</li>
                    <li><Link to="/services" className="text-white/90 no-underline hover:underline">Services</Link></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page">{service.name}</li>
                  </ol>
                </nav>
                <h1 className="m-3 text-center text-white text-5xl md:text-7xl font-bold">
                  {content.h1 || seoName}
                  <span className="block mt-2 text-2xl md:text-3xl font-light">
                    {content.subhead || "in Midland, TX"}
                  </span>
                </h1>
                {content.intro && (
                  <div className="mt-6">
                    <BookingButton href={BOOKING_URL_2} label={content.bookLabel || "Book my appointment"} trackingSource={track("hero")} />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Highlights */}
          {content.highlights && (
            <section ref={addToRefs} className="bg-white pb-4">
              <dl className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.highlights.map((h) => (
                  <div key={h.label} className="border border-black/10 rounded-sm p-4 text-center">
                    <dt className="uppercase text-xs tracking-widest text-gray-500 mb-1">{h.label}</dt>
                    <dd className="m-0 text-gray-800">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Intro or legacy article + featured image */}
          <section ref={addToRefs} className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="mb-10 overflow-hidden rounded-sm">
                <img
                  src={service.icon}
                  alt={`${service.name} at Carolina Skin Centre in Midland, TX`}
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>
              <Paragraphs text={content.intro || content.article} />
              {!content.intro && (
                <div className="mt-10 text-center">
                  <BookingButton href={BOOKING_URL_2} label="Book my appointment" trackingSource={track("article")} />
                </div>
              )}
            </div>
          </section>

          {/* Steps */}
          {content.steps && (
            <section ref={addToRefs} className="bg-gray-100 py-16">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <h2 className="font-heading text-3xl md:text-4xl mb-10 text-center">{content.stepsTitle}</h2>
                <ol className="list-none p-0 m-0 grid gap-6 md:grid-cols-2">
                  {content.steps.map((step, i) => (
                    <li key={step.title} className="bg-white p-6 rounded-sm shadow-sm">
                      <span className="text-sm text-gray-400 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-heading text-xl md:text-2xl mt-1 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-0">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Who it's for + comparison + pairings */}
          {content.goodFor && (
            <section ref={addToRefs} className="bg-white py-16">
              <div className="max-w-4xl mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl mb-6">{content.goodForTitle}</h2>
                  <ul className="pl-5 text-gray-600 leading-relaxed space-y-2">
                    {content.goodFor.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  {content.compare && (
                    <>
                      <h2 className="font-heading text-2xl md:text-3xl mb-6">{content.compare.title}</h2>
                      <Paragraphs text={content.compare.body} />
                    </>
                  )}
                  {content.pairWith && (
                    <>
                      <h3 className="font-heading text-xl md:text-2xl mb-4">{content.pairWith.title}</h3>
                      <Paragraphs text={content.pairWith.body} />
                    </>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Aftercare + booking */}
          {content.aftercare && (
            <section ref={addToRefs} className="bg-gray-100 py-16">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-2xl md:text-3xl mb-6">{content.aftercareTitle}</h2>
                <ul className="text-left inline-block pl-5 text-gray-600 leading-relaxed space-y-2 mb-10">
                  {content.aftercare.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="mb-4">
                  <BookingButton href={BOOKING_URL_2} label="Book my appointment" trackingSource={track("aftercare")} />
                </div>
                <p className="text-gray-500 mb-0">
                  Prefer to call? <PhoneLink source={track("aftercare")} />
                </p>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="py-24 bg-white grid place-items-center" ref={addToRefs}>
            <div className="container w-full max-w-5xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="fs-1 mb-6 leading-relaxed text-center font-heading">
                  {service.name} FAQ
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Common questions about {service.name.toLowerCase()} at my Midland studio.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className="bg-gray-50 py-8 px-6 md:px-10 rounded-sm shadow-sm"
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
                <p className="mb-6 text-gray-500">
                  Have more questions? Call <PhoneLink source={track("faq")} />, or book online.
                </p>
                <BookingButton href={BOOKING_URL_2} label="Book online" trackingSource={track("faq")} />
              </div>
            </div>
          </section>

          {/* Related treatments */}
          {relatedServices.length > 0 && (
            <section ref={addToRefs} className="bg-gray-100 py-16">
              <div className="max-w-5xl mx-auto px-4">
                <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">Related treatments</h2>
                <ul className="list-none p-0 m-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedServices.map((rel) => (
                    <li key={rel.slug}>
                      <Link to={`/services/${rel.slug}`} className="block no-underline bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow h-full">
                        <img
                          src={rel.icon}
                          alt={`${rel.name} in Midland, TX`}
                          loading="lazy"
                          className="w-full h-44 object-cover rounded-t-sm"
                        />
                        <div className="p-5">
                          <h3 className="font-heading text-xl mb-2 text-black">{rel.name} in Midland</h3>
                          <p className="text-gray-500 mb-0">{rel.tagline}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-center mt-8 mb-0">
                  <Link to="/services" className="underline underline-offset-4 text-black">See all services</Link>
                </p>
              </div>
            </section>
          )}

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
