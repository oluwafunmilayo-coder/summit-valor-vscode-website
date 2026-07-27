import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiBriefcase,
  FiHome,
  FiMonitor,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const industries = [
  {
    icon: <FiMonitor size={30} />,
    title: "Technology & SaaS",
    description: "Reliable operating rhythms for fast-moving teams, launches, and customer delivery.",
  },
  {
    icon: <FiActivity size={30} />,
    title: "Health & Wellness",
    description: "Clear client journeys, team coordination, and back-office systems that protect quality.",
  },
  {
    icon: <FiBriefcase size={30} />,
    title: "Professional Services",
    description: "Stronger workflows for proposals, projects, client communication, and delivery.",
  },
  {
    icon: <FiHome size={30} />,
    title: "Real Estate",
    description: "Structured lead handling, transaction coordination, and follow-through across every deal.",
  },
  {
    icon: <FiShoppingBag size={30} />,
    title: "E-commerce",
    description: "Practical systems for order flow, customer care, inventory, and repeatable growth.",
  },
  {
    icon: <FiUsers size={30} />,
    title: "Coaches & Consultants",
    description: "A dependable client experience and a business that does not rely on founder memory.",
  },
];

const outcomes = [
  "One clear way of working across your team",
  "Fewer bottlenecks in client delivery and decision-making",
  "Documented systems that make growth easier to manage",
];

export default function Industries() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden bg-[#14071f] bg-cover bg-[position:center_30%] bg-no-repeat pt-40 text-white md:pt-44 lg:min-h-[760px] lg:bg-[length:100%_auto]"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#14071f]/85" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pb-24 lg:min-h-[760px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                INDUSTRIES WE SUPPORT
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Operations that fit the way your business works.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Summit Valor brings structure to growing businesses where the
                founder, team, and customer experience all depend on better
                execution behind the scenes.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://form.jotform.com/261101958492055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                >
                  Book an Assessment
                </a>
                <Link
                  to="#industries"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                >
                  Explore Industries
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="industries" className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                BUILT FOR GROWTH
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Support designed around your operating reality.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Different industries have different pressures. Our work starts
                by understanding yours, then building the systems that make
                daily execution easier.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.article
                  key={industry.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                    {industry.icon}
                  </div>
                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 leading-8 text-gray-600">
                    {industry.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                THE COMMON THREAD
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
                Growth should not create more chaos.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Whether you are serving clients, managing projects, or building
                a team, sustainable growth depends on operations people can
                actually follow.
              </p>
            </motion.div>

            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-[#faf8f5] p-7 shadow-sm"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-lg font-semibold leading-8 text-gray-900">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1E1033] py-24 text-white sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl px-6 text-center"
          >
            <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
              START WITH CLARITY
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Ready to build operations that support your next stage of growth?
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">
              Let&apos;s identify the systems, workflows, and priorities that will
              make your business easier to lead and stronger to scale.
            </p>
            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-11 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
            >
              Book an Assessment
              <FiArrowRight />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
