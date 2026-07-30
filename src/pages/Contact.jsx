import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactActions = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    label: "Book an Assessment",
    description: "Schedule a free strategy session with our team",
    cta: "Book Now",
    href: "https://form.jotform.com/261101958492055",
    accent: "bg-purple-600 hover:bg-purple-700",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    description: "Drop us a line and we will respond within 24 hours",
    cta: "hello@summitvalor.com.ng",
    href: "mailto:hello@summitvalor.com.ng",
    accent: "bg-gray-900 hover:bg-gray-800",
    iconBg: "bg-gray-100 text-gray-700",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.845L.057 23.571a.75.75 0 0 0 .924.924l5.726-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.12-1.41l-.366-.217-3.797.975.993-3.68-.238-.378A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "Join Our Community",
    description: "Get insights, tips and updates on our WhatsApp Channel",
    cta: "Join Channel",
    href: "https://www.whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747",
    accent: "bg-green-600 hover:bg-green-700",
    iconBg: "bg-green-100 text-green-700",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    label: "Watch on YouTube",
    description: "Explore our content library: strategies, case studies and more",
    cta: "Visit Channel",
    href: "https://www.youtube.com/@summitvalor",
    accent: "bg-red-600 hover:bg-red-700",
    iconBg: "bg-red-100 text-red-700",
  },
];

const waysToConnect = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    title: "Discovery Call",
    description: "30-minute consultation to understand your growth goals and see if we are the right fit.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Strategy Chat",
    description: "Deep-dive sessions with our consultants on specific challenges you are facing.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Growth Assessment",
    description: "A structured evaluation of your current position and a roadmap toward your next milestone.",
  },
];

const whySummitValor = [
  { stat: "98%", label: "Client satisfaction rate" },
  { stat: "5x", label: "Average ROI within 12 months" },
  { stat: "200+", label: "Businesses scaled across Africa" },
  { stat: "48h", label: "Response and onboarding turnaround" },
];

const nextSteps = [
  ["01", "Reach Out", "Send us a message or book a call. We will review your request within 24 hours."],
  ["02", "Assessment", "We analyse your business, goals, and gaps to design a tailored growth strategy."],
  ["03", "Execution", "Our team works alongside yours to implement, iterate, and deliver measurable results."],
];

const faqs = [
  {
    question: "What types of businesses does Summit Valor work with?",
    answer: "We partner with SMEs, startups, and established companies across various industries in Africa. If you are serious about sustainable growth, we are the right fit.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients begin seeing measurable improvements within 60 to 90 days. Significant growth milestones typically appear within 6 to 12 months of sustained engagement.",
  },
  {
    question: "Do you offer one-time projects or ongoing support?",
    answer: "Both. We offer project-based engagements for specific goals and ongoing retainer partnerships for continuous strategic support.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "Our retainer engagements start at 3 months. This ensures enough runway to implement strategies and measure real outcomes.",
  },
  {
    question: "How do I know if Summit Valor is the right partner for me?",
    answer: "Book a free assessment. In 30 minutes, you will know whether we are aligned. No pressure, no hard sell.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 flex-shrink-0 text-purple-600"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-28 sm:py-36">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold uppercase tracking-[0.35em] text-purple-300"
            >
              GET IN TOUCH
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Let&apos;s Build Something{" "}
              <span className="text-purple-300">Remarkable</span> Together.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-lg leading-relaxed text-purple-100"
            >
              Whether you are launching, scaling, or pivoting, Summit Valor is the strategic partner that gets results. Reach out and let&apos;s start the conversation.
            </motion.p>
          </div>
        </section>

        {/* Premium Contact Card */}
        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                CONTACT SUMMIT VALOR
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Choose how you&apos;d like to connect.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Every path leads to the same place: a partnership built around your growth.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactActions.map((action, index) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.09 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${action.iconBg}`}>
                    {action.icon}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{action.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{action.description}</p>
                  <span className={`mt-6 inline-block rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 ${action.accent}`}>
                    {action.cta}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Connect */}
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                HOW WE ENGAGE
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Ways to Connect
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We meet you wherever you are in your journey.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {waysToConnect.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Summit Valor */}
        <section className="bg-purple-900 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                THE SUMMIT VALOR DIFFERENCE
              </p>
              <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                Why Summit Valor
              </h2>
              <p className="mt-4 text-lg text-purple-200">
                We don&apos;t just advise. We execute, iterate, and own outcomes alongside you.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whySummitValor.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-purple-700/50 bg-purple-800/40 p-8 text-center backdrop-blur-sm"
                >
                  <p className="text-5xl font-extrabold text-white">{item.stat}</p>
                  <p className="mt-3 text-sm font-medium text-purple-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                WHAT HAPPENS NEXT
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                A clear path from first message to next move.
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {nextSteps.map(([number, title, description], index) => (
                <motion.article
                  key={number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm"
                >
                  <span className="text-5xl font-bold text-purple-200">{number}</span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                FREQUENTLY ASKED
              </p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Questions and Answers
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white px-8 shadow-sm"
            >
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </div>
        </section>


        {/* CTA */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 sm:py-28">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                READY TO GROW?
              </p>
              <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                Your next chapter starts with one conversation.
              </h2>
              <p className="mt-5 text-lg text-purple-200">
                Don&apos;t wait for the perfect moment. The best time to build is now, and we&apos;re ready when you are.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://form.typeform.com/to/UZtWH813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-purple-900 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Book a Free Assessment
                </a>
        
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}