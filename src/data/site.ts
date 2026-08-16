export const PHONE_DISPLAY = "(919) 732-7588";
export const PHONE_HREF = "tel:+19197327588";
export const EMAIL = "Doug@AfterHoursPlumbingAndPump.com";
export const MAILING_ADDRESS = "P.O. Box 296, Hillsborough, NC 27278";
export const COMPANY = "After Hours Plumbing and Pump Service";

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
] as const;

export const CITIES: { name: string; primary: boolean; to?: string }[] = [
  { name: "Hillsborough", primary: true, to: "/service-areas/hillsborough-nc" },
  { name: "Durham", primary: true, to: "/service-areas/durham-nc" },
  { name: "Burlington", primary: false },
  { name: "Chapel Hill", primary: false },
  { name: "Cary", primary: false },
  { name: "Raleigh", primary: false },
  { name: "Mebane", primary: false },
  { name: "Efland", primary: false },
  { name: "Morrisville", primary: false },
];

export const MAPS_LINK = "https://www.google.com/maps/place/Hillsborough,+NC+27278";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/afterhoursplumbingandpump" },
  { label: "Nextdoor", href: "https://nextdoor.com/pages/after-hours-plumbing-and-pump-service-hillsborough-nc/" },
  { label: "Angi", href: "https://www.angi.com/companylist/us/nc/hillsborough/after-hours-plumbing-and-pump-service-reviews.htm" },
] as const;
