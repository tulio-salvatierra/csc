# Release verification

## Local checks

- Production build: passed after restoring locked dependencies with npm ci.
- Focused ESLint: passed for changed files other than Footer. Footer retains its pre-existing unused Icon argument warning (the icon is used in JSX).
- Full npm run lint: failed with 463 existing issues, largely checked-in generated build assets, plus legacy script redeclarations and Vite process globals. No lint configuration was weakened.
- Browser: both priority pages render with their individual title, content, booking links, phone links and full address. Clicked the related-service link from HydraFacial to customized facials successfully.
- Mobile: checked the customized-facial page at 390px width; document width matched the viewport, with no horizontal overflow. Inspected headings and persistent booking control.
- Verified rendered booking links point to the existing SalonBiz destination and call links to tel:+14326380046. External booking completion remains pending.
- Diff whitespace check: passed.

## Pending external verification

- Confirm actual studio hours with Carolina, then align visible hours and structured data.
- Confirm the priority treatment pages are deployed and indexed in Google Search Console.
- Verify SalonBiz on mobile: correct business, services, availability and completion flow. Do not submit a real appointment as a test without authorization.
- Verify phone, WhatsApp and directions destinations on a device.
- Confirm current service prices, duration and HydraFacial details before publishing them.
- Verify GBP details, genuine testimonials and current rating/count.
- Verify GTM enquiry events separately from completed bookings; no tracking additions are included in this release.
- Verify the first completed Midland Semrush collection; exclude Australia history.

## Production verification — 2026-10-30

- Deployment: dpl_HJ3bAyAoDgSw7hqF1bpmi89TRXWj, Vercel project csc, team_txZnp4qJwZBkZVA5RUaGhOyl.
- READY confirmed through CLI and Vercel connector; production aliases include www.carolinaskincentre.com and carolinaskincentre.com.
- Release uploaded directly from the local working tree based on 93a9843d88adecdecfe78d78d1252be633083761, including the first-release edits. The metadata commit is the base commit, not a new release commit. No Git push was performed.
- Public homepage: new copy, phone and full address present; unsupported board-certification wording removed.
- Public HydraFacial and facial pages: new introductions, treatment guidance, booking/call actions and related-service links present. Related-service navigation passed. Individual titles and canonical URLs match their routes.
- HydraFacial page has zero placeholder href="#" links. Phone links resolve to tel:+14326380046 and display the number.
- Live customized-facial mobile check at 390px: document width 390px, no horizontal overflow; no browser console errors captured.
- SalonBiz handoff passed: correct Carolina Skin Centre and Salon, LLC welcome page, service list, Signature Hydrafacial selection, Carolina provider selection and available appointment times. No time selected, appointment submitted, login or payment performed.
- SalonBiz also lists Signature Skin Treatment. Its broader catalogue includes services omitted from the website (including lash extensions); reconcile with Carolina before changing the website service list or publishing prices.
- Deployment-scoped error/fatal runtime log query returned no matching logs. This static site's successful browser checks are the primary runtime evidence.
- Screenshot: live-facials-mobile.jpg.
- Still pending: actual appointment completion, owner-confirmed hours, GBP alignment, indexing/ranking checks and conversion tracking verification.
