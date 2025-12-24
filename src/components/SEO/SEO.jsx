import { useEffect } from "react";

const SITE_URL = "https://www.carolinaskincentre.com";

export default function SEO({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url,
  type = "website",
  noindex = false,
}) {
  useEffect(() => {
    // Update document title
    document.title = title || "Carolina Skin Centre, Midland, TX - Professional Skincare Services";

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag("description", description);
    }

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", `${SITE_URL}${image}`, "property");
    updateMetaTag("og:url", `${SITE_URL}${url || ""}`, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:site_name", "Carolina Skin Centre", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:title", title, "name");
    updateMetaTag("twitter:description", description, "name");
    updateMetaTag("twitter:image", `${SITE_URL}${image}`, "name");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${url || ""}`);

    // Robots meta
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }
  }, [title, description, keywords, image, url, type, noindex]);

  return null;
}

