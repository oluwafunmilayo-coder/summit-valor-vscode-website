import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiTarget,
  FiEye,
  FiCompass,
  FiTrendingUp,
} from "react-icons/fi";

export default function About() {
  const values = [
    {
      icon: <FiCompass size={28} />,
      title: "Operational Excellence",
      text: "We build systems that improve efficiency, consistency, and long-term business performance.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Strategic Partnership",
      text: "We work alongside founders as trusted partners, not just service providers.",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Continuous Improvement",
      text: "Operations should evolve as your business grows. We believe optimisation never stops.",
    },
    {
      icon: <FiEye size={28} />,
      title: "Clarity",
      text: "Clear systems create confident teams and better business decisions.",
    },
  ];

  const method = [
    "Assess",
    "Architect",
    "Implement",
    "Optimise",
    "Scale",
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#faf8f5] py-32">

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-purple-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              ABOUT SUMMIT VALOR
            </p>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
              Operations should be your competitive advantage.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Summit Valor helps founders and growing businesses build
              scalable systems, streamline operations, and create the
              operational structure needed for sustainable growth.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <button className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl">
                Book an Assessment
              </button>

              <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700">
                Explore Services
                <FiArrowRight />
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* STORY */}

      <section className="bg-white py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              OUR STORY
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              We believe growth should never create operational chaos.
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              Many businesses don't struggle because they lack ambition.
              They struggle because their operations haven't grown with
              them.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Summit Valor exists to bridge that gap by helping businesses
              build stronger systems, improve execution, and create
              operational clarity that supports sustainable growth.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] bg-gradient-to-br from-purple-800 to-violet-700 p-12 text-white shadow-2xl"
          >

            <p className="uppercase tracking-[0.3em] text-purple-200">
              Our Purpose
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Helping founders move from reactive operations to scalable systems.
            </h3>

            <p className="mt-8 leading-8 text-purple-100">
              We believe businesses operate at their best when people,
              systems, and processes work together with clarity,
              accountability, and intention.
            </p>

          </motion.div>

        </div>

      </section>

      {/* SUMMIT METHOD */}

      <section className="bg-[#F8F4FF] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              THE SUMMIT METHOD™
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              A framework for operational excellence.
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">

            {method.map((step, index) => (

              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
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

      {/* VALUES */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              OUR VALUES
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
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

                <div className="text-purple-700">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {value.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    {/* WHO WE SERVE */}

<section className="bg-[#F8F4FF] py-28">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
        WHO WE SERVE
      </p>

      <h2 className="mt-5 text-4xl font-bold text-gray-900">
        Built for ambitious organisations ready to scale.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        We partner with founders and growing organisations that need
        stronger operations, clearer systems, and sustainable growth.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Technology",
          text: "Helping startups and SaaS companies build operational systems that scale with growth.",
        },
        {
          title: "Professional Services",
          text: "Supporting consultants, agencies, and service businesses with streamlined operations.",
        },
        {
          title: "Healthcare",
          text: "Creating organised administrative systems for healthcare providers and wellness brands.",
        },
        {
          title: "Real Estate",
          text: "Improving client management, workflows, and day-to-day operational efficiency.",
        },
        {
          title: "E-commerce",
          text: "Building operational processes that support growth, fulfilment, and customer experience.",
        },
        {
          title: "NGOs",
          text: "Helping mission-driven organisations improve coordination, documentation, and impact.",
        },
      ].map((industry) => (

        <motion.div
          key={industry.title}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
        >

          <h3 className="text-2xl font-bold text-gray-900">
            {industry.title}
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            {industry.text}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
  {/* WHY SUMMIT VALOR */}

<section className="bg-white py-28">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    {/* Image */}

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[32px] shadow-2xl"
    >
      <img
        src="/about-team.jpg"
        alt="Summit Valor Operations"
        className="h-full w-full object-cover"
      />
    </motion.div>

    {/* Content */}

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
        WHY SUMMIT VALOR
      </p>

      <h2 className="mt-5 text-4xl font-bold text-gray-900">
        We're not another virtual assistant.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Most support providers help you complete tasks.
        We redesign the way your business operates so it becomes
        more organised, scalable, and easier to lead.
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

    </motion.div>

  </div>

</section>

</section>
    </>
  );
}