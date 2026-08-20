import { OG_IMAGE, SITE_URL } from "@/data/site";
import { createFileRoute } from "@tanstack/react-router";
import heroPhoto from "@/assets/work-repair.webp";
import supportPhoto from "@/assets/work-plumbing-detail.webp";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Emergency Plumbing & Repairs in Hillsborough, NC";

export const Route = createFileRoute("/services/plumbing-repairs-and-emergencies")({
  head: () => ({
    meta: [
      { title: `${title} | After Hours Plumbing` },
      {
        name: "description",
        content:
          "Burst pipes, leaks, clogged drains, toilets, faucets and disposals. Emergency and general plumbing repair in Hillsborough, Durham and the Triangle, 24/7.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "24/7 emergency plumbing and everyday repairs for homes and businesses. Call (919) 732-7588.",
      },
      { property: "og:url", content: SITE_URL + "/services/plumbing-repairs-and-emergencies" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services/plumbing-repairs-and-emergencies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Emergency plumbing and repair",
              serviceType: "Plumbing repair",
              provider: { "@type": "Plumber", name: "After Hours Plumbing and Pump Service", telephone: "+1-919-732-7588" },
              areaServed: ["Hillsborough, NC", "Durham, NC"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Plumbing Repairs & Emergencies",
                  item: SITE_URL + "/services/plumbing-repairs-and-emergencies",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Available 24 hours"
      title="Plumbing repairs and emergencies"
      intro="Water where it should not be? Call and talk to a local plumber, not an answering service in another state."
      heroImage={heroPhoto}
      heroAlt="After Hours plumber repairing a household water line"
      breadcrumb="Plumbing Repairs & Emergencies"
      supportImage={supportPhoto}
      supportAlt="Finished plumbing repair under a kitchen sink"
      problems={[
        "Burst or frozen pipes",
        "Water leaks behind walls and under floors",
        "Clogged and slow drains",
        "Overflowing or running toilets",
        "Dripping and broken faucets",
        "Jammed garbage disposals",
        "Sewer and main line backups",
        "Kitchen and bathroom plumbing",
        "Plumbing for remodeling projects",
        "Residential and commercial repairs",
      ]}
      whatWeDo={[
        {
          heading: "Stop the water first",
          text: "On an emergency call, the first job is getting the water shut down and contained so the damage stops growing while we look at the cause.",
        },
        {
          heading: "Find the real problem",
          text: "We check the fixture, the line and the pressure before we replace anything. Sometimes a repair is all you need. If a part is worn out, we say so.",
        },
        {
          heading: "Make the repair and clean up",
          text: "We complete the repair, test it with you, and leave the space clean. You will know what was replaced and what to watch for.",
        },
      ]}
      whyUs={[
        "A real 24/7 emergency line, including weekends and holidays",
        "No overtime or weekend premiums",
        "Licensed and insured, locally owned since 2009",
        "More than 30 years of plumbing experience",
        "Plain explanations before the work starts",
      ]}
      faqs={[
        {
          question: "What should I do while I wait for a plumber?",
          answer:
            "Shut off the water at the fixture if you can reach the valve. If the leak is larger, shut off the main valve for the house. Then move anything valuable away from the water.",
        },
        {
          question: "Do you charge more at night or on weekends?",
          answer: "No. We do not add overtime or weekend premiums to after-hours calls.",
        },
        {
          question: "Do you work on commercial buildings?",
          answer: "Yes. We handle plumbing repairs for both homes and businesses in our service area.",
        },
        {
          question: "Can you help during a remodel?",
          answer:
            "Yes. We handle plumbing work for kitchen and bathroom remodeling, including moving and replacing fixtures.",
        },
      ]}
      relatedLinks={[
        { label: "Water heater repair and replacement", to: "/services/water-heaters" },
        { label: "Well pumps and water quality", to: "/services/well-pumps-and-water-quality" },
        { label: "All plumbing services", to: "/services" },
      ]}
    />
  );
}
