import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAtSign,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiTrendingUp,
  FiYoutube,
} from "react-icons/fi";
import Navbar from "../components/Navbar";

const assessmentUrl = "https://form.jotform.com/261101958492055";
const communityUrl = "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";

const contactOptions = [
  {
    icon: <FiCalendar size={28} />,
    title: "Book an Assessment",
    description: "Start with a structured conversation about your operations and growth goals.",
    label: "Book an Assessment",
    href: assessmentUrl,
  },
  {
    icon: <FiMessageCircle size={28} />,
    title: "Join Our Community",
    description: "Stay close to practical insights, resources and business conversations.",
    label: "Join Our Community",
    href: communityUrl,
  },
  {
    icon: <FiMail size={28} />,
    title: "Send an Email",
    description: "For partnership, media or general enquiries, our team is ready to help.",
    label: "hello@summitvalor.com.ng",
    href: "mailto:hello@summitvalor.com.ng",
  },
  {
    icon: <FiYoutube size={28} />,
    title: "Learn With Us",
    description: "Watch practical conversations about operations, leadership and growth.",
    label: "Visit YouTube",
    href: "https://youtube.com/@summitvalor",
  },
];

const advantages = [
  {
    icon: <FiCompass size={28} />,
    title: "Clear Direction",
    description: "We begin with the real operating challenges in front of your business.",
  },
  {
    icon: <FiLayers size={28} />,
    title: "Practical Systems",
    description: "Our recommendations are designed to work in your day-to-day reality.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Sustainable Growth",
    description: "We help strengthen the foundation that supports your next stage of growth.",
  },
];

const nextSteps = [
  ["01", "Tell us what is happening", "Share the business priorities, bottlenecks or opportunities you want to address."],
  ["02", "We identify the best next step", "We review your enquiry and guide you toward the right conversation or resource."],
  ["03", "Build a clearer path forward", "Together, we turn operational complexity into focused and practical action."],
];

const faqs = [
  ["What types of businesses do you support?", "We support founders, growing teams and established businesses that need stronger operations, systems and execution."],
  ["Do I need an assessment before working with Summit Valor?", "An assessment is the best place to start when you need a clear view of your operational priorities and the right path forward."],
  ["Can you work with our existing team and tools?", "Yes. We work with your current people, processes and technology to improve how the business runs without unnecessary disruption."],
  ["How quickly will I hear back?", "We review every enquiry with care and will respond with the most helpful next step for your situation."],
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/summitva-agency/", FiLinkedin],
  ["Instagram", "https://www.instagram.com/summit_va", FiInstagram],
  ["Threads", "https://www.threads.com/@summit_va", FiAtSign],
  ["YouTube", "https://youtube.com/@summitvalor", FiYoutube],
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

 import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAtSign,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiTrendingUp,
  FiYoutube,
} from "react-icons/fi";
import Navbar from "../components/Navbar";

const assessmentUrl = "https://form.jotform.com/261101958492055";
const communityUrl = "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";

const contactOptions = [
  {
    icon: <FiCalendar size={28} />,
    title: "Book an Assessment",
    description: "Start with a structured conversation about your operations and growth goals.",
    label: "Book an Assessment",
    href: assessmentUrl,
  },
  {
    icon: <FiMessageCircle size={28} />,
    title: "Join Our Community",
    description: "Stay close to practical insights, resources and business conversations.",
    label: "Join Our Community",
    href: communityUrl,
  },
  {
    icon: <FiMail size={28} />,
    title: "Send an Email",
    description: "For partnership, media or general enquiries, our team is ready to help.",
    label: "hello@summitvalor.com.ng",
    href: "mailto:hello@summitvalor.com.ng",
  },
  {
    icon: <FiYoutube size={28} />,
    title: "Learn With Us",
    description: "Watch practical conversations about operations, leadership and growth.",
    label: "Visit YouTube",
    href: "https://youtube.com/@summitvalor",
  },
];

const advantages = [
  {
    icon: <FiCompass size={28} />,
    title: "Clear Direction",
    description: "We begin with the real operating challenges in front of your business.",
  },
  {
    icon: <FiLayers size={28} />,
    title: "Practical Systems",
    description: "Our recommendations are designed to work in your day-to-day reality.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Sustainable Growth",
    description: "We help strengthen the foundation that supports your next stage of growth.",
  },
];

