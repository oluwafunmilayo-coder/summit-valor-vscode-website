import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAtSign,
  FiBookOpen,
  FiExternalLink,
  FiInstagram,
  FiLinkedin,
  FiMic,
  FiPlayCircle,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const communityUrl =
  "https://whatsapp.com/channel/0029VbCoxAI6hENkzMpkL747";

const exploreLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

const learningLinks = [
  { label: "Summit Operations Blueprint", to: "/resources", icon: FiBookOpen },
  { label: "Unfiltered Blueprint", to: "/unfiltered-blueprint", icon: FiMic },
  { label: "Summit Academy", to: "/academy", icon: FiPlayCircle, comingSoon: true },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/summitva-agency/",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/summit_va",
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
  return (
    <>
      <section className="bg-gradient-to-r from-[#4c1d95] via-purple-700 to-[#6d28d9] py-20 text-white sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-200">
                SUMMIT VALOR
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                Ready to Build Better Business Operations?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100">
                Whether you&apos;re looking to strengthen your operations, access
                practical resources, join our growing community or learn from
                experienced founders and operators, Summit Valor is here to help
                you build a stronger business.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:pt-7">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                Book an Assessment
                <FiArrowRight />
              </Link>

              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
              >
                Join Our Community
                <FiExternalLink />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[#111111] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-12">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/Logo.png"
                  alt="Summit Valor"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-2xl font-bold">Summit Valor</span>
              </Link>
              <p className="mt-7 text-xl font-semibold leading-8 text-white">
                Building Better Business Operations.
              </p>
              <p className="mt-5 max-w-sm leading-8 text-gray-400">
                We help founders and growing businesses build organised,
                scalable and efficient operations through systems, strategy and
                operational support.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Explore
              </h3>
              <ul className="mt-7 space-y-4">
                {exploreLinks.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-gray-400 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Learn &amp; Grow
              </h3>
              <ul className="mt-7 space-y-4">
                {learningLinks.map(({ label, to, icon: Icon, comingSoon }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-3 text-gray-400 transition hover:text-white"
                    >
                      <Icon className="text-purple-300 transition group-hover:text-white" />
                      <span>{label}</span>
                      {comingSoon && (
                        <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-2 py-0.5 text-xs font-semibold text-purple-200">
                          Coming Soon
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Join Our Community
              </h3>
              <p className="mt-7 max-w-sm leading-8 text-gray-400">
                Stay connected with practical insights on business operations,
                leadership and business growth.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-700 hover:text-white"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-600 hover:shadow-lg"
              >
                Join Our Community
                <FiArrowRight />
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center">
            <p>&copy; 2026 Summit Valor. All rights reserved.</p>
            <p>Building Better Business Operations.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
