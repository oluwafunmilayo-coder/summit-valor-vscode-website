import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Blueprint() {
  return (
    <section className="bg-[#1E1033] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
              THE SUMMIT OPERATIONS BLUEPRINT&trade;
            </p>
            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Before you hire more people, build better operations.
            </h2>
            <p className="mt-8 text-lg leading-8 text-purple-100">
              The Summit Operations Blueprint&trade; is a consulting-grade
              operational assessment that identifies bottlenecks, strengthens
              execution and gives you a practical roadmap for scaling your business.
            </p>
            <div className="mt-12 space-y-5">
              {[
                "Executive Operations Assessment",
                "Workflow & Process Review",
                "Operational Bottleneck Analysis",
                "30-Day Action Plan",
                "90-Day Growth Roadmap",
                "Technology Recommendations",
                "Priority Improvement Plan",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <FiCheckCircle className="text-purple-300" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] bg-white p-12 text-gray-900 shadow-2xl"
          >
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">
              Featured Offer
            </span>
            <h3 className="mt-8 text-4xl font-bold">
              Understand your business before investing in more tools or people.
            </h3>
            <p className="mt-6 leading-8 text-gray-600">
              Every recommendation is based on your business, your workflows and
              your operational goals&mdash;not generic templates.
            </p>
            <div className="mt-10 rounded-2xl bg-[#faf8f5] p-8">
              <h4 className="text-xl font-bold">Deliverables</h4>
              <ul className="mt-5 space-y-3 text-gray-600">
                <li>&#10003; Executive Summary</li>
                <li>&#10003; Operations Health Review</li>
                <li>&#10003; Risk Assessment</li>
                <li>&#10003; Growth Opportunities</li>
                <li>&#10003; Implementation Roadmap</li>
              </ul>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="/resources/Summit_Operations_Blueprint_Sample_Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-purple-700 px-8 py-4 font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
              >
                View Sample Report
                <FiDownload />
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:bg-purple-800"
              >
                Contact Us
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}