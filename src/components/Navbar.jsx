import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src="/Logo.png"
            alt="Summit Valor"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>

            <h2
              className={`font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Summit Valor
            </h2>

            <p
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Operations Partner
            </p>

          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">

          {links.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-purple-700"
                    : scrolled
                    ? "text-gray-700 hover:text-purple-700"
                    : "text-white hover:text-purple-300"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            to="/contact"
            className="hidden rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-purple-800 lg:block"
          >
            Book an Assessment
          </Link>

          <button className="lg:hidden">
            <HiOutlineMenuAlt3
              size={28}
              className={scrolled ? "text-gray-900" : "text-white"}
            />
          </button>

        </div>

      </div>

    </motion.header>
  );
}