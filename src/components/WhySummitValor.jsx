import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiLayers,
  FiShield,
  FiCompass,
} from "react-icons/fi";

export default function WhySummitValor() {
  const reasons = [
    {
      icon: <FiCompass size={30} />,
      title: "Strategic Partnership",
      description:
        "We don't simply complete tasks. We become an extension of your leadership team, helping you make better operational decisions as your business grows.",
    },
    {
      icon: <FiLayers size={30} />,
      title: "Systems That Scale",
      description:
        "Every workflow, SOP and process is designed to reduce bottlenecks, improve consistency and support long-term growth.",
    },
    {
      icon: <FiTrendingUp size={30} />,
      title: "Execution With Accountability",
      description:
        "Projects move faster because responsibilities are clear, communication is structured and execution is consistently tracked.",
    },
    {
      icon: <FiShield size={30} />,
      title: "Long-Term Operational Stability",
      description:
        "Our goal isn't temporary support. We help you build an operational foundation that continues creating value as your business evolves.",
    },
  ];

  return (
    <section className="bg-[#faf8f5] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
            WHY SUMMIT VALOR
          </p>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            More than support. A true operations partner.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We help founders replace operational chaos with structure, clarity
            and scalable systems that create confidence across the entire
            business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                {reason.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {reason.title}
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-[36px] bg-[#1E1033] px-12 py-16 text-center text-white"
        >
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight">
            "Founders shouldn't be trapped in the day-to-day operations of their business."
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-purple-100">
            That's why Summit Valor exists&mdash;to build reliable systems,
            strengthen execution and give leaders the freedom to focus on growth
            instead of constant firefighting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
