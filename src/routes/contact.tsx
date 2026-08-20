import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import heroPhoto from "@/assets/work-capture.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { ServiceAreaNote } from "@/components/site/ServiceAreaNote";
import {
  CITY_STATE_ZIP,
  EMAIL,
  MAILING_ADDRESS,
  MAPS_LINK,
  OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
  STREET_ADDRESS,
} from "@/data/site";

const title = "Contact After Hours Plumbing | (919) 732-7588";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `${title} | Hillsborough, NC` },
      {
        name: "description",
        content:
          "Call (919) 732-7588 for 24/7 emergency plumbing in Hillsborough and Durham, NC, or send a non-emergency message and we will get back to you.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Reach After Hours Plumbing and Pump Service any hour, any day. Call (919) 732-7588.",
      },
      { property: "og:url", content: SITE_URL + "/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: SITE_URL + "/contact" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="24 hours a day, 7 days a week"
        title="Call us. That is the fastest way to get help."
        intro="For an active leak, a lost well or no hot water, phone the number below. Use the form only for things that can wait."
        image={heroPhoto}
        imageAlt="After Hours Plumbing technician completing a service call"
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Contact details</h2>
            <dl className="mt-6 divide-y divide-border rounded-md border border-border">
              <div className="flex items-start gap-3 py-5">
                <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Phone</dt>
                  <dd className="mt-1">
                    <a href={PHONE_HREF} className="text-2xl font-bold text-navy hover:text-blue">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 py-5">
                <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Hours</dt>
                  <dd className="mt-1 text-foreground">
                    Open 24 hours, every day. No overtime or weekend premiums.
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 py-5">
                <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Email</dt>
                  <dd className="mt-1 break-all">
                    <a href={`mailto:${EMAIL}`} className="font-semibold text-blue underline underline-offset-4">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 py-5">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Address</dt>
                  <dd className="mt-1 text-foreground">
                    {STREET_ADDRESS}
                    <br />
                    {CITY_STATE_ZIP}
                    <br />
                    <span className="text-sm text-muted-foreground">Mail: {MAILING_ADDRESS}</span>
                    <br />
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue underline underline-offset-4"
                    >
                      Open in Google Maps
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <CallButton className="mt-7 w-full sm:w-auto" />
            <div className="mt-8">
              <ServiceAreaNote />
            </div>
          </Reveal>
          <Reveal>
            <ContactForm heading="Send a non-emergency message" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
