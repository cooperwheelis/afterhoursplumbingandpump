import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallButton } from "./CallButton";
import { ContactForm } from "./ContactForm";
import { Faq, type FaqItem } from "./Faq";
import { FinalCta } from "./FinalCta";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ServiceAreaNote } from "./ServiceAreaNote";

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  breadcrumb: string;
  problems: string[];
  whatWeDo: { heading: string; text: string }[];
  whyUs: string[];
  faqs: FaqItem[];
  supportImage: string;
  supportAlt: string;
  relatedLinks: { label: string; to: string }[];
};

export function ServiceDetail(props: ServiceDetailProps) {
  return (
    <>
      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        intro={props.intro}
        image={props.heroImage}
        imageAlt={props.heroAlt}
      />
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: props.breadcrumb }]} />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Problems we handle</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {props.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-2 text-[15px]">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" />
                  {problem}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold sm:text-3xl">What we do on the call</h2>
              {props.whatWeDo.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-lg font-semibold text-navy">{block.heading}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{block.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <img
              src={props.supportImage}
              alt={props.supportAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="mt-6 border border-border bg-surface p-6">
              <h2 className="text-xl font-bold text-navy">Why customers choose After Hours</h2>
              <ul className="mt-4 space-y-2">
                {props.whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] text-muted-foreground">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <CallButton className="mt-5 w-full" size="md" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Faq items={props.faqs} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <ServiceAreaNote />
            <nav aria-label="Other services" className="mt-6">
              <h2 className="text-xl font-bold text-navy">Other services</h2>
              <ul className="mt-3 space-y-2">
                {props.relatedLinks.map((link) => (
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
          </div>
          <ContactForm heading="Not an emergency? Send a message." />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
