import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-700 to-violet-600 py-32 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[160px]" />


      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-200">
            Ready to Build Better Operations?
          </p>


          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Stop carrying your business
            <br />
            operations alone.
          </h2>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-purple-100">
            Build the systems, processes, and operational structure your
            business needs to grow with clarity and confidence.
          </p>


          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-800 transition hover:-translate-y-1 hover:shadow-xl">
              Start Your Assessment
            </button>


            <button className="flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">
              Explore Services
              <FiArrowRight />
            </button>

          </div>


        </motion.div>

      </div>

    </section>
  );
}