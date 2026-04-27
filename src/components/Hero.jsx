import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-white flex items-center border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">

        <AnimateOnScroll direction="fade" delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
              Available for work
            </span>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <AnimateOnScroll direction="left" delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Fullstack Developer — GMCPN
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight text-black mb-4">
                Aderounmu<br />
                <span className="text-red-600">Temiloluwa</span>
              </h1>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mb-8">
                I build fast, functional and modern web applications — from farms to finance, real estate to logistics. Based in Nigeria, building for the world.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#projects" className="bg-black text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-red-600 transition-colors duration-200">
                  View My Work
                </a>
                <a href="#contact" className="border-2 border-black text-black text-sm font-semibold px-7 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                  Contact Me
                </a>
              </div>
              <div className="flex items-center gap-5">
                <a href="https://github.com/Temilitt" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200"><FiGithub size={20} /></a>
                <a href="https://linkedin.com/in/temiloluwa-adeboye" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200"><FiLinkedin size={20} /></a>
                <a href="https://x.com/justtemilt" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200"><FiTwitter size={20} /></a>
                <a href="https://wa.me/2349016196558" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors duration-200"><FaWhatsapp size={20} /></a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <div className="absolute -top-3 -right-3 w-full h-full bg-red-600 z-0"></div>
                <div className="absolute -bottom-3 -left-3 w-full h-full border-4 border-black z-0"></div>
                <img
                  src="https://res.cloudinary.com/doqniwpta/image/upload/v1777287561/Screenshot_2026-04-27_113829_oftchw.png"
                  alt="Aderounmu Temiloluwa"
                  className="relative z-10 w-full h-full object-cover object-top grayscale"
                />
              </div>
            </div>
          </AnimateOnScroll>

        </div>

        <AnimateOnScroll direction="up" delay={0.6}>
          <div className="mt-16 flex items-center gap-2 text-gray-400">
            <FiArrowDown size={16} />
            <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}