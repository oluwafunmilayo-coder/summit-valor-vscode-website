import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "About Us", to: "/about" },
  { label: "Business Consulting", to: "/services" },
  { label: "Valor Talent", to: "/valor-talent" },
  { label: "Summit Valor Academy", to: "/academy" },
  { label: "Founder Community", to: "/community" },
  { label: "Reviews", to: "/reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="fixed left-0 top-0 z-50 w-full bg-[#211735]/95 text-white shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
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
            <span className="truncate text-lg font-semibold sm:text-xl">
              Summit Valor
            </span>
          </Link>

          <div className="hidden items-center gap-4 xl:flex">
            {navigationLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="whitespace-nowrap font-medium text-white transition hover:text-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg bg-[#5B21B6] px-4 py-2.5 font-semibold text-white transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 xl:hidden"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/15 bg-[#211735] px-6 py-4 shadow-lg xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-2">
              {navigationLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-medium text-white transition hover:bg-white/10 hover:text-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#5B21B6] px-5 py-3 font-semibold text-white transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
