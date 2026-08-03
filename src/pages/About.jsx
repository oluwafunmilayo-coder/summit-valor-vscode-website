import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiGrid,
  FiBookOpen,
  FiMessageSquare,
} from "react-icons/fi";

const img = {
  hero: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
  planning: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  founder: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  workspace: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  cta: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
};

export default function About() {
  const values = [
    {
      icon: <FiCompass size={22} />,
      title: "Clarity",
      text: "We turn complexity into clear systems, priorities, and operating rhythm.",
    },
    {
      icon: <FiShield size={22} />,
      title: "Integrity",
      text: "We work with honesty, discretion, and a strong sense of ownership.",
    },
    {
      icon: <FiUsers size={22} />,
      title: "Partnership",
      text: "We act as an extension of leadership, not a detached vendor.",
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "Continuous Improvement",
      text: "We build structures that evolve as your business grows.",
    },
  ];

  const ecosystem = [
    {
      icon: <FiCompass size={20} />,
      title: "Diagnose",
      text: "We study how the business actually runs today, not how the org chart says it should.",
    },
    {
      icon: <FiGrid size={20} />,
      title: "Design",
      text: "We architect the systems, workflows, and documentation the business needs to run without you in every loop.",
    },
    {
      icon: <FiUsers size={20} />,
      title: "Deploy",
      text: "Our operators sit inside the business, embedding the new rhythm alongside your team.",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Develop",
      text: "Summit VA Academy trains the operators who carry your systems forward.",
    },
    {
      icon: <FiMessageSquare size={20} />,
      title: "Discuss",
      text: "The Inner Circle keeps leadership connected to what's working across the ecosystem.",
    },
  ];

  const reasons = [
    {
      title: "Strategic operational partnership",
      text: "We support the business at the level of systems, structure, and execution — not task lists.",
    },
    {
      title: "Systems-first thinking",
      text: "We solve root causes rather than patching symptoms with another hire.",
    },
    {
      title: "Practical implementation",
      text: "We do not stop at strategy decks. We stay until the work is actually operating.",
    },
    {
      title: "Founder-focused execution",
      text: "We help leaders reclaim time, reduce operational drag, and scale with steadier footing.",
    },
  ];

  const audiences = [
    "Founders",
    "Startups",
    "Small & Medium Businesses",
    "Professional Service Firms",
    "Agencies",
    "Consultants",
    "Coaches",
    "NGOs",
    "Healthcare Organizations",
    "Real Estate Businesses",
    "Creative Businesses",
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] text-[#222222]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-0 sm:pt-36 lg:pt-40">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(75,29,122,0.14),_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-700">
                About Summit Valor
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-7xl">
                We built the operations partner we wished existed.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
                Summit Valor started with a simple observation: founders don't fail from lack of ambition.
                They stall because the business behind the business — the systems, the follow-through,
                the operating rhythm — was never built. We exist to build it.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700"
                >
                  Explore Our Services
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto mt-16 max-w-7xl px-6 lg:px-8"
          >
            <div className="overflow-hidden rounded-[36px] border border-gray-200 shadow-sm">
              <img
                src={img.hero}
                alt="Operations strategy session in a modern office"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </motion.div>
        </section>

        {/* WHY SUMMIT VALOR EXISTS */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                Why Summit Valor Exists
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                Most businesses don't have a growth problem. They have an operations problem.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  We watched talented founders build real demand, real revenue, real teams — and still
                  spend their days buried in the parts of the business that should have run without them.
                  Not because they lacked skill, but because no one had ever built the operating layer
                  underneath the vision.
                </p>
                <p>
                  Summit Valor was founded to close that gap. We are not a task-based VA service and we
                  are not a traditional consultancy that hands over a strategy deck and leaves. We embed,
                  we build, and we stay through implementation — because a system that isn't running is
                  just a document.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[36px] border border-gray-200 bg-white p-2 shadow-sm"
            >
              <img
                src={img.workspace}
                alt="Founder reviewing operational dashboards"
                className="h-[340px] w-full rounded-[28px] object-cover sm:h-[400px]"
              />
            </motion.div>
          </div>
        </section>

        {/* OPERATIONS PLANNING — alternating layout */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 rounded-[36px] border border-gray-200 bg-white p-2 shadow-sm lg:order-1"
            >
              <img
                src={img.planning}
                alt="Operations planning session with process mapping"
                className="h-[340px] w-full rounded-[28px] object-cover sm:h-[400px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                Our Philosophy
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                Businesses don't scale because of hustle. They scale because of systems.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every engagement starts on the ground — mapping how decisions actually move through the
                business, where handoffs break, and what leadership spends its attention on that it
                shouldn't have to. From there, we design the operating model that replaces chaos with
                a rhythm the whole team can trust.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Diagnose the real bottlenecks, not the symptoms",
                  "Design workflows built around how your team actually works",
                  "Stay through implementation until the system is running on its own",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-purple-700" size={18} />
                    <span className="text-base leading-7 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FOUNDER COLLABORATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                How We Work With Founders
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                An extension of leadership, not a vendor on the sidelines.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We sit close to the decisions that matter — in the weekly rhythm, in the planning
                conversations, in the moments where a business either drifts or moves with intention.
                Our operators are trained to think like owners, so the guidance we give holds up under
                real pressure, not just in a proposal.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.slice(0, 2).map((reason) => (
                  <div key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{reason.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[36px] border border-gray-200 bg-white p-2 shadow-sm"
            >
              <img
                src={img.founder}
                alt="Founder and operations partner collaborating"
                className="h-[340px] w-full rounded-[28px] object-cover sm:h-[400px]"
              />
            </motion.div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-sm sm:p-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">Mission</p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-gray-900 sm:text-3xl">
                To help ambitious businesses build stronger operations that create capacity for
                sustainable growth.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[36px] border border-purple-200 bg-gradient-to-br from-purple-700 to-[#2f0f56] p-10 text-white shadow-sm sm:p-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200">Vision</p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
                To become Africa's most trusted Business Operations Partner for founders and growing
                businesses.
              </h3>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">Core Values</p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">The standards behind our work.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUMMIT VALOR ECOSYSTEM DIAGRAM */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[40px] border border-gray-200 bg-white p-8 shadow-sm sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                The Summit Valor Ecosystem
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">
                One partner, five connected disciplines.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Operations work doesn't live in a single engagement. It moves through diagnosis,
                design, deployment, the people who carry it forward, and the ongoing conversation
                that keeps leadership aligned.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="hidden lg:block absolute left-0 right-0 top-[60px] h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
              <div className="grid gap-6 lg:grid-cols-5">
                {ecosystem.map((node, index) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-200 bg-purple-50 text-purple-700 shadow-sm">
                      {node.icon}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{node.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{node.text}</p>
                    {index < ecosystem.length - 1 && (
                      <div className="mt-4 hidden h-px w-full bg-gray-200 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE US */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[36px] border border-gray-200 bg-[#f4efe9] p-10 shadow-sm sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                Why businesses choose us
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-gray-900 sm:text-4xl">
                A premium partner for businesses that need traction without the chaos.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Summit Valor is built for companies that need more than help with tasks. They need
                better systems, stronger execution, and an operational partner who can move with the
                business.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">{reason.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-sm sm:p-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">Who We Serve</p>
              <h2 className="mt-5 text-3xl font-semibold text-gray-900 sm:text-4xl">
                Built for businesses that are growing, evolving, and ready for stronger operations.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We partner with founders and teams who want more structure, better execution, and
                less operational drag as they grow.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-purple-700" size={18} />
                    <p className="font-semibold text-gray-900">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXECUTIVE CTA BANNER */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] shadow-xl"
          >
            <img
              src={img.cta}
              alt="Executive leadership planning session"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A1047]/95 via-[#2A1047]/85 to-purple-700/80" />

            <div className="relative flex flex-col gap-8 p-10 text-white sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200">
                  Ready to build better business operations?
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Whether you're strengthening existing operations or preparing for your next stage of
                  growth, Summit Valor is ready to become your trusted operational partner.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}