import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function AboutHero() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf8f5] pt-40 pb-28">

        {/* Purple Glow */}
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              ABOUT SUMMIT VALOR
            </p>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
              Better operations create better businesses.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Summit Valor exists to help founders and growing organisations
              build operational clarity through better systems, stronger
              processes, and strategic operational partnership.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                to="/contact"
                className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
              >
                Book an Assessment
              </Link>

              <Link
                to="/services"
                className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700"
              >
                Explore Services
                <FiArrowRight />
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* Our Story */}

      <section className="bg-white py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              OUR STORY
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              We built Summit Valor because growing businesses deserve
              better operations.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We saw ambitious founders spending more time fixing operational
              issues than leading their businesses.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Processes lived inside people's heads. Teams lacked structure.
              Growth created complexity instead of momentum.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Summit Valor was created to solve that problem by helping
              organisations build scalable operations that support long-term
              growth.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="overflow-hidden rounded-[36px] shadow-2xl">

              <img
                src="/about-story.jpg"
                alt="Operations Strategy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
}