import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

export default function Problem() {
  const problems = [
    "Too much depends on the founder",
    "Processes exist only in people's heads",
    "Teams lack clear workflows",
    "Projects get delayed or forgotten",
    "Daily operations distract from growth",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F4FF] py-28">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-400/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            The Problem
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Growth becomes difficult when operations cannot keep up.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            As businesses grow, operations often become more complex.
            Without documented systems and clear ownership, founders
            become the bottleneck and growth begins to slow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {problems.map((problem, index) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-purple-100 bg-white/90 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-purple-300 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition duration-300 group-hover:bg-purple-700 group-hover:text-white">
                <FiAlertCircle size={24} />
              </div>

              <p className="text-lg font-semibold leading-8 text-gray-900 transition-colors duration-300 group-hover:text-purple-700">
                {problem}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}