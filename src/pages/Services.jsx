import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiCompass,
  FiLayers,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const problems = [
  {
    number: "01",
    title: "Unclear Direction",
    description:
      "You have a business idea or an existing offer, but need clarity on the business model, strategy, or next steps.",
  },
  {
    number: "02",
    title: "Disorganized Operations",
    description:
      "Processes live in people's heads, responsibilities are unclear, and everyday work feels harder than it should.",
  },
  {
    number: "03",
    title: "Inconsistent Execution",
    description:
      "You know what needs to improve, but turning decisions into coordinated action remains a challenge.",
  },
];

const serviceCategories = [
  {
    number: "01",
    title: "Business Strategy & Venture Development",
    description:
      "For aspiring entrepreneurs and founders who need to turn ideas into structured, informed business decisions.",
    accent: "bg-[#F5F5F7]",
    icon: FiCompass,
    offerings: [
      {
        title: "Business Idea Assessment",
        description:
          "Assess an idea's assumptions and receive prioritized research questions and next steps for informed decisions.",
        timeline: "5–7 working days",
        to: "/services/business-idea-assessment",
      },
      {
        title: "Business Research & Analysis",
        description:
          "Receive focused market, customer, competitor, and opportunity research to support business decisions.",
        timeline: "3–4 weeks",
        to: "/services/business-planning",
      },
      {
        title: "Business Planning & Model Development",
        description:
          "Clarify your business model and offer, with a practical plan to guide priorities and decisions.",
        timeline: "3–4 weeks",
        to: "/services/business-planning",
      },
      {
        title: "Pitch Deck Development",
        description:
          "Shape your business story, opportunity, and plan into a clear presentation for prospective funders or partners.",
        timeline: "7–14 working days",
        to: "/services/business-planning",
      },
      {
        title: "Investor & Grant Readiness",
        description:
          "Prepare your business narrative and supporting materials for relevant investor or grant opportunities.",
        timeline: "4–6 weeks",
        to: "/services/business-planning",
      },
    ],
  },
  {
    number: "02",
    title: "Operations & Process Design",
    description:
      "Establish processes, define responsibilities, improve workflows, train existing employees, and identify suitable talent.",
    accent: "bg-[#F5F5F7]",
    icon: FiLayers,
    offerings: [
      {
        title: "Business Process Review",
        description:
          "Review how work gets done, identify operational friction, and prioritize improvements.",
        timeline: "Up to 2 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "SOP Development",
        description:
          "Document repeatable processes in practical standard operating procedures for your team.",
        timeline: "2–2.5 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Team Structure & Role Design",
        description:
          "Clarify team responsibilities, role expectations, and the structure that supports your goals.",
        timeline: "2 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Workflow Design",
        description:
          "Improve how tasks, information, and responsibilities move across your business.",
        timeline: "2–3 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Employee Onboarding & Training",
        description:
          "Equip existing employees with structured onboarding, role guidance, and relevant training.",
        timeline: "4–6 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Talent Identification (Valor Talent)",
        description:
          "Identify suitable talent against your role requirements through Summit Valor's Valor Talent service.",
        timeline: "2–6 weeks, depending on role requirements",
        to: "/valor-talent",
      },
    ],
  },
  {
    number: "03",
    title: "Systems, Automation & CRM",
    description:
      "For businesses that need connected workflows, better visibility, and systems that support consistent execution.",
    accent: "bg-[#F5F5F7]",
    icon: FiSettings,
    offerings: [
      {
        title: "Business Systems Design",
        description:
          "Plan how processes, responsibilities, tools, workflows, communication, and performance monitoring work together.",
        timeline:
          "Small teams: 4–6 weeks; multiple departments: 8–12 weeks; larger or complex organisations: 3–6 months",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Basic CRM Setup",
        description:
          "Set up a customer relationship management workspace to organize contacts, activity, and follow-up.",
        timeline: "2–4 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Simple Workflow Automation",
        description:
          "Automate suitable repeatable tasks to reduce manual handoffs and support consistent execution.",
        timeline: "1–3 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Workspace Setup",
        description:
          "Configure a practical digital workspace that supports the way your team collaborates and manages work.",
        timeline: "1–2 weeks",
        to: "/services/systems-process-improvement",
      },
      {
        title: "Systems Implementation",
        description:
          "Put agreed tools, workflows, and operational systems into practice for a defined project.",
        timeline: "7–10 weeks for a defined implementation project",
        to: "/services/systems-process-improvement",
      },
    ],
  },
  {
    number: "04",
    title: "Business Transformation & Execution",
    description:
      "For founders who need a clear improvement plan and practical support to move from decisions to action.",
    accent: "bg-[#F5F5F7]",
    icon: FiTrendingUp,
    offerings: [
      {
        title: "Business Performance Review",
        description:
          "Review agreed business and operational priorities to identify performance gaps and opportunities.",
        timeline: "2–3 weeks (up to 4 weeks where necessary)",
        to: "/services/business-growth-implementation",
      },
      {
        title: "Business Model Restructuring",
        description:
          "Review and restructure your business model to better align the way you create, deliver, and sustain value.",
        timeline: "3–6 weeks",
        to: "/services/business-growth-implementation",
      },
      {
        title: "Offer Restructuring",
        description:
          "Refine your offer's positioning, structure, and delivery to improve clarity and alignment with customer needs.",
        timeline: "2–4 weeks",
        to: "/services/business-growth-implementation",
      },
      {
        title: "90-Day Operational Roadmap",
        description:
          "Turn assessment findings into a prioritized 90-day plan with actions and milestones; this is planning, not implementation.",
        timeline: "2–3 weeks",
        to: "/services/business-growth-implementation",
      },
      {
        title: "Implementation Support",
        description:
          "Work with the team to put agreed recommendations into practice, with scope and support defined before work begins.",
        timeline: "90 days",
        to: "/services/business-growth-implementation",
      },
    ],
  },
];

