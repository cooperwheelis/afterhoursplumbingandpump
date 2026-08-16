Update the After Hours site to feel more inviting by softening corners, trimming hero heights, and simplifying the home hero text.

## What will change

### 1. Rounded corners (subtly — 8px)
- Update the global radius tokens in `src/styles.css` so the design system default is 8px instead of 0–2px.
- Apply rounded corners to:
  - Primary CTA buttons (`CallButton`, header call button, mobile menu button).
  - Inner cards and containers: service blocks on the home page, review cards, FAQ containers, contact form wrapper, contact details list, value grid, service-area city grid, and related images.
  - Error/404 fallback buttons in `__root.tsx`.
- Keep full-width band sections (navy trust bar, hero overlays) flush where rounding would look odd; round only their inner cards and interactive elements.

### 2. Smaller hero images
- **Home hero**: reduce min-height from `500px/540px/620px` to roughly `420px/460px/520px` so the team photo takes less vertical space.
- **Page heroes**: reduce `PageHero` min-height from `300px/340px` to `240px/280px` for all inner pages (services, service areas, about, contact).
- Maintain the gradient overlay and left-aligned text layout so readability stays strong.

### 3. Less busy landing-page hero text
- Remove the eyebrow location line and the subtext from the home hero.
- Keep only the main headline: "Plumbing help. Day or night." followed by the call button and the "No overtime or weekend premiums" reassurance line.

## Files likely to change
- `src/styles.css` — radius tokens.
- `src/components/site/CallButton.tsx` — button radius.
- `src/components/site/SiteHeader.tsx` — header CTA + mobile menu button radius.
- `src/components/site/Section.tsx` — section card rounding.
- `src/components/site/PageHero.tsx` — smaller hero height.
- `src/routes/index.tsx` — hero height, remove eyebrow and subtext, round service/review cards and gallery images.
- `src/components/site/ContactForm.tsx`, `Faq.tsx`, `ServiceAreaNote.tsx`, `Breadcrumbs.tsx`, `FinalCta.tsx` — round containers and buttons as needed.
- `src/routes/__root.tsx` — round fallback buttons.

## Verification
- After the edits, verify the preview on both mobile and desktop shows:
  - rounded buttons and cards at 8px,
  - shorter hero images,
  - a home hero with only the headline and the call button.
