import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAtSign,
  FiBookOpen,
  FiExternalLink,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPlayCircle,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const communityUrl =
  "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";
const contactEmail = "hello@summitvalor.com.ng";

const exploreLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Resources", "/resources"],
  ["Business Opportunities", "/opportunities"],
  ["Partnerships", "/partnerships"],
  ["Blog", "/blog"],
  ["Industries", "/industries"],
];

const ecosystemLinks = [
  { label: "Business Consulting", to: "/services", icon: FiBookOpen },
  { label: "Founder Community", to: "/community", icon: FiAtSign },
  { label: "Summit Valor VentureLab", to: "/academy", icon: FiPlayCircle },
  { label: "Summit Operations Blueprint", to: "/resources", icon: FiBookOpen },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/summitva-agency/",
    icon: FiLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Summitvalorand",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_summitvalor?vrfl=NnBxZThsMHNpZWl1",
    icon: FiInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@summit_va",
    icon: FiAtSign,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@summitvalor",
    icon: FiYoutube,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="bg-[#7651C9] py-16 text-white sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-purple-200">
                SUMMIT VALOR
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                The Record Label for Businesses.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-purple-100">
                We help businesses build the systems, develop the people and
                access the opportunities needed for sustainable growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:pt-7">
              <Link
                to="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#7651C9] transition hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a Conversation
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#7651C9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Join Our Community
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[#211735] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10">
            <div>
              <Link
                to="/"
                aria-label="Summit Valor home"
                className="inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
              >
                <img
                  src="/summit-valor-logo.png"
                  alt="Summit Valor logo"
                  width="48"
                  height="48"
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold">Summit Valor</span>
              </Link>
              <p className="mt-6 text-xl font-semibold leading-8 text-white">
                Bold move. Brave future.
              </p>
              <p className="mt-2 text-base font-medium leading-7 text-[#BDA9EC]">
                The right systems. The right people. The right opportunities.
                The right connections.
              </p>
              <p className="mt-4 max-w-sm leading-7 text-[#B8B8C2]">
                We help aspiring entrepreneurs turn ideas into structured
                ventures and help growing businesses strengthen their strategy,
                systems, operations, and execution.
              </p>
              <p className="mt-4 font-medium text-gray-200">
                Consulting · Academy · Opportunities · Founders Community
              </p>
              <div
                className="mt-6 flex flex-wrap gap-3"
                aria-label="Summit Valor social media"
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Summit Valor on ${label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-[#B8B8C2] transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-purple-300"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Explore
              </h3>
              <ul className="mt-6 space-y-3">
                {exploreLinks.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="inline-flex rounded-sm text-[#B8B8C2] transition hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Our Ecosystem
              </h3>
              <ul className="mt-6 space-y-4">
                {ecosystemLinks.map(({ label, to, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group inline-flex items-start gap-3 rounded-sm text-[#B8B8C2] transition hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                    >
                      <Icon
                        className="mt-0.5 shrink-0 text-purple-300 transition group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 font-semibold text-white transition hover:border-purple-300 hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-purple-300"
              >
                Join Our Community
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Let&apos;s Connect
              </h3>
              <p className="mt-6 leading-7 text-[#B8B8C2]">
                Have a business idea to develop or a business challenge to
                solve? Let&apos;s start a conversation.
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="inline-flex rounded-sm font-medium text-white transition hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${contactEmail}?subject=Partnership%20Inquiry`}
                    className="inline-flex rounded-sm text-[#B8B8C2] transition hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                  >
                    Partnership Inquiries
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex break-all rounded-sm text-[#B8B8C2] transition hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                  >
                    {contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-[#B8B8C2] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>&copy; {year} Summit Valor. All rights reserved.</p>
            <nav
              aria-label="Legal"
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <Link
                to="/privacy-policy"
                className="rounded-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                to="/terms-and-conditions"
                className="rounded-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                Terms and Conditions
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
