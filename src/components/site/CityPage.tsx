import { Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import technicianPhoto from "@/assets/team-technician-job.webp";
import truckPhoto from "@/assets/after-hours-technician-truck.webp";
import wellPhoto from "@/assets/work-well-system.webp";
import heaterPhoto from "@/assets/work-water-heater.webp";
import repairPhoto from "@/assets/work-repair.webp";
import pumpPhoto from "@/assets/work-pump-install.webp";
import detailPhoto from "@/assets/work-plumbing-detail.webp";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallButton } from "./CallButton";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import type { CityContent } from "@/data/cities";
import { GOOGLE_PROFILE_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, SERVICE_LINKS } from "@/data/site";

const IMAGES = {
  technician: technicianPhoto,
  truck: truckPhoto,
  well: wellPhoto,
  heater: heaterPhoto,
  repair: repairPhoto,
  pump: pumpPhoto,
  detail: detailPhoto,
};

export function CityPage({ content }: { content: CityContent }) {
  return (
    <>
      <PageHero
        eyebrow={content.county}
        title={content.title}
        intro={content.intro}
        image={IMAGES[content.heroImage]}
        imageAlt={`After Hours Plumbing technician on a job near ${content.city}, NC`}
      />
      <Breadcrumbs
        items={[{ label: "Service Areas", to: "/service-areas" }, { label: `${content.city}, NC` }]}
      />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading title={content.headline} intro={content.lead} />
            {content.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {content.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[15px]">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" />
                  {point}
                </li>
              ))}
            </ul>
            <CallButton className="mt-7" />
          </Reveal>
          <Reveal>
            <img
              src={IMAGES[content.supportImage]}
              alt={content.supportAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
            <div className="mt-6 rounded-md border border-border bg-surface p-6">
              <div className="flex items-center gap-2">
                <Star aria-hidden="true" className="size-5 fill-amber text-amber" />
                <span className="font-bold text-navy">
                  {GOOGLE_RATING} on Google · {GOOGLE_REVIEW_COUNT}+ reviews
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Neighbors across Orange, Alamance, Durham and Wake counties.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link to="/reviews" className="text-blue underline underline-offset-4 hover:text-navy">
                  Read reviews
                </Link>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue underline underline-offset-4 hover:text-navy"
                >
                  See our Google profile
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-bold tracking-[0.14em] text-muted-foreground uppercase">
            Areas we cover around {content.city}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {content.neighborhoods.map((n) => (
              <li key={n} className="flex min-h-16 items-center bg-surface p-4 text-[15px] font-semibold">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <Faq heading={`${content.city} questions`} items={content.faqs} />
        <nav aria-label="Services" className="mt-10">
          <h2 className="text-xl font-bold text-navy">Services in {content.city}</h2>
          <ul className="mt-3 space-y-2">
            {SERVICE_LINKS.slice(1).map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      <FinalCta />
    </>
  );
}
