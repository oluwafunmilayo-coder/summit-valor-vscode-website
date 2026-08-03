import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import Blog from "./Blog";

// Categories data
const categories = [
  {
    title: "Operations Guides",
    desc: "Practical guides to help businesses build stronger systems, workflows and processes.",
    status: "Coming Soon",
  },
  {
    title: "Founder Guides",
    desc: "Resources designed to help founders reduce operational stress and build scalable businesses.",
    status: "Coming Soon",
  },
  {
    title: "Templates",
    desc: "SOPs, checklists and operational frameworks you can use to improve your business.",
    status: "Coming Soon",
  },
  {
    title: "Case Studies",
    desc: "Real examples of operational improvements and business transformations.",
    status: "Coming Soon",
  },
];

// Blog is now extracted to src/pages/Blog.jsx

export default function Resources() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#faf8f5] pt-24 pb-20">
        <div className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
              RESOURCE HUB
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
              Build Better Business
              <br />
              Operations.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Practical operational playbooks, guides, templates and founder
              resources designed to help growing businesses build scalable
              systems, improve execution and create freedom for leadership.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[
              ["50+", "Businesses Supported"],
              ["100+", "Processes Documented"],
              ["20+", "Operational Systems Built"],
              ["Weekly", "New Operational Insights"],
            ].map(([number, text]) => (
              <div
                key={text}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <h2 className="text-5xl font-bold text-purple-700">{number}</h2>
                <p className="mt-3 text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#2A1047] to-purple-700 text-white">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
                  Featured Guide
                </span>
                <h2 className="mt-8 text-5xl font-bold leading-tight">
                  Summit Operations
                  <br />
                  Blueprint&trade;
                </h2>
                <p className="mt-8 text-lg leading-8 text-purple-100">
                  See how Summit Valor evaluates business operations, identifies
                  bottlenecks, and develops a strategic roadmap for scalable growth.
                </p>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                  <a
                    href="/resources/Summit_Operations_Blueprint_Sample_Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105"
                  >
                    Review Sample Report
                    <FiDownload />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                  >
                    Book a Blueprint
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 p-12 backdrop-blur lg:p-16">
                <p className="font-semibold uppercase tracking-[0.3em] text-purple-200">
                  INSIDE THE REPORT
                </p>
                <ul className="mt-8 space-y-5 text-lg">
                  <li>&#10003; Executive Summary</li>
                  <li>&#10003; Operational Health Assessment</li>
                  <li>&#10003; Workflow Bottlenecks</li>
                  <li>&#10003; Systems Evaluation</li>
                  <li>&#10003; Operational Risks</li>
                  <li>&#10003; Technology Recommendations</li>
                  <li>&#10003; 30-Day Action Plan</li>
                  <li>&#10003; Growth Roadmap</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Explore by Category */}
          <div className="mt-24">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
                Explore by Category
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                Resources built for every stage of growth.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-5 leading-8 text-gray-600">{item.desc}</p>
                  <span className="mt-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Blog section */}
          <Blog />
        </div>
      </section>
      <Footer />
    </>
  );
}