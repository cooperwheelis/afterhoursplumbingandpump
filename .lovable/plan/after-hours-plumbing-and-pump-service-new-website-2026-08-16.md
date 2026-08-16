# After Hours Plumbing and Pump Service — New Website

A 10-page, mobile-first site built around one goal: getting a homeowner to tap the phone number. Clean editorial layout, deep navy + amber, real company photos, no invented claims.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero (team photo), service intro, trust band, local story, work + reviews, service area, final CTA |
| `/services` | Grouped overview: repairs, water heaters, well pumps, water quality |
| `/services/plumbing-repairs-and-emergencies` | Emergency + general repair detail page |
| `/services/water-heaters` | Tank + tankless detail page |
| `/services/well-pumps-and-water-quality` | Pumps, pressure tanks, softeners, filtration |
| `/service-areas` | All nine cities, Hillsborough and Durham emphasized |
| `/service-areas/hillsborough-nc` | Unique Hillsborough content |
| `/service-areas/durham-nc` | Unique Durham content |
| `/about` | Story, Doug's background, team photos, values, reviews, work gallery |
| `/contact` | Phone first, then non-emergency form |

Each service and city page follows the same skeleton (short photo hero, one H1, immediate call CTA, problems handled, what we do, why us, short FAQ, service-area reminder, final CTA) with genuinely different copy per page.

## Header, footer, mobile

- Slim navy announcement bar: `24/7 Emergency Plumbing • No Overtime or Weekend Premiums`
- White nav bar ~76px tall: logo left; Services and Service Areas dropdowns; About; Contact; amber `Call 24/7` button right. Sticky after scroll.
- Mobile: hamburger sheet with accordions, plus a persistent bottom bar `Call 24/7: (919) 732-7588` with bottom padding added to page content so nothing is covered.
- Navy footer: logo, phone, 24/7 line, email, P.O. Box 296, service + area links, About, Contact, Facebook / Nextdoor / Angi.
- Every phone control is a real `tel:+19197327588` link.

## Design system

- Navy `#0F2340`-family primary, medium blue secondary, warm off-white page background, charcoal body text, muted gray support text, amber accent reserved for the main call buttons (navy text on amber for contrast).
- Inter Tight headings / Inter body, loaded via a `<link>` in the root route.
- Sharp shapes: 0–2px radius, rectangular buttons, thin borders, almost no shadow. 1200px max width. 64–80px desktop section rhythm, 40–56px mobile.
- Motion: 12px fade-up on scroll, hover underline/color, slight image scale on service links. All disabled under `prefers-reduced-motion`. No sliders, carousels, parallax, or counters.

## Content rules

- Only the confirmed facts are used. No response times, prices, guarantees, ratings, review counts, or license numbers.
- Reviews render from a single `src/data/reviews.ts` file pre-filled with clearly marked placeholder quotes (`[Replace with real review]` plus name/city fields) so you can drop in real text later. No review schema markup until the quotes are real.
- Sixth-to-eighth-grade reading level, short paragraphs, calm and specific.

## Images

Download the listed team, technician, and gallery photos from the current site into `src/assets/` with descriptive filenames, convert to WebP at responsive widths, keep the originals, and lazy-load anything below the fold. The staff hero photo keeps the full team at every breakpoint with a left-to-right navy gradient overlay (no red). Skip the two stock files you flagged. Equipment shots stay as supporting imagery only.

## Contact form

- Fields: Name (required), Phone (required), Email, Service needed, Message. Zod validation client and server side, real `<label>`s, inline errors announced to screen readers, and a clear success state.
- Lovable Cloud stores submissions in a `contact_submissions` table. Public visitors can insert only; no one can read submissions from the browser. Emergency notice sits directly above the form.

## Accessibility and SEO

- Skip link, semantic landmarks, one H1 per page, keyboard-usable dropdowns, visible focus rings, 44px touch targets, 4.5:1 contrast.
- Per-route unique title, meta description, Open Graph and Twitter tags, relative canonical URLs; breadcrumbs with `BreadcrumbList` on supporting pages; `Plumber` LocalBusiness + `Organization` on the root and `Service` on service pages, all with the confirmed NAP and 24/7 hours.
- `robots.txt` plus a `/sitemap.xml` server route listing all ten pages.

## Technical notes

- TanStack Start file routes under `src/routes/`; shared `SiteHeader`, `SiteFooter`, `CallButton`, `Section`, `FaqAccordion`, `ServiceAreaList` components.
- Site copy and city/service data live in typed files under `src/data/` so text edits stay in one place.
- Structured data injected through each route's `head().scripts`.
- Location section uses a text-based city grid plus a verified Google Maps link to Hillsborough, NC — no keyless map embed guesswork.
