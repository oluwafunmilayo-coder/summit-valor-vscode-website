import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiUser,
  FiFileText,
  FiAlertCircle,
  FiTarget,
  FiUsers,
  FiTrendingUp,
  FiSettings,
  FiLayers,
  FiGrid,
  FiCheckCircle,
  FiChevronDown,
  FiArrowRight,
  FiCpu,
  FiBarChart2,
  FiClipboard,
  FiZap,
  FiFlag,
  FiCompass,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const problems = [
    {
      icon: <FiUser size={28} />,
      title: "Business Depends on the Founder",
      description:
        "Every decision flows through you. Growth stalls because operations aren't built to run without constant oversight.",
    },
    {
      icon: <FiFileText size={28} />,
      title: "No Documented Processes",
      description:
        "Institutional knowledge lives in people's heads. Onboarding is slow, errors repeat and nothing scales consistently.",
    },
    {
      icon: <FiAlertCircle size={28} />,
      title: "Operational Bottlenecks",
      description:
        "Work piles up in predictable places. Deadlines slip, teams wait on approvals and momentum breaks down.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Poor Accountability",
      description:
        "Goals are set but rarely tracked. Without clear ownership and visibility, follow-through is inconsistent.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Team Inefficiency",
      description:
        "Your team is talented but misaligned. Duplication, unclear roles and communication gaps drain output.",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Growth Without Structure",
      description:
        "Revenue is increasing but cracks are showing. Operations built for an earlier stage can't support the business you're becoming.",
    },
  ];

  const services = [
    {
      icon: <FiSettings size={32} />,
      title: "Executive Operations Support",
      subtitle: "Your operational right hand.",
      description:
        "Embedded operational leadership that brings structure, clarity and momentum to your business without the cost of a full-time COO.",
      bullets: [
        "Operational oversight across departments and functions",
        "Priority management and executive decision support",
        "Cross-functional coordination and alignment",
        "Reporting frameworks and leadership dashboards",
        "Strategic meeting facilitation and follow-through",
      ],
    },
    {
      icon: <FiLayers size={32} />,
      title: "Operations Management",
      subtitle: "Day-to-day operations, elevated.",
      description:
        "End-to-end operational management that keeps your business running smoothly, efficiently and predictably as you scale.",
      bullets: [
        "Operational workflow design and management",
        "Team coordination and performance tracking",
        "Resource allocation and capacity planning",
        "Vendor and partner relationship management",
        "Operational health monitoring and reporting",
      ],
    },
    {
      icon: <FiGrid size={32} />,
      title: "Systems & Process Design",
      subtitle: "Build once. Scale indefinitely.",
      description:
        "Custom operational systems and documented processes that eliminate guesswork, reduce errors and allow your business to grow without chaos.",
      bullets: [
        "End-to-end process mapping and documentation",
        "Standard operating procedure (SOP) development",
        "Workflow automation design and implementation",
        "Cross-team handoff and communication systems",
        "Scalable frameworks built for your growth stage",
      ],
    },
    {
      icon: <FiClipboard size={32} />,
      title: "Project & Team Operations",
      subtitle: "Execution that delivers results.",
      description:
        "Structured project management and team operations that turn strategy into outcomes with clear timelines, ownership and accountability.",
      bullets: [
        "Project planning, scoping and timeline management",
        "Team structure, roles and accountability frameworks",
        "Progress tracking and stakeholder communication",
        "Risk identification and mitigation planning",
        "Post-project reviews and lessons learned",
      ],
    },
    {
      icon: <FiCpu size={32} />,
      title: "Business Systems & Technology",
      subtitle: "The right tools, properly implemented.",
      description:
        "Technology stack assessment, tool selection and systems integration to ensure your business infrastructure supports — not hinders — growth.",
      bullets: [
        "Tech stack audit and optimisation",
        "Tool selection, implementation and team training",
        "Data flow and integration architecture",
        "Automation of repetitive operational tasks",
        "Digital workspace design for distributed teams",
      ],
    },
    {
      icon: <FiBarChart2 size={32} />,
      title: "Operational Strategy",
      subtitle: "Clarity before execution.",
      description:
        "Strategic operational planning that aligns your business model, resources and processes to support sustainable, structured growth.",
      bullets: [
        "Operational readiness and growth stage assessment",
        "Business model and delivery model alignment",
        "Organisational design and team planning",
        "Quarterly and annual operational roadmaps",
        "KPI frameworks and performance measurement systems",
      ],
    },
  ];

  const blueprintItems = [
    "Executive Summary",
    "Business Health Review",
    "Operational Assessment",
    "Technology Review",
    "Operational Bottleneck Identification",
    "Priority Recommendations",
    "30-Day Action Plan",
    "90-Day Roadmap",
    "Implementation Roadmap",
  ];

  const methodSteps = [
    {
      step: "01",
      title: "Assess",
      icon: <FiCompass size={24} />,
      description:
        "We conduct a thorough review of your current operations, systems, team structure and business model to identify gaps, inefficiencies and opportunities.",
    },
    {
      step: "02",
      title: "Architect",
      icon: <FiGrid size={24} />,
      description:
        "We design a tailored operational framework — processes, systems and structures built specifically for your business, your team and your growth goals.",
    },
    {
      step: "03",
      title: "Implement",
      icon: <FiZap size={24} />,
      description:
        "We roll out the new systems and processes methodically, ensuring your team is trained, aligned and equipped to operate with confidence.",
    },
    {
      step: "04",
      title: "Optimise",
      icon: <FiSettings size={24} />,
      description:
        "We monitor performance, gather feedback and refine processes continuously — ensuring your operations improve as your business evolves.",
    },
    {
      step: "05",
      title: "Scale",
      icon: <FiTrendingUp size={24} />,
      description:
        "With a solid operational foundation in place, we support your next phase of growth — ensuring your systems scale as fast as your ambitions.",
    },
  ];

  const industries = [
    {
      name: "Technology",
      description:
        "Helping tech companies build the operational backbone that supports fast-moving teams and rapid product growth.",
    },
    {
      name: "Healthcare",
      description:
        "Supporting healthcare providers and healthtech businesses with compliant, efficient and patient-centred operations.",
    },
    {
      name: "Professional Services",
      description:
        "Streamlining delivery models for law firms, consultancies and agencies to improve margins and client outcomes.",
    },
    {
      name: "Real Estate",
      description:
        "Building scalable systems for real estate businesses managing high volumes of transactions, listings and stakeholders.",
    },
    {
      name: "Education",
      description:
        "Helping educational institutions and edtech companies design operations that serve learners at scale.",
    },
    {
      name: "NGOs",
      description:
        "Supporting non-profits with lean, high-impact operational systems that maximise limited resources.",
    },
    {
      name: "E-Commerce",
      description:
        "Optimising fulfilment, customer experience and backend operations for growing e-commerce brands.",
    },
    {
      name: "Fashion",
      description:
        "Bringing operational clarity to fashion businesses navigating complex supply chains and seasonal demand.",
    },
  ];

  const faqs = [
    {
      question: "Who do you work with?",
      answer:
        "We work with founders, CEOs and leadership teams of growing businesses. Typically, organisations with 2 to 200 employees who have outgrown their current operational setup. Our clients range from early-stage startups building their first systems to established businesses preparing for significant scale. If you're feeling operational pain, we can help.",
    },
    {
      question: "Can you work with our existing systems and tools?",
      answer:
        "Absolutely. We don't believe in ripping out what's working. Our first step is always to assess what you already have in place. We will optimise, integrate and build on your existing systems wherever possible, only recommending new tools or platforms when there's a clear operational need and return on investment.",
    },
    {
      question: "Do you replace our staff?",
      answer:
        "No. Summit Valor is not a staffing agency and we don't replace your team. We work alongside your existing people to build better systems, improve how teams work together and remove the operational friction that slows them down. Our goal is to make your team more effective, not to substitute them.",
    },
    {
      question: "How do we get started?",
      answer:
        "The best starting point is an Operations Assessment. We'll have an initial conversation to understand your business, your current challenges and your goals. From there, we'll recommend the most appropriate engagement, whether that's our Summit Operations Blueprint™ or one of our ongoing partnership tiers. There's no pressure and no obligation.",
    },
    {
      question: "Do you offer ongoing operational support?",
      answer:
        "Yes. Our Momentum and Command partnerships are designed for ongoing engagements where we provide continuous operational support, strategy and implementation. Many clients begin with a Foundation engagement or Blueprint and then move into a longer-term partnership as they see results and identify further opportunities to improve.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "It depends on the scope and complexity of your operational needs. A focused process design or systems implementation project might take four to eight weeks. A comprehensive operational transformation through our Command partnership is typically structured over three to six months, with measurable milestones along the way. We'll give you a clear timeline before any engagement begins.",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#14071f] min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6D28D9] rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-[#6D28D9] text-sm font-semibold tracking-widest uppercase mb-6 border border-purple-800 px-4 py-2 rounded-full"
            >
              Summit Valor · Services
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            >
              Build Better Operations.{" "}
              <span className="text-[#6D28D9]">Scale with Confidence.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl"
            >
              Growing businesses don't fail because they lack ambition. They
              struggle when operations can't keep up. Summit Valor helps founders
              strengthen systems, improve execution and build the operational
              foundation needed for sustainable growth.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6D28D9] hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40"
              >
                Book an Operations Assessment
                <FiArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#faf8f5] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="text-[#6D28D9] text-sm font-semibold tracking-widest uppercase">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14071f] mt-4 mb-6">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Most growing businesses face the same operational challenges. The
              difference is whether you address them before or after they start
              costing you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="text-[#6D28D9] mb-5">{problem.icon}</div>
                <h3 className="text-lg font-bold text-[#14071f] mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="text-[#6D28D9] text-sm font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14071f] mt-4 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Every engagement is designed around outcomes — not activities.
              Here's how we help you build operations that actually work.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-[#faf8f5] rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-[#6D28D9] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#14071f] mb-1">
                  {service.title}
                </h3>
                <p className="text-[#6D28D9] text-sm font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FiCheckCircle
                        className="text-[#6D28D9] mt-0.5 flex-shrink-0"
                        size={14}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summit Operations Blueprint */}
      <section id="blueprint" className="bg-[#14071f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#6D28D9] rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-400 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="inline-block text-[#6D28D9] text-sm font-semibold tracking-widest uppercase mb-6 border border-purple-800 px-4 py-2 rounded-full">
                Flagship Service
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Summit Operations Blueprint™
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our flagship operational assessment gives you complete clarity on
                where your business stands, what's holding you back and exactly
                what to do next. It's the definitive starting point for any
                serious operational transformation.
              </p>
              <p className="text-gray-400 mb-10">
                The Blueprint is a structured, expert-led assessment that
                produces a comprehensive report and actionable roadmap — giving
                you the insight and direction to make the right operational
                decisions with confidence.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6D28D9] hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40"
              >
                Book Your Operations Blueprint™
                <FiArrowRight />
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">
                  What's included in your Blueprint:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {blueprintItems.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-3"
                    >
                      <FiCheckCircle
                        className="text-[#6D28D9] flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-200 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summit Method */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="text-[#6D28D9] text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14071f] mt-4 mb-6">
              The Summit Method™
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A five-step operational transformation framework built for
              businesses that want lasting results — not short-term fixes.
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-32" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {methodSteps.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative text-center group"
                >
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-[#faf8f5] rounded-3xl flex flex-col items-center justify-center border-2 border-purple-100 group-hover:border-[#6D28D9] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-100">
                    <span className="text-[#6D28D9] text-xs font-bold tracking-widest mb-1">
                      {step.step}
                    </span>
                    <div className="text-[#6D28D9]">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#14071f] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways To Work With Summit Valor */}
      {/* Industries */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="text-[#6D28D9] text-sm font-semibold tracking-widest uppercase">
              Sectors
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14071f] mt-4 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Operational excellence is universal. We bring cross-industry
              experience to every engagement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-[#faf8f5] rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <FiFlag className="text-[#6D28D9]" size={16} />
                </div>
                <h3 className="text-base font-bold text-[#14071f] mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#faf8f5] py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="text-[#6D28D9] text-sm font-semibold tracking-widest uppercase">
              Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14071f] mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500">
              Everything you need to know before getting started.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                >
                  <span className="font-semibold text-[#14071f] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-[#6D28D9]"
                  >
                    <FiChevronDown size={20} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gray-100 mb-5" />
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-[#14071f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6D28D9] rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-block text-[#6D28D9] text-sm font-semibold tracking-widest uppercase mb-6 border border-purple-800 px-4 py-2 rounded-full">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to build operations that scale?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Whether you're improving existing systems or building them from
              scratch, Summit Valor is ready to become your operations partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#6D28D9] hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/40"
              >
                Book an Operations Assessment
                <FiArrowRight />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}