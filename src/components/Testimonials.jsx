import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F4FF] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
            REAL RESULTS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Trusted by founders who value operational excellence.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We help businesses replace operational chaos with clarity,
            consistency, and scalable systems that support sustainable growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {[
            {
              quote:
                "Summit Valor transformed the way our business operates. We finally had organised systems that allowed us to focus on growth.",
              name: "Founder",
              company: "Business Coaching Company",
            },
            {
              quote:
                "Working with Summit Valor felt like hiring an operations department instead of another assistant.",
              name: "Managing Director",
              company: "Professional Services Firm",
            },
            {
              quote:
                "Their systems continue to save our team hours every single week. Everything became structured and predictable.",
              name: "CEO",
              company: "Growing Technology Company",
            },
          ].map((item) => (

            <motion.div
              key={item.company}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-lg leading-8 text-gray-700">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.company}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}