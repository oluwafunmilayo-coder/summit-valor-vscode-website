import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiTarget,
  FiEye,
  FiCompass,
  FiTrendingUp,
  FiActivity,
  FiLayers,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

export default function About() {
  const values = [
    {
      icon: <FiCompass size={28} />,
      title: "Operational Clarity",
      text: "We help founders see what is happening behind the scenes and create systems that make the business easier to run.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Strategic Partnership",
      text: "We work alongside founders like an embedded operations partner, not just another service provider.",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Continuous Improvement",
      text: "We do not just fix problems once. We refine, improve, and build stronger operations as the business grows.",
    },
    {
      icon: <FiEye size={28} />,
      title: "Founder Visibility",
      text: "Clear systems create better decisions, fewer surprises, and more confidence across the business.",
    },
  ];

  const method = ["Assess", "Architect", "Implement", "Optimise", "Scale"];

  const industries = [
    {
      title: "Technology",
      text: "Startups and SaaS teams that need better workflows, clearer handoffs, and stronger operational structure.",
    },
    {
      title: "Professional Services",
      text: "Consultants, agencies, and service businesses that want smoother delivery and less founder dependency.",
    },
    {
      title: "Healthcare",
      text: "Practices and wellness brands that need organised admin, better coordination, and reliable execution.",
    },
    {
      title: "Real Estate",
      text: "Teams that need stronger client management, follow-up systems, and better day-to-day coordination.",
    },
    {
      title: "E-commerce",
      text: "Brands that need support with fulfilment workflows, internal organisation, and customer experience.",
    },
    {
      title: "NGOs",
      text: "Mission-driven teams that need structure, documentation, and smoother collaboration to increase impact.",
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
              About Summit Valor
            </p>

            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Operations should make your business feel calmer, not more
              complicated.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Summit Valor helps founders and growing businesses build the
              systems, workflows, and support that turn scattered operations
              into a business that runs with more clarity, consistency, and
              control.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://form.jotform.com/261101958492055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
              >
                Book an Assessment
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700"
              >
                Explore Services
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Our Story
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              We believe growth should not create operational chaos.
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              Many businesses do not struggle because they lack ambition. They
              struggle because their operations have not grown with them. The
              result is confusion, repeated work, missed follow-ups, and a
              founder carrying too much.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Summit Valor exists to bridge that gap by helping businesses
              build stronger systems, improve execution, and create the kind of
              operational clarity that supports sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] bg-gradient-to-br from-purple-800 to-violet-700 p-10 text-white shadow-2xl sm:p-12"
          >
            <p className="uppercase tracking-[0.3em] text-purple-200">
              Our Purpose
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Helping founders move from reactive operations to scalable
              systems.
            </h3>

            <p className="mt-8 leading-8 text-purple-100">
              We believe a business works best when people, systems, and
              processes move together with clarity, accountability, and
              intention.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Clearer internal workflows",
                "Less founder dependency",
                "Stronger execution and follow-through",
                "A business that feels easier to lead",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="text-purple-200" />
                  <span className="text-purple-50">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8F4FF] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              The Summit Method™
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              A framework for operational excellence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use a simple but structured approach to turn messy operations
              into a system that supports growth.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {method.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Our Values
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Principles that shape every engagement.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8"
              >
                <div className="text-purple-700">{value.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4FF] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Who We Serve
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built for ambitious organisations ready to scale.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We partner with founders and growing organisations that need
              stronger operations, clearer systems, and support that matches
              the pace of growth.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <motion.div
                key={industry.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">{industry.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[32px] shadow-2xl"
          >
            <img
              src="/about-story.jpg.jpg"
              alt="Summit Valor Operations"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              Why Summit Valor
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              We are not another virtual assistant.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Most support providers help you complete tasks. We redesign the
              way your business operates so it becomes more organised,
              scalable, and easier to lead.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  left: "Task Completion",
                  right: "Operational Improvement",
                },
                {
                  left: "Reactive Support",
                  right: "Proactive Partnership",
                },
                {
                  left: "Founder Dependency",
                  right: "Business Independence",
                },
                {
                  left: "Temporary Fixes",
                  right: "Scalable Systems",
                },
                {
                  left: "Extra Pair of Hands",
                  right: "Embedded Operations Partner",
                },
              ].map((item) => (
                <div
                  key={item.left}
                  className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200"
                >
                  <div className="bg-gray-50 p-5 text-center font-medium text-gray-500">
                    {item.left}
                  </div>

                  <div className="bg-purple-700 p-5 text-center font-semibold text-white">
                    {item.right}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
              >
                Explore Services
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
