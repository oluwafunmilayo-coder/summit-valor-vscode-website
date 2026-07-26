import { motion } from "framer-motion";
import { FiArrowRight, FiXCircle, FiCheckCircle } from "react-icons/fi";

export default function Transformation() {
  const before = [
    "Reactive",
    "Founder-dependent",
    "Disorganized",
    "Manual",
    "Stressful",
  ];

  const after = [
    "Systemized",
    "Scalable",
    "Documented",
    "Efficient",
    "Operational Confidence",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            The Summit Transformation
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            From operational chaos to operational confidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A structural shift in how your business runs.
            Not another tool.
            Not another hire.
            A better operating system.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="relative mt-20 grid gap-10 lg:grid-cols-2">

          {/* Connector */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-1 rounded-full bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700"
            />
          </div>

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-red-100 bg-red-50 p-10 shadow-sm"
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Before
            </h3>

            <div className="space-y-5">
              {before.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <FiXCircle
                    size={24}
                    className="text-red-500"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 p-10 text-white shadow-2xl"
          >
            <h3 className="mb-8 text-3xl font-bold">
              After
            </h3>

            <div className="space-y-5">
              {after.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
                >
                  <FiCheckCircle
                    size={24}
                    className="text-green-300"
                  />

                  <span className="font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}