const nextSteps = [
  ["01", "Tell us what is happening", "Share the business priorities, bottlenecks or opportunities you want to address."],
  ["02", "We identify the best next step", "We review your enquiry and guide you toward the right conversation or resource."],
  ["03", "Build a clearer path forward", "Together, we turn operational complexity into focused and practical action."],
];

const faqs = [
  ["What types of businesses do you support?", "We support founders, growing teams and established businesses that need stronger operations, systems and execution."],
  ["Do I need an assessment before working with Summit Valor?", "An assessment is the best place to start when you need a clear view of your operational priorities and the right path forward."],
  ["Can you work with our existing team and tools?", "Yes. We work with your current people, processes and technology to improve how the business runs without unnecessary disruption."],
  ["How quickly will I hear back?", "We review every enquiry with care and will respond with the most helpful next step for your situation."],
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/summitva-agency/", FiLinkedin],
  ["Instagram", "https://www.instagram.com/summit_va", FiInstagram],
  ["Threads", "https://www.threads.com/@summit_va", FiAtSign],
  ["YouTube", "https://youtube.com/@summitvalor", FiYoutube],
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        phone: "",
        message: form.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Thank you for reaching out to Summit Valor! Your message has been received successfully. A member of our team will review your enquiry and respond within one business day. We look forward to helping you build better business operations.");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      alert(data.error || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#14071f] pt-40 text-white md:pt-44">
          <div className="mx-auto flex min-h-[590px] max-w-7xl items-center px-6 pb-24 lg:min-h-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                CONTACT SUMMIT VALOR
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Let&apos;s build a stronger way to run your business.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Whether you are navigating operational challenges, planning for
                growth or looking for a trusted partner, we&apos;re here to help you
                find the right next step.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a href={assessmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl">
                  Book an Assessment
                  <FiArrowRight />
                </a>
                <a href={communityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700">
                  Join Our Community
                  <FiMessageCircle />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WAYS TO CONNECT</p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">Start the conversation your way.</h2>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((option, index) => (
                <motion.article key={option.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }} whileHover={{ y: -8 }} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">{option.icon}</div>
                  <h3 className="mt-7 text-2xl font-bold text-gray-900">{option.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{option.description}</p>
                  <a href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3">
                    {option.label}
                    <FiArrowRight />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">SEND AN ENQUIRY</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Tell us what you need to solve.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Share a little context and we&apos;ll help you identify the most useful next conversation.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-700 hover:text-white"><Icon size={19} /></a>)}
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} onSubmit={handleSubmit} className="rounded-[32px] border border-gray-200 bg-[#faf8f5] p-8 shadow-lg sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-900">Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
                <label className="block text-sm font-semibold text-gray-900">Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              </div>
              <label className="mt-6 block text-sm font-semibold text-gray-900">Company<input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              <label className="mt-6 block text-sm font-semibold text-gray-900">How can we help?<textarea required rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              <button type="submit" className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl">Send Your Enquiry<FiArrowRight /></button>
            </motion.form>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WHY SUMMIT VALOR</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">A practical partner for better operations.</h2></div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {advantages.map((advantage, index) => <motion.article key={advantage.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">{advantage.icon}</div><h3 className="mt-7 text-2xl font-bold text-gray-900">{advantage.title}</h3><p className="mt-4 leading-8 text-gray-600">{advantage.description}</p></motion.article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6"><div className="mx-auto max-w-3xl text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WHAT HAPPENS NEXT</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">A clear path from first message to next move.</h2></div><div className="mt-16 grid gap-6 md:grid-cols-3">{nextSteps.map(([number, title, description], index) => <motion.article key={number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm"><span className="text-5xl font-bold text-purple-200">{number}</span><h3 className="mt-7 text-2xl font-bold text-gray-900">{title}</h3><p className="mt-4 leading-8 text-gray-600">{description}</p></motion.article>)}</div></div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28"><div className="mx-auto max-w-4xl px-6"><div className="text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">FREQUENTLY ASKED QUESTIONS</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">Helpful answers before we connect.</h2></div><div className="mt-14 space-y-4">{faqs.map(([question, answer]) => <motion.details key={question} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-gray-900">{question}<FiCheckCircle className="shrink-0 text-purple-700 transition group-open:rotate-180" /></summary><p className="mt-4 max-w-3xl leading-8 text-gray-600">{answer}</p></motion.details>)}</div></div></section>

        <section className="bg-[#1E1033] py-24 text-white sm:py-28"><motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-4xl px-6 text-center"><h2 className="text-4xl font-bold leading-tight md:text-5xl">Ready to build better business operations?</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">Start with a conversation about what is holding your business back and where stronger operations can take it next.</p><div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row"><a href={assessmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:bg-gray-100">Book an Assessment<FiArrowRight /></a><a href={communityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700">Join Our Community<FiMessageCircle /></a></div></motion.div></section>
      </main>
      <Footer />
    </>
  );
}

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#14071f] pt-40 text-white md:pt-44">
          <div className="mx-auto flex min-h-[590px] max-w-7xl items-center px-6 pb-24 lg:min-h-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
                CONTACT SUMMIT VALOR
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Let&apos;s build a stronger way to run your business.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-purple-100">
                Whether you are navigating operational challenges, planning for
                growth or looking for a trusted partner, we&apos;re here to help you
                find the right next step.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a href={assessmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl">
                  Book an Assessment
                  <FiArrowRight />
                </a>
                <a href={communityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700">
                  Join Our Community
                  <FiMessageCircle />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WAYS TO CONNECT</p>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">Start the conversation your way.</h2>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((option, index) => (
                <motion.article key={option.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }} whileHover={{ y: -8 }} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-purple-200 hover:shadow-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">{option.icon}</div>
                  <h3 className="mt-7 text-2xl font-bold text-gray-900">{option.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{option.description}</p>
                  <a href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3">
                    {option.label}
                    <FiArrowRight />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">SEND AN ENQUIRY</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Tell us what you need to solve.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Share a little context and we&apos;ll help you identify the most useful next conversation.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-700 hover:text-white"><Icon size={19} /></a>)}
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} onSubmit={handleSubmit} className="rounded-[32px] border border-gray-200 bg-[#faf8f5] p-8 shadow-lg sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-900">Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
                <label className="block text-sm font-semibold text-gray-900">Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              </div>
              <label className="mt-6 block text-sm font-semibold text-gray-900">Company<input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              <label className="mt-6 block text-sm font-semibold text-gray-900">How can we help?<textarea required rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200" /></label>
              <button type="submit" className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl">Send Your Enquiry<FiArrowRight /></button>
            </motion.form>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WHY SUMMIT VALOR</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">A practical partner for better operations.</h2></div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {advantages.map((advantage, index) => <motion.article key={advantage.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">{advantage.icon}</div><h3 className="mt-7 text-2xl font-bold text-gray-900">{advantage.title}</h3><p className="mt-4 leading-8 text-gray-600">{advantage.description}</p></motion.article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6"><div className="mx-auto max-w-3xl text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">WHAT HAPPENS NEXT</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">A clear path from first message to next move.</h2></div><div className="mt-16 grid gap-6 md:grid-cols-3">{nextSteps.map(([number, title, description], index) => <motion.article key={number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 shadow-sm"><span className="text-5xl font-bold text-purple-200">{number}</span><h3 className="mt-7 text-2xl font-bold text-gray-900">{title}</h3><p className="mt-4 leading-8 text-gray-600">{description}</p></motion.article>)}</div></div>
        </section>

        <section className="bg-[#faf8f5] py-24 sm:py-28"><div className="mx-auto max-w-4xl px-6"><div className="text-center"><p className="font-semibold uppercase tracking-[0.35em] text-purple-700">FREQUENTLY ASKED QUESTIONS</p><h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">Helpful answers before we connect.</h2></div><div className="mt-14 space-y-4">{faqs.map(([question, answer]) => <motion.details key={question} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-gray-900">{question}<FiCheckCircle className="shrink-0 text-purple-700 transition group-open:rotate-180" /></summary><p className="mt-4 max-w-3xl leading-8 text-gray-600">{answer}</p></motion.details>)}</div></div></section>

        <section className="bg-[#1E1033] py-24 text-white sm:py-28"><motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-4xl px-6 text-center"><h2 className="text-4xl font-bold leading-tight md:text-5xl">Ready to build better business operations?</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-purple-100">Start with a conversation about what is holding your business back and where stronger operations can take it next.</p><div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row"><a href={assessmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:bg-gray-100">Book an Assessment<FiArrowRight /></a><a href={communityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700">Join Our Community<FiMessageCircle /></a></div></motion.div></section>
      </main>
      <Footer />
    </>
  );
}
