import { useState } from "react";
import { TOKENS, COPY } from "./data/config";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import MakersSection from "./components/MakersSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("vi");
  const copy = COPY[lang];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: TOKENS.ivory, color: TOKENS.charcoal, minHeight: "100vh" }}>
      <Header lang={lang} setLang={setLang} copy={copy} />
      <Hero />

      <section style={{ padding: "64px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 680 }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>{copy.heroEyebrow}</div>
            <h1 className="serif" style={{ fontSize: 56, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.015em", marginBottom: 28 }}>
              {copy.heroTitle1}
              <br />
              <em style={{ fontStyle: "italic" }}>{copy.heroTitleEm}</em>
            </h1>
            <p style={{ fontSize: 14, color: TOKENS.t2, lineHeight: 1.8, maxWidth: 480 }}>{copy.heroBody}</p>
            <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
              <a href="#contact" className="link-line" style={{ fontSize: 12 }}>{copy.ctaStart}</a>
              <a
                href="https://www.tfw.space"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
                style={{ fontSize: 12 }}
              >
                {copy.ctaShop}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `0.5px solid ${TOKENS.stone}` }} />

      <MakersSection copy={copy} />

      <hr style={{ border: "none", borderTop: `0.5px solid ${TOKENS.stone}` }} />

      <ProjectsSection copy={copy} lang={lang} />

      <hr style={{ border: "none", borderTop: `0.5px solid ${TOKENS.stone}`, marginTop: 48 }} />

      <ContactSection copy={copy} />

      <Footer copy={copy} />
    </div>
  );
}
