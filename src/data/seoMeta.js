/**
 * Page titles and meta descriptions for the service pages.
 *
 * Plain data with no imports, so the browser (SEO component) and the
 * post-build script (scripts/prerender-meta.mjs) read the same values.
 * Keep titles under ~60 characters and descriptions under ~160.
 * Only use claims Carolina has confirmed (no durations, prices or results).
 */
export const SITE_URL = "https://www.carolinaskincentre.com";

export const SERVICE_SEO = {
  "hydrafacial-midland-tx": {
    title: "HydraFacial in Midland, TX | Carolina Skin Centre",
    description:
      "HydraFacial in Midland, TX: deep cleansing, exfoliation, extractions and hydration in one treatment. Book with Carolina Skin Centre.",
  },
  "facials-midland-tx": {
    title: "Customized Facials in Midland, TX | Carolina Skin Centre",
    description:
      "Custom facials in Midland, TX tailored to your skin, from deep hydration to acne and anti-aging care. Book with Carolina Skin Centre.",
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
