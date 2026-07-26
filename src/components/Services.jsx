import { motion } from "framer-motion";
import {
  FiSettings,
  FiBriefcase,
  FiClipboard,
  FiUsers,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiBriefcase size={30} />,
      title: "Business Operations Partnership",
      description:
        "A dedicated operations partner helping you build systems, improve execution, and scale with confidence.",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Executive Support",
      description:
        "Protect your time by handing off operational coordination, scheduling, and executive administration.",
    },
    {
      icon: <FiClipboard size={30} />,
      title: "Systems Design",
      description:
        "Create SOPs, workflows, documentation, and internal systems that keep your business running smoothly.",
    },
    {
      icon: <FiSettings size={30} />,
      title: "Project Coordination",
      description:
        "Keep projects moving with clear ownership, accountability, and organised execution.",
    },
    {
      icon: <FiZap size={30} />,
      title: "Workflow Automation",
      description:
        "Reduce manual work by connecting your tools and simplifying repetitive operational tasks.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Services
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Operational support designed for growing businesses.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you need strategic operational leadership or reliable
            day-to-day execution, Summit Valor provides the structure,
            systems and support that help businesses grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition-all duration-500 group-hover:bg-purple-700 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-purple-700 transition-all duration-300 group-hover:gap-4">
                Learn More
                <FiArrowRight />
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}