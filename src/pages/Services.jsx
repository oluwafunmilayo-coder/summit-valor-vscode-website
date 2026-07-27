import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiSettings,
  FiUsers,
  FiZap,
  FiClipboard,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Executive Operations Support",
      description:
        "For founders who need day-to-day support that keeps their business organised, responsive, and moving.",
      items: [
        "Executive administration",
        "Calendar management",
        "Inbox management",
        "Meeting coordination",
        "Executive communication",
      ],
      icon: <FiUsers size={28} />,
    },
    {
      title: "Operations Management",
      description:
        "For businesses that need someone to help coordinate the moving parts and keep execution on track.",
      items: [
        "Operational coordination",
        "Client operations",
        "Reporting",
        "KPI tracking",
        "Business administration",
      ],
      icon: <FiSettings size={28} />,
    },
    {
      title: "Systems & Process Design",
      description:
        "For teams that need workflows written down, improved, and made easier to follow.",
      items: [
        "SOP development",
        "Workflow design",
        "Documentation",
        "Knowledge management",
        "Process optimisation",
      ],
      icon: <FiClipboard size={28} />,
    },
    {
      title: "Project & Team Operations",
      description:
        "For teams that need structure around launches, deadlines, ownership, and accountability.",
      items: [
        "Project coordination",
        "Team accountability",
        "Onboarding systems",
        "Task management",
        "Meeting management",
      ],
      icon: <FiLayers size={28} />,
    },
    {
      title: "Business Systems & Technology",
      description:
        "For businesses that need the right tools working together properly behind the scenes.",
      items: ["Notion", "ClickUp", "CRM systems", "Automation", "Dashboards"],
      icon: <FiZap size={28} />,
    },
    {
      title: "Operational Strategy",
      description:
        "For founders who need a clearer view of what is slowing the business down and how to improve it.",
      items: [
        "Operations Audit",
        "Scaling strategy",
        "Fractional Operations Support",
        "Business optimisation",
        "Continuous improvement",
      ],
      icon: <FiClock size={28} />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Assess",
      description:
        "We evaluate your current operations, identify bottlenecks, and uncover opportunities for improvement.",
    },
    {
      number: "02",
      title: "Architect",
      description:
        "We design systems, workflows, and operational structures tailored to your business.",
    },
    {
      number: "03",
      title: "Implement",
      description:
        "We put the right systems, documentation, and processes in place so the business runs more smoothly.",
    },
    {
      number: "04",
      title: "Optimise",
      description:
        "We monitor performance, refine workflows, and continuously improve operational efficiency.",
    },
    {
      number: "05",
      title: "Scale",
      description:
        "With stronger operations in place, your business is positioned for sustainable growth.",
    },
  ];

  const blueprintIncludes = [
    "Executive Summary",
    "Operations Assessment",
    "Business Health Review",
    "Key Operational Bottlenecks",
    "Priority Recommendations",
    "Technology Recommendations",
    "30-Day Action Plan",
    "90-Day Roadmap",
    "Implementation Roadmap",
  ];

  const partnerships = [
    {
      name: "Foundation",
      title: "Operations Partnership",
      description:
        "For businesses building strong operational foundations and improving day-to-day execution.",
      features: [
        "Executive Operations Support",
        "Business Administration",
        "Workflow Optimisation",
        "Monthly Operations Review",
      ],
    },
    {
      name: "Momentum",
      title: "Operations Partnership",
      description:
        "For growing businesses ready to improve systems, processes, and operational efficiency.",
      features: [
        "Everything in Foundation",
        "Project & Team Operations",
        "Systems Documentation",
        "Operational Reporting",
      ],
      featured: true,
    },
    {
      name: "Command",
      title: "Operations Partnership",
      description:
        "A strategic operational partnership for organisations focused on sustainable growth.",
      features: [
        "Everything in Momentum",
        "Operational Strategy",
        "Leadership Support",
        "Continuous Improvement",
      ],
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28 lg:py-32">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-purple-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Our Services
            </p>

            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Operations built for ambitious businesses.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              We help founders and growing organisations build operational
              systems, streamline execution, and create the structure needed
              for sustainable growth.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://form.jotform.com/261101958492055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
              >
                Book an Operations Blueprint
              </a>

              <Link
                to="#services-grid"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700"
              >
                Explore Services
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services-grid" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              What We Do
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Operational solutions designed for growth.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We do not simply complete tasks. We strengthen the systems,
              processes, and operations that keep your business moving.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <FiCheckCircle className="shrink-0 text-purple-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4FF] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              How We Work
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              The Summit Method™
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every engagement follows a clear framework that helps businesses
              move from reactive execution to scalable growth.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:shadow-xl"
              >
                <span className="text-5xl font-bold text-purple-200">
                  {step.number}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E1033] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-300">
              Featured Offer
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              The Summit Operations Blueprint™
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-purple-100">
              A consulting-grade operational assessment designed to uncover
              inefficiencies, identify growth opportunities, and provide a
              clear roadmap for improving how your business operates.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur">
              <h3 className="text-3xl font-bold">What&apos;s Included</h3>

              <ul className="mt-8 space-y-4 text-purple-100">
                {blueprintIncludes.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-violet-700 p-10">
              <p className="uppercase tracking-[0.3em] text-purple-200">
                Why Start Here
              </p>

              <h3 className="mt-6 text-3xl font-bold">
                Understand your operations before investing in more people or
                more tools.
              </h3>

              <p className="mt-8 leading-8 text-purple-100">
                The Blueprint gives you a structured view of how your business
                operates today, where the biggest opportunities exist, and the
                practical steps required to improve performance.
              </p>

              <a
                href="https://form.jotform.com/261101958492055"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105"
              >
                Book Your Blueprint™
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Operations Partnerships
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Flexible partnerships built around your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every organisation is different. Our partnerships are designed to
              provide the right level of operational support as your business
              grows.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {partnerships.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -10 }}
                className={`rounded-3xl border p-10 transition hover:shadow-xl ${
                  plan.featured
                    ? "border-purple-700 bg-purple-700 text-white"
                    : "border-gray-200 bg-[#faf8f5]"
                }`}
              >
                <span
                  className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                    plan.featured ? "text-purple-200" : "text-purple-700"
                  }`}
                >
                  {plan.name}
                </span>

                <h3 className="mt-4 text-3xl font-bold">{plan.title}</h3>

                <p
                  className={`mt-6 leading-8 ${
                    plan.featured ? "text-purple-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a
                  href="https://form.jotform.com/261101958492055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-flex rounded-xl px-6 py-3 font-semibold transition ${
                    plan.featured
                      ? "bg-white text-purple-700 hover:bg-gray-100"
                      : "bg-purple-700 text-white hover:bg-purple-800"
                  }`}
                >
                  Start the Conversation
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4FF] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Industries We Serve
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Supporting organisations across diverse industries.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              "Technology",
              "Healthcare",
              "Professional Services",
              "Real Estate",
              "E-commerce",
              "Education",
              "NGOs",
              "Fashion & Beauty",
            ].map((industry) => (
              <motion.div
                key={industry}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-lg"
              >
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to know.
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "What types of businesses do you work with?",
              "How does the Summit Operations Blueprint™ work?",
              "Do you replace our existing team?",
              "Can you work with our current systems?",
              "Do you offer ongoing support?",
              "How do we get started?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {question}
                </h3>

                <p className="mt-3 text-gray-600">
                  Answer coming soon. This section will be completed during the
                  final content phase.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E1033] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to build operations that scale?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-purple-100">
            Whether you&apos;re improving existing systems or building them
            from scratch, Summit Valor is ready to become your operations
            partner.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 hover:bg-gray-100"
            >
              Book Your Blueprint™
            </a>

            <Link
              to="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-purple-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
