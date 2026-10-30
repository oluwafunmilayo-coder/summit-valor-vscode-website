import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
  FiLayers,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import industries from "../data/industries";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const audiences = [
  {
    title: "Business owners & founders",
    description:
      "Strengthen the systems, capabilities and connections that support your next stage of growth.",
  },
  {
    title: "Aspiring entrepreneurs",
    description:
      "Turn an early idea into a clearer direction with practical learning and guidance on what to do next.",
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
    pillar: "The Right Systems",
    description:
      "Build business structures, plans, workflows and operating capabilities that fit your context.",
    to: "/services",
    link: "Explore Consulting",
    icon: FiCompass,
  },
  {
    title: "Academy",
    pillar: "The Right People",
    description:
      "Help business owners build practical capabilities and identify the staffing support their businesses need.",
    to: "/academy",
    link: "Explore the Academy",
    icon: FiBookOpen,
  },
  {
    title: "Opportunities",
    pillar: "The Right Opportunities",
    description:
      "Find a curated starting point for grants, accelerators, competitions, training and more.",
    to: "/opportunities",
    link: "Explore opportunities",
    icon: FiTrendingUp,
  },
  {
    title: "Founders Community",
    pillar: "The Right Connections",
    description:
      "Connect with founders through learning, accountability and opportunities to build together.",
    to: "/community",
    link: "Discover the community",
    icon: FiUsers,
  },
];

const academyElements = [
  "Practical Business Learning",
  "Business Assessment",
  "Systems and Operations",
  "People and Capacity Support",
];

const academyJourney = [
  "Learn",
  "Apply",
  "Strengthen Systems",
  "Build Team Capacity",
  "Pursue Growth",
];

const academyFocusAreas = [
  "Business development",
  "Business management",
  "Financial literacy",
  "Operations and systems",
  "Leadership",
];

const communityBenefits = [
  "Founder networking",
  "Business development sessions",
  "Investor readiness",
  "Accountability",
  "Curated opportunities",
  "Partnership connections",
];

const partnershipEmail =
  "mailto:hello@summitvalor.com.ng?subject=Strategic%20Partnership%20Inquiry";
const communityWaitlist = "https://tally.so/r/KpY6ak";
const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Summit+Valor&query_place_id=ChIJlznApuQryUARg9OKM99P-h8";
const googleWriteReviewUrl = "https://g.page/r/CYPTijPfT_ofEAE/review";

