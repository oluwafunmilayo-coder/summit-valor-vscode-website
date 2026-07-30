import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  const linkClass = scrolled
    ? "text-gray-700 hover:text-purple-700"
    : "text-white hover:text-purple-300";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/Logo.png"
            alt="Summit Valor"
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span
            className={`truncate text-lg font-bold sm:text-2xl ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Summit Valor
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(([name, path]) => (
            <Link key={name} to={path} className={`transition ${linkClass}`}>
              {name}
            </Link>
          ))}

          <div className="relative group">
            <button className={`transition ${linkClass}`}>Services</button>
            <div className="absolute left-0 top-full hidden w-72 rounded-2xl bg-white p-6 shadow-xl group-hover:block">
              <Link to="/services" className="block rounded-lg p-3 hover:bg-gray-100">
                Business Operations Partner
              </Link>
              <Link to="/services" className="block rounded-lg p-3 hover:bg-gray-100">
                Executive Support
              </Link>
              <Link to="/services" className="block rounded-lg p-3 hover:bg-gray-100">
                Systems Design
              </Link>
              <Link to="/services" className="block rounded-lg p-3 hover:bg-gray-100">
                Project Coordination
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className={`transition ${linkClass}`}>Community</button>
            <div className="absolute left-0 top-full hidden w-72 rounded-2xl bg-white p-6 shadow-xl group-hover:block">
              <Link to="/community" className="block rounded-lg p-3 hover:bg-gray-100">
                Founder Community
              </Link>
              <Link to="/community" className="block rounded-lg p-3 hover:bg-gray-100">
                Events
              </Link>
              <Link to="/community" className="block rounded-lg p-3 hover:bg-gray-100">
                Member Resources
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className={`transition ${linkClass}`}>Resources</button>
            <div className="absolute right-0 top-full hidden w-[650px] grid-cols-2 gap-4 rounded-2xl bg-white p-8 shadow-2xl group-hover:grid">
              <Link to="/resources" className="rounded-xl p-4 hover:bg-gray-100">
                <h4 className="font-semibold text-gray-900">Summit Operations Blueprint</h4>
                <p className="text-sm text-gray-500">Guides and operational resources.</p>
              </Link>
              <Link to="/podcast" className="rounded-xl p-4 hover:bg-gray-100">
                <h4 className="font-semibold text-gray-900">Unfiltered Blueprint Podcast</h4>
                <p className="text-sm text-gray-500">Founder conversations and insights.</p>
              </Link>
              <Link to="/resources" className="rounded-xl p-4 hover:bg-gray-100">
                <h4 className="font-semibold text-gray-900">Blog & Insights</h4>
                <p className="text-sm text-gray-500">Articles on operations and growth.</p>
              </Link>
              <Link to="/resources" className="rounded-xl p-4 hover:bg-gray-100">
                <h4 className="font-semibold text-gray-900">Templates & Downloads</h4>
                <p className="text-sm text-gray-500">Free business tools and templates.</p>
              </Link>
            </div>
          </div>

          <a
            href="https://form.typeform.com/to/UZtWH813"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Book an Assessment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className={`rounded-lg p-2 md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-white px-4 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(([name, path]) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700 transition hover:text-purple-700"
              >
                {name}
              </Link>
            ))}

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 transition hover:text-purple-700"
            >
              Services
            </Link>
            <Link
              to="/community"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 transition hover:text-purple-700"
            >
              Community
            </Link>
            <Link
              to="/resources"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 transition hover:text-purple-700"
            >
              Resources
            </Link>

            <a
              href="https://form.typeform.com/to/UZtWH813"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-purple-700 px-5 py-3 font-semibold text-white transition hover:bg-purple-800"
            >
              Book an Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}


