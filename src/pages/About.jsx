import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
  FiRefreshCw,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const philosophy = [
  {
    title: "Clarity Before Complexity",
    description:
      "We help founders understand their challenges, assess their options, and identify the priorities that matter most.",
    icon: FiCompass,
  },
  {
    title: "Structure That Supports Execution",
    description:
      "We translate business goals into practical plans, documented processes, and systems that support day-to-day work.",
    icon: FiTarget,
  },
  {
    title: "Transformation Through Action",
    description:
      "Good recommendations should lead to meaningful action. We focus on practical solutions that can be implemented and improved as the business evolves.",
    icon: FiRefreshCw,
  },
];

const services = [
  {
    title: "Business Strategy and Venture Development",
    description:
      "We help aspiring entrepreneurs and founders assess business ideas, research opportunities, clarify business models, and develop structured plans for moving forward.",
  },
  {
    title: "Operations and Process Design",
    description:
      "We help businesses improve how work gets done through clearer processes, standard operating procedures, operational playbooks, and team workflows.",
  },
  {
    title: "Systems and Implementation",
    description:
      "We help businesses establish and improve workflows, CRM systems, automation, and operational tools that support consistent execution.",
  },
  {
    title: "Business Transformation and Execution",
    description:
      "We help founders identify operational priorities, restructure business models and offers where appropriate, and develop actionable roadmaps for improvement.",
  },
];

const values = [
  {
    title: "Clarity",
    description:
      "We simplify complexity, establish priorities, and help people understand the path forward.",
    icon: FiCompass,
  },
  {
    title: "Integrity",
    description:
      "We value honesty, accountability, transparency, and responsible professional practice.",
    icon: FiShield,
  },
  {
    title: "Courage",
    description:
      "We encourage thoughtful decisions, bold action, and the willingness to improve what is not working.",
    icon: FiTarget,
  },
  {
    title: "Partnership",
    description:
      "We believe meaningful progress comes from understanding people's needs and working collaboratively toward shared objectives.",
    icon: FiUsers,
  },
  {
    title: "Continuous Improvement",
    description:
      "We remain committed to learning, refining our approach, and helping businesses adapt as their needs evolve.",
    icon: FiRefreshCw,
  },
];

const ecosystem = [
  {
    title: "Summit Valor Consulting",
    description:
      "Our professional services arm helps aspiring entrepreneurs and growing businesses address business challenges through strategy, research, process design, systems, and implementation support.",
    icon: FiCompass,
  },
  {
    title: "Summit Valor Founder Community",
    description:
      "A space for founders to connect, exchange knowledge, learn from one another, build accountability, and navigate the realities of entrepreneurship together.",
    icon: FiUsers,
  },
  {
    title: "Summit Valor VentureLab",
    description:
      "Our business learning initiative teaches business fundamentals, structuring, operations, strategy, leadership, financial management, and learning through masterclasses and business experiments.",
    icon: FiBookOpen,
  },
];

const reasons = [
  {
    title: "We Look Beyond the Immediate Problem",
    description:
      "We seek to understand the underlying business challenge before recommending a solution.",
  },
  {
    title: "We Connect Strategy With Practical Execution",
    description:
      "We focus on helping clients move from ideas and recommendations toward actionable plans and workable structures.",
  },
  {
    title: "We Recognize That Every Business Is Different",
    description:
      "Our approach considers the business's stage, goals, resources, and operating realities.",
  },
  {
    title: "We Believe in Building for Progress",
    description:
      "We help clients identify practical improvements that strengthen their foundations and support their next stage of development.",
  },
];

const audiences = [
  "Aspiring Entrepreneurs",
  "Early-Stage Businesses",
  "Founder-Led Companies",
  "Small and Growing Businesses",
  "Professional Service Firms",
  "Consultants and Coaches",
  "Creative Businesses",
  "Other Organizations Seeking Business or Operational Support",
];

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Reveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        ...sectionReveal,
        visible: {
          ...sectionReveal.visible,
          transition: {
            ...sectionReveal.visible.transition,
            delay: reduceMotion ? 0 : delay,
          },
        },
      }}
      className={className}
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

