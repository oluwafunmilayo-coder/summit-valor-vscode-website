import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {

  const questions = [
    {
      question: "Is Summit Valor a virtual assistant service?",
      answer:
        "No. Summit Valor is a Remote Operations Support Agency. We partner with founders and growing businesses to improve systems, workflows, processes, and execution.",
    },
    {
      question: "Are you replacing my existing team?",
      answer:
        "No. We work alongside your existing team by creating structure, improving workflows, and helping everyone operate more efficiently.",
    },
    {
      question: "What type of businesses do you support?",
      answer:
        "We support founders and growing businesses across industries including technology, professional services, health, real estate, coaching, and e-commerce.",
    },
    {
      question: "How does the engagement process work?",
      answer:
        "We begin by understanding your current operations, identifying gaps, and recommending the right level of support. This may start with an Operational Health Review or move directly into an Operations Partnership.",
    },
    {
      question: "What is the Summit Operations Blueprint™?",
      answer:
        "The Summit Operations Blueprint™ is our premium strategic engagement designed to deeply assess your operations and create a roadmap for building a more scalable business.",
    },
    {
      question: "Do you only work with large companies?",
      answer:
        "No. We work with ambitious founders and growing businesses that are ready to build stronger operational foundations.",
    },
  ];


  const [open, setOpen] = useState(null);


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
            Everything you need to understand how Summit Valor works.
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
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
              >

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>


                <span className="text-purple-700">

                  {open === index ? (
                    <FiMinus size={22}/>
                  ) : (
                    <FiPlus size={22}/>
                  )}

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