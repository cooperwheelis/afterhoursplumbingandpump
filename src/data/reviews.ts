/**
 * REVIEWS
 *
 * These entries mirror real Google reviews for After Hours Plumbing and Pump Service.
 * Only reviews that actually exist on Google are published here with Review structured data.
 */
export type ReviewCategory = "emergency" | "water-heater" | "well-pump" | "general";

export type Review = {
  id: string;
  quote: string;
  name: string;
  city: string;
  /** ISO date, e.g. "2026-07-15". Used for Review structured data. */
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
    quote:
      "Nathaniel was here to replace our dishwasher. He was punctual, respectful and efficient. Very knowledgeable and kind. He worked quickly but did not rush at all. I would recommend Nathaniel from After Hours Plumbing & Pump Services to anyone who needed services done in their home.",
    name: "Kyle Dongo",
    city: "Hillsborough, NC",
    date: "2026-05-12",
    rating: 5,
    category: "general",
  },
  {
    id: "r2",
    quote:
      "Nate did an awesome job on our Kitchen Faucet remove and replace. Great personality and customer service. Pleasure to do business with After Hours Plumbing. Came out same day right on time.",
    name: "Norris Townsend",
    city: "Durham, NC",
    date: "2026-06-08",
    rating: 5,
    category: "general",
  },
  {
    id: "r3",
    quote:
      "New to Cary, we were referred here by our realtor to deal with some inspection issues and some upgrades. From our first phone call through the end of the job it couldn't possibly have gone any better. Alfredo and Eric were awesome!",
    name: "Bill Reed",
    city: "Cary, NC",
    date: "2026-07-14",
    rating: 5,
    category: "general",
  },
  {
    id: "r4",
    quote:
      "Nate and his coworker were excellent. Very professional, knowledgable and courteous. Nothing kept them from fixing my water pressure issue. I would highly recommend them for any type of plumbing work needed.",
    name: "ahna bridge",
    city: "Chapel Hill, NC",
    date: "2026-07-09",
    rating: 5,
    category: "well-pump",
  },
  {
    id: "r5",
    quote:
      "Great experience. This is the second time Nate has come to do some work at our house and he is simply incredible. He's communicative, fast, professional, and friendly. Both times he has gone above and beyond to ensure all concerns I have are addressed.",
    name: "Cutter Wyatt",
    city: "Durham, NC",
    date: "2026-07-06",
    rating: 5,
    category: "general",
  },
  {
    id: "r6",
    quote:
      "Stephen and Tyler came today to install my new toilet. They were prompt and from the first second I had total confidence in them and the work to be done, they did not disappoint. My new toilet is perfect, looks so neat and it's taller than expected.",
    name: "Jeannie Clement",
    city: "Hillsborough, NC",
    date: "2026-03-18",
    rating: 5,
    category: "general",
  },
  {
    id: "r7",
    quote:
      "We woke up to no water this morning. Turns out the pipe coming off our well head broke in the night. After Hours had a technician on site within an hour. Nate was great. He was clearly knowledgeable and a pleasure to work with. The cost was very reasonable.",
    name: "Sean Smith",
    city: "Efland, NC",
    date: "2026-06-22",
    rating: 5,
    category: "emergency",
  },
  {
    id: "r8",
    quote:
      "We had an active water leak from a defective shut off valve for the hot water supply line on a pedestal lavatory that another plumbing company had installed and After Hours Plumbing was very responsive when I called them.",
    name: "Tom Harris",
    city: "Burlington, NC",
    date: "2026-03-22",
    rating: 5,
    category: "emergency",
  },
  {
    id: "r9",
    quote:
      "I cannot say enough good things about Alfredo and Tanner. They came out on a Wednesday, diagnosed the issue with my water heater system, and gave me a very competitive estimate on the spot. By Thursday, the new electric water heater was installed and working.",
    name: "Riccardo Colacito",
    city: "Mebane, NC",
    date: "2026-01-14",
    rating: 5,
    category: "water-heater",
  },
  {
    id: "r10",
    quote:
      "Nate was able to quickly identify and fix a couple of plumbing issues that popped up. He also diagnosed some other issues we have been experiencing. He was extremely professional and knowledgeable.",
    name: "Mark Pope",
    city: "Morrisville, NC",
    date: "2026-06-28",
    rating: 5,
    category: "general",
  },
  {
    id: "r11",
    quote:
      "Matt and Omar did an outstanding job replacing my water heater and installing recirculation pump. I always use After Hours Plumbing and highly recommend Doug and his crew!",
    name: "Patty Hight",
    city: "Raleigh, NC",
    date: "2025-08-17",
    rating: 5,
    category: "water-heater",
  },
  {
    id: "r12",
    quote:
      "Had a super positive experience with Matt and After Hours Plumbing. Very clear explanations of my options to fix my orange water at reasonable price points. They are extremely easy to deal with, very cheerful, and quite thorough. They were recommended by a neighbor and I can see why!",
    name: "Anne Marsh",
    city: "Hillsborough, NC",
    date: "2025-12-09",
    rating: 5,
    category: "well-pump",
  },
  {
    id: "r13",
    quote:
      "Nate came in and replaced my disposal. Incredibly personable and had the job done way faster than expected. Highly recommended.",
    name: "Sanford Long",
    city: "Durham, NC",
    date: "2026-06-15",
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
