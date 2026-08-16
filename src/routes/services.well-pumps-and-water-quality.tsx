import { createFileRoute } from "@tanstack/react-router";
import heroPhoto from "@/assets/work-pump-install.webp";
import supportPhoto from "@/assets/work-well-system.webp";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Well Pump Repair & Water Quality Systems | Hillsborough, NC";

export const Route = createFileRoute("/services/well-pumps-and-water-quality")({
  head: () => ({
    meta: [
      { title: `${title} | After Hours Plumbing` },
      {
        name: "description",
        content:
          "Well pump service, pressure tank repair, water softeners and whole-home filtration in Hillsborough, Durham and the Triangle. Emergency service 24/7.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Lost water or low pressure? Well pump, pressure tank and water treatment service. Call (919) 732-7588.",
      },
      { property: "og:url", content: "/services/well-pumps-and-water-quality" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/well-pumps-and-water-quality" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Well pump and water quality service",
              serviceType: "Well pump repair and water treatment",
              provider: { "@type": "Plumber", name: "After Hours Plumbing and Pump Service", telephone: "+1-919-732-7588" },
              areaServed: ["Hillsborough, NC", "Durham, NC"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Well Pumps & Water Quality",
                  item: "/services/well-pumps-and-water-quality",
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
      eyebrow="Wells & water treatment"
      title="Well pumps, pressure tanks and water quality"
      intro="Pump work is in our name. If your well stopped delivering water or your pressure dropped, we can help."
      heroImage={heroPhoto}
      heroAlt="Well pump and pressure tank installed at a rural home"
      breadcrumb="Well Pumps & Water Quality"
      supportImage={supportPhoto}
      supportAlt="Well water system equipment serviced by After Hours Plumbing"
      problems={[
        "No water coming from the well",
        "Low or uneven water pressure",
        "Pump that runs constantly",
        "Pump that cycles on and off quickly",
        "Failed or waterlogged pressure tank",
        "Sputtering faucets and air in the lines",
        "Hard water and scale on fixtures",
        "Sediment, taste or odor concerns",
      ]}
      whatWeDo={[
        {
          heading: "Find out what failed",
          text: "A loss of water can be the pump, the pressure tank, the pressure switch or the wiring. We test the system instead of guessing and replacing parts.",
        },
        {
          heading: "Repair or replace pumps and tanks",
          text: "We service and replace well pumps and pressure tanks and set the pressure so your fixtures behave normally again.",
        },
        {
          heading: "Treat the water",
          text: "For hard water and filtration, we install and service water softeners and whole-home filters, and replace filters on systems you already have.",
        },
      ]}
      whyUs={[
        "Pump and well systems are a core part of our work",
        "Emergency response when a household loses water",
        "Water softener and filtration installation and service",
        "No overtime or weekend premiums",
        "Licensed and insured, locally owned",
      ]}
      faqs={[
        {
          question: "We suddenly have no water. Is it the pump?",
          answer:
            "Often, but not always. It can also be the pressure switch, the tank or a power problem. Call us and we will test the system to find the cause.",
        },
        {
          question: "How do I know my pressure tank is bad?",
          answer:
            "A common sign is the pump turning on and off rapidly whenever you run water. That short cycling wears out the pump, so it is worth checking early.",
        },
        {
          question: "Do I need a water softener?",
          answer:
            "If you see scale on faucets and shower doors, spots on dishes, or soap that will not lather, hard water is likely. A softener is the usual fix.",
        },
        {
          question: "Can you replace filters on my existing system?",
          answer: "Yes. We service and replace filters on whole-home filtration systems, including ones we did not install.",
        },
      ]}
      relatedLinks={[
        { label: "Emergency plumbing and repairs", to: "/services/plumbing-repairs-and-emergencies" },
        { label: "Water heater repair and replacement", to: "/services/water-heaters" },
        { label: "All plumbing services", to: "/services" },
      ]}
    />
  );
}
