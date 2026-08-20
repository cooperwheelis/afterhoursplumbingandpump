import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://afterhoursplumbingandpump.com";

const entries: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/services/plumbing-repairs-and-emergencies", changefreq: "monthly", priority: "0.9" },
  { path: "/services/water-heaters", changefreq: "monthly", priority: "0.8" },
  { path: "/services/well-pumps-and-water-quality", changefreq: "monthly", priority: "0.8" },
  { path: "/service-areas", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/hillsborough-nc", changefreq: "monthly", priority: "0.8" },
  { path: "/service-areas/durham-nc", changefreq: "monthly", priority: "0.8" },
  { path: "/service-areas/chapel-hill-nc", changefreq: "monthly", priority: "0.8" },
  { path: "/service-areas/mebane-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/efland-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/burlington-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/cary-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/morrisville-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/service-areas/raleigh-nc", changefreq: "monthly", priority: "0.7" },
  { path: "/reviews", changefreq: "weekly", priority: "0.8" },
  { path: "/about", changefreq: "yearly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
