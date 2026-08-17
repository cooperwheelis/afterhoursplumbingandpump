import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Clock, ShieldCheck, Wrench } from "lucide-react";
import heroTeam from "@/assets/after-hours-plumbing-team.webp";
import technicianPhoto from "@/assets/after-hours-technician-truck.webp";
import repairPhoto from "@/assets/work-repair.webp";
import waterHeaterPhoto from "@/assets/work-water-heater.webp";
import pumpPhoto from "@/assets/work-pump-install.webp";
import wellPhoto from "@/assets/work-well-system.webp";
import galleryDetail from "@/assets/work-plumbing-detail.webp";
import galleryCapture from "@/assets/work-capture.webp";
import { CallButton } from "@/components/site/CallButton";
import { FinalCta } from "@/components/site/FinalCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CITIES, MAPS_LINK, PHONE_DISPLAY } from "@/data/site";
import { REVIEWS } from "@/data/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "24/7 Plumber in Hillsborough & Durham NC | After Hours Plumbing" },
      {
        name: "description",
        content:
          "Locally owned plumbing and pump service in Hillsborough, NC. Emergency repairs, water heaters and well pumps, 24/7. No overtime or weekend premiums.",
      },
      { property: "og:title", content: "24/7 Plumber in Hillsborough & Durham NC | After Hours Plumbing" },
      {
        property: "og:description",
        content:
          "Local, licensed plumbing service available 24/7 in Hillsborough, Durham and the Triangle. Call (919) 732-7588.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceBlocks = [
  {
    title: "Emergency & Plumbing Repair",
    text: "Burst pipes, leaks, clogged drains and toilets that will not wait until morning.",
    to: "/services/plumbing-repairs-and-emergencies",
    image: repairPhoto,
    alt: "After Hours plumber repairing household supply lines during a service call",
  },
  {
    title: "Water Heaters",
    text: "Repair, replacement and new installs for tank and tankless systems.",
    to: "/services/water-heaters",
    image: waterHeaterPhoto,
    alt: "Newly installed residential water heater with fresh copper connections",
  },
  {
    title: "Well Pumps",
    text: "No water or low pressure? We diagnose and repair pumps and pressure tanks.",
    to: "/services/well-pumps-and-water-quality",
    image: pumpPhoto,
    alt: "Well pump and pressure tank installation completed by After Hours Plumbing",
  },
  {
    title: "Water Quality",
    text: "Water softeners, whole-home filtration and filter changes for hard water.",
    to: "/services/well-pumps-and-water-quality",
    image: wellPhoto,
    alt: "Well water system equipment serviced at a Triangle-area home",
  },
] as const;

const trustPoints = [
  { icon: Clock, label: "Available 24/7" },
  { icon: Wrench, label: "30+ Years of Experience" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "No Weekend Premiums" },
] as const;

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={heroTeam}
          alt="The After Hours Plumbing and Pump Service team standing together outside their service trucks"
          className="absolute inset-0 size-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/45"
        />
        <div className="container-page relative flex min-h-[420px] flex-col justify-center py-14 sm:min-h-[460px] lg:min-h-[520px]">
          <div className="max-w-[500px] text-navy-foreground">
            <h1 className="text-[2.5rem] leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.85rem]">
              Plumbing help. Day or night.
            </h1>
            <div className="mt-7">
              <CallButton className="w-full sm:w-auto" />
              <p className="mt-3 text-sm text-navy-foreground/75">No overtime or weekend premiums.</p>
            </div>
          </div>
        </div>
      </section>

      <Section tone="page">
        <Reveal>
          <SectionHeading
            title="How can we help?"
            intro="From urgent leaks to water heaters and well systems, our team handles the plumbing your home or business depends on."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {serviceBlocks.map((block) => (
            <Reveal key={block.title}>
              <article className="group h-full border border-border bg-surface">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
                  <Link
                    to={block.to}
                    className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
                  >
                    Learn about {block.title.toLowerCase()}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-navy py-8 text-navy-foreground">
        <h2 className="sr-only">Why homeowners call us</h2>
        <div className="container-page grid grid-cols-2 gap-6 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-3">
              <point.icon aria-hidden="true" className="size-6 shrink-0 text-amber" strokeWidth={1.5} />
              <span className="text-sm font-semibold sm:text-base">{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={technicianPhoto}
              alt="After Hours Plumbing technician working beside the company service truck"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
              A local plumber who works around your schedule.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Doug Jones started After Hours Plumbing and Pump Service in March 2009. After years in the trade, he saw
              how many plumbing problems show up at night, on weekends and on holidays, long after most shops close.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today the same crew answers those calls for homes and businesses around Hillsborough and Durham. We are
              licensed and insured, we explain the work in plain language, and we never add overtime or weekend
              premiums.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
            >
              Meet the team
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="page">
        <Reveal>
          <SectionHeading title="Trusted in homes across the Triangle." />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {REVIEWS.slice(0, 3).map((review) => (
            <Reveal key={review.id}>
              <figure className="h-full border-t-2 border-blue bg-surface p-6">
                <blockquote className="leading-relaxed text-foreground">{review.quote}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                  {review.name} — {review.city}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold text-navy">Recent work</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {[
            { src: waterHeaterPhoto, alt: "Replacement water heater installed in a Triangle-area home" },
            { src: pumpPhoto, alt: "Well pump and pressure tank replacement in progress" },
            { src: galleryDetail, alt: "Close-up of finished plumbing repair work under a sink" },
            { src: wellPhoto, alt: "Well system equipment serviced at a rural property" },
            { src: repairPhoto, alt: "Plumber repairing supply lines during a service call" },
            { src: galleryCapture, alt: "Completed plumbing installation by After Hours Plumbing" },
          ].map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
        <Link
          to="/about"
          className="mt-6 inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
        >
          See more about our company and completed work
        </Link>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            title="Serving Hillsborough, Durham and the Triangle."
            intro="We are based in Hillsborough, and Durham is our second home market. We also travel to the towns around us."
          />
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
          {CITIES.map((city) => (
            <li key={city.name} className="bg-surface">
              {"to" in city && city.to ? (
                <Link
                  to={city.to}
                  className="flex min-h-16 items-center justify-between gap-2 p-4 font-semibold text-navy hover:bg-muted hover:text-blue"
                >
                  {city.name}
                  <span className="bg-amber px-2 py-0.5 text-[11px] font-bold tracking-wide text-amber-foreground uppercase">
                    Primary
                  </span>
                </Link>
              ) : (
                <span className="flex min-h-16 items-center p-4 text-muted-foreground">{city.name}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Not sure if we reach you? Call {PHONE_DISPLAY} and ask.{" "}
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
