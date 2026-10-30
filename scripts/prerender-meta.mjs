/**
 * Post-build: write a copy of dist/index.html for each service route with the
 * route's own <title>, description, canonical and social tags.
 *
 * Why: this is a client-rendered SPA, so before this step every URL returned
 * the homepage HTML (canonical pointing at "/") until JavaScript ran. Vercel
 * serves a matching static file before applying the catch-all rewrite, so
 * /services/hydrafacial-midland-tx now gets dist/services/hydrafacial-midland-tx/index.html.
 *
 * The React app still boots normally on these pages; only the initial head
 * tags differ. Values come from src/data/seoMeta.js, the same source the
 * client-side SEO component uses.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, SERVICE_SEO, PAGE_SEO } from "../src/data/seoMeta.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const template = readFileSync(join(distDir, "index.html"), "utf8");

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setTag(html, pattern, replacement, label, route) {
  if (!pattern.test(html)) {
    throw new Error(`prerender-meta: could not find ${label} in index.html (route ${route})`);
  }
  return html.replace(pattern, replacement);
}

function renderRoute(route, { title, description }) {
  const url = `${SITE_URL}${route}`;
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, "<title>", route);
  html = setTag(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}" />`, "meta description", route);
  html = setTag(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}" />`, "og:title", route);
  html = setTag(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}" />`, "og:description", route);
  html = setTag(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`, "og:url", route);
  html = setTag(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${t}" />`, "twitter:title", route);
  html = setTag(html, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${d}" />`, "twitter:description", route);
  html = setTag(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, "canonical", route);

  const outDir = join(distDir, route.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerender-meta: ${route} -> ${title}`);
}

const routes = {
  ...PAGE_SEO,
  ...Object.fromEntries(
    Object.entries(SERVICE_SEO).map(([slug, meta]) => [`/services/${slug}`, meta])
  ),
};

for (const [route, meta] of Object.entries(routes)) renderRoute(route, meta);
