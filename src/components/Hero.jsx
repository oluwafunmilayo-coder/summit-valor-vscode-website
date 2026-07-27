import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-[position:center_35%] bg-no-repeat lg:bg-[length:100%_auto] lg:bg-[position:center_20%]"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#14071f]/75" />

      {/* Purple Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-28 pt-28 md:pb-32 md:pt-32 lg:pb-32 lg:pt-40">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200"
          >
            BUSINESS OPERATIONS PARTNER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Build Better
            <br />
            Business Operations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-10 max-w-3xl text-xl leading-9 text-gray-200"
          >
            Summit Valor partners with founders and growing businesses to
            build organised systems, streamline execution, and create the
            operational foundation required for sustainable growth.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-col gap-5 sm:flex-row"
          >
            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-2xl"
            >
              Book an Assessment
            </a>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-purple-700"
            >
              Explore Services
              <FiArrowRight />
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-24 grid gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur lg:grid-cols-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-white">50+</h2>
              <p className="mt-2 text-gray-300">Businesses Supported</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">100+</h2>
              <p className="mt-2 text-gray-300">Processes Documented</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">20+</h2>
              <p className="mt-2 text-gray-300">Operational Systems Built</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">95%</h2>
              <p className="mt-2 text-gray-300">Client Satisfaction Goal</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
