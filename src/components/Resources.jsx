import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiDownload,
} from "react-icons/fi";

export default function Resources() {
  const articles = [
    {
      title: "5 Signs Your Business Needs an Operations Partner",
      description:
        "Learn the warning signs that indicate your operations are slowing growth.",
    },
    {
      title: "Systems Before Scaling",
      description:
        "Why sustainable growth starts with better systems, not more people.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-28">

      {/* Purple Glow */}
      <div className="absolute right-0 top-24 h-[350px] w-[350px] rounded-full bg-purple-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Insights & Resources
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Practical insights for growing businesses.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore operational strategies, systems thinking, and practical
            resources designed to help founders build businesses that scale
            with confidence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-2 rounded-[32px] bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 text-purple-700">
              <FiBookOpen />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Featured Insight
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              The Hidden Cost of Founder Dependency
            </h3>

            <p className="mt-6 max-w-2xl leading-8 text-gray-600">
              Many businesses don't struggle because of a lack of ambition.
              They struggle because every important decision, process and task
              depends on one person. Discover how operational systems create
              freedom, consistency and scalable growth.
            </p>

            <button className="mt-10 flex items-center gap-2 font-semibold text-purple-700 transition-all group-hover:gap-4">
              Read Article
              <FiArrowRight />
            </button>
          </motion.div>

          {/* Free Resource */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] bg-gradient-to-br from-purple-700 to-violet-600 p-8 text-white shadow-xl"
          >
            <FiDownload size={34} />

            <p className="mt-8 text-sm uppercase tracking-widest text-purple-200">
              Free Resource
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Operations Readiness Checklist
            </h3>

            <p className="mt-6 leading-8 text-purple-100">
              Evaluate your current operations with a simple checklist designed
              for founders preparing to scale.
            </p>

            <button className="mt-10 rounded-xl bg-white px-6 py-3 font-semibold text-purple-800 transition hover:-translate-y-1">
              Download Free
            </button>
          </motion.div>

        </div>

        {/* Lower Articles */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group rounded-[28px] bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {article.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-purple-700 transition-all group-hover:gap-4">
                Read More
                <FiArrowRight />
              </button>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="rounded-xl border border-purple-700 px-8 py-4 font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white">
            Explore the Resource Library
          </button>
        </motion.div>

      </div>
    </section>
  );
}