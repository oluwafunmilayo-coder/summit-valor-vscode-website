import { motion } from "framer-motion";
import {
  FiSearch,
  FiLayers,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: <FiSearch size={26} />,
      description:
        "We begin by understanding your business, identifying bottlenecks, and uncovering the operational gaps holding you back.",
    },
    {
      number: "02",
      title: "Design",
      icon: <FiLayers size={26} />,
      description:
        "We create workflows, SOPs, systems, and operational structures tailored specifically to how your business operates.",
    },
    {
      number: "03",
      title: "Implement",
      icon: <FiSettings size={26} />,
      description:
        "We integrate the systems into your daily operations, ensuring your team has clarity, accountability, and consistency.",
    },
    {
      number: "04",
      title: "Optimize",
      icon: <FiTrendingUp size={26} />,
      description:
        "Operations are continuously refined as your business grows, helping you scale with confidence instead of complexity.",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            A clear path from complexity to clarity.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every engagement follows a structured approach designed to build
            lasting operational excellence, not temporary fixes.
          </p>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-purple-200 md:block"></div>

          <div className="space-y-12">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative flex gap-8"
              >

                {/* Number + Icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg transition duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-300 group-hover:shadow-2xl">

                  <span className="text-sm font-bold tracking-[0.2em] text-purple-700">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}