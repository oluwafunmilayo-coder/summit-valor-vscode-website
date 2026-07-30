import { motion } from "framer-motion";
import {
  FiGlobe,
  FiUsers,
  FiCalendar,
  FiBook,
  FiTrendingUp,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    icon: <FiGlobe size={28} />,
    title: "Global Network",
    description:
      "Connect with founders across Nigeria, Canada, the US, the UK and beyond. Build relationships that open doors across borders.",
  },
  {
    icon: <FiCalendar size={28} />,
    title: "Events & Conferences",
    description:
      "Attend local events in your city and plan international conferences together as a community. Members on the ground help with logistics, accommodation and trip planning.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Investor & Brand Access",
    description:
      "Get connected to investors, legal professionals, grants and brand partnerships through the community network.",
  },
  {
    icon: <FiBook size={28} />,
    title: "Resources & Templates",
    description:
      "Access a growing library of founder resources — templates, proposals, SOPs, toolkits and more to help you build better.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Grants & Opportunities",
    description:
      "Stay informed about funding opportunities, grants and partnerships curated specifically for community members.",
  },
  {
    icon: <FiMessageCircle size={28} />,
    title: "Community Brainstorms",
    description:
      "Got a challenge? Bring it to the community. Founders brainstorm together, share ideas and help each other grow.",
  },
];

const howToJoin = [
  {
    step: "01",
    title: "Apply on the Website",
    description: "Fill out a short form and tell us about your business and goals.",
  },
  {
    step: "02",
    title: "Join the WhatsApp or Discord",
    description:
      "Once accepted, you'll get access to our WhatsApp community and our growing Discord server.",
  },
  {
    step: "03",
    title: "Start Connecting",
    description:
      "Attend events, join brainstorms, access resources and build relationships with founders worldwide.",
  },
];

export default function FounderCommunity() {
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
                SUMMIT VALOR FOUNDER COMMUNITY
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                A Global Network Built for Founders.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Connect with ambitious founders across the world. Attend events
                in your city, plan international conferences together, access
                resources, meet investors and grow alongside people who
                understand what it takes to build a business.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://form.typeform.com/to/UZtWH813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Join the Community
                  <FiArrowRight />
                </a>
                <a
                  href="https://chat.whatsapp.com/D0fLACrLpBC7d41NeOlTGW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                >
                  Join WhatsApp
                  <FiMessageCircle />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                WHO IT'S FOR
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Built for Founders at Every Stage.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Whether you're just starting out or scaling an established
                business, the Summit Valor Founder Community is for people who
                are serious about building something meaningful. Founders,
                entrepreneurs, business owners and operators from any industry,
                anywhere in the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-16 max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                WHAT YOU GET
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Everything a Founder Needs to Grow.
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl"
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

        {/* How to Join */}
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
                HOW TO JOIN
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Three Simple Steps.
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {howToJoin.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8"
                >
                  <span className="text-5xl font-bold text-purple-100">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
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

        {/* CTA */}
        <section className="bg-[#1E1033] py-24 text-white sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl px-6 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ready to Join a Community of Founders?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-purple-100">
              Network globally, grow locally and build something extraordinary
              alongside founders who get it.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://form.typeform.com/to/UZtWH813"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Join the Community
                <FiArrowRight />
              </a>
              <a
                href="https://chat.whatsapp.com/D0fLACrLpBC7d41NeOlTGW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
              >
                Join WhatsApp
                <FiMessageCircle />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}