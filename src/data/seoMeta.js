/**
 * Page titles and meta descriptions for the service detail pages.
 *
 * Plain data with no imports, so the browser (SEO component) and the
 * post-build script (scripts/prerender-meta.mjs) read the same values.
 * Keep titles under ~60 characters and descriptions under ~160.
 */
export const SITE_URL = "https://www.carolinaskincentre.com";

export const SERVICE_SEO = {
  "hydrafacial-midland-tx": {
    title: "HydraFacial in Midland, TX | Carolina Skin Centre",
    description:
      "HydraFacial in Midland, TX: deep cleansing, extractions and hydration in one visit with no downtime. Licensed esthetician, 18+ years. Book online.",
  },
  "facials-midland-tx": {
    title: "Facials in Midland, TX | Custom Facials | Carolina Skin Centre",
    description:
      "Custom facials in Midland, TX for acne, dryness, aging and sensitive skin, tailored by a licensed esthetician with 18+ years of experience. Book online.",
  },
  "nano-needling-midland-tx": {
    title: "Nano-Needling in Midland, TX | Carolina Skin Centre",
    description:
      "Nano-Needling in Midland, TX: a gentle, non-invasive treatment that boosts serum absorption and collagen. Book with Carolina Skin Centre.",
  },
  "dermaplaning-midland-tx": {
    title: "Dermaplaning in Midland, TX | Carolina Skin Centre",
    description:
      "Dermaplaning in Midland, TX to remove dead skin and peach fuzz for smoother, brighter skin. Book with Carolina Skin Centre.",
  },
  "lash-tinting-midland-tx": {
    title: "Lash Tinting in Midland, TX | Carolina Skin Centre",
    description:
      "Lash tinting in Midland, TX: darker, more defined natural lashes for weeks, no mascara needed. Book with Carolina Skin Centre.",
  },
};

/** Static pages that also get prerendered head tags. */
export const PAGE_SEO = {
  "/services": {
    title: "Skincare Services | HydraFacials, Facials & Nano-Needling in Midland TX",
    description:
      "Professional skincare services in Midland, TX: HydraFacials, customized facials, Nano-Needling, dermaplaning & lash tinting from a licensed esthetician serving Midland, Odessa & the Permian Basin.",
  },
};
