import { motion } from "framer-motion";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const questions = [
  ["What types of businesses do you work with?", "We work with founder-led and growing businesses—especially professional services firms, agencies, consultants, technology teams, health and wellness businesses, ecommerce brands and purpose-led organisations. The shared need is simple: growth has made the day-to-day harder to manage."],
  ["How long does an engagement last?", "An Operations Blueprint is a focused assessment and roadmap. Implementation work and ongoing operations support are scoped around your priorities, team and pace of change. After the assessment, we recommend a practical engagement shape rather than forcing a one-size-fits-all package."],
  ["Do you replace our current team?", "No. We make your existing team more effective. We clarify ownership, improve handoffs, document the way work should happen and help leaders see where support or capacity may be needed. We are an operations partner, not a staffing or recruitment agency."],
  ["Can you work with our existing software?", "Yes. We start with your operating reality, including the tools your team already uses. Where a system is working, we improve the workflow around it. Where it is creating friction, we make a clear recommendation before introducing anything new."],
  ["What is the Summit Operations Blueprint™?", "The Summit Operations Blueprint™ is a consulting-grade diagnostic. We review workflows, systems, accountability, risks and growth constraints, then deliver prioritised recommendations and a practical 30- and 90-day roadmap."],
  ["Do you offer ongoing support?", "Yes. Once the priority work is clear, we can support implementation, operating rhythms, reporting, documentation and continuous improvement. Ongoing support is designed to help the new way of working stick as the business evolves."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">Frequently Asked Questions</p>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">Practical answers before we connect.</h2>
          <p className="mt-6 text-lg text-gray-600">A clear view of what an operations partnership looks like.</p>
        </motion.div>
        <div className="space-y-5">
          {questions.map(([question, answer], index) => (
            <motion.div key={question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }} className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-6">
              <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-4 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-purple-700 focus-visible:ring-offset-2">
                <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
                <span className="shrink-0 text-purple-700" aria-hidden="true">{open === index ? <FiMinus size={22} /> : <FiPlus size={22} />}</span>
              </button>
              {open === index && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-5 leading-8 text-gray-600">{answer}</motion.p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
