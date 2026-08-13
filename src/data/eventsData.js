// src/data/eventsData.js
// Edit this file to add, remove, or update events — no need to touch the Events components.

export const events = [
  {
    id: "academy-oct-2026",
    slug: "academy-october-2026",
    title: "Summit Valor Academy — October 2026 Cohort",
    category: "Training",
    date: "October 5, 2026",
    location: "Virtual",
    format: "Virtual",
    image: "/events/academy-training.svg",
    description:
      "A scholarship-based digital skills program combining four weeks of intensive training with four weeks of practical internship experience.",
    shortDescription:
      "Intensive digital skills training + internship experience. Hands-on projects with real-world mentorship.",
    status: "Upcoming",
    registrationOpen: true,
    featured: true,
    courses: [
      "Virtual Assistant",
      "Frontend Development",
      "AI Automation",
      "Graphic Design",
    ],
    benefits: [
      "4 weeks intensive training",
      "4 weeks practical internship",
      "Hands-on projects",
      "Practical assignments",
      "Real-world experience",
    ],
    acceptanceFee: "₦10,000",
    spacesLimited: true,
    ctaText: "Apply Now",
    ctaUrl: "https://forms.gle/cENNnuZPUQp3GZGs5",
    details: {
      program: "Academy",
      cohortMonth: "October 2026",
      format: "Virtual",
      duration: "8 weeks total",
      trainingWeeks: 4,
      internshipWeeks: 4,
      acceptanceFee: "₦10,000",
      spacesLimited: true,
    },
  },
  {
    id: "valor-summit-1",
    slug: "valor-summit-1",
    title: "Valor Summit 1.0",
    category: "Business Summit",
    date: "October 31, 2026",
    location: "Lagos, Nigeria",
    format: "In-Person",
    image: "/events/valor-summit.svg",
    description:
      "Valor Summit 1.0 is a founder-focused business summit bringing together ambitious entrepreneurs, business leaders, investors and ecosystem players for practical learning, strategic conversations, meaningful networking and opportunities.",
    shortDescription:
      "A founder-focused summit for learning, networking, and discovering opportunities. Connect with entrepreneurs and investors.",
    status: "Upcoming",
    registrationOpen: true,
    featured: true,
    theme: "Where Courage Meets Capital",
    ctaText: "Register Now",
    ctaUrl: "/events/valor-summit-1",
    hasDetailPage: true,
  },
];

export const eventStatuses = [
  "Upcoming",
  "Registration Open",
  "Registration Closed",
  "Past Event",
];
