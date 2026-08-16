import { createFileRoute, Link } from "@tanstack/react-router";
import heroPhoto from "@/assets/after-hours-technician-truck.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CITIES, MAPS_LINK, PHONE_DISPLAY } from "@/data/site";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Plumbing Service Areas | Hillsborough, Durham & the Triangle" },
      {
        name: "description",
        content:
          "After Hours Plumbing and Pump Service is based in Hillsborough, NC and serves Durham, Chapel Hill, Burlington, Cary, Raleigh, Mebane, Efland and Morrisville.",
      },
      { property: "og:title", content: "Plumbing Service Areas | After Hours Plumbing" },
      {
        property: "og:description",
        content: "Local plumbing across the Triangle, based in Hillsborough, NC. Call (919) 732-7588.",
      },
      { property: "og:url", content: "/service-areas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: "/service-areas" },
          ],
        }),
      },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Based in Hillsborough, NC"
        title="Local plumbing across the Triangle."
        intro="One local crew covering Hillsborough, Durham and the towns around them, 24 hours a day."
        image={heroPhoto}
        imageAlt="After Hours Plumbing service truck and technician on a local job"
      />
      <Breadcrumbs items={[{ label: "Service Areas" }]} />

      <Section tone="page">
        <Reveal>
          <SectionHeading
            title="Where we work"
            intro="After Hours Plumbing and Pump Service is based in Hillsborough. We take care of homeowners and businesses there and across the Triangle, including emergency calls at night and on weekends."
          />
        </Reveal>

        <h3 className="mt-10 text-sm font-bold tracking-[0.14em] text-muted-foreground uppercase">Primary markets</h3>
        <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2">
          {CITIES.filter((c) => c.primary).map((city) => (
            <Link
              key={city.name}
              to={city.to!}
              className="group bg-surface p-6 hover:bg-muted"
            >
              <h4 className="text-xl font-bold text-navy group-hover:text-blue">{city.name}, NC</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {city.name === "Hillsborough"
                  ? "Our home base. Older homes, well systems and small businesses downtown and out in the county."
                  : "Our second home market. City water, rental properties, restaurants and busy family homes."}
              </p>
              <span className="mt-3 inline-block font-semibold text-blue underline underline-offset-4">
                See {city.name} plumbing services
              </span>
            </Link>
          ))}
        </div>

        <h3 className="mt-10 text-sm font-bold tracking-[0.14em] text-muted-foreground uppercase">
          Also serving these towns
        </h3>
        <ul className="mt-4 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {CITIES.filter((c) => !c.primary).map((city) => (
            <li key={city.name} className="flex min-h-16 items-center bg-surface p-4 font-semibold text-foreground">
              {city.name}, NC
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Do not see your town? Call {PHONE_DISPLAY} and ask. If we cover your address, we will tell you on the phone.{" "}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue underline underline-offset-4"
          >
            View Hillsborough, NC on Google Maps
          </a>
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
