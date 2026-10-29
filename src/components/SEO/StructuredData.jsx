import { useEffect } from "react";
import { TELEPHONE, EMAIL, BOOKING_URL_2 } from "../../constants";
import SERVICES from "../blog/servicesPageCard";

const SITE_URL = "https://www.carolinaskincentre.com";

export function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "@id": `${SITE_URL}#organization`,
      name: "Carolina Skin Centre",
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      telephone: TELEPHONE.replace("tel:", ""),
      email: EMAIL,
      description: "I provide professional skincare services in Midland, Texas: HydraFacials, customized facials, Nano-Needling, dermaplaning and lash tinting with over 18 years of experience.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "705 W Wadley Ave Suite 23",
        addressLocality: "Midland",
        addressRegion: "TX",
        postalCode: "79705",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "31.9974",
        longitude: "-102.0779",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      areaServed: [
        {
          "@type": "City",
          name: "Midland",
          "@id": "https://www.wikidata.org/wiki/Q128282",
        },
        {
          "@type": "City",
          name: "Odessa",
        },
        {
          "@type": "City",
          name: "Andrews",
        },
        {
          "@type": "City",
          name: "Big Spring",
        },
        {
          "@type": "City",
          name: "Stanton",
        },
        {
          "@type": "AdministrativeArea",
          name: "Permian Basin",
        },
      ],
      knowsAbout: [
        "Skincare",
        "skincare",
        "Facial Treatments",
        "facials",
        "skin care facials",
        "spa and facial",
        "face and spa",
        "skin care treatments",
        "skin care treatment near me",
        "skin esthetician",
        "skin near me",
        "HydraFacial",
        "Customized Facials",
        "Nano-Needling",
        "Dermaplaning",
        "Lash Tinting",
        "Anti aging Treatments",
        "European Skincare Techniques",
        "Naturopathic Skincare",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Skincare Services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            url: `${SITE_URL}/services/${service.slug}`,
          },
        })),
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: BOOKING_URL_2,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Book an Appointment",
        },
      },
      founder: {
        "@type": "Person",
        name: "Carolina Alcalá",
        jobTitle: "Licensed Esthetician",
      },
      foundingDate: "2006",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "30",
      },
      sameAs: [
        "https://www.instagram.com/carolinaskin",
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]#local-business');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "local-business";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}

export function WebSiteSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Carolina Skin Centre",
      url: SITE_URL,
      description: "Professional skincare services in Midland, Texas. Expert facial treatments with over 18 years of experience.",
      publisher: {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    };

    let script = document.querySelector('script[type="application/ld+json"]#website');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "website";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}

export function FAQSchema({ faqs = [] }) {
  useEffect(() => {
    if (faqs.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    let script = document.querySelector('script[type="application/ld+json"]#faq');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "faq";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    // Remove on route change so the FAQ markup doesn't leak onto other pages.
    return () => script.remove();
  }, [faqs]);

  return null;
}

export function PersonSchema({ person = {} }) {
  useEffect(() => {
    if (!person.name) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}#person${person.name.toLowerCase().replace(/\s+/g, "")}`,
      name: person.name,
      jobTitle: person.jobTitle || "Licensed Esthetician",
      description: person.description,
      image: person.image,
      worksFor: {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#organization`,
        name: "Carolina Skin Centre",
      },
      knowsAbout: person.expertise || [
        "Skincare",
        "Facial Treatments",
        "European Skincare Techniques",
        "Naturopathic Skincare",
        "Anti aging Treatments",
      ],
      alumniOf: person.alumniOf,
      award: person.awards,
    };

    const personId = `person${person.name.toLowerCase().replace(/\s+/g, "")}`;
    let script = document.querySelector(`script[type="application/ld+json"]#${personId}`);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = personId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [person]);

  return null;
}

export function ServiceSchema({ services = [] }) {
  useEffect(() => {
    if (services.length === 0) return;

    const serviceSchemas = services.map((service) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      ...(service.url && { url: `${SITE_URL}${service.url}` }),
      description: service.description,
      provider: {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#organization`,
        name: "Carolina Skin Centre",
        address: {
          "@type": "PostalAddress",
          streetAddress: "705 W Wadley Ave Suite 23",
          addressLocality: "Midland",
          addressRegion: "TX",
          postalCode: "79705",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "City", name: "Midland" },
        { "@type": "City", name: "Odessa" },
        { "@type": "City", name: "Andrews" },
        { "@type": "City", name: "Big Spring" },
        { "@type": "City", name: "Stanton" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Carolina Skin Centre",
          address: {
            "@type": "PostalAddress",
            streetAddress: "705 W Wadley Ave Suite 23",
            addressLocality: "Midland",
            addressRegion: "TX",
            postalCode: "79705",
          },
        },
      },
      ...(service.duration && {
        duration: service.duration,
      }),
      ...(service.price && {
        offers: {
          "@type": "Offer",
          price: service.price,
          priceCurrency: "USD",
        },
      }),
    }));

    // Clear Service markup left by a previous route (e.g. 5 entries from /services).
    document
      .querySelectorAll('script[type="application/ld+json"][id^="service-"]')
      .forEach((el) => el.remove());
    const scripts = serviceSchemas.map((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `service-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });
    return () => scripts.forEach((el) => el.remove());
  }, [services]);

  return null;
}

export function BreadcrumbSchema({ items = [] }) {
  useEffect(() => {
    if (items.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    };

    let script = document.querySelector('script[type="application/ld+json"]#breadcrumb');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "breadcrumb";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [items]);

  return null;
}
