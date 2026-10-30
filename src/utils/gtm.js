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

/**
 * Push a booking_click event when someone opens the booking widget or taps
 * to call. In GTM, trigger on event "booking_click" and read booking_source
 * (e.g. "service:hydrafacial-midland-tx:hero") to see which page drove it.
 *
 * @param {string} source - Where the click happened
 * @param {string} [method] - "online" or "phone"
 */
export function pushBookingClick(source, method = "online") {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({
    event: "booking_click",
    booking_source: source,
    booking_method: method,
    page_path: window.location.pathname,
  });
}
