import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiArrowRight,
  FiClipboard,
  FiLayers,
  FiCpu,
  FiTarget,
} from "react-icons/fi";

export default function Blueprint() {
  const deliverables = [
    "Executive Summary",
    "Operational Health Review",
    "Leadership Assessment",
    "Systems & Workflow Audit",
    "Technology & Automation Recommendations",
    "Priority Recommendations",
    "30-Day Action Plan",
    "90-Day Roadmap",
    "Implementation Roadmap",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2A0B57] via-[#4C1D95] to-[#6D28D9] py-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-400/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-200">
              Signature Assessment
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              The Summit
              <br />
              Operations
              <br />
              Blueprint™
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-purple-100">
              Go beyond a discovery call.
              Gain a structured operational assessment, executive-ready
              recommendations, and a practical roadmap for sustainable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://form.jotform.com/261101958492055"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-800 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book Your Blueprint
              </a>

              <button className="flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">
                View Sample Report
                <FiArrowRight />
              </button>

            </div>

            {/* Trust Points */}
            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiClipboard size={28} className="mb-3 text-purple-200" />
                <p className="font-semibold">Executive Ready</p>
                <span className="text-sm text-purple-200">
                  Clear recommendations you can act on.
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiLayers size={28} className="mb-3 text-purple-200" />
                <p className="font-semibold">Tailored</p>
                <span className="text-sm text-purple-200">
                  Built around your business and stage of growth.
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiCpu size={28} className="mb-3 text-purple-200" />
                <p className="font-semibold">Technology Focused</p>
                <span className="text-sm text-purple-200">
                  Practical automation and systems guidance.
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiTarget size={28} className="mb-3 text-purple-200" />
                <p className="font-semibold">Action Plan</p>
                <span className="text-sm text-purple-200">
                  Know exactly what to do next.
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] border border-white/20 bg-white/10 p-10 backdrop-blur-xl"
          >

            <p className="mb-8 text-2xl font-bold">
              What You'll Receive
            </p>

            <div className="space-y-5">

              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <FiCheckCircle
                    className="text-green-300"
                    size={22}
                  />

                  <span className="text-lg">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-200">
                Designed For
              </p>

              <p className="mt-4 leading-8 text-purple-100">
                Founders, CEOs, business owners and growing teams that want
                greater operational clarity before investing in additional
                people, tools or processes.
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}