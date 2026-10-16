import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiCompass,
  FiLayers,
  FiSearch,
  FiSettings,
  FiTarget,
  FiTrendingUp,
  FiUsers,
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
          "Evaluate an idea, surface important questions, and clarify the next steps to develop it.",
      },
      {
        title: "Business Research & Analysis",
        description:
          "Research relevant markets, customers, competitors, and opportunities to support informed decisions.",
      },
      {
        title: "Business Planning & Model Development",
        description:
          "Structure your business model, clarify your offer, and develop a practical business plan.",
      },
    ],
  },
  {
    number: "02",
    title: "Operations & Process Design",
    description:
      "For businesses that need clearer processes, defined responsibilities, and more consistent ways of working.",
    accent: "bg-[#F5F5F7]",
    icon: FiLayers,
    offerings: [
      {
        title: "SOPs & Operational Playbooks",
        description:
          "Document processes and create practical guides for how work should be carried out.",
      },
      {
        title: "Team Structure & Workflow Design",
        description:
          "Define responsibilities, improve coordination, and establish clearer workflows.",
      },
      {
        title: "Process Improvement",
        description:
          "Identify operational friction and develop practical improvements to existing ways of working.",
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
        title: "Systems & Workflow Design",
        description:
          "Map business workflows and establish clearer ways to manage recurring activities.",
      },
      {
        title: "Automation & CRM Buildout",
        description:
          "Configure suitable automation and customer relationship tools around your business needs.",
      },
      {
        title: "Operational Systems Implementation",
        description:
          "Implement relevant tools, dashboards, and workflows that support your processes.",
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
        title: "Business Model & Offer Restructuring",
        description:
          "Review and refine a business model or offer to improve clarity, alignment, and delivery.",
      },
      {
        title: "90-Day Operational Roadmap",
        description:
          "Develop a structured roadmap of operational priorities, recommendations, and milestones.",
      },
      {
        title: "Consulting & Implementation Support",
        description:
          "Get agreed consulting and implementation support based on your needs and engagement scope.",
      },
    ],
  },
];

const roadmapSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand current operational challenges and identify priority areas.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "Determine which improvements matter most and how they relate to your business goals.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Organize recommended actions into a practical 90-day roadmap.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, current challenges, and priorities.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We examine the relevant strategy, processes, systems, or operational issues.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop recommendations and practical solutions aligned with your needs.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Where included in the engagement, we help put agreed solutions into practice.",
  },
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
    question: "Who does Summit Valor work with?",
    answer:
      "We work with aspiring entrepreneurs and growing businesses that need support with business strategy, operational structure, systems, or implementation.",
  },
  {
    question: "How do I know which service I need?",
    answer:
      "Get in touch to discuss your current challenges. We can help you identify an appropriate service and the next steps to explore.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Combined services can be discussed and scoped according to your needs and the engagement we agree together.",
  },
  {
    question: "Does Summit Valor implement the solutions it recommends?",
    answer:
      "Implementation support depends on the service and the agreed engagement scope. We will clarify what is included before work begins.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit an inquiry through our Contact page to tell us about your business and what you are working through. From there, you can book a conversation.",
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

  return (
    <MotionElement
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={reveal}
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
  const reduceMotion = useReducedMotion();

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
                Our Services
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Explore Our Services
                  <FiArrowDown aria-hidden="true" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Let&apos;s Discuss Your Business
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
                    className={`h-full rounded-2xl border border-gray-200 ${category.accent} p-6 sm:p-8`}
                  >
                    <article className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                            {category.number}
                          </p>
                          <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                            {category.title}
                          </h3>
                        </div>
                        <Icon
                          aria-hidden="true"
                          className="mt-1 h-6 w-6 shrink-0 text-[#5B21B6]"
                        />
                      </div>
                      <p className="mt-4 max-w-xl leading-7 text-gray-600">
                        {category.description}
                      </p>
                      <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
                        {category.offerings.map((offering) => (
                          <li key={offering.title} className="py-4">
                            <h4 className="font-semibold text-[#1F1F23]">
                              {offering.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              {offering.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-auto inline-flex items-center gap-2 pt-4 font-semibold text-[#5B21B6] transition-colors hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                      >
                        Discuss this service{" "}
                        <FiArrowRight aria-hidden="true" />
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                A clearer path forward
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Know What to Fix. Know What Comes Next.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                The 90-Day Operational Roadmap helps you organize your
                operational priorities into a structured plan, giving you a
                clearer view of what needs attention and the steps to take
                next.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discuss Your Operational Roadmap
                <FiArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
            <ol className="divide-y divide-white/15 border-y border-white/15">
              {roadmapSteps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={index * 0.09}
                  className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr] sm:gap-5"
                >
                  <span className="text-sm font-semibold tracking-wider text-purple-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="How we work"
                title="From Business Challenges to Practical Action"
                description="A clear, collaborative process keeps the work focused on your needs and the outcomes you want to pursue."
              />
            </Reveal>
            <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-5">
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
                        className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-semibold text-[#1F1F23] transition-colors hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
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
                most practical way forward.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a Conversation <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
