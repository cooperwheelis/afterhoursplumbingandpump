import { createFileRoute } from "@tanstack/react-router";
import heroPhoto from "@/assets/work-water-heater.webp";
import supportPhoto from "@/assets/work-capture.webp";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Water Heater Repair & Installation | Hillsborough, NC";

export const Route = createFileRoute("/services/water-heaters")({
  head: () => ({
    meta: [
      { title: `${title} | After Hours Plumbing` },
      {
        name: "description",
        content:
          "Water heater repair, replacement and installation in Hillsborough, Durham and the Triangle. Tank and tankless systems, service available 24/7.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Tank and tankless water heater repair, replacement and installation. Call (919) 732-7588.",
      },
      { property: "og:url", content: "/services/water-heaters" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/water-heaters" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Water heater repair and installation",
              serviceType: "Water heater service",
              provider: { "@type": "Plumber", name: "After Hours Plumbing and Pump Service", telephone: "+1-919-732-7588" },
              areaServed: ["Hillsborough, NC", "Durham, NC"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
                { "@type": "ListItem", position: 3, name: "Water Heaters", item: "/services/water-heaters" },
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
      eyebrow="Tank & tankless"
      title="Water heater repair and replacement"
      intro="No hot water, not enough hot water, or a tank that leaks? We diagnose it and tell you whether to repair or replace."
      heroImage={heroPhoto}
      heroAlt="Newly installed residential water heater with copper connections"
      breadcrumb="Water Heaters"
      supportImage={supportPhoto}
      supportAlt="Water heater installation completed in a Triangle-area home"
      problems={[
        "No hot water at all",
        "Hot water runs out quickly",
        "Water is too hot or never hot enough",
        "Pilot light will not stay lit",
        "Leaking tank or fittings",
        "Rusty or cloudy hot water",
        "Popping or rumbling noises",
        "Old system near the end of its life",
      ]}
      whatWeDo={[
        {
          heading: "Diagnose before we quote",
          text: "We test the thermostat, heating elements or burner, the pressure relief valve and the connections. Many no-hot-water calls are a part, not a full replacement.",
        },
        {
          heading: "Repair when it makes sense",
          text: "If the tank is sound and the failure is a component, we repair it. That is usually the least expensive way back to hot water.",
        },
        {
          heading: "Replace or upgrade",
          text: "When a tank is rusted through or past its service life, we install a new one. We also install tankless systems if you want endless hot water and more floor space.",
        },
      ]}
      whyUs={[
        "Tank and tankless experience",
        "Straight answers about repair versus replacement",
        "Emergency service for leaking tanks, any hour",
        "No overtime or weekend premiums",
        "Licensed and insured",
      ]}
      faqs={[
        {
          question: "My water heater is leaking. Is that an emergency?",
          answer:
            "It can be. Shut off the water supply to the heater and call us. A slow drip can turn into a full tank of water on the floor.",
        },
        {
          question: "Should I switch to a tankless water heater?",
          answer:
            "Tankless systems heat water on demand and take up less space. They cost more to install. We will walk through both options with you before you decide.",
        },
        {
          question: "How long does a replacement take?",
          answer:
            "Most standard tank replacements are done in the same visit once the new unit is on site. Tankless installs can take longer because of venting and gas or electrical work.",
        },
      ]}
      relatedLinks={[
        { label: "Emergency plumbing and repairs", to: "/services/plumbing-repairs-and-emergencies" },
        { label: "Well pumps and water quality", to: "/services/well-pumps-and-water-quality" },
        { label: "All plumbing services", to: "/services" },
      ]}
    />
  );
}
