import { useState } from "react"
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b3c3a16b-8329-43c0-af78-6f71a0150c6d",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setForm({ name: "", email: "", message: "" })
      } else {
        setError(true)
      }
    } catch (_err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-black border-b-4 border-red-600 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll direction="up" delay={0.1}>
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
            I am open to fullstack and frontend roles, freelance projects and collaborations. Reach out through any of the channels below or send me a message directly.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact cards */}
          <AnimateOnScroll direction="left" delay={0.2}>
            <div className="flex flex-col gap-4">

              <a href="mailto:aderounmutemiloluwa2004@gmail.com"
                className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <FiMail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200 break-all">
                    aderounmutemiloluwa2004@gmail.com
                  </p>
                </div>
              </a>

              <a href="https://wa.me/2349016196558" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group">
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

              <a href="https://github.com/Temilitt" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group">
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

              <a href="https://linkedin.com/in/temiloluwa-adeboye" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group">
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

              <a href="https://x.com/justtemilt" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 border border-white/10 p-5 hover:border-red-600 hover:bg-white/5 transition-all duration-200 group">
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
          </AnimateOnScroll>

          {/* Right — Contact Form */}
          <AnimateOnScroll direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-semibold px-7 py-4 hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : (
                  <>Send Message <FiSend size={16} /></>
                )}
              </button>

              {success && (
                <p className="text-green-400 text-sm font-medium">
                  Message sent! I will get back to you within 24 hours.
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm font-medium">
                  Something went wrong. Try emailing me directly.
                </p>
              )}

            </form>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}