export default function About() {
  return (
    <div className="bg-white text-[#1F1F23]">
      <Navbar />
      <main>
        <section className="bg-[#F5F5F7] pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <Reveal className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Business Consulting &amp; Entrepreneurial Development Company
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                We Help Founders Turn Ambition Into Structure, Strategy, and
                Action.
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-gray-600">
                <p>
                  Every business begins with an idea. Building a business that
                  can grow requires more than ambition. It takes clear
                  direction, thoughtful planning, effective systems, and
                  consistent execution.
                </p>
                <p>
                  Summit Valor exists to help aspiring entrepreneurs turn ideas
                  into structured ventures and help growing businesses
                  strengthen the foundations behind their growth.
                </p>
                <p>
                  We bring together business consulting, practical
                  implementation, entrepreneurship education, and a community
                  built around learning and progress.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Contact Us <FiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Why Summit Valor Exists"
                title="Good Ideas Need More Than Ambition. Growing Businesses Need More Than Hard Work."
              />
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Many aspiring entrepreneurs have ideas but struggle to
                determine where to start. Others have established businesses
                but find themselves dealing with unclear processes,
                disconnected systems, inconsistent execution, or business
                models that need to evolve.
              </p>
              <p>
                These challenges can make progress more difficult than it needs
                to be.
              </p>
              <p>
                Summit Valor was created to help close the gap between ambition
                and execution. We work with entrepreneurs and business owners
                to clarify their direction, strengthen their structures, and
                identify practical ways to move forward.
              </p>
              <p>
                Our approach combines strategic thinking with practical
                solutions, helping businesses address the challenges that
                stand between where they are and where they want to go.
              </p>
              <p>
                We believe transformation happens when the right decisions are
                supported by the right structures and consistent action.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Our Philosophy"
                title="Strong Businesses Are Built Intentionally."
                description="Growth should not depend entirely on a founder's ability to manage every decision, remember every process, or solve every problem as it appears."
              />
            </Reveal>
            <div className="mt-8 max-w-3xl space-y-4 leading-7 text-gray-600">
              <Reveal>
                <p>
                  Businesses need clear priorities, workable processes,
                  connected systems, and people who understand their
                  responsibilities.
                </p>
                <p className="mt-4">
                  Our philosophy is simple: understand the business before
                  recommending solutions, build structures around its actual
                  needs, and focus on changes that can be put into practice.
                </p>
                <p className="mt-4">
                  We approach our work through three principles:
                </p>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {philosophy.map(({ title, description, icon: Icon }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.08}
                  className="border-t border-gray-300 py-7 md:py-8"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-[#5B21B6]"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="How We Work With Founders"
                title="Strategic Thinking. Practical Solutions. Stronger Foundations."
                description="Every business is different. An aspiring entrepreneur developing a business idea has different needs from an established company improving its operations."
              />
            </Reveal>
            <Reveal className="mt-6 max-w-3xl">
              <p className="text-lg leading-8 text-gray-600">
                That is why we begin by understanding the business, its current
                stage, its challenges, and its goals. From there, we identify
                the appropriate areas of support and develop a practical
                approach aligned with the client&apos;s needs.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 0.07}
                  className="border-t border-gray-300 py-7 sm:py-8"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-4 border-l-2 border-[#5B21B6] pl-5 text-lg font-medium leading-8">
              Our role is to bring clarity to business challenges and help turn
              decisions into practical next steps.
            </Reveal>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
            <Reveal className="border-t border-white/25 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Our Mission
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                To Help Entrepreneurs and Growing Businesses Build Stronger
                Foundations for Sustainable Growth.
              </h2>
              <p className="mt-4 leading-7 text-gray-300">
                We aim to make business development more structured and
                business operations more effective by combining strategic
                guidance, practical solutions, and opportunities for continuous
                learning.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="border-t border-white/25 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Our Vision
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                To Build a Trusted Ecosystem That Helps Entrepreneurs and
                Businesses Move From Potential to Progress.
              </h2>
              <p className="mt-4 leading-7 text-gray-300">
                We envision a future where more entrepreneurs have access to
                the knowledge, systems, support, and opportunities they need to
                build businesses with purpose and direction.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Our Core Values"
                title="The Principles Behind Our Work."
              />
            </Reveal>
            <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ title, description, icon: Icon }, index) => (
                <Reveal
                  key={title}
                  delay={(index % 3) * 0.07}
                  className="border-t border-gray-300 py-6 sm:py-7"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#5B21B6]"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="The Summit Valor Ecosystem"
                title="Consulting, Community, and Learning. Connected by a Shared Purpose."
                description="Summit Valor is building an ecosystem designed to support entrepreneurs at different stages of their journeys. Each part serves a distinct purpose while contributing to our broader mission."
              />
            </Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {ecosystem.map(({ title, description, icon: Icon }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.08}
                  className="border-t border-gray-300 py-7 md:py-8"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-[#5B21B6]"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{description}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-4 text-lg leading-8 text-gray-600">
              Together, these initiatives connect business guidance, practical
              learning, and founder support within one growing ecosystem.
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Why Summit Valor?"
                title="A Thoughtful Partner for Your Next Stage of Growth."
              />
            </Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <Reveal
                  key={reason.title}
                  delay={index * 0.07}
                  className="border-t border-gray-300 py-7 sm:py-8"
                >
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <Reveal>
              <SectionIntro
                eyebrow="Who We Serve"
                title="For Entrepreneurs and Businesses Ready to Move Forward With Greater Clarity."
                description="We work with people and organizations at different stages of business development."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <li
                    key={audience}
                    className="flex items-start gap-3 border-b border-gray-300 py-4"
                  >
                    <FiArrowRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#5B21B6]"
                    />
                    <span className="font-medium">{audience}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-7 text-gray-600">
                Our work begins with understanding your needs, not assuming
                every business requires the same solution.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#5B21B6] py-16 text-white sm:py-20">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
                Ready to take your next step?
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Build Better Systems. Execute Growth With Confidence.
              </h2>
              <p className="mt-4 text-lg leading-8 text-purple-100">
                Whether you are developing a business idea, strengthening your
                existing operations, or preparing for your next stage of
                growth, Summit Valor can help you explore a practical path
                forward. Let&apos;s discuss your business, understand your
                priorities, and determine the support that makes sense for your
                needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#5B21B6] transition duration-200 hover:-translate-y-0.5 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Summit Valor <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
