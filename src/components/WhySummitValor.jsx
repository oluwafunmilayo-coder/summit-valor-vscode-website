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
import { Link } from "react-router-dom";

export default function WhySummitValor() {
  const [active, setActive] = useState(0);

  const items = [
    {
      icon: <FiActivity size={22} />,
      title: "We turn chaos into structure",
      description:
        "If your team is repeating tasks, losing track of follow-ups, or relying on memory instead of systems, we help bring order to the business so things run with more clarity and less stress.",
    },
    {
      icon: <FiLayers size={22} />,
      title: "We build custom systems",
      description:
        "No generic templates. We design workflows, SOPs, and operational processes around how your business actually works, so your support feels practical, not forced.",
    },
    {
      icon: <FiCompass size={22} />,
      title: "We support real decision-making",
      description:
        "Operations is not just task completion. It is the structure behind how work gets done. We help founders make better operational decisions and remove friction from the business.",
    },
    {
      icon: <FiTarget size={22} />,
      title: "We make responsibilities clear",
      description:
        "When everyone knows who owns what, work moves faster. We help create clarity around roles, handoffs, deadlines, and follow-through so fewer things fall through the cracks.",
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "We support growth without mess",
      description:
        "As your business grows, your systems should grow with it. We build support that can scale with your team, your clients, and your workload.",
    },
    {
      icon: <FiRefreshCw size={22} />,
      title: "We keep improving the process",
      description:
        "Good operations are never static. We review what is slowing the business down, refine it, and improve how the business runs over time.",
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
            Because operations should make business feel easier, not harder.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We do not just help with tasks. We help founders build a business
            that runs with more clarity, more consistency, and less daily
            friction.
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
                  type="button"
                  onClick={() => setActive(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition hover:bg-gray-50 sm:px-8 sm:py-7"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="rounded-2xl bg-purple-100 p-3 text-purple-700">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
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
                      <div className="border-t border-gray-100 px-6 py-7 sm:px-8 sm:py-8">
                        <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                          {item.description}
                        </p>

                        <Link
                          to="/services"
                          className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
                        >
                          Explore Services
                          <FiArrowRight />
                        </Link>
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