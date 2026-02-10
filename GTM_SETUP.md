# Google Tag Manager (GTM) Setup – Vite + Vercel

This project is configured for GTM with env-based ID, SPA page_view tracking, and an optional first-party gateway.

## 1. Integration (index.html)

- **Head:** GTM script is at the top of `<head>` and uses the placeholder `%VITE_GTM_ID%`.
- **Body:** The noscript iframe is directly after `<body>` and also uses `%VITE_GTM_ID%`.
- At build time, Vite replaces `%VITE_GTM_ID%` with the `VITE_GTM_ID` environment variable (or falls back to `GTM-WN7JPVGX`).

## 2. Environment variable (Vercel)

1. In **Vercel** → Project → **Settings** → **Environment Variables** add:
   - **Name:** `VITE_GTM_ID`
   - **Value:** `GTM-WN7JPVGX` (or your container ID)
   - **Environments:** Production, Preview, Development (as needed)

2. **Redeploy** after adding or changing the variable (builds use env at build time).

Local builds use `GTM-WN7JPVGX` if `VITE_GTM_ID` is not set (see `vite.config.js`).

## 3. SPA tracking (page_view)

- **Utility:** `src/utils/gtm.js` exposes `pushPageView(path?, title?)` and pushes a `page_view` event to `window.dataLayer` with `page_path`, `page_title`, and `page_location`.
- **Wiring:** In `App.jsx`, `useLocation()` and a `useEffect` on `location.pathname` call `pushPageView(location.pathname, document.title)` on every route change.
- In GTM you can create a trigger that fires on Custom Event `page_view` and use it for GA4 or other tags.

## 4. First-party gateway (optional)

- **vercel.json** includes a rewrite so that requests to `/metrics/:path*` are proxied to `https://gtm-wn7jpvgx.fps.goog/:path*` (Google Tag first-party gateway for container `GTM-WN7JPVGX`).
- To load GTM via your domain (e.g. `https://yoursite.com/metrics/gtm.js?id=GTM-WN7JPVGX`), you would change the script `src` in `index.html` from `https://www.googletagmanager.com/gtm.js?id=...` to `'/metrics/gtm.js?id='+i` (and ensure the rewrite is deployed). The current HTML still loads from googletagmanager.com; the rewrite is ready when you switch.

## 5. Verification checklist

### Vercel

- [ ] **Environment variable:** `VITE_GTM_ID` is set (e.g. `GTM-WN7JPVGX`) for the relevant environments.
- [ ] **Build:** After setting the variable, a new deployment was triggered (or one was triggered manually).
- [ ] **Build output:** Build completes successfully; no errors about missing env.
- [ ] **First-party gateway (if used):** After deploy, open `https://your-vercel-url.vercel.app/metrics/gtm.js?id=GTM-WN7JPVGX` and confirm it returns the GTM script (or a redirect to it).

### GTM Preview / Debug

- [ ] **Preview mode:** In GTM, click **Preview**, enter your production or preview URL, then connect.
- [ ] **Container loaded:** In Tag Assistant, the GTM container shows as loaded (green).
- [ ] **Initial page_view:** On first load, a `page_view` event appears in the dataLayer (or in the event stream) with `page_path`, `page_title`, `page_location`.
- [ ] **SPA navigation:** Click internal links (e.g. Services, About, Policies). For each navigation, a new `page_view` event should fire with the updated path/title.
- [ ] **Tags firing:** If you have a GA4 (or other) tag triggered by `page_view`, confirm it fires on initial load and on SPA route changes.

### Quick browser check

- [ ] Open the site, open DevTools → Console, run: `window.dataLayer`.
- [ ] You should see an array with at least one object containing `event: 'page_view'` and the current path after navigating.
