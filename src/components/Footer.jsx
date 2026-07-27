import {
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Summit Valor</h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Remote Operations Support Agency helping founders and growing
              businesses build systems, streamline operations, and scale
              sustainably.
            </p>

            <p className="mt-6 font-semibold text-purple-400">
              Operations, run right.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/industries" className="transition hover:text-white">
                  Industries
                </Link>
              </li>

              <li>
                <Link to="/resources" className="transition hover:text-white">
                  Resources
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">Services</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>Operations Support</li>
              <li>Executive Support</li>
              <li>Systems Design</li>
              <li>Project Coordination</li>
              <li>Operational Excellence</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold">Connect</h3>

            <div className="mt-5 flex gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-3 transition hover:bg-purple-700"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-3 transition hover:bg-purple-700"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-3 transition hover:bg-purple-700"
                aria-label="YouTube"
              >
                <FiYoutube />
              </a>
            </div>

            <div className="mt-8">
              <p className="text-gray-400">hello@summitvalor.com.ng</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Summit Valor. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}