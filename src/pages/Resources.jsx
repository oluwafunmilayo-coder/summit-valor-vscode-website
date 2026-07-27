import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiDownload,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";

import { featuredArticle, articles } from "../data/resourcesData";

export default function Resources() {
  const resources = [featuredArticle, ...articles];

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-24">

      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-purple-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Insights & Resources
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-900">
            Free Resources for Growing Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Download practical templates, checklists and operational guides
            designed to help founders build scalable businesses.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:shadow-2xl"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-2 text-purple-700">
                  <FiBookOpen />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                    Free Resource
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  {resource.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {resource.excerpt}
                </p>

                <a
                  href={resource.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800"
                >
                  Get Free Guide
                  <FiDownload />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-purple-700 to-violet-600 px-10 py-16 text-center text-white"
        >
          <h2 className="text-4xl font-bold">
            Need help implementing these systems?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-purple-100">
            These resources will help you get started. When you're ready to
            build stronger systems, Summit Valor can help you implement them
            inside your business.
          </p>

          <a
            href="https://form.jotform.com/261101958492055"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:shadow-xl"
          >
            Book an Assessment
            <FiArrowRight />
          </a>

        </motion.div>

      </div>

    </section>
  );
}