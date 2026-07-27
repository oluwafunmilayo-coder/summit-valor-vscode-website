import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiDownload, FiBookOpen } from "react-icons/fi";
import {
  featuredArticle,
  articles,
} from "../data/resourcesData";

export default function Resources() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-28">

      {/* Purple Glow */}
      <div className="absolute right-0 top-24 h-[350px] w-[350px] rounded-full bg-purple-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-purple-700 transition-all hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

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

            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="mb-8 w-full rounded-3xl shadow-xl"
            />

            <h3 className="text-3xl font-bold text-gray-900">
              {featuredArticle.title}
            </h3>

            <p className="mt-6 max-w-2xl leading-8 text-gray-600">
              {featuredArticle.excerpt}
            </p>

            <a
              href={featuredArticle.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-purple-700 transition-all group-hover:gap-4"
            >
              Download Free Guide
              <FiDownload />
            </a>
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
              Evaluate your current operations to identify the systems you need
              to scale.
            </p>

            <ul className="mt-8 space-y-4 text-purple-100">
              <li>✓ Instant PDF download</li>
              <li>✓ 25 operational assessment questions</li>
              <li>✓ Identify growth bottlenecks</li>
              <li>✓ Actionable next steps</li>
            </ul>

            <a
              href={featuredArticle.pdf}
              download
              className="mt-10 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-purple-800 transition hover:-translate-y-1"
            >
              Download Free Guide
            </a>
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
              <img
                src={article.image}
                alt={article.title}
                className="mb-6 h-72 w-full rounded-2xl object-cover shadow-lg"
              />

              <h3 className="text-2xl font-bold text-gray-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {article.excerpt}
              </p>

              <a
                href={article.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-700 transition-all group-hover:gap-4"
              >
                Download PDF
                <FiDownload />
              </a>
            </motion.div>
          ))}

        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-purple-700 to-violet-600 p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to build systems that scale?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
            Download our free resources today, and when you're ready, let Summit Valor
            help you implement systems that create sustainable growth.
          </p>

          <a
            href="https://form.jotform.com/261101958492055"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1"
          >
            Book an Assessment
          </a>
        </div>

      </div>
    </section>
  );
}
