import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { MobileCallBar } from "../components/site/MobileCallBar";
import { EMAIL, PHONE_DISPLAY } from "../data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-3 font-semibold text-navy-foreground">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home. You can always reach us at{" "}
          {PHONE_DISPLAY}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex min-h-11 items-center rounded-md border border-input px-5 py-3 text-sm font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "After Hours Plumbing and Pump Service",
  description:
    "Locally owned plumbing and well pump company in Hillsborough, NC offering 24/7 emergency service for homes and businesses across Durham and the Triangle.",
  telephone: "+1-919-732-7588",
  email: EMAIL,
  founder: { "@type": "Person", name: "Doug Jones" },
  foundingDate: "2009-03",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 296",
    addressLocality: "Hillsborough",
    addressRegion: "NC",
    postalCode: "27278",
    addressCountry: "US",
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
  areaServed: [
    "Hillsborough, NC",
    "Durham, NC",
    "Burlington, NC",
    "Chapel Hill, NC",
    "Cary, NC",
    "Raleigh, NC",
    "Mebane, NC",
    "Efland, NC",
    "Morrisville, NC",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "After Hours Plumbing and Pump Service | Hillsborough, NC" },
      {
        name: "description",
        content:
          "Locally owned plumbing and pump service in Hillsborough, NC. 24/7 emergency plumbing for Durham and the Triangle. Call (919) 732-7588.",
      },
      { property: "og:site_name", content: "After Hours Plumbing and Pump Service" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main id="main" className="pb-14 lg:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </QueryClientProvider>
  );
}
