import { OG_IMAGE, SITE_URL } from "@/data/site";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroPhoto from "@/assets/after-hours-plumbing-team.webp";
import dougPhoto from "@/assets/team-doug-jones.webp";
import crewPhoto from "@/assets/team-crew-capture.webp";
import truckPhoto from "@/assets/after-hours-technician-truck.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceAreaNote } from "@/components/site/ServiceAreaNote";

const title = "About After Hours Plumbing and Pump Service";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${title} | Hillsborough, NC` },
      {
        name: "description",
        content:
          "Founded in March 2009 by owner Doug Jones, After Hours Plumbing and Pump Service is a licensed and insured, locally owned plumbing company in Hillsborough, NC.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Locally owned since 2009. Licensed, insured, and available 24/7 with no overtime charges.",
      },
      { property: "og:url", content: SITE_URL + "/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "About", item: SITE_URL + "/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    heading: "Answer the phone",
    text: "Emergencies do not keep business hours. We built the company around being reachable when other shops are closed.",
  },
  {
    heading: "One fair price",
    text: "No overtime charges and no weekend premiums. The time of day should not decide what a repair costs.",
  },
  {
    heading: "Explain the work",
    text: "You should understand what failed, what we are doing about it and what it will cost before we start.",
  },
  {
    heading: "Leave it clean",
    text: "We clean up the work area before we go. A finished job should not look like a project you still have to handle.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Locally owned since 2009"
        title="A Hillsborough plumbing company built for the calls nobody plans for."
        intro="Doug Jones started After Hours Plumbing and Pump Service in March 2009 with a simple idea: pick up the phone when people actually need a plumber."
        image={heroPhoto}
        imageAlt="The After Hours Plumbing and Pump Service team in Hillsborough, NC"
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading title="Our story" />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              After Hours Plumbing and Pump Service opened in March 2009. Owner Doug Jones had spent years in the trade
              and kept running into the same problem: a pipe breaks at 11 p.m. or a well pump quits on a Sunday, and the
              only options are voicemail or a heavy after-hours surcharge.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              So the company was set up the other way around. Emergency service runs 24 hours a day, seven days a week,
              and the rate does not change because it is night, a weekend or a holiday. That policy is the whole reason
              for the name.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are licensed and insured, and we work on both plumbing and well pump systems for homes and businesses.
              Being local matters here. Hillsborough is home, Durham is a short drive, and the people who call are
              neighbors and repeat customers.
            </p>
            <CallButton className="mt-7" />
          </Reveal>
          <Reveal>
            <img
              src={dougPhoto}
              alt="After Hours Plumbing technician installing a residential water heater"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
            <p className="mt-3 text-sm text-muted-foreground">On the job in Orange County, NC</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading title="How we work" intro="Four things we do not compromise on, on every call." />
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.heading} className="bg-surface p-6">
              <div className="flex items-start gap-3">
                <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <h3 className="text-lg font-bold text-navy">{value.heading}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="page">
        <Reveal>
          <SectionHeading title="The team" intro="The people who show up at your door." />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { src: crewPhoto, alt: "After Hours Plumbing crew on a job site" },
            { src: truckPhoto, alt: "After Hours Plumbing service truck and technician" },
            { src: heroPhoto, alt: "After Hours Plumbing and Pump Service team photo" },
          ].map((photo) => (
            <img
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
          ))}
        </div>
        <div className="mt-8">
          <ServiceAreaNote />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
