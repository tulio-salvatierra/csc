/**
 * Push a page_view event to the GTM dataLayer for SPA route changes.
 * Call this when the route changes so GTM can track virtual page views.
 *
 * @param {string} [path] - Page path (defaults to window.location.pathname)
 * @param {string} [title] - Page title (defaults to document.title)
 */
export function pushPageView(path, title) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({
    event: "page_view",
    page_path: path ?? window.location.pathname,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}
