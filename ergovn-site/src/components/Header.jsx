import { TOKENS, shopLink } from "../data/config";

export default function Header({ lang, setLang, copy }) {
  return (
    <>
      <div style={{ background: TOKENS.charcoal, padding: "10px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: "#9C9587", letterSpacing: "0.05em" }}>
            {copy.topbar}
          </span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onClick={() => setLang("vi")}
              style={{ background: "none", border: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: lang === "vi" ? "#F5F1EA" : "#5C564B", cursor: "pointer" }}
            >
              VI
            </button>
            <span style={{ color: "#3a352f" }}>/</span>
            <button
              onClick={() => setLang("en")}
              style={{ background: "none", border: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: lang === "en" ? "#F5F1EA" : "#5C564B", cursor: "pointer" }}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <nav style={{ padding: "18px 28px", borderBottom: `0.5px solid ${TOKENS.stone}`, position: "sticky", top: 0, zIndex: 50, background: "rgba(245,241,234,0.95)", backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <span className="serif" style={{ fontSize: 20, fontWeight: 400, letterSpacing: "-0.01em" }}>Ergovn</span>
          <div style={{ display: "flex", gap: 24, flex: 1 }}>
            <a href="#makers" style={{ fontSize: 12, color: TOKENS.t2, textDecoration: "none" }}>{copy.nav.makers}</a>
            <a href="#projects" style={{ fontSize: 12, color: TOKENS.t2, textDecoration: "none" }}>{copy.nav.projects}</a>
            <a href="#contact" style={{ fontSize: 12, color: TOKENS.t2, textDecoration: "none" }}>{copy.nav.contact}</a>
            <a
              href={shopLink("nav_shop")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: TOKENS.t2, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
            >
              {copy.nav.shop}
              <span className="mono" style={{ fontSize: 9, color: TOKENS.t3 }}>↗ tfw.space</span>
            </a>
          </div>
          <a href="#contact" className="link-line">{copy.ctaStart}</a>
        </div>
      </nav>
    </>
  );
}
