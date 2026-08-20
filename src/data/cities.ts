import type { FaqItem } from "@/components/site/Faq";

export type CityContent = {
  slug: string;
  city: string;
  county: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroImage: "technician" | "truck" | "well" | "heater" | "repair" | "pump";
  supportImage: "well" | "heater" | "repair" | "pump" | "detail";
  supportAlt: string;
  headline: string;
  lead: string;
  paragraphs: string[];
  points: string[];
  neighborhoods: string[];
  faqs: FaqItem[];
};

export const CITY_CONTENT: CityContent[] = [
  {
    slug: "chapel-hill-nc",
    city: "Chapel Hill",
    county: "Orange County",
    title: "Plumber in Chapel Hill, NC",
    metaTitle: "Plumber in Chapel Hill, NC | 24/7 Emergency Plumbing",
    metaDescription:
      "Local plumber serving Chapel Hill, NC. Emergency repairs, water heaters, tankless installs and well pump service, 24/7 with no overtime charges. Call (919) 732-7588.",
    intro:
      "Chapel Hill is fifteen minutes down the road from our shop in Hillsborough, and we work there every week.",
    heroImage: "technician",
    supportImage: "heater",
    supportAlt: "Water heater replacement finished in a Chapel Hill home",
    headline: "Plumbing for Chapel Hill's older homes and student rentals",
    lead: "Much of Chapel Hill was built decades before current plumbing codes, and it shows in the calls we take: galvanized supply lines, cast-iron drains, and shutoff valves that seize the moment somebody needs them.",
    paragraphs: [
      "In the neighborhoods around campus and along Franklin Street, a lot of houses have been converted to rentals and split into multiple units. That means more fixtures on lines that were never sized for them. Slow drains, running toilets and water heaters that cannot keep up are the usual results, and they tend to fail at the worst possible time — the night before a full house wakes up.",
      "Out toward Chatham County and the properties west of town, we see private wells and pressure tanks. Pump work is half our name, so a house that suddenly has no water is a normal call for us, not a specialty referral.",
      "Because we are based in Hillsborough rather than Raleigh, a Chapel Hill emergency call does not sit behind two hours of traffic. And the rate does not change because it is a Saturday night.",
    ],
    points: [
      "Emergency repairs in older Chapel Hill homes",
      "Repiping worn galvanized and polybutylene lines",
      "Water heater repair, replacement and tankless upgrades",
      "Rental and multi-unit plumbing repairs for landlords",
      "Well pumps and pressure tanks west of town",
      "Drain cleaning, toilets, faucets and disposals",
    ],
    neighborhoods: [
      "Downtown & Franklin Street",
      "Meadowmont",
      "Southern Village",
      "Glen Lennox",
      "Briar Chapel",
      "Chapel Hill North",
    ],
    faqs: [
      {
        question: "Do you work on rental properties in Chapel Hill?",
        answer:
          "Yes. We handle repairs for landlords and property managers as well as owner-occupied homes, including turnover work between tenants.",
      },
      {
        question: "My Chapel Hill house still has old galvanized pipe. Can you replace it?",
        answer:
          "We can. We repair and replace worn supply lines, from a single failing run to a full repipe, and we work to current code.",
      },
      {
        question: "How fast can you get to Chapel Hill after hours?",
        answer:
          "We are based in Hillsborough, a short drive away, and we take emergency calls 24 hours a day. Call and we will tell you honestly when we can be there.",
      },
    ],
  },
  {
    slug: "mebane-nc",
    city: "Mebane",
    county: "Orange and Alamance counties",
    title: "Plumber in Mebane, NC",
    metaTitle: "Plumber in Mebane, NC | 24/7 Emergency Plumbing & Well Pumps",
    metaDescription:
      "Plumbing and well pump service in Mebane, NC. Emergency repairs, water heaters, pressure tanks and water treatment, 24/7 with no weekend premium. Call (919) 732-7588.",
    intro: "Mebane sits right on our western edge, and it is one of the towns we cover most often.",
    heroImage: "truck",
    supportImage: "well",
    supportAlt: "Well system and pressure tank serviced at a home outside Mebane",
    headline: "Well pumps and new-build plumbing in Mebane",
    lead: "Mebane is two towns at once: an older core near Clay Street and a fast-growing ring of new subdivisions. Both keep us busy, but for different reasons.",
    paragraphs: [
      "Outside the city limits, most homes are on private wells. When a pump fails, the whole house stops — no shower, no toilet, no dishwasher. We diagnose pumps, pressure switches and pressure tanks, and we carry the common parts so a lot of these calls are finished the same visit rather than turning into a week without water.",
      "Inside town and in the newer neighborhoods, the calls skew toward water heaters, drains and fixtures. Newer construction is not immune — builder-grade water heaters and valves fail on schedule, usually around year eight or ten.",
      "Mebane straddles the Orange and Alamance county line, which sometimes confuses out-of-town companies about who covers it. We do, both sides.",
    ],
    points: [
      "Well pump, pressure switch and pressure tank replacement",
      "Water softeners, filtration and iron treatment",
      "Water heater repair, replacement and tankless installs",
      "24/7 emergency repairs for leaks and burst pipes",
      "Drain cleaning and fixture replacement",
      "Service on both the Orange and Alamance sides of town",
    ],
    neighborhoods: [
      "Downtown Mebane",
      "Mill Creek",
      "Cambridge Park",
      "Trollingwood",
      "Buckhorn Road area",
      "Rural Orange County",
    ],
    faqs: [
      {
        question: "Our well pump quit and we have no water. How soon can you come?",
        answer:
          "No water is treated as an emergency. Call us any hour and we will get out as soon as we can — pump work is one of our core services.",
      },
      {
        question: "Do you cover the Alamance County side of Mebane?",
        answer: "Yes. We serve the whole Mebane area, on both sides of the county line.",
      },
      {
        question: "Can you fix hard water and staining?",
        answer:
          "We install and service water softeners and filtration, which is common for well homes around Mebane dealing with hardness or iron staining.",
      },
    ],
  },
  {
    slug: "efland-nc",
    city: "Efland",
    county: "Orange County",
    title: "Plumber in Efland, NC",
    metaTitle: "Plumber in Efland, NC | Well Pump & Emergency Plumbing",
    metaDescription:
      "Well pump and plumbing service in Efland, NC. Pumps, pressure tanks, water heaters and 24/7 emergency repairs from a Hillsborough-based company. Call (919) 732-7588.",
    intro: "Efland is ten minutes from our shop. It is about as local as our service area gets.",
    heroImage: "well",
    supportImage: "pump",
    supportAlt: "Well pump and pressure tank installation at a rural Efland property",
    headline: "Well and septic-area plumbing in Efland",
    lead: "Almost everything we do in Efland involves a well. Homes here sit on larger lots along Highway 70 and the roads off it, well outside any municipal water line.",
    paragraphs: [
      "The typical Efland call starts the same way: the taps sputter, or there is no water at all. From there it is usually a pump, a pressure switch, a waterlogged pressure tank, or a control box. We test rather than guess, because replacing a good pump is an expensive way to find out the switch was the problem.",
      "The second most common call is water quality. Well water around here can run hard, and iron or sulfur shows up in the laundry and at the tap. Softeners and filtration systems are routine work for us.",
      "Everything else — water heaters, drains, leaks under the house — we handle too, and being this close means an after-hours call in Efland is a short drive, not a dispatch across the county.",
    ],
    points: [
      "Well pump diagnosis and replacement",
      "Pressure tanks, switches and control boxes",
      "Water softeners, iron filters and treatment",
      "Water heaters, tank and tankless",
      "Leaks, burst pipes and crawlspace repairs",
      "24/7 emergency service, no weekend premium",
    ],
    neighborhoods: [
      "Efland proper",
      "US-70 corridor",
      "Buckhorn Road",
      "Mt. Willing Road area",
      "Schley / rural Orange County",
      "West Hillsborough edge",
    ],
    faqs: [
      {
        question: "How do I know if it is the pump or the pressure tank?",
        answer:
          "Usually you cannot tell from the tap, and the symptoms overlap. We test the pressure switch, tank charge and pump before recommending any replacement.",
      },
      {
        question: "Do you service older wells?",
        answer:
          "Yes. We work on both shallow and deep well systems, including older installations that need parts matched or updated.",
      },
      {
        question: "Is there an extra charge for a night call in Efland?",
        answer: "No. We do not add overtime or weekend premiums based on when you call.",
      },
    ],
  },
  {
    slug: "burlington-nc",
    city: "Burlington",
    county: "Alamance County",
    title: "Plumber in Burlington, NC",
    metaTitle: "Plumber in Burlington, NC | 24/7 Emergency Plumbing Service",
    metaDescription:
      "Plumbing service in Burlington, NC. Emergency repairs, water heaters, drains and well pump work, available 24/7 with no overtime charges. Call (919) 732-7588.",
    intro: "Burlington is a regular stop for us on the western side of our service area.",
    heroImage: "repair",
    supportImage: "repair",
    supportAlt: "Plumber repairing supply lines in a Burlington home",
    headline: "Repairs, water heaters and drains in Burlington",
    lead: "Burlington's housing stock ranges from early-1900s mill housing to postwar neighborhoods to newer construction out toward Elon and Alamance Crossing — and each era fails in its own way.",
    paragraphs: [
      "In the older parts of town we see cast-iron drain lines that have rusted narrow, sewer lines with root intrusion, and supply piping that has been repaired in patches over the years. Those houses often need a real fix rather than another patch, and we will tell you which one you are looking at.",
      "In midcentury and newer homes the calls are more predictable: water heaters at end of life, garbage disposals, hose bibbs that split over winter, and toilets that will not stop running.",
      "Burlington is on city water for the most part, but the properties on the outskirts often are not. If your house is on a well, that is squarely in our wheelhouse.",
    ],
    points: [
      "Emergency leak and burst pipe repair, 24/7",
      "Water heater repair and replacement",
      "Drain cleaning and sewer line problems",
      "Toilets, faucets, disposals and hose bibbs",
      "Commercial plumbing repairs",
      "Well pumps for properties outside the city",
    ],
    neighborhoods: [
      "Downtown Burlington",
      "Elon area",
      "Alamance Crossing",
      "Glen Raven",
      "Grove Park",
      "Southwest Burlington",
    ],
    faqs: [
      {
        question: "Do you charge more to come out to Burlington?",
        answer:
          "Our rate does not change with the hour or the day. Call us and we will be straightforward about what the job involves before we start.",
      },
      {
        question: "Can you handle a recurring drain backup?",
        answer:
          "Yes. Repeat backups usually mean something structural in the line rather than a simple clog, and we look for the cause instead of just clearing it again.",
      },
      {
        question: "Do you work on commercial buildings in Burlington?",
        answer: "We do. We take both residential and commercial plumbing calls.",
      },
    ],
  },
  {
    slug: "cary-nc",
    city: "Cary",
    county: "Wake County",
    title: "Plumber in Cary, NC",
    metaTitle: "Plumber in Cary, NC | 24/7 Emergency Plumbing & Water Heaters",
    metaDescription:
      "Plumbing service in Cary, NC. Water heater replacement, tankless installs, leak repair and 24/7 emergency plumbing with no weekend premium. Call (919) 732-7588.",
    intro: "We cover Cary as part of our Triangle service area, including nights and weekends.",
    heroImage: "heater",
    supportImage: "heater",
    supportAlt: "Newly installed water heater with fresh connections in a Cary home",
    headline: "Water heaters and repairs for Cary homes",
    lead: "Cary's neighborhoods are largely newer than the rest of our service area, which changes what breaks. Instead of failing cast iron, we are usually replacing equipment that has simply reached the end of its life.",
    paragraphs: [
      "Whole subdivisions here were built within a few years of each other, and builder-grade water heaters tend to fail on a similar schedule. If your neighbors are replacing theirs, yours is probably close behind. We install both conventional tanks and tankless units, and we will give you an honest read on whether tankless makes sense for your household rather than upselling it by default.",
      "The other frequent Cary calls are pressure-reducing valves, expansion tanks, leaking supply lines behind washers and refrigerators, and irrigation-related plumbing at the house connection.",
      "We are based in Hillsborough, so Cary is a drive for us. We are direct about scheduling — if you need someone in fifteen minutes, we will say so.",
    ],
    points: [
      "Water heater replacement, tank and tankless",
      "Leak detection and repair",
      "Pressure-reducing valves and expansion tanks",
      "Toilets, faucets, disposals and fixtures",
      "Drain cleaning",
      "24/7 emergency service with no premium pricing",
    ],
    neighborhoods: [
      "Downtown Cary",
      "Preston",
      "Amberly",
      "Lochmere",
      "Cary Park",
      "Weldon Ridge area",
    ],
    faqs: [
      {
        question: "Is tankless worth it for a Cary home?",
        answer:
          "It depends on how much hot water your household actually uses and what your gas and venting situation looks like. We will walk you through both options and what each costs to install.",
      },
      {
        question: "Do you offer emergency service in Cary at night?",
        answer:
          "Yes, we take emergency calls 24 hours a day. We are coming from Hillsborough, so we will be upfront about arrival time when you call.",
      },
      {
        question: "My water pressure is too high. Can you fix that?",
        answer:
          "Usually that is a failed pressure-reducing valve, which we replace. High pressure is worth fixing — it shortens the life of every fixture in the house.",
      },
    ],
  },
  {
    slug: "morrisville-nc",
    city: "Morrisville",
    county: "Wake County",
    title: "Plumber in Morrisville, NC",
    metaTitle: "Plumber in Morrisville, NC | Emergency Plumbing & Water Heaters",
    metaDescription:
      "Plumbing service in Morrisville, NC. Water heaters, leak repair, fixtures and 24/7 emergency plumbing without overtime charges. Call (919) 732-7588.",
    intro: "Morrisville is part of our Triangle coverage, days, nights and weekends.",
    heroImage: "technician",
    supportImage: "detail",
    supportAlt: "Finished plumbing repair under a sink in a Morrisville home",
    headline: "Straightforward plumbing service in Morrisville",
    lead: "Morrisville is dense with townhomes, newer single-family neighborhoods and rental properties, and the plumbing problems reflect that mix.",
    paragraphs: [
      "In townhomes and attached units, a leak is rarely only your problem — water travels to the unit next door fast. Those calls need someone who will shut it down properly and repair it rather than tape over it. We handle the repair and leave the connection right.",
      "In the newer single-family neighborhoods, the calls are the usual end-of-life items: water heaters, angle stops, supply hoses, disposals and running toilets. None of it is exotic, but all of it is worth doing correctly the first time.",
      "We also work with landlords and property managers here on turnover repairs and tenant emergencies.",
    ],
    points: [
      "Emergency leak repair in townhomes and condos",
      "Water heater repair and replacement",
      "Fixture, valve and supply line replacement",
      "Garbage disposals and drain cleaning",
      "Landlord and property manager repairs",
      "24/7 availability, no weekend premium",
    ],
    neighborhoods: [
      "Town Hall Drive area",
      "Breckenridge",
      "Preston Village",
      "Carpenter Village",
      "Kitts Creek",
      "Park West Village area",
    ],
    faqs: [
      {
        question: "Water is coming through my townhome ceiling. What should I do?",
        answer:
          "Shut off the main if you can reach it safely and call us right away. Attached-unit leaks spread quickly, so this is an emergency call.",
      },
      {
        question: "Do you work with property managers?",
        answer: "Yes. We take repair and turnover work for rentals as well as owner-occupied homes.",
      },
      {
        question: "Do you charge extra for evening calls?",
        answer: "No. Our pricing does not change based on the time of day or day of the week.",
      },
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    county: "Wake County",
    title: "Plumber in Raleigh, NC",
    metaTitle: "Plumber in Raleigh, NC | 24/7 Emergency Plumbing Service",
    metaDescription:
      "Plumbing service in Raleigh, NC. Emergency repairs, water heaters, drains and fixture work, 24/7 with no overtime or weekend premiums. Call (919) 732-7588.",
    intro: "Raleigh is the eastern edge of our service area, and we take calls there around the clock.",
    heroImage: "truck",
    supportImage: "repair",
    supportAlt: "After Hours plumber working on a repair at a Raleigh home",
    headline: "A local plumber's approach in a big-city market",
    lead: "Raleigh has no shortage of large plumbing outfits. What we offer is different: you talk to the owner, you get one crew, and the price does not jump because you called on a Sunday.",
    paragraphs: [
      "Inside the Beltline, houses are old enough to have real problems — cast-iron drains, original supply lines, sewer laterals with tree roots in them. Those repairs need diagnosis before demolition, and we would rather find the actual failure than replace whatever is easiest to reach.",
      "In North Raleigh and the newer areas, the work is mostly equipment at end of life: water heaters, pressure valves, angle stops and fixtures.",
      "We are honest about distance. We are based in Hillsborough, so for a Raleigh emergency we will tell you on the phone how long we will actually be, rather than leaving you waiting.",
    ],
    points: [
      "24/7 emergency plumbing repairs",
      "Water heater repair, replacement and tankless installs",
      "Drain cleaning and sewer line diagnosis",
      "Leak detection and pipe repair",
      "Fixtures, valves and disposals",
      "Residential and light commercial work",
    ],
    neighborhoods: [
      "Inside the Beltline",
      "North Raleigh",
      "Five Points",
      "Brier Creek",
      "West Raleigh",
      "Northwest Raleigh",
    ],
    faqs: [
      {
        question: "You are based in Hillsborough. Is Raleigh too far?",
        answer:
          "We serve Raleigh, and we are honest about timing. Call us and we will tell you when we can realistically be there before you commit.",
      },
      {
        question: "Do you handle sewer line problems?",
        answer:
          "Yes. Repeat backups in older Raleigh homes are usually root intrusion or a failing line, and we diagnose the cause rather than just clearing it.",
      },
      {
        question: "Is emergency service priced differently?",
        answer: "No. There is no overtime or weekend premium, whatever the hour.",
      },
    ],
  },
];

export const cityBySlug = (slug: string) => CITY_CONTENT.find((c) => c.slug === slug)!;
