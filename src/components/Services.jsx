import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      title: "Operations Partnership",
      description:
        "For founders who need someone to help organise the moving parts of the business. We support planning, execution, communication, and the day-to-day systems that keep everything on track.",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Executive Support",
      description:
        "For busy founders and leaders who are carrying too much. We help with inbox management, scheduling, follow-up, priorities, and administrative support so you can focus on decisions, not distractions.",
    },
    {
      icon: <FiClipboard size={30} />,
      title: "Systems & SOP Design",
      description:
        "For businesses that are doing well but still running on memory and repeated explanations. We document processes, build SOPs, and create workflows that make delivery consistent across your team.",
    },
    {
      icon: <FiSettings size={30} />,
      title: "Project Coordination",
      description:
        "For teams that need structure around launches, deadlines, and internal projects. We help assign ownership, track progress, and keep deliverables moving without confusion or delay.",
    },
    {
      icon: <FiZap size={30} />,
      title: "Workflow Automation",
      description:
        "For repetitive tasks that waste time and create errors. We simplify processes by connecting tools, reducing manual work, and making your business easier to run behind the scenes.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Services
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Practical operations support for founders and growing teams.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            If your business feels scattered, slow, or hard to manage, the
            issue is often not effort — it is structure. We help you build the
            systems, support, and clarity that make the business easier to run.
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
              whileHover={{ y: -12 }}
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

              <Link
                to="/services"
                className="mt-8 flex items-center gap-2 font-semibold text-purple-700 transition-all duration-300 group-hover:gap-4"
              >
                Learn More
                <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}