import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiCalendar } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { events } from "../data/eventsData";

export default function Events() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#14071f] pt-40 pb-28 text-white">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                EVENTS HUB
              </p>

              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Summit Valor Events
              </h1>

              <p className="mt-6 text-lg font-semibold text-purple-200">
                Learn. Connect. Build. Grow.
              </p>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Explore upcoming training programs, founder events, business
                summits, workshops and opportunities from Summit Valor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:border-purple-200 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-purple-700">
                            {event.category}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                        {event.category}
                      </span>
                      {event.status && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          {event.status}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-gray-900">
                      {event.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {event.shortDescription}
                    </p>

                    {/* Date & Location */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">
                      <div className="flex items-start gap-3">
                        <FiCalendar className="mt-1 flex-shrink-0 text-purple-700" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-gray-500">
                            Date
                          </p>
                          <p className="mt-1 font-medium text-gray-900">
                            {event.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FiMapPin className="mt-1 flex-shrink-0 text-purple-700" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-gray-500">
                            Location
                          </p>
                          <p className="mt-1 font-medium text-gray-900">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      {event.hasDetailPage ? (
                        <Link
                          to={event.ctaUrl}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800 hover:-translate-y-1"
                        >
                          {event.ctaText}
                          <FiArrowRight />
                        </Link>
                      ) : (
                        <a
                          href={event.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800 hover:-translate-y-1"
                        >
                          {event.ctaText}
                          <FiArrowRight />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="bg-[#f8f6ff] py-24 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl px-6 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Want to Connect with Other Founders?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Join the Summit Valor Founder Community for exclusive events,
              networking opportunities, resources, and access to a global
              network of entrepreneurs building meaningful businesses.
            </p>

            <div className="mt-11">
              <Link
                to="/community"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Join Founder Community
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
