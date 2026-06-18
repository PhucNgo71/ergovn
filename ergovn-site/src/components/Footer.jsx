import { TOKENS, shopLink } from "../data/config";
import Reveal from "./Reveal";

export default function Footer({ copy }) {
  return (
    <>
      <section style={{ padding: "48px 28px", textAlign: "center", borderTop: `0.5px solid ${TOKENS.stone}` }}>
        <Reveal>
          <div className="serif" style={{ fontSize: 28, fontWeight: 300, fontStyle: "italic", marginBottom: 8 }}>
            {copy.tagline}
          </div>
          <a href={shopLink("closing_cta")} target="_blank" rel="noopener noreferrer" className="link-line" style={{ fontSize: 12 }}>
            {copy.closingLink}
          </a>
        </Reveal>
      </section>

      <footer style={{ padding: "20px 28px", borderTop: `0.5px solid ${TOKENS.stone}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span className="mono" style={{ fontSize: 9, color: TOKENS.t3 }}>© {new Date().getFullYear()} ERGOVN — VIETNAM</span>
        <span className="mono" style={{ fontSize: 9, color: TOKENS.t3 }}>{copy.footerEmail}</span>
      </footer>
    </>
  );
}
