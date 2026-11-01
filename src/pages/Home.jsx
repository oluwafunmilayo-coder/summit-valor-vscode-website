import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
  FiLayers,
  FiTrendingUp,
  FiUserCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";

const serviceCards = [
  {
    title: "Business Idea Assessment",
    description:
      "Evaluate an idea, explore relevant questions, and clarify practical next steps for developing it.",
    to: "/services/business-idea-assessment",
    icon: FiCompass,
  },
  {
    title: "Business Planning and Strategy",
    description:
      "Clarify your business model, priorities, and plan around your goals and operating context.",
    to: "/services/business-planning",
    icon: FiBookOpen,
  },
  {
    title: "Business Systems and Process Improvement",
    description:
      "Improve workflows, document repeatable work, and strengthen the systems behind daily operations.",
    to: "/services/systems-process-improvement",
    icon: FiLayers,
  },
  {
    title: "Business Growth and Implementation",
    description:
      "Turn agreed priorities into a practical roadmap and implementation support shaped around your needs.",
    to: "/services/business-growth-implementation",
    icon: FiTrendingUp,
  },
  {
    title: "Valor Talent",
    description:
      "Source the right people, build clearer team roles, strengthen team management, and develop your existing employees.",
    to: "/valor-talent",
    icon: FiUserCheck,
  },
];

const audiences = [
  {
    title: "Aspiring entrepreneurs and startups",
    description:
      "Explore an idea, understand the opportunity, and work out what to do next.",
  },
  {
    title: "Founders building new businesses",
    description:
      "Create the plans, processes, and foundations needed to establish your business.",
  },
  {
    title: "Growing businesses looking to scale",
    description:
      "Strengthen the systems, workflows, and execution that support your next stage.",
  },
];

const principles = [
  "Understand the business before recommending solutions",
  "Connect strategy with practical implementation",
  "Shape recommendations around your stage and priorities",
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#24212B] sm:text-4xl lg:text-5xl">
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
    <div className="bg-white text-[#24212B]">
      <Navbar />
      <main>
        <Hero />

        <section className="bg-[#F5F5F7] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="Our services"
                title="Practical support for your business and your people."
                description="Explore business consulting and Valor Talent support for building and developing your team."
              />
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map(({ title, description, to, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg sm:p-7">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#5B21B6]"
                    />
                    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                    <p className="mt-2 flex-1 leading-7 text-gray-600">
                      {description}
                    </p>
                    <Link
                      to={to}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-[#5B21B6] hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
                    >
                      Explore service <FiArrowRight aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="Who we help"
                title="Support for the stage you’re in."
                description="Summit Valor works with entrepreneurs and businesses at different stages of building and growth."
              />
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.07}>
                  <article className="h-full border-t-2 border-[#5B21B6] bg-[#F5F5F7] p-6 sm:p-7">
                    <h3 className="text-lg font-semibold">{audience.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {audience.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="Why Summit Valor"
                title="Clear thinking, grounded in practical action."
                description="We connect research, planning, systems, and execution to help you make informed decisions and build with confidence."
              />
            </Reveal>
            <ul className="grid content-center gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {principles.map((principle, index) => (
                <Reveal key={principle} delay={index * 0.07}>
                  <li className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 font-medium leading-7 text-[#24212B]">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-[#5B21B6]"
                    >
                      {index + 1}
                    </span>
                    {principle}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="Client reviews"
                title="Words from people we’ve worked with."
                description="Read genuine feedback shared on our Google Business Profile."
              />
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {reviews.slice(0, 4).map((review, index) => (
                <Reveal key={review.name} delay={index * 0.07}>
                  <ReviewCard review={review} />
                </Reveal>
              ))}
            </div>
            <Link
              to="/reviews"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
            >
              Read All Reviews <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="bg-[#211735] py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Your next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ready to move your business forward?
              </h2>
              <p className="mt-3 leading-7 text-gray-200">
                Tell us what you’re working on and let’s explore the right next
                step together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#211735] transition-colors hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
