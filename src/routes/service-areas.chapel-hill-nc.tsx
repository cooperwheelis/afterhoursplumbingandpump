import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/site/CityPage";
import { cityBySlug } from "@/data/cities";
import { COMPANY, OG_IMAGE, PHONE_DISPLAY, SITE_URL, url } from "@/data/site";

const content = cityBySlug("chapel-hill-nc");
const pageUrl = url("/service-areas/chapel-hill-nc");

export const Route = createFileRoute("/service-areas/chapel-hill-nc")({
  head: () => ({
    meta: [
      { title: `${content.metaTitle} | After Hours Plumbing` },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: url("/service-areas") },
            { "@type": "ListItem", position: 3, name: `${content.city}, NC`, item: pageUrl },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Plumbing and well pump service",
          name: content.title,
          description: content.metaDescription,
          areaServed: { "@type": "City", name: `${content.city}, NC` },
          provider: {
            "@type": "Plumber",
            name: COMPANY,
            telephone: PHONE_DISPLAY,
            url: SITE_URL,
          },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <CityPage content={cityBySlug("chapel-hill-nc")} />;
}
