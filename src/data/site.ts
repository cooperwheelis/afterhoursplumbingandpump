export const SITE_URL = "https://afterhoursplumbingandpump.com";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Absolute URL helper for canonical + og:url tags. */
export const url = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export const PHONE_DISPLAY = "(919) 732-7588";
export const PHONE_HREF = "tel:+19197327588";
export const EMAIL = "Doug@AfterHoursPlumbingAndPump.com";
export const MAILING_ADDRESS = "P.O. Box 296, Hillsborough, NC 27278";
export const STREET_ADDRESS = "231 Orange Grove St";
export const CITY_STATE_ZIP = "Hillsborough, NC 27278";
export const FULL_ADDRESS = `${STREET_ADDRESS}, ${CITY_STATE_ZIP}`;
export const COMPANY = "After Hours Plumbing and Pump Service";

/** Google rating, confirmed by the owner. Update both values together. */
export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 323;
export const GOOGLE_PROFILE_URL = "https://share.google/hqp02DHqkLWxaV58D";

export const SERVICE_LINKS = [
  { label: "All Services", to: "/services" },
  { label: "Plumbing Repairs & Emergencies", to: "/services/plumbing-repairs-and-emergencies" },
  { label: "Water Heaters", to: "/services/water-heaters" },
  { label: "Well Pumps & Water Quality", to: "/services/well-pumps-and-water-quality" },
] as const;

export const AREA_LINKS = [
  { label: "All Service Areas", to: "/service-areas" },
  { label: "Hillsborough", to: "/service-areas/hillsborough-nc" },
  { label: "Durham", to: "/service-areas/durham-nc" },
  { label: "Chapel Hill", to: "/service-areas/chapel-hill-nc" },
  { label: "Mebane", to: "/service-areas/mebane-nc" },
  { label: "Efland", to: "/service-areas/efland-nc" },
  { label: "Burlington", to: "/service-areas/burlington-nc" },
  { label: "Cary", to: "/service-areas/cary-nc" },
  { label: "Morrisville", to: "/service-areas/morrisville-nc" },
  { label: "Raleigh", to: "/service-areas/raleigh-nc" },
] as const;

export const CITIES: { name: string; to: string }[] = [
  { name: "Hillsborough", to: "/service-areas/hillsborough-nc" },
  { name: "Durham", to: "/service-areas/durham-nc" },
  { name: "Chapel Hill", to: "/service-areas/chapel-hill-nc" },
  { name: "Mebane", to: "/service-areas/mebane-nc" },
  { name: "Efland", to: "/service-areas/efland-nc" },
  { name: "Burlington", to: "/service-areas/burlington-nc" },
  { name: "Cary", to: "/service-areas/cary-nc" },
  { name: "Morrisville", to: "/service-areas/morrisville-nc" },
  { name: "Raleigh", to: "/service-areas/raleigh-nc" },
];

export const MAPS_LINK = "https://www.google.com/maps/place/Hillsborough,+NC+27278";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/afterhoursplumbingandpump" },
  { label: "Nextdoor", href: "https://nextdoor.com/pages/after-hours-plumbing-and-pump-service-hillsborough-nc/" },
  { label: "Angi", href: "https://www.angi.com/companylist/us/nc/hillsborough/after-hours-plumbing-and-pump-service-reviews.htm" },
  { label: "Google", href: GOOGLE_PROFILE_URL },
] as const;
