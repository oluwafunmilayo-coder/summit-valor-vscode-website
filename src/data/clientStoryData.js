// src/data/clientStoryData.js
// Edit this file to update Client Story content — no need to touch the component.

const clientStoryData = {
  eyebrow: "Client Story",
  heading: "How operational systems transformed a growing business.",
  intro:
    "A look inside how Summit Valor partnered with Taurus Driving School & Logistics Ventures to rebuild its operations, brand, and growth strategy from the ground up.",

  slides: [
    {
      type: "overview",
      label: "Client Overview",
      fields: [
        { label: "Business", value: "Taurus Driving School & Logistics Ventures" },
        { label: "Industry", value: "Driver Training & Mobility Solutions" },
        { label: "Team Size", value: "10–15 team members" },
        { label: "Location", value: "Nigeria" },
      ],
    },
    {
      type: "challenge",
      label: "The Challenge",
      heading: "A clear vision, held back by traditional structure.",
      description:
        "Taurus Driving School had a clear vision for growth but was operating primarily as a traditional driving school, with the goal of building a more scalable, sustainable business within real capital and operational constraints.",
      painPoints: [
        "Revenue tied almost entirely to student enrolment",
        "No structured systems for operations or performance tracking",
        "Brand positioning limited to a single service line",
        "No clear pathway to corporate or B2B revenue",
      ],
    },
    {
      type: "solution",
      label: "The Solution",
      heading: "Repositioning Taurus as a Driver & Mobility Solutions company.",
      timeline: "4-week strategic engagement",
      systems: [
        "Full business audit — operations, pricing, marketing, expansion plans",
        "Business model transformation — driving school to mobility solutions company",
        "Brand strategy — vision, mission, positioning, target audience, values",
        "Revenue diversification roadmap across new service lines",
      ],
    },
    {
      type: "implementation",
      label: "Implementation",
      heading: "From strategy to structured execution.",
      timeline: "Rolled out in phases alongside daily operations",
      workflows: [
        {
          title: "Revenue Diversification",
          detail:
            "Driver documentation & licence processing, corporate driver training & recruitment, membership programmes & insurance partnerships",
        },
        {
          title: "Operations Systems",
          detail: "CRM & digital booking systems introduced for client management",
        },
        {
          title: "SOPs & Dashboards",
          detail: "Documented SOPs and performance dashboards for day-to-day operations",
        },
        {
          title: "Automation",
          detail: "Streamlined booking-to-enrolment workflows to reduce manual admin",
        },
      ],
    },
    {
      type: "results",
      label: "The Results",
      heading: "From single-service school to mobility solutions company.",
      before: [
        "Single revenue stream (student enrolment)",
        "No documented operating systems",
        "Positioned as a driving school only",
      ],
      after: [
        "Multiple revenue streams across training, recruitment & partnerships",
        "CRM, SOPs & performance dashboards in place",
        "Repositioned as a Driver & Mobility Solutions company",
      ],
      metrics: [
        { value: "3", label: "New revenue streams identified" },
        { value: "6", label: "Key strategic recommendations delivered" },
        { value: "1", label: "Full brand & business model repositioning" },
      ],
    },
    {
      type: "video",
      label: "Client Testimonial",
      heading: "Hear it directly from Taurus.",
      // Set to "youtube" or "local"
      videoType: "youtube",
      // Youtube: full video ID only. Local: path relative to /public
      videoSrc: "I00XlngDbeE",
      thumbnail: "/client-story/slide6.jpg",
      caption: "Taurus Driving School & Logistics Ventures",
    },
  ],
};

export default clientStoryData;
