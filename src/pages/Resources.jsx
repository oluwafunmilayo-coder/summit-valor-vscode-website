import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCompass,
  FiDownload,
  FiSearch,
  FiTarget,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const reportContents = [
  "Executive Summary",
  "Operational Health Assessment",
  "Workflow Bottlenecks",
  "Systems Evaluation",
  "Operational Risks",
  "Technology Recommendations",
  "30-Day Action Plan",
];

const freeResources = [
  {
    audience: "For aspiring entrepreneurs",
    title: "Is Your Business Idea Ready?",
    description:
      "A practical assessment checklist to help you examine your business idea, understand your potential customers, identify knowledge gaps, and plan your next steps.",
    coverTitle: "IS YOUR BUSINESS IDEA READY?",
    coverSubtitle: "A practical founder's assessment checklist",
    coverTone: "bg-[#5B21B6]",
    pdf: "/resources/Summit_Valor_Business_Idea_Assessment.pdf",
    coverImage: "/resources/Summit_Valor_Business_Idea_Assessment_Cover.png",
  },
  {
    audience: "For business owners",
    title: "The Business Operations Health Check",
    description:
      "A guided assessment to help you review your business processes, identify operational weaknesses, examine your systems, and prioritize areas for improvement.",
    coverTitle: "BUSINESS OPERATIONS HEALTH CHECK",
    coverSubtitle: "A guided review for growing businesses",
    coverTone: "bg-[#1F1F23]",
  },
];

const usageSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Explore practical ideas and frameworks to understand your business challenges.",
    icon: FiCompass,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Use guided questions and checklists to examine your current position and identify gaps.",
    icon: FiSearch,
  },
  {
    number: "03",
    title: "Take Action",
    description:
      "Turn your findings into practical next steps that move your business forward.",
    icon: FiTarget,
  },
];

const entrance = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

function Reveal({ children, className, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={entrance}
      custom={reduceMotion ? 0 : delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
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

function ResourceCover({
  title,
  subtitle,
  tone,
  featured = false,
  image,
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={`Cover of ${title} workbook`}
        width="768"
        height="1086"
        className="absolute inset-0 h-full w-full max-w-none object-cover"
      />
    );
  }

  return (
    <div
      aria-label={`Illustrative cover design for ${title}; not a preview of the PDF`}
      role="img"
      className={`relative flex aspect-[4/5] w-full max-w-[17rem] flex-col justify-between overflow-hidden p-6 text-white shadow-xl sm:p-8 ${tone}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-3 border border-white/25"
      />
      <div className="relative">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/75">
          Summit Valor
        </p>
        <div className="mt-6 h-px w-12 bg-white/70" />
      </div>
      <div className="relative">
        <p
          className={`max-w-[12rem] font-semibold leading-tight tracking-wide ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </p>
        <p className="mt-4 max-w-[13rem] text-xs leading-5 text-white/75">
          {subtitle}
        </p>
      </div>
      <p className="relative text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/65">
        Illustrative cover · Not a report preview
      </p>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="bg-white text-[#1F1F23]">
      <Navbar />
      <main>
        <section className="bg-[#F5F5F7] pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <Reveal className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                The Summit Valor Resource Library
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Practical Tools for Your Next Business Step.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                Explore practical resources designed to help you develop your
                business ideas, assess your operations, and build stronger
                foundations for sustainable growth.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-8 border-b border-gray-200 pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Featured Guide
              </p>
            </Reveal>
            <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Summit Operations Blueprint™
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                  See how Summit Valor evaluates business operations,
                  identifies bottlenecks, and develops a strategic roadmap for
                  scalable growth.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/resources/Summit_Operations_Blueprint_Sample_Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                  >
                    Review Sample Report
                    <FiDownload aria-hidden="true" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-[#1F1F23] transition hover:-translate-y-0.5 hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                  >
                    Book a Blueprint
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              <div className="grid gap-8 bg-[#F5F5F7] p-6 sm:p-10 md:grid-cols-[0.72fr_1fr] md:items-center lg:p-12">
                <Reveal
                  delay={0.08}
                  className="flex justify-center md:justify-start"
                >
                  <ResourceCover
                    featured
                    title="Summit Operations Blueprint"
                    subtitle="A strategic view of the systems and operations behind your business."
                    tone="bg-[#5B21B6]"
                  />
                </Reveal>
                <Reveal delay={0.16}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B21B6]">
                    Inside the Report
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {reportContents.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FiCheck
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-[#5B21B6]"
                        />
                        <span className="text-sm leading-6 text-gray-700 sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Free Resources"
                title="Start With What You Need."
                description="Whether you're exploring a business idea or strengthening an existing business, start with a resource that meets you where you are."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {freeResources.map((resource, index) => (
                <Reveal
                  key={resource.title}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg sm:flex-row">
                    <div className="relative flex aspect-[4/5] w-full shrink-0 items-center justify-center overflow-hidden bg-[#ECEAF0] sm:aspect-auto sm:min-h-[24rem] sm:w-[42%]">
                      <ResourceCover
                        title={resource.coverTitle}
                        subtitle={resource.coverSubtitle}
                        tone={resource.coverTone}
                        image={resource.coverImage}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5B21B6]">
                        {resource.audience}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-snug">
                        {resource.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                        {resource.description}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Free PDF Workbook
                        </span>
                        {resource.pdf ? (
                          <a
                            href={resource.pdf}
                            download
                            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                          >
                            Download Free
                            <FiDownload aria-hidden="true" />
                          </a>
                        ) : (
                          <span
                            className="inline-flex min-h-10 items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-500"
                            aria-label={`${resource.title}: coming soon, download unavailable`}
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
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
                eyebrow="How to Use Our Resources"
                title="Learn. Assess. Take Action."
              />
            </Reveal>
            <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
              {usageSteps.map(({ number, title, description, icon: Icon }, index) => (
                <Reveal
                  key={number}
                  delay={index * 0.08}
                  className="border-t-2 border-[#5B21B6] pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                      {number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#5B21B6]"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{description}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-16 text-white sm:py-20">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Summit Valor Consulting
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Need Support Beyond the Resources?
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Every business is different. Whether you need help assessing a
                business idea, evaluating your operations, strengthening your
                systems, or developing a practical roadmap, Summit Valor can
                help you identify your next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6D28D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Our Services
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Summit Valor
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
