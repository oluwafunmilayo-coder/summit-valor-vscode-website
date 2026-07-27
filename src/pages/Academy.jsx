import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiClipboard,
  FiMessageCircle,
  FiYoutube,
  FiZap,
} from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const communityUrl = "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";
const youtubeUrl = "https://youtube.com/@summitvalor";

const learningTracks = [
  {
    icon: <FiBriefcase size={30} />,
    title: "Virtual Assistant Mastery",
    description:
      "Practical training for becoming a reliable and highly effective Virtual Assistant.",
  },
  {
    icon: <FiMessageCircle size={30} />,
    title: "Executive Assistant Excellence",
    description:
      "Learn executive support, communication, organisation and operational excellence.",
  },
  {
    icon: <FiClipboard size={30} />,
    title: "Business Operations",
    description:
      "Master workflows, documentation, reporting, systems and operational management.",
  },
  {
    icon: <FiZap size={30} />,
    title: "Productivity & Technology",
    description:
      "Learn modern tools, automation and digital systems that improve business performance.",
  },
];

const principles = [
  "Learn by doing",
  "Real business scenarios",
  "Systems before shortcuts",
  "Professional communication",
  "Continuous improvement",
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
                COMING SOON
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Summit Academy&trade;
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                We&apos;re building a practical learning platform designed to help
                aspiring and experienced Virtual Assistants, Executive
                Assistants, Operations Professionals and business leaders
                develop the systems, skills and confidence needed to excel in
                today&apos;s global workplace.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                >
                  Join Our Community
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
                What You&apos;ll Find Inside
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Focused learning experiences that turn professional ambition
                into repeatable, real-world capability.
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
                  <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                    IN DEVELOPMENT
                  </p>
                  <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                    Something Exciting Is Coming.
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100">
                    Summit Academy is currently under development. Join our
                    community to receive updates, behind-the-scenes content,
                    free resources and early access when enrolment opens.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:pt-10">
                  <a
                    href={communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-purple-700 transition hover:bg-gray-100"
                  >
                    Join WhatsApp Community
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
              Be Among the First to Experience Summit Academy.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">
              Join our growing community while we build a learning platform
              focused on practical business operations and professional
              excellence.
            </p>
            <a
              href={communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-11 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
            >
              Join Our Community
              <FiArrowRight />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
