import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#14071f] py-32 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
            READY TO BUILD YOUR NEXT STAGE?
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Stop managing chaos.
            <br />
            Start building a business that runs with confidence.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-purple-100">
            Through Business Consulting, our Founder Community, and Summit
            Valor VentureLab, we help entrepreneurs turn ideas into structured
            ventures and support growing businesses with strategy, systems,
            operations, and execution.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-9 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-white px-9 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
            >
              Explore Services
            </Link>
          </div>

          {/* TRUST BAR */}
          <div className="mt-20 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">Business Consulting</h3>
              <p className="mt-3 text-purple-200">
                Strategy and practical guidance for ventures and growing
                businesses.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Founder Community</h3>
              <p className="mt-3 text-purple-200">
                Connection, shared learning, and accountability for founders.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Summit Valor VentureLab</h3>
              <p className="mt-3 text-purple-200">
                Practical business fundamentals, strategy, operations, and
                financial management for business owners.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}