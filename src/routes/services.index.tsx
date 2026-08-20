import { OG_IMAGE, SITE_URL } from "@/data/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import repairPhoto from "@/assets/work-repair.webp";
import waterHeaterPhoto from "@/assets/work-water-heater.webp";
import pumpPhoto from "@/assets/work-pump-install.webp";
import wellPhoto from "@/assets/work-well-system.webp";
import heroPhoto from "@/assets/work-plumbing-detail.webp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallButton } from "@/components/site/CallButton";
import { FinalCta } from "@/components/site/FinalCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Hillsborough & Durham NC | After Hours Plumbing" },
      {
        name: "description",
        content:
          "Emergency plumbing repairs, water heaters, well pumps and water quality systems for homes and businesses in Hillsborough, Durham and the Triangle.",
      },
      { property: "og:title", content: "Plumbing Services | After Hours Plumbing and Pump Service" },
      {
        property: "og:description",
        content: "Repairs, water heaters, well pumps and water quality systems. Available 24/7. Call (919) 732-7588.",
      },
      { property: "og:url", content: SITE_URL + "/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    id: "emergency-and-plumbing-repair",
    title: "Emergency and plumbing repair",
    text: "Most of our calls start with water where it does not belong. We find the source, stop it and make the repair.",
    items: [
      "Burst pipes",
      "Water leaks",
      "Clogged drains",
      "Overflowing toilets",
      "Faucet repair",
      "Garbage disposals",
      "General plumbing repairs",
      "Kitchen and bathroom plumbing",
      "Residential and commercial plumbing",
    ],
    image: repairPhoto,
    alt: "Plumber making a supply line repair inside a home",
    to: "/services/plumbing-repairs-and-emergencies",
  },
  {
    id: "water-heaters",
    title: "Water heaters",
    text: "Cold showers usually mean a part has failed, not that the whole system is done. We tell you which it is.",
    items: [
      "Water-heater repair",
      "Water-heater replacement",
      "New installation",
      "Traditional tank systems",
      "Tankless water heaters",
      "Diagnosis of temperature, pressure and pilot-light problems",
    ],
    image: waterHeaterPhoto,
    alt: "Water heater installed with new supply connections",
    to: "/services/water-heaters",
  },
  {
    id: "well-pumps-and-water-systems",
    title: "Well pumps and water systems",
    text: "Many homes around Hillsborough run on a well. When the water stops, the pump or the pressure tank is usually why.",
    items: [
      "Well-pump service",
      "Pressure-tank problems",
      "Loss of water",
      "Low water pressure",
      "Diagnosis and repair",
    ],
    image: pumpPhoto,
    alt: "Well pump and pressure tank installation at a rural home",
    to: "/services/well-pumps-and-water-quality",
  },
  {
    id: "water-quality",
    title: "Water quality",
    text: "Hard water and sediment wear out fixtures and appliances. Treatment equipment keeps the rest of your plumbing healthy.",
    items: [
      "Water softeners",
      "Whole-home filtration",
      "Filter installation and replacement",
      "Hard-water concerns",
      "Water-quality system service",
    ],
    image: wellPhoto,
    alt: "Water treatment and well system equipment serviced by After Hours Plumbing",
    to: "/services/well-pumps-and-water-quality",
  },
] as const;

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential & Commercial"
        title="Plumbing services for the problems that cannot wait."
        intro="One local crew for repairs, water heaters, well pumps and water treatment — day, night or weekend."
        image={heroPhoto}
        imageAlt="Close-up of finished plumbing work completed by After Hours Plumbing"
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      {groups.map((group, index) => (
        <Section key={group.id} id={group.id} tone={index % 2 === 0 ? "page" : "white"}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal className={index % 2 === 0 ? "" : "lg:order-2"}>
              <img
                src={group.image}
                alt={group.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">{group.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{group.text}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px]">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <CallButton size="md" />
                <Link
                  to={group.to}
                  className="inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
                >
                  More on {group.title.toLowerCase()}
                </Link>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <FinalCta />
    </>
  );
}
