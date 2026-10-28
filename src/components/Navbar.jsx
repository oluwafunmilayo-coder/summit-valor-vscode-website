import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const primaryLinks = [
  ["Consulting", "/services"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Insights", "/blog"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = scrolled
    ? "text-gray-700 hover:text-[#5B21B6]"
    : "text-white hover:text-purple-200";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-[#1F1F23]/75 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src="/summit-valor-logo.png"
              alt="Summit Valor logo"
              width="48"
              height="48"
              className="h-10 w-auto sm:h-12"
            />
            <span
              className={`truncate text-lg font-semibold sm:text-xl ${
                scrolled ? "text-[#1F1F23]" : "text-white"
              }`}
            >
              Summit Valor
            </span>
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {primaryLinks.slice(0, 2).map(([label, to]) => (
              <Link key={label} to={to} className={`font-medium transition ${linkClass}`}>
                {label}
              </Link>
            ))}

            <details className="group relative">
              <summary
                className={`flex cursor-pointer list-none items-center gap-1 font-medium transition [&::-webkit-details-marker]:hidden ${linkClass}`}
              >
                Our Ecosystem
                <FiChevronDown
                  aria-hidden="true"
                  className="transition group-open:rotate-180"
                />
              </summary>
              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                <Link
                  to="/community"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-[#F5F5F7] hover:text-[#5B21B6]"
                >
                  Founder Community
                </Link>
                <Link
                  to="/academy"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-[#F5F5F7] hover:text-[#5B21B6]"
                >
                  Summit Valor Academy
                </Link>
              </div>
            </details>

            <Link
              to="/opportunities"
              className={`font-medium transition ${linkClass}`}
            >
              Opportunities
            </Link>

            {primaryLinks.slice(2).map(([label, to]) => (
              <Link key={label} to={to} className={`font-medium transition ${linkClass}`}>
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#5B21B6] px-5 py-2.5 font-semibold text-white transition hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
            >
              Start a conversation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`rounded-lg p-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6] xl:hidden ${
              scrolled ? "text-[#1F1F23]" : "text-white"
            }`}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-2">
              <Link
                to="/services"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-semibold text-[#5B21B6] hover:bg-[#F5F5F7]"
              >
                Consulting
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-800 hover:bg-[#F5F5F7]"
              >
                About
              </Link>
              <Link
                to="/opportunities"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-semibold text-[#5B21B6] hover:bg-[#F5F5F7]"
              >
                Business Opportunities
              </Link>
              <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Our Ecosystem
              </p>
              <Link
                to="/community"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 pl-6 font-medium text-gray-800 hover:bg-[#F5F5F7]"
              >
                Founder Community
              </Link>
              <Link
                to="/academy"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 pl-6 font-medium text-gray-800 hover:bg-[#F5F5F7]"
              >
                Summit Valor Academy
              </Link>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-800 hover:bg-[#F5F5F7]"
              >
                Insights
              </Link>
              <Link
                to="/resources"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-800 hover:bg-[#F5F5F7]"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#5B21B6] px-5 py-3 font-semibold text-white transition hover:bg-[#4C1D95]"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
