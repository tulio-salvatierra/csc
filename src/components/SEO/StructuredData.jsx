import { useEffect } from "react";
import { ADDRESS, TELEPHONE, EMAIL, ADDRESS_URL } from "../../constants";

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
      areaServed: {
        "@type": "City",
        name: "Midland",
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
        name: "Carolina Skin Centre",
      },
      areaServed: {
        "@type": "City",
        name: "Midland",
      },
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

