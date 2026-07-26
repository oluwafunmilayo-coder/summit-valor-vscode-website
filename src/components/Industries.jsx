import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    "Technology & SaaS",
    "Health & Wellness",
    "Professional Services",
    "Real Estate",
    "E-commerce",
    "Coaches & Consultants",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            Industries We Support
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Built for businesses ready to scale.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We partner with founders and growing teams across industries,
            helping them create smoother operations, stronger systems, and
            better execution.
          </p>
        </motion.div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-8 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {industry}
              </h3>

              <p className="mt-3 text-gray-600">
                Streamlined operations and reliable support systems.
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}