import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="bg-black border-b-4 border-red-600 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            Get in touch
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Let's Work Together
        </h2>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
          I am open to fullstack and frontend roles, freelance projects and collaborations. Reach out through any of the channels below.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact cards */}
          <div className="flex flex-col gap-4">

            <a
              href="mailto:aderounmutemiloluwa2004@gmail.com"
              className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <FiMail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                  aderounmutemiloluwa2004@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/2349016196558"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                  +234 901 619 6558
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Temilitt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <FiGithub size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                  github.com/Temilitt
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/temiloluwa-adeboye"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <FiLinkedin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                  Temiloluwa Adeboye
                </p>
              </div>
            </a>

            <a
              href="https://x.com/justtemilt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <FiTwitter size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">X (Twitter)</p>
                <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                  @justtemilt
                </p>
              </div>
            </a>

          </div>

          {/* Right — Big statement */}
          <div className="flex flex-col justify-center">
            <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
              Open to<br />
              <span className="text-red-600">new roles</span><br />
              & projects.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Based in Nigeria. Available for remote and onsite opportunities. I respond within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}