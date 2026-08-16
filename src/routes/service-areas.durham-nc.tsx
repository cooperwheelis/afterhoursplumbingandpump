import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroPhoto from "@/assets/after-hours-technician-truck.webp";
import supportPhoto from "@/assets/work-plumbing-detail.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { SERVICE_LINKS } from "@/data/site";

const title = "Plumber in Durham, NC | 24/7 Emergency Plumbing";

export const Route = createFileRoute("/service-areas/durham-nc")({
  head: () => ({
    meta: [
      { title: `${title} | After Hours Plumbing` },
      {
        name: "description",
        content:
          "Emergency plumbing, water heater and drain service in Durham, NC from a locally owned Hillsborough company. Available 24/7 with no overtime charges.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Durham plumbing repairs and emergencies, day or night. Call (919) 732-7588.",
      },
      { property: "og:url", content: "/service-areas/durham-nc" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/service-areas/durham-nc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: "/service-areas" },
            { "@type": "ListItem", position: 3, name: "Durham, NC", item: "/service-areas/durham-nc" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const points = [
  "Burst pipes and water leaks",
  "Clogged drains and sewer backups",
  "Toilet, faucet and disposal repair",
  "Water heater repair and replacement",
  "Whole-home filtration and softeners",
  "Repairs for rentals and small businesses",
];

export function Page() {
  return (
    <>
      <PageHero
        eyebrow="Serving Durham daily"
        title="Plumber in Durham, NC"
        intro="A short drive from our Hillsborough base, Durham is one of our two main service areas, day and night."
        image={heroPhoto}
        imageAlt="After Hours Plumbing truck on a service call near Durham, NC"
      />
      <Breadcrumbs items={[{ label: "Service Areas", to: "/service-areas" }, { label: "Durham, NC" }]} />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              title="Fast help for Durham homes and buildings"
              intro="Most Durham properties are on city water, so the calls we get here look different from our rural work. Pressure problems, aging supply lines in older neighborhoods, drain backups and failing water heaters make up most of the day."
            />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We also work with landlords, property managers and small businesses in Durham, where a plumbing problem
              can shut down a kitchen or a unit. Those calls need a straight answer about what it will take to fix it,
              not a sales pitch.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You get the same policy in Durham that you get in Hillsborough: 24 hour emergency service and no overtime
              or weekend premiums. A pipe that lets go on Saturday night costs the same as one that lets go on Tuesday
              morning.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[15px]">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" />
                  {p}
                </li>
              ))}
            </ul>
            <CallButton className="mt-7" />
          </Reveal>
          <Reveal>
            <img
              src={supportPhoto}
              alt="Completed plumbing repair on a Durham area property"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Faq
          heading="Durham questions"
          items={[
            {
              question: "How soon can you get to Durham?",
              answer:
                "Durham is one of our primary service areas and a short drive from Hillsborough. Call and we will tell you honestly when we can be there.",
            },
            {
              question: "Do you take emergency calls overnight in Durham?",
              answer: "Yes, 24 hours a day including weekends and holidays, with no after-hours surcharge.",
            },
            {
              question: "Can you work with a property manager or landlord?",
              answer:
                "Yes. We regularly handle repairs for rental properties and commercial spaces and can coordinate access with whoever holds the keys.",
            },
          ]}
        />
        <nav aria-label="Services" className="mt-10">
          <h2 className="text-xl font-bold text-navy">Services in Durham</h2>
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