const testimonials = [
  {
    name: "Ifunanya Chidinma Faith",
    rating: 5,
    review:
      "My experience with Summit Valor was a really good one. The founder was so nice, I loved how she broke things down and explained everything clearly. Her words were clear, straight to the point and easy to understand. She also shared ideas and practical things to think about, which made the conversation a lot more valuable. I appreciated how she made things understandable while still giving me room to think and explore different possibilities. Overall, it was a lovely experience, and I'm glad I had the opportunity to learn from her. 💚",
  },
  {
    name: "Iroko Olakunle",
    rating: 5,
    review:
      "It was an insightful experience that birthed clarity and revitalization of structures",
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

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#BDA9EC]" : "text-[#7651C9]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#24212B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-[#24212B]">
      <Navbar />
      <main>
        <Hero />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Who we help"
                title="A stronger foundation for every stage of business."
                description="Whether you are shaping a business idea, building a startup, or improving an established business, we help bring structure to your next steps."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.1}>
                  <article className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <h3 className="text-xl font-semibold text-[#24212B]">
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
                  className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#7651C9] transition-colors hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7651C9]"
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
                      className="h-6 w-6 text-[#7651C9] transition-transform duration-300 motion-safe:group-hover:scale-110"
                    />
                    <h3 className="mt-5 text-xl font-semibold text-[#24212B]">
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

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Industries we support"
                title="Built around the realities of your business."
                description="We adapt our business support to the operating needs of organisations across these sectors."
              />
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(({ title }, index) => (
                <Reveal as="li" key={title} delay={index * 0.04}>
                  <div className="h-full border-t-2 border-[#7651C9] bg-[#F5F5F7] p-5 font-semibold text-[#24212B]">
                    {title}
                  </div>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/industries"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#7651C9] transition-colors hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7651C9]"
            >
              See how we support these industries{" "}
              <FiArrowRight aria-hidden="true" />
            </Link>
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
                  className="h-full border-t-2 border-[#7651C9] pt-5 transition-transform duration-300 motion-safe:hover:-translate-y-1"
                >
                  <span className="text-sm font-semibold tracking-wider text-[#7651C9]">
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

        <section id="ecosystem" className="bg-[#211735] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Bold move. Brave future."
                title="Four clear ways we help businesses move forward."
                description="We build the right systems through Consulting, develop the right people through business-focused Academy learning and staffing support, connect businesses to the right opportunities, and bring founders together through our community."
                dark
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {ecosystem.map(({ title, pillar, description, to, link, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.1}>
                  <article className="flex h-full flex-col border-t border-white/25 bg-white/[0.03] p-6 transition-colors duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:bg-white/[0.08] sm:p-7">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#BDA9EC]"
                    />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#BDA9EC]">
                      {pillar}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-gray-300">
                      {description}
                    </p>
                    <Link
                      to={to}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#BDA9EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Summit Valor Academy"
                title="Build a stronger business."
                description="Summit Valor Academy is for business owners who want to strengthen how they develop, manage and grow their businesses. We focus on practical learning that owners can apply to real business challenges."
              />
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {academyElements.map((element, index) => (
                <Reveal key={element} delay={index * 0.06}>
                  <div className="h-full border-l-2 border-[#7651C9] bg-[#F5F5F7] p-5 font-semibold text-[#24212B]">
                    {element}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-14 border-t border-gray-200 pt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                  A practical Academy journey
                </p>
                <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {academyJourney.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 border-t border-gray-300 pt-4"
                    >
                      <span className="text-sm font-semibold text-[#7651C9]">
                        0{index + 1}
                      </span>
                      <span className="font-semibold text-[#24212B]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Proposed learning focus
              </p>
              <div className="mt-6 border border-gray-200 bg-white p-6 sm:p-8">
                <p className="max-w-3xl leading-7 text-gray-600">
                  Learning themes are being shaped around the needs of business
                  owners. These are proposed focus areas, not confirmed or
                  currently available programmes.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {academyFocusAreas.map((area) => (
                    <li
                      key={area}
                      className="border border-gray-200 px-3 py-2 text-sm text-gray-700"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <a
                  href={communityWaitlist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
                >
                  Join the Founder Community Waitlist{" "}
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <Reveal>
              <div className="mt-10 border-l-2 border-[#7651C9] bg-[#F5F5F7] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                  People and staffing support
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#24212B]">
                  The right people can help your business move forward.
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  When a business needs additional capacity, Summit Valor can
                  help identify people whose skills fit the roles required.
                  Hiring decisions remain with the business, and a suitable
                  match is not guaranteed.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#7651C9] hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7651C9]"
                >
                  Discuss your staffing needs{" "}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-10">
              <Link
                to="/academy"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#7651C9] px-6 py-3 font-semibold text-[#7651C9] transition-colors hover:bg-[#7651C9] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
              >
                Explore Summit Valor Academy{" "}
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Opportunities
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#24212B] sm:text-3xl">
                Find opportunities that fit your next move.
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Explore the opportunities board for funding, accelerators,
                competitions, training and more. Review eligibility, deadlines
                and official application links before applying.
              </p>
            </div>
            <Link
              to="/opportunities"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
            >
              Explore Opportunities <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Founders Community · Waitlist stage
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#24212B] sm:text-4xl">
                The right connections help founders move forward.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                The Summit Valor Founders Community is being developed as a
                place for founders to learn, connect and build accountability.
                Join the waitlist for updates about business development
                sessions, investor readiness, curated opportunities and
                partnership connections.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {communityBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border border-gray-200 px-3 py-2 text-sm text-gray-700"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={communityWaitlist}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
            >
              Join the Waitlist <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="bg-[#211735] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BDA9EC]">
                Partners &amp; collaborators
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Build progress through the right partnerships.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-300">
                We welcome conversations with organisations working to
                strengthen businesses, entrepreneurship and professional
                development. We publish partner profiles only after
                collaborations are formally confirmed and approved.
              </p>
              <Link
                to="/partnerships"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#BDA9EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Partnerships <FiArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-white/20 bg-white/[0.04] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#BDA9EC]">
                  Partner directory
                </p>
                <p className="mt-4 text-lg font-semibold">
                  No partner profiles are published yet.
                </p>
                <p className="mt-2 leading-7 text-gray-300">
                  Organisation names and logos will be added when each
                  collaboration is confirmed and approved.
                </p>
                <a
                  href={partnershipEmail}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-white hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Become a Strategic Partner{" "}
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Client testimonials"
                title="Words from people we've worked with."
                description="These reviews were shared on our Google Business Profile."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {testimonials.map(({ name, rating, review }, index) => (
                <Reveal key={name} delay={index * 0.08}>
                  <article className="flex h-full flex-col border border-gray-200 bg-white p-6 sm:p-8">
                    <div
                      className="flex gap-1 text-[#7651C9]"
                      role="img"
                      aria-label={`${rating} out of 5 stars`}
                    >
                      {Array.from({ length: rating }, (_, starIndex) => (
                        <FiStar
                          key={starIndex}
                          aria-hidden="true"
                          className="h-5 w-5 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-base leading-7 text-gray-700">
                      “{review}”
                    </blockquote>
                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <p className="font-semibold text-[#24212B]">{name}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Google review
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
              >
                Read more reviews on Google{" "}
                <FiArrowRight aria-hidden="true" />
              </a>
              <a
                href={googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#7651C9] px-6 py-3 font-semibold text-[#7651C9] transition-colors hover:bg-[#7651C9] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
              >
                Leave a Google review
              </a>
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
                  className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#7651C9] transition-colors hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7651C9]"
                >
                  Browse insights <FiArrowRight aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {insights.map((insight, index) => (
                <Reveal key={insight.title} delay={index * 0.1}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <p className="text-sm font-semibold text-[#7651C9]">
                      {insight.type}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[#24212B]">
                      {insight.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-gray-600">
                      {insight.description}
                    </p>
                    <Link
                      to={insight.to}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7651C9] transition-colors hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7651C9]"
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
