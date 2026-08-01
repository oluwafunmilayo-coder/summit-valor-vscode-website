import Footer from "../components/Footer";
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
  {
    icon: <FiUsers size={30} />,
    title: "Nonprofits & Social Impact",
    description: "Helping nonprofits and social enterprises improve operational efficiency and maximize impact.",
  },
  {
    icon: <FiUsers size={30} />,
    title: "Education & Training",
    description: "Helping educational institutions and training providers build efficient operations and improve learning outcomes.",
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
                {/* Replace external form link with React Router Link to /contact */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                >
                  Book an Assessment
                </Link>
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

        {/* ... other sections ... */}

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
            {/* Replace external form link with React Router Link to /contact */}
            <Link
              to="/contact"
              className="mt-11 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
            >
              Book an Assessment
              <FiArrowRight />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}