import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiLayers,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    id: 1,
    tab: "Assessment",
    icon: <FiSearch size={26} />,
    title: "Understand what is holding your operations back.",
    description:
      "We begin by understanding your business, current workflows, systems, communication, and operational challenges. Every recommendation starts with clarity.",
    button: "Start Assessment",
  },
  {
    id: 2,
    tab: "Blueprint",
    icon: <FiLayers size={26} />,
    title: "Design the operational structure your business needs.",
    description:
      "Using our Summit Operations Blueprint™, we identify priorities, improve systems, and create a practical roadmap that supports sustainable growth.",
    button: "Explore the Blueprint",
  },
  {
    id: 3,
    tab: "Partnership",
    icon: <FiTrendingUp size={26} />,
    title: "Implement, optimise and continue improving.",
    description:
      "For businesses that need ongoing support, we become your operations partner, helping you execute, refine, and scale with confidence.",
    button: "Become a Partner",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-28">

      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            How It Works
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            A structured path to better operations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every engagement follows a clear framework designed to uncover
            opportunities, build stronger systems and support long-term growth.
          </p>

        </div>

        {/* Tabs */}

        <div className="mx-auto mb-12 flex max-w-3xl rounded-2xl bg-white p-2 shadow-lg">

          {steps.map((step, index) => (

            <button
              key={step.id}
              onClick={() => setActive(index)}
              className={`flex-1 rounded-xl px-6 py-4 font-semibold transition-all ${
                active === index
                  ? "bg-purple-700 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {step.tab}
            </button>

          ))}

        </div>

        {/* Content */}

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid items-center gap-14 lg:grid-cols-2"
          >

            <div>

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-700 text-white">
                {steps[active].icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-900">
                {steps[active].title}
              </h3>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                {steps[active].description}
              </p>

              <button className="mt-10 flex items-center gap-3 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1">
                {steps[active].button}
                <FiArrowRight />
              </button>

            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-purple-800 to-violet-600 p-12 text-white shadow-2xl">

              <p className="text-sm uppercase tracking-[0.25em] text-purple-200">
                Step {steps[active].id}
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                {steps[active].tab}
              </h3>

              <p className="mt-8 leading-8 text-purple-100">
                Our approach is collaborative and strategic. Rather than
                offering one-size-fits-all support, we tailor every engagement
                to your business goals, operational maturity, and growth stage.
              </p>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}