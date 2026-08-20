/**
 * REVIEWS
 *
 * These entries mirror real Google reviews for After Hours Plumbing and Pump Service.
 * Paste the review text, first name, city and date from the Google Business Profile
 * into the objects below. Anything still marked [Paste ...] is a placeholder and is
 * automatically hidden from the site and from structured data.
 *
 * Only paste reviews that actually exist on Google — the page publishes Review schema.
 */
export type ReviewCategory = "emergency" | "water-heater" | "well-pump" | "general";

export type Review = {
  id: string;
  quote: string;
  name: string;
  city: string;
  /** ISO date, e.g. "2026-04-18". Used for Review structured data. */
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  category: ReviewCategory;
};

export const CATEGORY_LABELS: Record<ReviewCategory, string> = {
  emergency: "Emergency & after-hours calls",
  "water-heater": "Water heaters",
  "well-pump": "Well pumps & water quality",
  general: "General plumbing",
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    quote: "[Paste a Google review about an after-hours or emergency call.]",
    name: "[First name]",
    city: "Hillsborough, NC",
    date: "",
    rating: 5,
    category: "emergency",
  },
  {
    id: "r2",
    quote: "[Paste a Google review about an emergency call in Durham.]",
    name: "[First name]",
    city: "Durham, NC",
    date: "",
    rating: 5,
    category: "emergency",
  },
  {
    id: "r3",
    quote: "[Paste a Google review about a water heater repair or replacement.]",
    name: "[First name]",
    city: "Chapel Hill, NC",
    date: "",
    rating: 5,
    category: "water-heater",
  },
  {
    id: "r4",
    quote: "[Paste a Google review about a tankless water heater install.]",
    name: "[First name]",
    city: "Cary, NC",
    date: "",
    rating: 5,
    category: "water-heater",
  },
  {
    id: "r5",
    quote: "[Paste a Google review about a well pump or pressure tank job.]",
    name: "[First name]",
    city: "Efland, NC",
    date: "",
    rating: 5,
    category: "well-pump",
  },
  {
    id: "r6",
    quote: "[Paste a Google review about well water quality or a softener.]",
    name: "[First name]",
    city: "Mebane, NC",
    date: "",
    rating: 5,
    category: "well-pump",
  },
  {
    id: "r7",
    quote: "[Paste a Google review about a drain, toilet or faucet repair.]",
    name: "[First name]",
    city: "Hillsborough, NC",
    date: "",
    rating: 5,
    category: "general",
  },
  {
    id: "r8",
    quote: "[Paste a Google review about fair pricing or honesty.]",
    name: "[First name]",
    city: "Durham, NC",
    date: "",
    rating: 5,
    category: "general",
  },
  {
    id: "r9",
    quote: "[Paste a Google review from a Burlington or Alamance County customer.]",
    name: "[First name]",
    city: "Burlington, NC",
    date: "",
    rating: 5,
    category: "general",
  },
  {
    id: "r10",
    quote: "[Paste a Google review from a Raleigh or Morrisville customer.]",
    name: "[First name]",
    city: "Raleigh, NC",
    date: "",
    rating: 5,
    category: "general",
  },
];

/** A review only renders once the placeholder text has been replaced. */
export const isRealReview = (r: Review) => !r.quote.trim().startsWith("[");

export const publishedReviews = () => REVIEWS.filter(isRealReview);

export const reviewsForCity = (city: string) => publishedReviews().filter((r) => r.city.startsWith(city));

export const reviewsByCategory = (category: ReviewCategory) =>
  publishedReviews().filter((r) => r.category === category);
