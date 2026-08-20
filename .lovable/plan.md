# SEO Build-Out: Reviews, City Pages, and Google Business Profile

Goal: make afterhoursplumbingandpump.com rank for local plumbing searches across Orange, Durham and Wake counties, and turn Google's 4.9-star reputation into visible proof on the site.

## 1. Domain and technical foundation

- Set the site's real domain to `https://afterhoursplumbingandpump.com` everywhere: absolute canonical and `og:url` tags on all pages, absolute `<loc>` values in the sitemap, and a `Sitemap:` line in robots.txt.
- Add the street address (231 Orange Grove St, Hillsborough, NC 27278) to the footer, contact page and the business schema so the site matches the Google listing exactly. Keep the P.O. Box as the mailing address.
- Add a social preview image (the team photo) so shared links show a real picture instead of a blank card.
- Add `aggregateRating` (4.9, 323+ reviews) and `sameAs` links to the business schema.

Note: this only takes effect once the site is published and the domain is pointed at it.

## 2. Reviews page (`/reviews`)

- New page with the real Google reviews you paste in — name, date, city and quote, grouped so water-heater, well-pump and emergency reviews are each represented.
- Header band: 4.9 stars, 323+ Google reviews, plus a "Read all reviews on Google" button and a "Leave a review" button.
- `Review` + `aggregateRating` structured data so stars can appear in Google results.
- Replace the placeholder quotes currently on the home page and about page with three real ones, each linking to `/reviews`.
- Add Reviews to the header nav and footer.

I'll build the page with the layout and placeholders ready, then drop your pasted reviews straight in.

## 3. Six new city pages

`/service-areas/chapel-hill-nc`, `/mebane-nc`, `/burlington-nc`, `/efland-nc`, `/cary-nc`, `/morrisville-nc`, `/raleigh-nc`.

Each page is genuinely different, not a find-and-replace: local housing stock (older Chapel Hill homes vs. newer Cary subdivisions), well vs. city water mix, the neighborhoods and roads served, which services matter most there, and a city-specific FAQ. Each has its own title, description, canonical, `Service` + `BreadcrumbList` schema, and a real review from that area where you have one.

The service-areas index, footer and sitemap get updated to link them all.

## 4. Google Business Profile — what to do with it

This is the single biggest lever for a local plumber; most of it happens in Google, not in code:

- Add the website URL to the profile so the profile passes authority to the site — and link each city page from the matching service area in the profile.
- Fill in every service (emergency plumbing, water heater install, tankless, well pump repair, pressure tanks, water softeners, drain cleaning, toilet repair) as individual GBP services; these show as their own entries in Maps.
- Post weekly GBP updates (a job you finished, a seasonal tip). Active profiles rank higher.
- Upload recent job photos monthly — the same photos already on the site.
- Reply to every review, especially older ones. Reply rate is a ranking factor.
- Set the hours to reflect 24/7 emergency availability; BBB currently shows 8-5 weekdays, which contradicts the site's 24/7 message.
- Turn on the Google review-request link and add it to invoices and the site's thank-you message.

I'll also add a Q&A section on site mirroring the questions people ask on the profile.

## 5. Further options to complete the site

Worth doing, in priority order:

1. **Service + city landing pages** — e.g. "well pump repair in Chapel Hill". These are the pages that actually win long-tail searches.
2. **Blog / advice section** — "why does my well pump keep cycling", "signs your water heater is about to fail". Cheap traffic, builds topical authority.
3. **Financing / pricing transparency page** — even a "how our pricing works" page reduces call hesitation.
4. **Before/after job gallery** with captions naming the town and the work done.
5. **Google Search Console + analytics** so we can see what's actually working after launch.

Tell me which of these you want and I'll fold them in.

## Technical notes

- New routes under `src/routes/`; city pages share a `CityPage` component driven by per-city data in `src/data/cities.ts` so copy stays editable in one place.
- `src/data/reviews.ts` becomes the single source for review quotes, consumed by `/reviews`, the home page and city pages.
- Schema injected via each route's `head().scripts`; canonical/`og:url` switch from relative to absolute using a `SITE_URL` constant in `src/data/site.ts`.
- Sitemap `BASE_URL` set to the real domain; entries extended to cover the new pages.
