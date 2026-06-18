import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { TOKENS } from "../data/config";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

function ParallaxBand({ project, lang }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <div ref={ref} style={{ position: "relative", height: 380, overflow: "hidden", margin: "20px 0" }}>
      <motion.img
        src={project.photo}
        alt={lang === "vi" ? project.nameVi : project.nameEn}
        style={{ position: "absolute", top: "-15%", width: "100%", height: "130%", objectFit: "cover", filter: "grayscale(0.1)", y }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,26,23,0.55) 0%, transparent 50%)" }} />
      <div style={{ position: "absolute", left: 32, bottom: 32 }}>
        <div className="mono" style={{ fontSize: 9, color: "rgba(245,241,234,0.7)", marginBottom: 6, letterSpacing: "0.06em" }}>
          {project.year} — {project.location.toUpperCase()}
        </div>
        <div className="serif" style={{ fontSize: 28, color: TOKENS.ivory, fontWeight: 300 }}>
          {lang === "vi" ? project.nameVi : project.nameEn}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, lang }) {
  return (
    <div style={{ position: "relative", height: 220, overflow: "hidden", border: `0.5px solid ${TOKENS.stone}` }}>
      <img src={project.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.1)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,26,23,0.7), transparent 55%)" }} />
      <div style={{ position: "absolute", left: 0, bottom: 0, padding: "14px 16px" }}>
        <div className="mono" style={{ fontSize: 8, color: "rgba(245,241,234,0.6)", marginBottom: 3 }}>
          {project.year} — {project.location.toUpperCase()}
        </div>
        <div className="serif" style={{ fontSize: 16, color: TOKENS.ivory, fontWeight: 300 }}>
          {lang === "vi" ? project.nameVi : project.nameEn}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ copy, lang }) {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p.key !== featured.key);

  return (
    <section id="projects" style={{ padding: "48px 28px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div className="eyebrow">{copy.projectsEyebrow}</div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginTop: 24 }}>
          {rest.map((p) => (
            <ProjectCard key={p.key} project={p} lang={lang} />
          ))}
        </div>

        <ParallaxBand project={featured} lang={lang} />
      </div>
    </section>
  );
}
