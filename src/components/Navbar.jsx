import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <Link to="/" className="flex items-center gap-3">

          <img
            src="/Logo.png"
            alt="Summit Valor"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Summit Valor
          </span>

        </Link>


        <div className="hidden items-center gap-8 md:flex">

          {[
            ["About", "/about"],
            ["Services", "/services"],
            ["Industries", "/industries"],
            ["Resources", "/resources"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (

            <Link
              key={name}
              to={path}
              className={`transition ${
                scrolled
                ? "text-gray-700 hover:text-purple-700"
                : "text-white hover:text-purple-300"
              }`}
            >
              {name}
            </Link>

          ))}


          <a
            href="https://form.jotform.com/261101958492055"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Book an Assessment
          </a>


        </div>


      </div>

    </nav>
  );
}