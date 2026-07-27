import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
  return (
    <>
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#faf8f5] py-32">

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-purple-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              OUR SERVICES
            </p>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
              Operations built for ambitious businesses.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              We help founders and growing organisations build operational
              systems, streamline execution, and create the structure needed
              for sustainable growth.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <button className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl">
                Explore Our Services
              </button>

              <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700">
                Book an Operations Blueprint
                <FiArrowRight />
              </button>

            </div>

          </motion.div>

          {/* SERVICES OVERVIEW */}

<section className="bg-white py-28">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
        WHAT WE DO
      </p>

      <h2 className="mt-5 text-4xl font-bold text-gray-900">
        Operational solutions designed for growth.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        We don't simply complete tasks. We strengthen the systems,
        processes, and operations that keep your business moving.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Executive Operations Support",
          items: [
            "Executive administration",
            "Calendar management",
            "Inbox management",
            "Meeting coordination",
            "Executive communication",
          ],
        },

        {
          title: "Operations Management",
          items: [
            "Operational coordination",
            "Client operations",
            "Reporting",
            "KPI tracking",
            "Business administration",
          ],
        },

        {
          title: "Systems & Process Design",
          items: [
            "SOP development",
            "Workflow design",
            "Documentation",
            "Knowledge management",
            "Process optimisation",
          ],
        },

        {
          title: "Project & Team Operations",
          items: [
            "Project coordination",
            "Team accountability",
            "Onboarding systems",
            "Task management",
            "Meeting management",
          ],
        },

        {
          title: "Business Systems & Technology",
          items: [
            "Notion",
            "ClickUp",
            "CRM systems",
            "Automation",
            "Dashboards",
          ],
        },

        {
          title: "Operational Strategy",
          items: [
            "Operations Audit",
            "Scaling strategy",
            "Fractional Operations Support",
            "Business optimisation",
            "Continuous improvement",
          ],
        },
      ].map((service) => (

        <motion.div
          key={service.title}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm hover:shadow-xl"
        >

          <h3 className="text-2xl font-bold text-gray-900">
            {service.title}
          </h3>

          <ul className="mt-6 space-y-3">

            {service.items.map((item) => (

              <li
                key={item}
                className="flex items-center gap-3 text-gray-600"
              >
                <span className="h-2 w-2 rounded-full bg-purple-700"></span>

                {item}
              </li>

            ))}

          </ul>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* THE SUMMIT METHOD™ */}

      <section className="bg-[#F8F4FF] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              HOW WE WORK
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              The Summit Method™
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every engagement follows a proven operational framework that helps
              businesses move from reactive execution to scalable growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-5">

            {[
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
                  "We execute the systems, documentation, and operational improvements that keep your business running smoothly.",
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
                  "With strong operational foundations in place, your business is positioned for sustainable growth.",
              },
            ].map((step) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"
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

      {/* FEATURED OFFER */}

      <section className="bg-[#1E1033] py-28 text-white">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-300">
              FEATURED OFFER
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              The Summit Operations Blueprint™
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-purple-100">
              A consulting-grade operational assessment designed to uncover
              inefficiencies, identify growth opportunities, and provide a clear
              roadmap for improving how your business operates.
            </p>

          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur">

              <h3 className="text-3xl font-bold">
                What's Included
              </h3>

              <ul className="mt-8 space-y-4 text-purple-100">

                <li>✓ Executive Summary</li>

                <li>✓ Operations Assessment</li>

                <li>✓ Business Health Review</li>

                <li>✓ Key Operational Bottlenecks</li>

                <li>✓ Priority Recommendations</li>

                <li>✓ Technology Recommendations</li>

                <li>✓ 30-Day Action Plan</li>

                <li>✓ 90-Day Roadmap</li>

                <li>✓ Implementation Roadmap</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-violet-700 p-10">

              <p className="uppercase tracking-[0.3em] text-purple-200">
                WHY START HERE
              </p>

              <h3 className="mt-6 text-3xl font-bold">
                Understand your operations before investing in more people or more tools.
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

      {/* OPERATIONS PARTNERSHIPS */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              OPERATIONS PARTNERSHIPS
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Flexible partnerships built around your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every organisation is different. Our partnerships are designed to
              provide the right level of operational support as your business grows.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
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
            ].map((plan) => (

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

                <h3 className="mt-4 text-3xl font-bold">
                  {plan.title}
                </h3>

                <p
                  className={`mt-6 leading-8 ${
                    plan.featured ? "text-purple-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">

                  {plan.features.map((feature) => (

                    <li key={feature}>
                      ✓ {feature}
                    </li>

                  ))}

                </ul>

                <button
                  className={`mt-10 rounded-xl px-6 py-3 font-semibold transition ${
                    plan.featured
                      ? "bg-white text-purple-700 hover:bg-gray-100"
                      : "bg-purple-700 text-white hover:bg-purple-800"
                  }`}
                >
                  Start the Conversation
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="bg-[#F8F4FF] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              INDUSTRIES WE SERVE
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
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
                <h3 className="font-semibold text-gray-900">
                  {industry}
                </h3>
              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
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
                  Answer coming soon. This section will be completed during the final content phase.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#1E1033] py-28 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready to build operations that scale?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-purple-100">
            Whether you're improving existing systems or building them from
            scratch, Summit Valor is ready to become your operations partner.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 hover:bg-gray-100">
              Book Your Blueprint™
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-purple-700">
              Contact Us
            </button>

          </div>

        </div>

      </section>

        </div>

      </section>

    </>
  );
}