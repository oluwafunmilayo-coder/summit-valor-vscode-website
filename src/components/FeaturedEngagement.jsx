import { motion } from "framer-motion";
import {
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

export default function FeaturedEngagement() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}
      <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Featured Engagement
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Helping a business coach build operational clarity.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every growing business reaches a point where better systems become
            more valuable than simply working harder.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/coach-case-study.jpg"
              alt="Business Coach"
              className="rounded-[32px] shadow-2xl"
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Challenge */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <FiTarget className="text-purple-700" size={24} />
                <h3 className="text-2xl font-bold">Challenge</h3>
              </div>

              <p className="leading-8 text-gray-600">
                The founder was balancing clients, operations,
                communication and delivery with limited operational
                structure. Important processes lived in memory instead
                of documented systems.
              </p>
            </div>

            {/* Solution */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <FiTool className="text-purple-700" size={24} />
                <h3 className="text-2xl font-bold">Solution</h3>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Designed operational workflows</li>
                <li>✓ Built SOP documentation</li>
                <li>✓ Organised project management</li>
                <li>✓ Improved accountability systems</li>
                <li>✓ Created operational dashboards</li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-800 to-violet-600 p-7 text-white shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <FiTrendingUp size={24} />
                <h3 className="text-2xl font-bold">Outcome</h3>
              </div>

              <p className="leading-8 text-purple-100">
                Clearer operations.
                Better visibility.
                More confidence in execution.
                A stronger operational foundation for future growth.
              </p>
            </div>

            <button className="group flex items-center gap-3 font-semibold text-purple-700 transition-all hover:gap-5">
              View Engagement
              <FiArrowRight />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}