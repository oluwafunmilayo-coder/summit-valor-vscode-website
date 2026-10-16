import { motion } from "framer-motion";

export default function TrustedBy() {
  const expertise = [
    "Business Consulting",
    "Venture Development",
    "Founder Community",
    "Entrepreneurial Learning",
    "Business Strategy & Planning",
    "Systems & Operations Consulting",
  ];

  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
  initial={{ opacity: 0, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            How We Support Progress
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Consulting, community, and learning for business growth.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Summit Valor is a business consulting and entrepreneurial
            development company. We help aspiring entrepreneurs and growing
            businesses build clarity, capability, and stronger foundations
            through consulting, our Founder Community, and Summit Valor Academy.
          </p>
        </motion.div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {expertise.map((item, index) => (
           <motion.div
          key={item}
           initial={{ opacity: 0, scale: 0.85 }}
           whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}