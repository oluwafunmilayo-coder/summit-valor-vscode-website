import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-28 sm:pt-36 sm:pb-36 lg:pt-40 lg:pb-52">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-purple-300">
            Remote Operations Support
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            We help founders run
            <br />
            a calmer, cleaner business.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
            Summit Valor builds the systems, workflows, and support behind the
            scenes so your business stops feeling messy, reactive, and hard to
            manage. We help you turn scattered operations into a business that
            feels organised, responsive, and ready to grow.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-gray-100 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <FiCheckCircle className="shrink-0 text-purple-300" />
              <span>Clearer systems and process flow</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <FiCheckCircle className="shrink-0 text-purple-300" />
              <span>Less admin and fewer dropped tasks</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <FiCheckCircle className="shrink-0 text-purple-300" />
              <span>More time to lead and scale</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
            Operations is everything that keeps the business moving: client
            onboarding, internal workflows, team coordination, documentation,
            scheduling, reporting, follow-up, and the systems that make delivery
            consistent.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
            >
              Book an Assessment
            </a>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-purple-700"
            >
              Explore Services
              <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}