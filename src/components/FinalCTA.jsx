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
            READY TO BUILD BETTER OPERATIONS?
          </p>
          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Stop managing chaos.
            <br />
            Start building a business that runs with confidence.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-purple-100">
            Whether you're building operational systems for the first time or
            improving the ones you already have, Summit Valor helps founders
            create organised, scalable and efficient businesses.
          </p>
          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="https://form.typeform.com/to/UZtWH813"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-9 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Book an Assessment
            </a>
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
              <h3 className="text-3xl font-bold">Business Partner</h3>
              <p className="mt-3 text-purple-200">
                Not just another virtual assistant agency.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">System-Driven</h3>
              <p className="mt-3 text-purple-200">
                Processes, documentation and accountability that scale.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Founder Freedom</h3>
              <p className="mt-3 text-purple-200">
                Helping leaders focus on growth instead of daily operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
