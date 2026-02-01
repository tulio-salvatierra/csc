import { useEffect } from "react";
import { TELEPHONE, EMAIL, BOOKING_URL_2 } from "../../constants";

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
      description: "Professional skincare services in Midland, Texas. Expert facial treatments, chemical peels, HydraFacials, and more with over 18 years of experience.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "705 W Wadley Ave Suite-23",
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
        "Facial Treatments",
        "HydraFacial",
        "Chemical Peels",
        "Dermaplaning",
        "Nano Needle Therapy",
        "Carboxy Therapy",
        "Microdermabrasion",
        "Anti-aging Treatments",
        "Waxing Services",
        "European Skincare Techniques",
        "Naturopathic Skincare",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Skincare Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HydraFacial",
              description: "Multi-step facial treatment that deeply cleanses, exfoliates, extracts impurities, and hydrates the skin.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dermaplaning",
              description: "Non-invasive skincare treatment that exfoliates and removes fine vellus hair for smoother, brighter skin.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chemical Peels",
              description: "Skin renewal treatment using carefully selected acids to improve texture, tone, and clarity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nano Needle Therapy",
              description: "Advanced non-invasive procedure using ultra-fine nano needles to stimulate collagen production.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carboxy Therapy",
              description: "Non-invasive CO2 skin treatment for facial rejuvenation and improved circulation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microdermabrasion",
              description: "Gentle exfoliation treatment to promote cell turnover and collagen production.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Facials",
              description: "Personalized facial treatments tailored to your unique skin type and concerns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Waxing Services",
              description: "Professional face and body hair removal using high-quality, hypoallergenic wax.",
            },
          },
        ],
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
  }, [faqs]);

  return null;
}

export function PersonSchema({ person = {} }) {
  useEffect(() => {
    if (!person.name) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}#person-${person.name.toLowerCase().replace(/\s+/g, '-')}`,
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
        "Anti-aging Treatments",
      ],
      alumniOf: person.alumniOf,
      award: person.awards,
    };

    let script = document.querySelector(`script[type="application/ld+json"]#person-${person.name.toLowerCase().replace(/\s+/g, '-')}`);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `person-${person.name.toLowerCase().replace(/\s+/g, '-')}`;
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
      serviceType: service.title,
      description: service.description,
      provider: {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#organization`,
        name: "Carolina Skin Centre",
        address: {
          "@type": "PostalAddress",
          streetAddress: "705 W Wadley Ave Suite-23",
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
            streetAddress: "705 W Wadley Ave Suite-23",
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

    serviceSchemas.forEach((schema, index) => {
      let script = document.querySelector(`script[type="application/ld+json"]#service-${index}`);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = `service-${index}`;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });
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
