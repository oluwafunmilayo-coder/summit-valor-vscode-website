import { motion } from "framer-motion";
import {
  FiMonitor,
  FiHeart,
  FiBriefcase,
  FiUsers,
  FiShoppingBag,
  FiGlobe,
  FiBookOpen,
  FiHome,
} from "react-icons/fi";

export default function Industries() {
  const industries = [
    {icon: <FiMonitor size={30} />, title: "Technology & SaaS", description: "Helping fast-growing tech companies build scalable operational sysytems and support rapid growth."},
    {icon: <FiHeart size={30} />, title: "Health & Wellness", description: "Creating organised operations for healthcare providers and wellness businesses to improve patient care and business efficiency."},

    {icon: <FiBriefcase size={30} />, title: "Professional Services", description: "Helping agencies, consultancies and firms improve client delivery through better operational systems."},

    {icon: <FiUsers size={30} />, title: "Coaches & Consultants", description: "Helping coaches and consultants build repeatable systems that support sustainable growth."},

    {icon: <FiShoppingBag size={30} />, title: "E-Commerce & Retail", description: "Helping e-commerce and retail businesses streamline operations, improve supply chain management and enhance customer experience."},
    {icon: <FiGlobe size={30} />, title: "Nonprofits & Social Impact", description: "Helping nonprofits and social enterprises improve operational efficiency and maximize impact."},
    {icon: <FiBookOpen size={30} />,  title: "Education & Training", description: "Helping educational institutions and training providers build efficient operations and improve learning outcomes."},
    {icon: <FiHome size={30} />,
      title: "Real Estate",
      description: "Helping real estate businesses streamline operations, improve transaction coordination, client management, and property workflows.",
    }
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
            Supporting ambitious businesses across industries with better operations and systems.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Every industry has unique operational challenges. We work alongside founders and growing organisations to design systems, streamline execution, and build the operational foundation needed for sustainable growth.
          </p>
        </motion.div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => (
            <motion.div
              key={industry.title || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-8 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-5 flex justify-center text-purple-700">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {industry.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {industry.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}