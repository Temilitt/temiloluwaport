import { useEffect, useState } from "react"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  useEffect(() => {
    let frame
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  useEffect(() => {
    const down = () => setClicking(true)
    const up = () => setClicking(false)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)
    return () => {
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }, [])

  useEffect(() => {
    const addHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true))
        el.addEventListener("mouseleave", () => setHovering(false))
      })
    }
    addHover()
  }, [])

  return (
    <>
      {/* Main dot */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: clicking ? "8px" : "10px",
          height: clicking ? "8px" : "10px",
          background: "#e63946",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.1s, height 0.1s",
        }}
      />

      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          top: trail.y,
          left: trail.x,
          width: hovering ? "48px" : "32px",
          height: hovering ? "48px" : "32px",
          border: `2px solid ${hovering ? "#e63946" : "#111"}`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          mixBlendMode: "difference",
        }}
      />
    </>
  )
}