const consultationOptions = [
  {
    name: "Standard Business Consultation",
    fee: "₦35,000",
    duration: "60 minutes",
    suitableFor:
      "Aspiring entrepreneurs, idea-stage founders, startups, and growing businesses.",
    includes: [
      "Discuss your business idea or existing business",
      "Understand your challenges and objectives",
      "Professional guidance on immediate business concerns",
      "Strategic recommendations and suggested next steps",
    ],
    inquiry: "standard",
    featured: false,
  },
  {
    name: "In-Depth Strategy Consultation",
    fee: "₦60,000",
    duration: "Up to 2 hours",
    suitableFor:
      "Founders and business owners seeking deeper strategic guidance at any business stage.",
    includes: [
      "More extensive discussion of business challenges",
      "Deeper strategic analysis and direction",
      "Explore business models, operations, growth, or restructuring",
      "Prioritized recommendations and action points",
    ],
    inquiry: "in-depth",
    featured: true,
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Assessment & Discovery",
    timeline: "1–4 weeks",
    description:
      "Business assessment, research, performance review, and identification of gaps.",
  },
  {
    number: "02",
    title: "Strategy Development",
    timeline: "3–6 weeks",
    description:
      "Business planning, model development, offer restructuring, and strategic direction.",
  },
  {
    number: "03",
    title: "Funding & Readiness",
    timeline: "5–8 weeks",
    description:
      "Pitch decks, investor readiness, grant readiness, and supporting documentation.",
  },
  {
    number: "04",
    title: "Operations Design",
    timeline: "4–8 weeks",
    description:
      "Process reviews, SOPs, team structure, role definition, and workflow design.",
  },
  {
    number: "05",
    title: "Systems & Implementation",
    timeline: "7–10 weeks",
    description:
      "CRM setup, automation, workspace setup, and systems implementation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, challenges, and objectives.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We evaluate your needs and identify the right approach.",
  },
  {
    number: "03",
    title: "Proposal",
    description:
      "We provide a tailored proposal with scope, deliverables, timeline, and fees.",
  },
  {
    number: "04",
    title: "Onboarding",
    description:
      "We confirm the agreement and payment, assign the project team, and set up your client portal.",
  },
  {
    number: "05",
    title: "Implementation",
    description:
      "Our team works with you to deliver the solutions agreed in your engagement.",
  },
  {
    number: "06",
    title: "Review & Handover",
    description:
      "We review outcomes, complete the handover, and establish agreed next steps.",
  },
];

