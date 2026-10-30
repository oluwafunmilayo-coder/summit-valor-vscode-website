import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import industries from "../data/industries";

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

        <section id="industries" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                INDUSTRIES WE SUPPORT
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Practical operations for different business contexts.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our approach adapts to the workflows, customers, and
                operational needs of each organisation.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="border border-gray-200 bg-[#faf8f5] p-7"
                >
                  <Icon
                    aria-hidden="true"
                    size={30}
                    className="text-purple-700"
                  />
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="font-semibold uppercase tracking-[0.25em] text-purple-700">
                  WHAT STRONGER OPERATIONS SUPPORT
                </p>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  More clarity in the work behind the business.
                </h2>
              </div>
              <ul className="grid gap-4">
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 border-b border-gray-200 pb-4 text-lg leading-7 text-gray-700"
                  >
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-purple-700"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
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