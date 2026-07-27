import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiActivity,
  FiLayers,
  FiCompass,
  FiTarget,
  FiTrendingUp,
  FiRefreshCw,
} from "react-icons/fi";

export default function WhySummitValor() {
  const [active, setActive] = useState(0);

  const items = [
    {
      icon: <FiActivity size={22} />,
      title: "Business Operations Partner",
      description:
        "We work as an extension of your leadership team, helping you build operational discipline, improve execution, and create space for strategic growth.",
    },
    {
      icon: <FiLayers size={22} />,
      title: "Premium Systems",
      description:
        "Every workflow, SOP, and operational process is designed specifically for your business instead of relying on generic templates.",
    },
    {
      icon: <FiCompass size={22} />,
      title: "Strategic Partnership",
      description:
        "Beyond execution, we help you make better operational decisions by bringing structure, clarity, and long-term thinking to your business.",
    },
    {
      icon: <FiTarget size={22} />,
      title: "Operational Clarity",
      description:
        "Everyone understands their responsibilities, processes are documented, and work moves forward with confidence and accountability.",
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "Scalable Support",
      description:
        "Our operational support evolves with your business so your systems continue to serve you as your team grows.",
    },
    {
      icon: <FiRefreshCw size={22} />,
      title: "Continuous Improvement",
      description:
        "Operations are never static. We continuously refine processes, remove bottlenecks, and improve efficiency over time.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Why Summit Valor
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            The partner behind better operations.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We don't simply complete tasks. We build the operational
            foundation that allows founders and growing businesses to
            execute with clarity, consistency, and confidence.
          </p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={item.title}
                layout
                transition={{
                  layout: {
                    duration: 0.35,
                  },
                }}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setActive(index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-gray-50"
                >
                  <div className="flex items-center gap-5">
                    <div className="rounded-2xl bg-purple-100 p-3 text-purple-700">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="border-t border-gray-100 px-8 py-8">

                        <p className="max-w-3xl text-lg leading-8 text-gray-600">
                          {item.description}
                        </p>

                        <button className="mt-8 flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3">
                          Learn More
                          <FiArrowRight />
                        </button>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}