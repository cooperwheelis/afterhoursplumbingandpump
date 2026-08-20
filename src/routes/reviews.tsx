import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import heroPhoto from "@/assets/after-hours-plumbing-team.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CATEGORY_LABELS, publishedReviews, type ReviewCategory } from "@/data/reviews";
import {
  COMPANY,
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  OG_IMAGE,
  url,
} from "@/data/site";

const pageUrl = url("/reviews");
const metaTitle = "Reviews | After Hours Plumbing and Pump Service";
const metaDescription = `Rated ${GOOGLE_RATING} stars across ${GOOGLE_REVIEW_COUNT}+ Google reviews. Read what Hillsborough, Durham and Triangle customers say about After Hours Plumbing and Pump Service.`;

export const Route = createFileRoute("/reviews")({
  head: () => {
    const reviews = publishedReviews();
    const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
            { "@type": "ListItem", position: 2, name: "Reviews", item: pageUrl },
          ],
        }),
      },
    ];

    // Review + rating markup is only published once real reviews are in place.
    if (reviews.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: COMPANY,
          url: url("/"),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_RATING,
            reviewCount: GOOGLE_REVIEW_COUNT,
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            datePublished: r.date || undefined,
            reviewBody: r.quote,
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          })),
        }),
      });
    }

    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "website" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts,
    };
  },
  component: ReviewsPage,
});

const ORDER: ReviewCategory[] = ["emergency", "water-heater", "well-pump", "general"];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} aria-hidden="true" className="size-4 fill-amber text-amber" />
      ))}
    </span>
  );
}

function ReviewsPage() {
  const reviews = publishedReviews();

  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="What our neighbors say"
        intro={`Rated ${GOOGLE_RATING} stars on Google.`}
        image={heroPhoto}
        imageAlt="The After Hours Plumbing and Pump Service team"
      />
      <Breadcrumbs items={[{ label: "Reviews" }]} />

      <Section tone="page">
        <Reveal>
          <div className="rounded-md border border-border bg-surface p-7 sm:p-9">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl font-extrabold text-navy">{GOOGLE_RATING}</span>
                <div>
                  <Stars />
                  <p className="mt-1 text-sm text-muted-foreground">
                    {GOOGLE_REVIEW_COUNT}+ Google reviews
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-md border border-input px-5 py-2.5 text-sm font-bold text-navy hover:bg-muted"
                >
                  Read all reviews on Google
                </a>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-md bg-amber px-5 py-2.5 text-sm font-bold text-amber-foreground hover:bg-amber-hover"
                >
                  Leave a review
                </a>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              We have been serving Hillsborough, Durham and the surrounding Triangle since 2009. Every review below
              was left by a real customer on Google.
            </p>
          </div>
        </Reveal>

        {reviews.length === 0 ? (
          <Reveal>
            <div className="mt-10 rounded-md border border-dashed border-border bg-surface p-8 text-center">
              <h2 className="text-xl font-bold text-navy">Reviews are being added</h2>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                In the meantime, you can read every review on our Google Business Profile.
              </p>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-3 text-sm font-bold text-navy-foreground"
              >
                Read our Google reviews
              </a>
            </div>
          </Reveal>
        ) : (
          ORDER.map((category) => {
            const group = reviews.filter((r) => r.category === category);
            if (group.length === 0) return null;
            return (
              <div key={category} className="mt-12">
                <h2 className="text-sm font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  {CATEGORY_LABELS[category]}
                </h2>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  {group.map((review) => (
                    <Reveal key={review.id}>
                      <figure className="h-full rounded-md border-t-2 border-blue bg-surface p-6">
                        <Stars count={review.rating} />
                        <blockquote className="mt-3 leading-relaxed text-foreground">{review.quote}</blockquote>
                        <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                          {review.name} — {review.city}
                          {review.date ? ` · ${new Date(review.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}` : ""}
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            title="Need a plumber now?"
            intro="Emergency service is available 24 hours a day, with no overtime or weekend premiums."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CallButton />
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
            >
              See everything we do
            </Link>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
