import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FiArrowLeft,
  FiArrowRight,
  FiTarget,
  FiEye,
  FiCompass,
  FiTrendingUp,
  FiActivity,
  FiLayers,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

export default function About() {

  const values = [
    {
      icon: <FiCompass size={28} />,
      title: "Operational Clarity",
      text: "We help founders see what is happening behind the scenes and create systems that make the business easier to run.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Strategic Partnership",
      text: "We work alongside founders like an embedded operations partner, not just another service provider.",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Continuous Improvement",
      text: "We do not just fix problems once. We refine, improve, and build stronger operations as the business grows.",
    },
    {
      icon: <FiEye size={28} />,
      title: "Founder Visibility",
      text: "Clear systems create better decisions, fewer surprises, and more confidence across the business.",
    },
  ];

  const method = ["Assess", "Architect", "Implement", "Optimise", "Scale"];

  const industries = [
    {
      title: "Technology",
      text: "Startups and SaaS teams that need better workflows, clearer handoffs, and stronger operational structure.",
    },
    {
      title: "Professional Services",
      text: "Consultants, agencies, and service businesses that want smoother delivery and less founder dependency.",
    },
    {
      title: "Healthcare",
      text: "Practices and wellness brands that need organised admin, better coordination, and reliable execution.",
    },
    {
      title: "Real Estate",
      text: "Teams that need stronger client management, follow-up systems, and better day-to-day coordination.",
    },
    {
      title: "E-commerce",
      text: "Brands that need support with fulfilment workflows, internal organisation, and customer experience.",
    },
    {
      title: "NGOs",
      text: "Mission-driven teams that need structure, documentation, and smoother collaboration to increase impact.",
    },
  ];

  // Handle form submission
  const handleFormRedirect = () => {
    // Redirect to /contact page
    window.location.href = "/contact"; // or use React Router's navigate if inside component
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>

      {/* Hero / About section */}
      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28 lg:py-32">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-purple-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
              About Summit Valor
            </p>

            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Operations should make your business feel calmer, not more
              complicated.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Summit Valor helps founders and growing businesses build the
              systems, workflows, and support that turn scattered operations
              into a business that runs with more clarity, consistency, and
              control.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              {/* Replacing Typeform link with React Router Link to /contact */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl"
              >
                Book an Assessment
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-700 hover:text-purple-700"
              >
                Explore Services
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ... other sections remain unchanged ... */}

      {/* Contact Form Section (Optional, if you want to keep a contact form on this page) */}
      {/* Remove if not needed */}
      {/* 
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href='/contact'; }} className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Email" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Message" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </section>
      */}

      <Footer />
    </>
  );
}