const supportRoles = [
  {
    title: "Project Lead",
    responsibilities: [
      "Primary point of contact and project activity coordinator",
      "Monitors milestones, deliverables, and progress updates",
      "Coordinates consultants and specialists, escalating issues where needed",
    ],
  },
  {
    title: "Client Support Coordinator",
    responsibilities: [
      "Assists with communication, meetings, and reminders",
      "Tracks outstanding information, documents, and agreed actions",
      "Helps clients navigate their project portal",
    ],
  },
  {
    title: "Business Consultants & Specialists",
    responsibilities: [
      "Provide expertise required for the project",
      "Conduct assessments and research, and develop strategies",
      "Support implementation where included in scope",
    ],
  },
  {
    title: "Management Oversight",
    responsibilities: [
      "Supervises delivery quality and overall project oversight",
      "Provides escalation support when required",
    ],
  },
];

const portalFeatures = [
  "Track project milestones and progress",
  "View assigned tasks and outstanding activities",
  "Access important documents and deliverables",
  "Review meeting notes and project updates",
  "Communicate with your assigned Project Lead",
  "Monitor responsibilities and next steps",
];

const audiences = [
  {
    title: "Aspiring Entrepreneurs",
    description:
      "For people developing an idea who need research, business structure, and a clearer direction.",
  },
  {
    title: "Early-Stage Businesses",
    description:
      "For founders establishing repeatable processes, clearer responsibilities, and stronger operating foundations.",
  },
  {
    title: "Growing Businesses",
    description:
      "For businesses that need improved workflows, connected systems, and more consistent execution.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity Before Complexity",
    description:
      "We focus on understanding the problem before recommending a solution.",
  },
  {
    number: "02",
    title: "Structure That Supports Execution",
    description:
      "We help translate business needs into processes, systems, and actionable plans.",
  },
  {
    number: "03",
    title: "Solutions Built Around Your Business",
    description:
      "Recommendations should reflect your business stage, goals, and operating realities.",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by service, complexity, scope, and how promptly required information is provided. Your confirmed timeline will be outlined in your proposal.",
  },
  {
    question: "Will I have someone assigned to manage my project?",
    answer:
      "Substantial engagements include a coordinated project support structure. The specific roles involved depend on your project scope; a dedicated full-time virtual assistant is not included by default.",
  },
  {
    question: "Do you provide implementation support after consulting?",
    answer:
      "Implementation support may be included when agreed in your engagement. A roadmap sets out priorities and actions; it is distinct from carrying those actions out.",
  },
  {
    question: "Will I have access to a client portal?",
    answer:
      "Substantial projects include access to an organized digital workspace powered by Notion for project progress, tasks, documents, updates, and next steps.",
  },
  {
    question: "Can I engage Summit Valor for just one service?",
    answer:
      "Yes. You can discuss a single service or a broader engagement; we will confirm the appropriate scope and deliverables in your proposal.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. Services can be combined where they support your needs. The proposal will clarify the agreed work, timeline, and fees.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "We work with aspiring entrepreneurs, startups, and growing or established businesses. The approach is tailored to your stage and operating needs.",
  },
  {
    question: "What happens if I need additional support after project completion?",
    answer:
      "If you need more support, we can discuss your next priorities and agree a separate scope of work. Ongoing or unlimited support is not assumed.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

function Reveal({ as = "div", children, className, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion[as];
  const revealVariants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : reveal;

  return (
    <MotionElement
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={revealVariants}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

function SectionIntro({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          light ? "text-purple-300" : "text-[#5B21B6]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#1F1F23]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openOffering, setOpenOffering] = useState(null);
  const [activeFrameworkStep, setActiveFrameworkStep] = useState(null);
  const [activeSupportRole, setActiveSupportRole] = useState(null);
  const reduceMotion = useReducedMotion();
  const frameworkRef = useRef(null);
  const { scrollYProgress: frameworkProgress } = useScroll({
    target: frameworkRef,
    offset: ["start 75%", "end 75%"],
  });
  const frameworkLineProgress = useSpring(frameworkProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white font-sans text-[#1F1F23]">
      <Navbar />
      <main>
        <section className="bg-[#F5F5F7] pt-28 sm:pt-32">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-12 lg:pb-24">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={reveal}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                The record label for businesses · Bold Moves. Brave Futures.
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Build the Business. Strengthen the Systems. Execute with
                Confidence.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Whether you&apos;re turning an idea into a business or improving
                an existing operation, Summit Valor helps you establish the
                strategy, systems, and structure needed to move forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6] motion-reduce:transform-none"
                >
                  Explore Our Services
                  <FiArrowDown aria-hidden="true" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-[#5B21B6] hover:text-[#5B21B6] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6] motion-reduce:transform-none"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.65, delay: 0.12, ease: "easeOut" }
              }
            >
              <img
                src="/hero-image-home.jpg"
                alt="Business professionals reviewing reports and a tablet during a strategy discussion"
                width="1800"
                height="1200"
                fetchPriority="high"
                className="aspect-[4/3] w-full rounded-2xl object-cover sm:rounded-3xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="The challenge"
                title="Growth Gets Harder When the Foundation Isn't Clear."
                description="An idea can have potential and an established business can have customers, yet both can struggle without the right direction, structure, and systems."
              />
            </Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {problems.map((problem, index) => (
                <Reveal
                  key={problem.number}
                  delay={index * 0.08}
                  className="border-t border-gray-300 py-7 md:py-8"
                >
                  <p className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                    {problem.number}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">
                    {problem.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {problem.description}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-4 max-w-3xl border-l-2 border-[#5B21B6] pl-5 text-lg font-medium leading-8 text-[#1F1F23]">
                Summit Valor helps you identify what needs attention and build a
                practical path forward.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Our core services"
                title="Practical Solutions for Your Next Stage of Growth"
                description="From developing your business foundation to improving the way it operates, our services address the strategy, structure, and execution behind your business."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Reveal
                    key={category.number}
                    delay={index * 0.07}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            boxShadow: "0 16px 36px rgba(31, 31, 35, 0.10)",
                            transition: { duration: 0.24, ease: "easeOut" },
                          }
                    }
                    className={`h-full rounded-2xl border border-gray-200 ${category.accent} p-6 shadow-sm transition-colors duration-300 hover:border-[#5B21B6]/40 sm:p-8`}
                  >
                    <article className="flex h-full flex-col">
                      <motion.button
                        type="button"
                        aria-expanded={openCategory === category.number}
                        aria-controls={`service-category-${category.number}`}
                        onClick={() => {
                          setOpenCategory(
                            openCategory === category.number
                              ? null
                              : category.number
                          );
                          setOpenOffering(null);
                        }}
                        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                        className="flex w-full items-start justify-between gap-4 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                      >
                        <span>
                          <span className="block text-sm font-semibold tracking-wider text-[#5B21B6]">
                            {category.number}
                          </span>
                          <span className="mt-3 block text-xl font-semibold leading-snug sm:text-2xl">
                            {category.title}
                          </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-3">
                          <Icon
                            aria-hidden="true"
                            className="mt-1 h-6 w-6 shrink-0 text-[#5B21B6]"
                          />
                          <FiChevronDown
                            aria-hidden="true"
                            className={`h-5 w-5 text-[#5B21B6] transition-transform duration-300 ${
                              openCategory === category.number ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </motion.button>
                      <p className="mt-4 max-w-xl leading-7 text-gray-600">
                        {category.description}
                      </p>
                      <motion.div
                        id={`service-category-${category.number}`}
                        initial={false}
                        animate={{
                          height: openCategory === category.number ? "auto" : 0,
                          opacity: openCategory === category.number ? 1 : 0,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.32,
                          ease: "easeInOut",
                        }}
                        aria-hidden={openCategory !== category.number}
                        inert={openCategory !== category.number}
                        className="overflow-hidden"
                      >
                        <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
                          {category.offerings.map((offering, offeringIndex) => {
                            const offeringId = `${category.number}-${offering.title}`;
                            const isOfferingOpen = openOffering === offeringId;

                            return (
                              <li key={offering.title} className="py-4">
                                <motion.button
                                  type="button"
                                  aria-expanded={isOfferingOpen}
                                  aria-controls={`service-offering-${category.number}-${offeringIndex}`}
                                  onClick={() =>
                                    setOpenOffering(
                                      isOfferingOpen ? null : offeringId
                                    )
                                  }
                                  whileTap={
                                    reduceMotion ? undefined : { scale: 0.99 }
                                  }
                                  className="flex w-full items-start justify-between gap-4 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                                >
                                  <span>
                                    <span className="block font-semibold text-[#1F1F23] transition-colors hover:text-[#5B21B6]">
                                      {offering.title}
                                    </span>
                                    <span className="mt-1 block text-sm font-medium leading-6 text-[#5B21B6]">
                                      Indicative timeline: {offering.timeline}
                                    </span>
                                  </span>
                                  <FiChevronDown
                                    aria-hidden="true"
                                    className={`mt-1 h-5 w-5 shrink-0 text-[#5B21B6] transition-transform duration-300 ${
                                      isOfferingOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </motion.button>
                                <motion.div
                                  id={`service-offering-${category.number}-${offeringIndex}`}
                                  initial={false}
                                  animate={{
                                    height: isOfferingOpen ? "auto" : 0,
                                    opacity: isOfferingOpen ? 1 : 0,
                                  }}
                                  transition={{
                                    duration: reduceMotion ? 0 : 0.25,
                                    ease: "easeInOut",
                                  }}
                                  aria-hidden={!isOfferingOpen}
                                  inert={!isOfferingOpen}
                                  className="overflow-hidden"
                                >
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {offering.description}
                                  </p>
                                  <Link
                                    to={offering.to}
                                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#5B21B6] hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                                  >
                                    View service details{" "}
                                    <FiArrowRight aria-hidden="true" />
                                  </Link>
                                </motion.div>
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          to="/contact"
                          className="mt-2 inline-flex items-center gap-2 pt-4 font-semibold text-[#5B21B6] transition-colors hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                        >
                          Discuss this service{" "}
                          <FiArrowRight aria-hidden="true" />
                        </Link>
                      </motion.div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-8 max-w-4xl text-sm leading-6 text-gray-600">
              Delivery timelines depend on project scope, complexity and client
              responsiveness. Your confirmed timeline will be provided in your
              project proposal. Timelines begin after payment confirmation,
              receipt of required information and project kickoff.
            </p>
          </div>
        </section>

        <section
          id="consultation-options"
          className="scroll-mt-24 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Consultation options & fees"
                title="Focused Guidance for Your Next Business Decision"
                description="Choose the level of discussion and strategic guidance that fits your questions. Both options are available to idea-stage founders, startups, and growing businesses."
              />
            </Reveal>
            <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
              {consultationOptions.map((option, index) => (
                <Reveal
                  key={option.inquiry}
                  delay={index * 0.1}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          boxShadow: "0 20px 44px rgba(31, 31, 35, 0.12)",
                          transition: { duration: 0.24, ease: "easeOut" },
                        }
                  }
                  className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors duration-300 sm:p-8 ${
                    option.featured
                      ? "border-[#5B21B6]/50 bg-[#F7F4FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5B21B6]">
                        {option.featured ? "Deeper strategic support" : "Focused session"}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                        {option.name}
                      </h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-3xl font-semibold tracking-tight text-[#5B21B6]">
                        {option.fee}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {option.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-gray-200 pt-5">
                    <h4 className="font-semibold">Suitable for</h4>
                    <p className="mt-2 leading-7 text-gray-600">
                      {option.suitableFor}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold">Your session includes</h4>
                    <ul className="mt-3 space-y-3">
                      {option.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 leading-6 text-gray-600"
                        >
                          <FiCheck
                            aria-hidden="true"
                            className="mt-1 h-5 w-5 shrink-0 text-[#5B21B6]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/contact?consultation=${option.inquiry}`}
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 text-center font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6] motion-reduce:transform-none"
                  >
                    {option.inquiry === "standard"
                      ? "Book Standard Consultation"
                      : "Book In-Depth Consultation"}
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 rounded-xl border border-gray-200 bg-[#F5F5F7] p-6 sm:p-8">
              <h3 className="text-lg font-semibold">
                Consultation fees cover the session only
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                The difference between the options is the depth of discussion
                and strategic guidance, not the stage of your business. Both
                sessions are available to idea-stage founders, startups, and
                growing businesses.
              </p>
              <p className="mt-3 leading-7 text-gray-600">
                Consultation fees do not include full business idea assessment
                reports, detailed market research, business plan or pitch deck
                development, investor or grant readiness preparation, CRM
                implementation or automation, SOP development, or other
                implementation services. These are scoped and priced separately.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="A clearer path forward"
                title="The Summit Valor Implementation Framework"
                description="A flexible framework for moving from understanding your business to strengthening how it operates."
                light
              />
            </Reveal>
            <div ref={frameworkRef} className="relative mt-12">
              <div
                aria-hidden="true"
                className="relative mx-auto mb-4 hidden h-3 max-w-5xl lg:block"
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
                <motion.span
                  className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-purple-300"
                  style={{ scaleX: reduceMotion ? 1 : frameworkLineProgress }}
                />
                {frameworkSteps.map((step, index) => (
                  <span
                    key={step.number}
                    className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1F1F23] bg-purple-300"
                    style={{
                      left: `${(index / (frameworkSteps.length - 1)) * 100}%`,
                    }}
                  />
                ))}
              </div>
              <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {frameworkSteps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={index * 0.09}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.01,
                          transition: { duration: 0.24, ease: "easeOut" },
                        }
                  }
                  className="h-full border-t-2 border-purple-300/70 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10 sm:p-6"
                >
                  <motion.button
                    type="button"
                    aria-expanded={activeFrameworkStep === index}
                    aria-controls={`framework-step-${index}`}
                    onClick={() =>
                      setActiveFrameworkStep(
                        activeFrameworkStep === index ? null : index
                      )
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="w-full rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span className="text-sm font-semibold tracking-wider text-purple-300">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                    <span className="mt-3 block text-sm text-purple-200">
                      {activeFrameworkStep === index
                        ? "Hide phase details"
                        : "Explore this phase"}
                    </span>
                  </motion.button>
                  <motion.div
                    id={`framework-step-${index}`}
                    initial={false}
                    animate={{
                      height: activeFrameworkStep === index ? "auto" : 0,
                      opacity: activeFrameworkStep === index ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.28,
                      ease: "easeInOut",
                    }}
                    aria-hidden={activeFrameworkStep !== index}
                    inert={activeFrameworkStep !== index}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm font-semibold text-purple-200">
                      Estimated phase: {step.timeline}
                    </p>
                    <p className="mt-3 leading-7 text-gray-300">
                      {step.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
              </ol>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-6 text-gray-300">
              These are indicative phase timelines, not a mandatory sequence.
              Not every client needs every phase, and some phases may overlap.
              Your confirmed project timeline will be based on your requirements
              and agreed scope.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Your project support"
                title="More Than Consultants. A Team Behind Your Progress."
                description="At Summit Valor, our work doesn't end with recommendations. We believe businesses need the right people, guidance and accountability to turn plans into progress. That's why every substantial engagement comes with a coordinated project support structure."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {supportRoles.map((role, index) => (
                <Reveal
                  key={role.title}
                  delay={index * 0.07}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          boxShadow: "0 16px 36px rgba(31, 31, 35, 0.10)",
                          transition: { duration: 0.24, ease: "easeOut" },
                        }
                  }
                  className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#5B21B6]/40"
                >
                  <motion.button
                    type="button"
                    aria-expanded={activeSupportRole === index}
                    aria-controls={`support-role-${index}`}
                    onClick={() =>
                      setActiveSupportRole(
                        activeSupportRole === index ? null : index
                      )
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex w-full items-start justify-between gap-4 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                  >
                    <span>
                      <span className="block text-xl font-semibold">
                        {role.title}
                      </span>
                      <span className="mt-2 block text-sm text-[#5B21B6]">
                        {activeSupportRole === index
                          ? "Hide responsibilities"
                          : "View responsibilities"}
                      </span>
                    </span>
                    <FiChevronDown
                      aria-hidden="true"
                      className={`mt-1 h-5 w-5 shrink-0 text-[#5B21B6] transition-transform duration-300 ${
                        activeSupportRole === index ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>
                  <motion.div
                    id={`support-role-${index}`}
                    initial={false}
                    animate={{
                      height: activeSupportRole === index ? "auto" : 0,
                      opacity: activeSupportRole === index ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.28,
                      ease: "easeInOut",
                    }}
                    aria-hidden={activeSupportRole !== index}
                    inert={activeSupportRole !== index}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-3">
                      {role.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-2 text-sm leading-6 text-gray-600"
                        >
                          <FiCheck
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-[#5B21B6]"
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-gray-500">
              The support structure depends on the scope of the engagement.
              Dedicated full-time virtual assistant support is not promised to
              every client.
            </p>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
            <Reveal className="rounded-2xl bg-[#211735] p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Client portal
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Your Business Project. One Organised Space.
              </h2>
              <p className="mt-5 leading-7 text-gray-200">
                Every substantial project comes with access to a dedicated
                client portal where you can stay informed and connected
                throughout the engagement.
              </p>
            </Reveal>
            <Reveal>
              <h3 className="text-xl font-semibold">
                Stay connected throughout your engagement
              </h3>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  ease: "easeOut",
                }}
                aria-label="Illustrative client project workspace preview; no live project data"
                className="mt-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                  <div>
                    <p className="font-semibold text-[#1F1F23]">
                      Project workspace
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Milestones, actions, and updates
                    </p>
                  </div>
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-[#5B21B6]">
                    Illustrative preview
                  </span>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Project progress
                    </p>
                    <div className="mt-4 space-y-4">
                      {[
                        ["Assessment", 0.82],
                        ["Planning", 0.54],
                        ["Implementation", 0.28],
                      ].map(([label, progress], index) => (
                        <div key={label}>
                          <div className="flex justify-between gap-3 text-xs text-gray-600">
                            <span>{label}</span>
                            <span>Milestone tracking</span>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: progress }}
                              viewport={{ once: true }}
                              transition={{
                                duration: reduceMotion ? 0 : 0.7,
                                delay: reduceMotion ? 0 : index * 0.12,
                                ease: "easeOut",
                              }}
                              className="h-full origin-left rounded-full bg-[#7651C9]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Action items
                    </p>
                    <ul className="mt-3 space-y-2">
                      {[
                        ["Review project notes", true],
                        ["Share requested information", false],
                        ["Confirm next milestone", false],
                      ].map(([task, complete], index) => (
                        <motion.li
                          key={task}
                          initial={
                            reduceMotion ? false : { opacity: 0, x: 8 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.3,
                            delay: reduceMotion ? 0 : index * 0.1,
                          }}
                          className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600"
                        >
                          <span
                            aria-hidden="true"
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              complete
                                ? "bg-[#5B21B6] text-white"
                                : "border border-gray-300 bg-white"
                            }`}
                          >
                            {complete && (
                              <FiCheck className="h-3 w-3" />
                            )}
                          </span>
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-lg border border-purple-100 bg-purple-50/60 p-3">
                  <motion.span
                    initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      ease: "easeOut",
                    }}
                    aria-hidden="true"
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#5B21B6]"
                  />
                  <p className="text-sm text-gray-700">
                    Milestone update added to the project workspace
                  </p>
                </div>
                <p className="mt-4 text-xs leading-5 text-gray-500">
                  Visual sample only — it does not display live project data or
                  provide dashboard functionality.
                </p>
              </motion.div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {portalFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 leading-6 text-gray-700"
                  >
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#5B21B6]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                We use a structured digital workspace powered by Notion to keep
                projects organised, transparent, and accessible.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="How we work"
                title="A Clear Process from Discovery to Handover"
                description="A collaborative process keeps the work focused on your needs and the outcomes you want to pursue."
              />
            </Reveal>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={index * 0.08}
                  className="relative border-l-2 border-[#5B21B6] pl-5 md:border-l-0 md:border-t-2 md:pl-0 md:pt-5"
                >
                  <span className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Who we help"
                title="Built Around the Stage Your Business Is In"
                description="We work with businesses across industries, tailoring the support to their stage, goals, and operating needs."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <Reveal
                  key={audience.title}
                  delay={index * 0.08}
                  className="h-full border-t-2 border-[#5B21B6] bg-white p-6 sm:p-8"
                >
                  <p className="text-sm font-semibold text-[#5B21B6]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">
                    {audience.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {audience.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Why Summit Valor"
                title="More Than Advice. A Clearer Way Forward."
                description="We connect thoughtful assessment with practical ways to strengthen how your business works."
              />
            </Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.number}
                  delay={index * 0.08}
                  className="border-t border-gray-300 py-7 md:py-8"
                >
                  <p className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                    {principle.number}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {principle.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionIntro
                eyebrow="Questions"
                title="Frequently Asked Questions"
                description="A little more about how Summit Valor works with founders and businesses."
              />
            </Reveal>
            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `service-faq-answer-${index}`;

                return (
                  <div key={faq.question} className="py-1">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-semibold text-[#1F1F23] transition-colors hover:text-[#5B21B6] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                      >
                        {faq.question}
                        <FiChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 text-[#5B21B6] transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    <motion.div
                      id={answerId}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.25,
                        ease: "easeInOut",
                      }}
                      aria-hidden={!isOpen}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 pr-8 leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-16 text-white sm:py-20">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Summit Valor Consulting
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Your Next Stage Starts with a Stronger Foundation.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Let&apos;s identify what your business needs and determine the
                most practical way forward. A discovery call is an opportunity
                to understand your business and explore whether Summit Valor
                can help; it is not a free consulting session.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"
              >
                Book a Free Discovery Call{" "}
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"
              >
                Explore Our Services
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
