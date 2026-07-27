import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiGlobe,
  FiMessageCircle,
  FiMic,
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiYoutube,
} from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const guestUrl = "https://form.jotform.com/262066666908064";
const youtubeUrl = "https://youtube.com/@summitvalor";
const communityUrl = "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";

const topics = [
  { icon: <FiSettings size={28} />, title: "Business Operations" },
  { icon: <FiUsers size={28} />, title: "Leadership & Management" },
  { icon: <FiBriefcase size={28} />, title: "Entrepreneurship" },
  { icon: <FiTrendingUp size={28} />, title: "Productivity & Systems" },
  { icon: <FiGlobe size={28} />, title: "Remote Work & Global Teams" },
  { icon: <FiMic size={28} />, title: "Growth Stories & Lessons Learned" },
];

export default function UnfilteredBlueprint() {
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
              className="max-w-5xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/30 bg-purple-500/10 text-purple-200">
                <FiMic size={28} />
              </div>
              <p className="mt-7 font-semibold uppercase tracking-[0.35em] text-purple-300">
                UNFILTERED BLUEPRINT
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Real Conversations. Practical Insights. Better Business Operations.
              </h1>
              <p className="mt-8 max-w-4xl text-xl leading-9 text-purple-100">
                Unfiltered Blueprint is Summit Valor&apos;s flagship conversation
                series where founders, operators, executives and business
                leaders share honest lessons, operational strategies and real
                experiences behind building successful businesses.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={guestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                >
                  Become a Guest
                  <FiArrowRight />
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                >
                  Watch on YouTube
                  <FiYoutube />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[32px] bg-[#1E1033] p-10 text-white shadow-xl sm:p-12"
            >
              <FiMic size={34} className="text-purple-300" />
              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                THE SUMMIT VALOR SERIES
              </p>
              <p className="mt-5 text-3xl font-bold leading-tight">
                Honest insight for people doing the work of building better businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                WHY UNFILTERED BLUEPRINT EXISTS
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Conversations That Go Beyond Surface-Level Advice
              </h2>
              <p className="mt-7 text-lg leading-8 text-gray-600">
                Every successful business has lessons that rarely make it into
                books or social media posts. Unfiltered Blueprint brings
                together experienced founders, operators and business leaders
                to discuss the realities of leadership, operations, scaling and
                sustainable growth.
              </p>
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
                THE EDITORIAL AGENDA
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Topics We Explore
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Clear conversations about the operating decisions that shape a
                business over time.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <motion.article
                  key={topic.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                    {topic.icon}
                  </div>
                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {topic.title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[36px] border border-gray-200 bg-[#faf8f5] p-10 shadow-lg sm:p-14 lg:p-16"
            >
              <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                    SEASON ONE
                  </p>
                  <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                    First Episodes Coming Soon
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                    We&apos;re preparing our first season featuring conversations
                    with inspiring founders, operators and business leaders.
                    Subscribe to stay updated and be the first to watch new episodes.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:pt-8">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white transition hover:bg-purple-800"
                  >
                    Subscribe on YouTube
                    <FiYoutube />
                  </a>
                  <a
                    href={communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-purple-700 px-7 py-4 font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
                  >
                    Join Our Community
                    <FiMessageCircle />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#1E1033] py-24 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur sm:p-14 lg:p-16"
            >
              <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                    BECOME A GUEST
                  </p>
                  <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                    Share Your Story.
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100">
                    Are you a founder, executive, operator or industry expert
                    with practical insights that can help others build better
                    businesses? We&apos;d love to feature you on Unfiltered Blueprint.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:pt-8">
                  <a
                    href={guestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-purple-700 transition hover:bg-gray-100"
                  >
                    Apply to Be a Guest
                    <FiArrowRight />
                  </a>
                  <a
                    href={communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
                  >
                    Join Our Community
                    <FiMessageCircle />
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
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Join the Conversation.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">
              Become part of a growing community passionate about business
              operations, leadership and sustainable growth. Follow our
              journey, connect with other professionals and never miss a conversation.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                Subscribe on YouTube
                <FiYoutube />
              </a>
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
              >
                Join Our Community
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
