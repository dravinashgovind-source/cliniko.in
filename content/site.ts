/**
 * Cliniko — editable site content.
 * Everything a non-developer may want to change lives here:
 * contact details, package pricing, testimonials and film links.
 */

export const site = {
  name: "Cliniko",
  domain: "cliniko.in",
  tagline: "Build. Grow. Get Found.",
  descriptor: "Marketing for Doctors. Growth for Clinics.",
  contactEmail: "support@cliniko.in",
  socials: {
    youtube: "#",
    instagram: "#",
    linkedin: "#",
    x: "#",
  },
};

export const nav = [
  { label: "What we do", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "For doctors", href: "#process" },
  { label: "About", href: "#why" },
];

/* ---------------------------------------------------------------- Packages
 * Set `price` to a string such as "₹45,000" to show it.
 * Leave it as null to show "Tailored quote" instead.
 */
export type Package = {
  id: string;
  name: string;
  summary: string;
  price: string | null;
  cadence: string;
  featured?: boolean;
  includes: string[];
};

export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential Presence",
    summary: "For doctors starting to build a credible digital footprint.",
    price: null,
    cadence: "per month",
    includes: [
      "Google Business Profile setup & optimisation",
      "Doctor profile & bio writing",
      "Professional photography session",
      "Monthly review-response support",
      "Quarterly visibility report",
    ],
  },
  {
    id: "growth",
    name: "Professional Growth",
    summary: "For established practices ready to lead their local market.",
    price: null,
    cadence: "per month",
    featured: true,
    includes: [
      "Everything in Essential Presence",
      "Conversion-focused clinic website",
      "Local SEO & Google Maps strategy",
      "8 educational reels per month",
      "Instagram & YouTube management",
      "Monthly performance review call",
    ],
  },
  {
    id: "complete",
    name: "Complete Clinic Branding",
    summary: "A full identity and content engine for multi-doctor clinics.",
    price: null,
    cadence: "project + retainer",
    includes: [
      "Brand identity & visual system",
      "Multi-location website & booking",
      "Doctor introduction films",
      "Clinic walkthrough production",
      "Full content calendar & publishing",
      "Dedicated brand strategist",
    ],
  },
];

/* ------------------------------------------------------------ Testimonials
 * Only quotes with `verified: true` are ever rendered.
 * Add real, approved words from real clients here.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [];

/* ------------------------------------------------------------------ Films
 * Add a `src` (mp4 / YouTube embed URL) when a film is ready.
 * Films without a source open in a tasteful "in production" state.
 */
export type Film = {
  id: string;
  kind: string;
  title: string;
  duration: string;
  image: string;
  src?: string;
};

export const films: Film[] = [
  {
    id: "intro",
    kind: "Doctor introduction film",
    title: "Meet the doctor, before the appointment.",
    duration: "1:48",
    image: "/images/film-interview.jpg",
  },
  {
    id: "walkthrough",
    kind: "Clinic walkthrough",
    title: "Let patients walk in before they walk in.",
    duration: "2:10",
    image: "/images/film-corridor.jpg",
  },
  {
    id: "education",
    kind: "Patient education",
    title: "Explain the condition. Earn the trust.",
    duration: "3:24",
    image: "/images/education.jpg",
  },
  {
    id: "reels",
    kind: "Social reels",
    title: "Thirty seconds that build a reputation.",
    duration: "0:30",
    image: "/images/reel-physio.jpg",
  },
];
