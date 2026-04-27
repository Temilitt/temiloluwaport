import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-2xl font-black tracking-tight text-black">
              Temi<span className="text-red-600">.</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Fullstack Developer based in Nigeria. Building fast, functional and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">
              Quick Links
            </p>
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">
              Contact
            </p>
            <a
              href="mailto:aderounmutemiloluwa2004@gmail.com"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 break-all"
            >
              aderounmutemiloluwa2004@gmail.com
            </a>
            <a
              href="https://wa.me/2349016196558"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
            >
              +234 901 619 6558
            </a>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com/Temilitt" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200">
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/temiloluwa-adeboye" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200">
                <FiLinkedin size={18} />
              </a>
              <a href="https://x.com/justtemilt" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200">
                <FiTwitter size={18} />
              </a>
              <a href="https://wa.me/2349016196558" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200">
                <FaWhatsapp size={18} />
              </a>
              <a href="mailto:aderounmutemiloluwa2004@gmail.com" className="text-black hover:text-red-600 transition-colors duration-200">
                <FiMail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-black pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Aderounmu Temiloluwa. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built with React + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}