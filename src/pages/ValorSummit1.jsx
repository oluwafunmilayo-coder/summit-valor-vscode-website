import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ValorSummit1() {
  const whyAttend = [
    {
      icon: <FiCheckCircle size={24} />,
      title: "Learn Business Strategies",
      description:
        "Learn how to build a practical business plan and understand business growth strategies.",
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Funding Preparation",
      description:
        "Learn how to prepare your business for funding opportunities and investor conversations.",
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Network & Build Relationships",
      description:
        "Network with founders, investors and business leaders. Discover partnerships and business opportunities.",
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Practical Insights",
      description:
        "Gain practical insights and strategies from experienced speakers and successful founders.",
    },
  ];

  const whoAttends = [
    "Aspiring entrepreneurs",
    "Early-stage founders",
    "Small business owners",
    "Startup founders",
    "Young professionals building businesses",
    "Entrepreneurs seeking funding, partnerships and networking opportunities",
  ];

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
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/30 bg-purple-500/10 text-purple-200">
                <FiUsers size={28} />
              </div>

              <p className="mt-7 font-semibold uppercase tracking-[0.35em] text-purple-300">
                BUSINESS SUMMIT
              </p>

              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Valor Summit 1.0
              </h1>

              <p className="mt-6 text-2xl font-semibold text-purple-200">
                Where Courage Meets Capital
              </p>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                A founder-focused business summit bringing together ambitious
                entrepreneurs, business leaders, investors and ecosystem players
                for practical learning, strategic conversations, meaningful
                networking and opportunities.
              </p>

              {/* Event Details */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-purple-300/30 bg-purple-500/10 p-5">
                  <p className="text-xs font-semibold uppercase text-purple-200">
                    Date
                  </p>
                  <p className="mt-2 text-lg font-bold">October 31, 2026</p>
                </div>
                <div className="rounded-xl border border-purple-300/30 bg-purple-500/10 p-5">
                  <p className="text-xs font-semibold uppercase text-purple-200">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-bold">Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Attend */}
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-16 max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                WHY ATTEND
              </p>

              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                What You'll Get From Valor Summit 1.0
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Gain practical knowledge, make meaningful connections, and
                discover new opportunities to accelerate your business growth.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {whyAttend.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="bg-[#f8f6ff] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                ATTENDEES
              </p>

              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Who Should Attend
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Valor Summit 1.0 is designed for ambitious founders and business
                builders at every stage of their journey.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {whoAttends.map((attendee, index) => (
                  <motion.div
                    key={attendee}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 rounded-xl bg-white p-5"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <FiCheckCircle className="text-purple-700" size={20} />
                    </div>
                    <p className="font-medium text-gray-900">{attendee}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#14071f] py-24 text-white sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl px-6 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ready to Connect and Grow?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-purple-100">
              Join us at Valor Summit 1.0 for practical insights, meaningful
              connections, and opportunities to take your business to the next
              level.
            </p>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <div className="inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white">
                <span>Registration Coming Soon</span>
              </div>
              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
              >
                Back to Events
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
