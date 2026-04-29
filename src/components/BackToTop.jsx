import { useState, useEffect } from "react"
import { FiArrowUp } from "react-icons/fi"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "all" : "none",
      }}
      className="w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-black transition-colors duration-200"
    >
      <FiArrowUp size={20} />
    </button>
  )
}