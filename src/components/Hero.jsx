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
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]"
          >
            Summit Valor
          </motion.p>
          <motion.h1
            custom={0.08}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#1F1F23] sm:text-5xl lg:text-6xl"
          >
            Turning Business Potential Into Practical Progress.
          </motion.h1>
          <motion.p
            custom={0.16}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            We help aspiring entrepreneurs turn ideas into structured ventures
            and support growing businesses with business strategy, stronger
            systems, operational improvement, and practical execution.
          </motion.p>
          <motion.p
            custom={0.2}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-4 max-w-xl text-base font-medium leading-7 text-gray-700"
          >
            Through consulting, our Founder Community, and the Summit Valor
            Academy, we help people build the clarity, capabilities, and
            foundations needed to move forward.
          </motion.p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
            Bold Moves. Brave Futures.
          </p>
          <motion.div
            custom={0.28}
            initial={initialState}
            animate="visible"
            variants={contentVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
            >
              Explore Our Services
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#1F1F23] transition duration-200 hover:-translate-y-0.5 hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
            >
              Start a Conversation
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
