import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiBriefcase size={34} />,
      title: "Operations Partnership",
      description:
        "We become an extension of your leadership team, building the systems, accountability and operational structure that support sustainable growth.",
    },
    {
      icon: <FiUsers size={34} />,
      title: "Executive Support",
      description:
        "Protect your time through executive administration, calendar management, communication and operational coordination.",
    },
    {
      icon: <FiSettings size={34} />,
      title: "Systems & Process Design",
      description:
        "Create scalable workflows, SOPs and documentation that improve efficiency and keep your business running consistently.",
    },
  ];

  return (
    <><section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
            WHAT WE DO
          </p>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Operational support built for ambitious businesses.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We help founders move from reactive operations to structured,
            scalable businesses through operational leadership, executive
            support and business systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -12 }}
              className="group rounded-[34px] border border-gray-200 bg-[#faf8f5] p-10 transition-all duration-500 hover:border-purple-300 hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                {service.description}
              </p>
              <Link
                to="/services"
                className="mt-10 inline-flex items-center gap-3 font-semibold text-purple-700 transition-all duration-300 group-hover:gap-5"
              >
                Learn More
                <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-purple-700 to-violet-700 px-12 py-16 text-center text-white"
        >
          <h2 className="text-4xl font-bold">
            Every engagement begins with understanding your business.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-purple-100">
            We don't prescribe solutions before understanding your operations.
            Every partnership starts with an assessment of your goals,
            workflows and operational challenges.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105"
          >
            Book an Assessment
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}