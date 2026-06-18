import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TOKENS } from "../data/config";
import { brands } from "../data/brands";

const SLIDES = brands.slice(0, 3).map((b) => ({
  photo: b.photo,
  eyebrow: b.relationship === "Dealer" ? `${b.relationship} since ${b.since}` : b.relationship,
  title: b.name,
}));

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", height: 420, overflow: "hidden", background: TOKENS.stone }}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={SLIDES[index].photo}
          alt={SLIDES[index].title}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "easeOut" } }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(28,26,23,0.7) 0%, rgba(28,26,23,0.05) 55%, transparent 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 32, bottom: 32, zIndex: 2 }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8DFCE", marginBottom: 8 }}>
          {SLIDES[index].eyebrow}
        </div>
        <div className="serif" style={{ fontSize: 34, fontWeight: 300, color: TOKENS.ivory, lineHeight: 1.05 }}>
          {SLIDES[index].title}
        </div>
      </div>

      <div style={{ position: "absolute", right: 24, bottom: 32, display: "flex", gap: 6, zIndex: 2 }}>
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 16 : 5,
              height: 5,
              borderRadius: 3,
              background: i === index ? TOKENS.ivory : "rgba(245,241,234,0.35)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
