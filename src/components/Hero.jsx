import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initialState = reduceMotion ? false : "hidden";

  return (
    <section className="overflow-hidden bg-[#F5F5F7] pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 sm:px-8 sm:pb-20 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-24">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]"
          >
            BUSINESS CONSULTING &amp; ENTREPRENEURIAL DEVELOPMENT
          </motion.p>
          <motion.h1
            custom={0.08}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#24212B] sm:text-5xl lg:text-6xl"
          >
            The Record Label for Businesses.
          </motion.h1>
          <motion.p
            custom={0.16}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            We help businesses build the systems, develop the people and access
            the opportunities needed for sustainable growth.
          </motion.p>
          <motion.p
            custom={0.2}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-4 max-w-xl text-base font-medium leading-7 text-gray-700"
          >
            Our work brings together consulting, learning, opportunities and
            founder connections for businesses, professionals and aspiring
            entrepreneurs.
          </motion.p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
            THE RIGHT SYSTEMS. THE RIGHT PEOPLE. THE RIGHT OPPORTUNITIES.
          </p>
          <motion.div
            custom={0.28}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#ecosystem"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
            >
              Explore Our Ecosystem
              <FiArrowRight aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#24212B] transition duration-200 hover:-translate-y-0.5 hover:border-[#7651C9] hover:text-[#7651C9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }
          }
          className="min-w-0"
        >
          <img
            src="/hero-image-home.jpg"
            alt="Business professionals reviewing reports and a tablet during a strategy discussion"
            width="1800"
            height="1200"
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-2xl object-cover sm:rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
