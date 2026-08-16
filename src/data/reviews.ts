/**
 * PLACEHOLDER REVIEWS.
 * Replace `quote`, `name`, and `city` with real customer reviews before launch.
 * Nothing here is published as review structured data, so no ratings are implied.
 */
export type Review = {
  id: string;
  quote: string;
  name: string;
  city: string;
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    quote: "[Replace with a real customer review about after-hours emergency service.]",
    name: "[Customer name]",
    city: "Hillsborough, NC",
  },
  {
    id: "r2",
    quote: "[Replace with a real customer review about a water heater job.]",
    name: "[Customer name]",
    city: "Durham, NC",
  },
  {
    id: "r3",
    quote: "[Replace with a real customer review about a well pump or water quality job.]",
    name: "[Customer name]",
    city: "Chapel Hill, NC",
  },
  {
    id: "r4",
    quote: "[Replace with a real customer review from a Hillsborough homeowner.]",
    name: "[Customer name]",
    city: "Hillsborough, NC",
  },
  {
    id: "r5",
    quote: "[Replace with a real customer review from a Durham homeowner or business.]",
    name: "[Customer name]",
    city: "Durham, NC",
  },
];

export const reviewsForCity = (city: string) => REVIEWS.filter((r) => r.city.startsWith(city));
