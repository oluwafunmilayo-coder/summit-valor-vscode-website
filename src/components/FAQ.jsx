import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
  const questions = [
    {
      question: "What do you mean by operations?",
      answer:
        "Operations is everything behind the scenes that helps a business run smoothly. That includes workflows, systems, client onboarding, task coordination, documentation, scheduling, reporting, follow-up, and making sure the right things happen at the right time.",
    },
    {
      question: "Is Summit Valor a virtual assistant service?",
      answer:
        "No. Summit Valor is a Remote Operations Support Agency. We support founders with systems, structure, execution, and operational clarity, not just admin tasks.",
    },
    {
      question: "What kind of businesses do you work with?",
      answer:
        "We work with founders and growing businesses that need more structure behind the scenes. That can include service businesses, agencies, consultants, coaches, startups, and other growing teams.",
    },
    {
      question: "Are you replacing my current team?",
      answer:
        "No. We usually work alongside your current team. Our goal is to improve how the business runs by making responsibilities clearer, workflows easier, and execution more consistent.",
    },
    {
      question: "What is the Summit Operations Blueprint™?",
      answer:
        "The Summit Operations Blueprint™ is our deeper strategic offering. It helps assess how your business currently operates and creates a clear roadmap for better systems, stronger execution, and more scalable growth.",
    },
    {
      question: "How do we start?",
      answer:
        "We usually start with an assessment so we can understand your current challenges, what is slowing the business down, and what type of support you need most.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Questions founders usually ask.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A clearer look at how Summit Valor works and what operations really
            means.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {questions.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-6"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>

                <span className="shrink-0 text-purple-700">
                  {open === index ? <FiMinus size={22} /> : <FiPlus size={22} />}
                </span>
              </button>

              {open === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 leading-8 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}