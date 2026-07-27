import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-40 pb-52">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-purple-300">
            OPERATIONS PARTNER
          </p>


          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Operations Built
            <br />
            for the Growth That Matters
          </h1>


          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Summit Valor partners with growing businesses to build reliable
            systems, streamline execution, and create the operational
            foundation required for sustainable growth.
          </p>


          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Book an Assessment
            </a>


            <Link
              to="/services"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-purple-700"
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