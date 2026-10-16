import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
  FiLayers,
  FiUsers,
} from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const audiences = [
  {
    title: "Aspiring entrepreneurs",
    description:
      "Shape an early idea into a clearer direction, with practical research and a plan for what to do next.",
  },
  {
    title: "Startups",
    description:
      "Put the right business foundations, processes, and ways of working in place as your venture takes shape.",
  },
  {
    title: "Growing businesses",
    description:
      "Address operational bottlenecks and build more consistent systems as your team and ambitions grow.",
  },
];

const services = [
  {
    title: "Business model & offer strategy",
    description:
      "Review your business and delivery model, offers, and pricing to identify practical next steps.",
    icon: FiCompass,
  },
  {
    title: "Operational roadmaps",
    description:
      "Set priorities, milestones, ownership, and measures for the next stage of your business.",
    icon: FiArrowRight,
  },
  {
    title: "Systems & workflow design",
    description:
      "Map processes and improve the tools and workflows your team uses to get work done.",
    icon: FiLayers,
  },
  {
    title: "SOPs & team foundations",
    description:
      "Document repeatable work and clarify roles so your team can operate with greater consistency.",
    icon: FiUsers,
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand your business, current challenges, and the outcomes you want to achieve.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Gather relevant information to make decisions grounded in your business and its context.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Turn what we learn into a structured strategy and practical roadmap.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Support the execution of agreed priorities and build a stronger foundation for what comes next.",
  },
];

const ecosystem = [
  {
    title: "Consulting",
    description:
      "Business strategy, planning, and operations support for founders and growing businesses.",
    to: "/services",
    link: "Explore consulting",
    icon: FiCompass,
  },
  {
    title: "Founder Community",
    description:
      "A place for founders to connect, learn, and build alongside one another.",
    to: "/community",
    link: "Discover the community",
    icon: FiUsers,
  },
  {
    title: "Academy",
    description:
      "Practical learning and professional development through focused training.",
    to: "/academy",
    link: "Explore the Academy",
    icon: FiBookOpen,
  },
];

const insights = [
  {
    title: "Why Your Business Feels Chaotic",
    description:
      "Explore how operational challenges can emerge as a business grows.",
    to: "/blog/why-your-business-feels-chaotic",
    type: "Article",
  },
  {
    title: "Smart Founder Delegation Playbook",
    description:
      "A practical resource for thinking through delegation and repeatable work.",
    to: "/blog/smart-founder-delegation-playbook",
    type: "Playbook",
  },
  {
    title: "SOP Starter Kit",
    description:
      "A resource to help you start documenting key business processes.",
    to: "/blog/sop-starter-kit",
    type: "Guide",
  },
];

function Reveal({ as = "div", children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion[as];

  return (
    <MotionElement
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </MotionElement>
  );
}

function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#1F1F23] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-[#1F1F23]">
      <Navbar />
      <main>
        <Hero />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Who we help"
                title="A stronger foundation for every stage of business."
                description="Whether you are shaping an idea, building a startup, or improving a growing business, we help bring structure to your next steps."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.1}>
                  <article className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <h3 className="text-xl font-semibold text-[#1F1F23]">
                      {audience.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {audience.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="consulting" className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <SectionIntro
                  eyebrow="Summit Valor Consulting"
                  title="Practical support to move your business forward."
                  description="Work with us on the strategy, planning, and operating foundations that fit your current needs."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <Link
                  to="/services"
                  className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#5B21B6] transition-colors hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                >
                  View all services <FiArrowRight aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map(({ title, description, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <article className="h-full rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#5B21B6] transition-transform duration-300 motion-safe:group-hover:scale-110"
                    />
                    <h3 className="mt-5 text-xl font-semibold text-[#1F1F23]">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Our approach"
                title="A clear path from questions to action."
                description="We bring structure to the work, adapting each step to your business and the priorities we agree together."
              />
            </Reveal>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={index * 0.09}
                  className="h-full border-t-2 border-[#5B21B6] pt-5 transition-transform duration-300 motion-safe:hover:-translate-y-1"
                >
                  <span className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                    {step.number}
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

        <section className="bg-[#1F1F23] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="The Summit Valor ecosystem"
                title="Different ways to learn, build, and grow."
                description="Consulting, community, and education serve different needs, connected by a shared commitment to stronger businesses and professional development."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {ecosystem.map(({ title, description, to, link, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.1}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition-colors duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:bg-white/[0.08] sm:p-8">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-purple-300"
                    />
                    <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-gray-300">
                      {description}
                    </p>
                    <Link
                      to={to}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {link} <FiArrowRight aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Why Summit Valor"
                title="Clear thinking, grounded in practical action."
                description="We connect research, planning, systems, and execution to help you make informed decisions and build with confidence."
              />
            </Reveal>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[
                "Structured business thinking",
                "Practical guidance for your context",
                "Research-informed decisions",
                "Stronger operational foundations",
                "Execution-focused support",
              ].map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle}
                  delay={index * 0.07}
                  className="rounded-xl border border-gray-200 bg-[#F5F5F7] p-5 font-medium transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-md"
                >
                  {principle}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <SectionIntro
                  eyebrow="Insights & resources"
                  title="Ideas and tools for building better businesses."
                  description="Explore practical reading and resources from Summit Valor."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <Link
                  to="/blog"
                  className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#5B21B6] transition-colors hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                >
                  Browse insights <FiArrowRight aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {insights.map((insight, index) => (
                <Reveal key={insight.title} delay={index * 0.1}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <p className="text-sm font-semibold text-[#5B21B6]">
                      {insight.type}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[#1F1F23]">
                      {insight.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-gray-600">
                      {insight.description}
                    </p>
                    <Link
                      to={insight.to}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#5B21B6] transition-colors hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                    >
                      Read more <FiArrowRight aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
