import { useEffect, useState } from "react"

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 1500)
    const t2 = setTimeout(() => setPhase(3), 2800)
    const t3 = setTimeout(() => onDone(), 3800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onDone])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: phase === 3 ? 0 : 1,
        transform: phase === 3 ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: phase === 3 ? "none" : "all",
      }}
    >
      {/* Top line */}
      <div
        style={{
          width: phase >= 1 ? "80px" : "0px",
          height: "2px",
          background: "#e63946",
          transition: "width 0.6s ease",
        }}
      />

      {/* Welcome text */}
      <p
        style={{
          color: "#555",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontFamily: "Inter, sans-serif",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Welcome to my portfolio
      </p>

      {/* Main name */}
      <h1
        style={{
          color: "#fff",
          fontSize: "clamp(36px, 8vw, 80px)",
          fontWeight: 900,
          fontFamily: "Inter, sans-serif",
          lineHeight: 1,
          letterSpacing: "-2px",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        Temiloluwa<span style={{ color: "#e63946" }}>.</span>
      </h1>

      {/* Tagline */}
      <p
        style={{
          color: "#888",
          fontSize: "clamp(13px, 2vw, 16px)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.05em",
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Fullstack Developer — Building for Africa and beyond.
      </p>

      {/* Bottom line */}
      <div
        style={{
          width: phase >= 2 ? "80px" : "0px",
          height: "2px",
          background: "#e63946",
          transition: "width 0.6s ease 0.2s",
        }}
      />

      {/* Loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          background: "#e63946",
          width: phase === 1 ? "40%" : phase === 2 ? "80%" : "100%",
          transition: "width 0.8s ease",
        }}
      />
    </div>
  )
}