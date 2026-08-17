import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroPhoto from "@/assets/team-technician-job.webp";
import supportPhoto from "@/assets/work-well-system.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { SERVICE_LINKS } from "@/data/site";

const title = "Plumber in Hillsborough, NC | 24/7 Emergency Service";

export const Route = createFileRoute("/service-areas/hillsborough-nc")({
  head: () => ({
    meta: [
      { title: `${title} | After Hours Plumbing` },
      {
        name: "description",
        content:
          "Locally owned plumber in Hillsborough, NC since 2009. Emergency repairs, water heaters and well pump service, 24/7 with no overtime charges.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Hillsborough's local plumbing and pump company. Call (919) 732-7588, any hour.",
      },
      { property: "og:url", content: "/service-areas/hillsborough-nc" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/service-areas/hillsborough-nc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: "/service-areas" },
            { "@type": "ListItem", position: 3, name: "Hillsborough, NC", item: "/service-areas/hillsborough-nc" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const points = [
  "Emergency plumbing repairs, 24 hours a day",
  "Well pump, pressure tank and water quality work",
  "Water heater repair, replacement and tankless installs",
  "Drains, toilets, faucets and disposals",
  "Plumbing for kitchen and bathroom remodels",
  "Repairs for local businesses, not just homes",
];

export function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our home town"
        title="Plumber in Hillsborough, NC"
        intro="After Hours Plumbing and Pump Service has been based in Hillsborough since 2009. When you call, you reach a local company."
        image={heroPhoto}
        imageAlt="After Hours technician working on a plumbing job in Hillsborough, NC"
      />
      <Breadcrumbs
        items={[{ label: "Service Areas", to: "/service-areas" }, { label: "Hillsborough, NC" }]}
      />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              title="Plumbing built for Hillsborough homes"
              intro="Hillsborough is a mix of older homes near downtown and houses spread out across Orange County on private wells. Those two situations fail in different ways, and we work on both every week."
            />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              In older houses we see aging supply lines, worn shutoff valves and drains that have been patched more than
              once. Outside of town, the calls are usually about the well: no water at the tap, pressure that drops in
              the shower, or a pump that keeps cycling. Pump work is half our name, so those jobs are routine for us.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Because we are local, an after-hours call in Hillsborough does not sit in a queue. Doug Jones owns the
              company and answers the phone. There is no overtime or weekend premium for the time of day you needed
              help.
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
              alt="Well water system serviced at a home outside Hillsborough"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Faq
          heading="Hillsborough questions"
          items={[
            {
              question: "Do you really answer at 2 a.m.?",
              answer:
                "Yes. Emergency service is available 24 hours a day, including weekends and holidays, and the rate does not change because of the hour.",
            },
            {
              question: "We are on a well outside town. Can you help?",
              answer:
                "Yes. Well pumps, pressure tanks, pressure switches and water treatment are a core part of our work in Orange County.",
            },
            {
              question: "Do you serve businesses in Hillsborough?",
              answer: "We do. We handle plumbing repairs for both homes and commercial properties.",
            },
          ]}
        />
        <nav aria-label="Services" className="mt-10">
          <h2 className="text-xl font-bold text-navy">Services in Hillsborough</h2>
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
