import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiClipboard,
  FiMessageCircle,
  FiUsers,
  FiYoutube,
  FiZap,
} from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const founderWaitlistUrl = "https://tally.so/r/KpY6ak";
const youtubeUrl = "https://youtube.com/@summitvalor";

const learningTracks = [
  {
    icon: <FiBriefcase size={30} />,
    title: "Business Development",
    description:
      "Explore practical ways to clarify your business direction, customers, offer, and next steps for sustainable growth.",
  },
  {
    icon: <FiMessageCircle size={30} />,
    title: "Business Management",
    description:
      "Build the management knowledge and decision-making habits needed to lead a business day to day.",
  },
  {
    icon: <FiClipboard size={30} />,
    title: "Financial Literacy",
    description:
      "Strengthen your understanding of business finances, cash flow, budgeting, and informed financial decisions.",
  },
  {
    icon: <FiZap size={30} />,
    title: "Operations & Systems",
    description:
      "Understand workflows, documentation, and operating systems that help a business run more consistently.",
  },
  {
    icon: <FiBookOpen size={30} />,
    title: "Leadership",
    description:
      "Develop the leadership and people-management capabilities required as your business and team grow.",
  },
];

const principles = [
  "Start with real business challenges",
  "Use practical, relevant learning",
  "Build systems before adding complexity",
  "Apply ideas and learn from results",
  "Improve continuously as the business grows",
];

export default function Academy() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden bg-[#14071f] bg-cover bg-[position:center_30%] bg-no-repeat pt-40 text-white md:pt-44 lg:bg-[length:100%_auto]"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#14071f]/85" />
          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 pb-28 lg:min-h-[760px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                PRACTICAL BUSINESS LEARNING
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Summit Valor Academy
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Summit Valor Academy is being shaped for business owners who
                want to develop their capabilities, strengthen their systems,
                and grow with greater confidence.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={founderWaitlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                >
                  Join the Founder Community Waitlist
                  <FiArrowRight />
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                >
                  Visit Our YouTube
                  <FiYoutube />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                PRACTICAL LEARNING
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Learning Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Practical learning to help business owners make better
                decisions, improve operations, and build the capabilities
                their businesses need.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {learningTracks.map((track, index) => (
                <motion.article
                  key={track.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                    {track.icon}
                  </div>
                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {track.title}
                  </h3>
                  <p className="mt-4 leading-8 text-gray-600">
                    {track.description}
                  </p>
                </motion.article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-gray-500">
              These are proposed learning areas, not confirmed or currently
              available programmes. Programme details will be shared when
              confirmed.
            </p>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 border-l-2 border-purple-600 bg-[#faf8f5] p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-semibold uppercase tracking-[0.2em] text-purple-700">
                  PEOPLE &amp; STAFFING SUPPORT
                </p>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Need the right people for your business?
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                  Academy learning is focused on business owners. If your
                  business also needs additional capacity, Summit Valor can
                  help identify people whose skills fit the roles you need.
                  Hiring decisions remain with your business, and a suitable
                  match is not guaranteed.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#211735] px-6 py-4 font-semibold text-white transition hover:bg-purple-800"
              >
                Discuss staffing needs
                <FiUsers />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                HOW WE TEACH
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Our Learning Philosophy
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A useful education should prepare you for the work, not just the
                next lesson.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-6 shadow-sm transition hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-bold leading-7 text-gray-900">
                    {principle}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[36px] bg-[#1E1033] p-10 text-white shadow-2xl sm:p-14 lg:p-16"
            >
              <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                    Build the Capabilities Your Business Needs.
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100">
                    Join the Founder Community waitlist for updates on
                    practical business learning and founder connections.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:pt-10">
                  <a
                    href={founderWaitlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-purple-700 transition hover:bg-gray-100"
                  >
                    Join the Founder Community Waitlist
                    <FiMessageCircle />
                  </a>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                  >
                    Subscribe on YouTube
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#14071f] py-24 text-white sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl px-6 text-center"
          >
            <FiBookOpen className="mx-auto text-purple-300" size={34} />
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Build Your Business With Summit Valor.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">
              Connect with fellow founders and hear about practical learning
              and business development opportunities as they become available.
            </p>
            <a
              href={founderWaitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-11 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
            >
              Join the Founder Community Waitlist
              <FiArrowRight />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}