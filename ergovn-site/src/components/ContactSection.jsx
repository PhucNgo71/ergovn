import { useState } from "react";
import { TOKENS, shopLink } from "../data/config";
import Reveal from "./Reveal";

// TODO: replace this with your real form endpoint before launch.
// Easiest options: Formspree (https://formspree.io — no backend needed),
// or a Supabase table + serverless function.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

export default function ContactSection({ copy }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `0.5px solid ${TOKENS.stone}`,
    padding: "10px 0",
    fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    color: TOKENS.charcoal,
    outline: "none",
  };
  const labelStyle = { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: TOKENS.t3, letterSpacing: "0.06em", display: "block", marginBottom: 6 };

  return (
    <section id="contact" style={{ padding: "64px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>{copy.contactEyebrow}</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <h2 className="serif" style={{ fontSize: 30, fontWeight: 300, lineHeight: 1.2, marginBottom: 16 }}>
                {copy.contactTitle1}
                <br />
                <em style={{ fontStyle: "italic" }}>{copy.contactTitleEm}</em>
              </h2>
              <p style={{ fontSize: 13, color: TOKENS.t2, lineHeight: 1.7, maxWidth: 340 }}>
                {copy.contactBody}{" "}
                <a href={shopLink("contact_redirect")} target="_blank" rel="noopener noreferrer" className="link-line">
                  {copy.contactShopLink}
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 18 }}>
                <span style={labelStyle}>{copy.fields.name}</span>
                <input style={fieldStyle} type="text" name="name" required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <span style={labelStyle}>{copy.fields.company}</span>
                <input style={fieldStyle} type="text" name="company" />
              </div>
              <div style={{ marginBottom: 18 }}>
                <span style={labelStyle}>{copy.fields.type}</span>
                <input style={fieldStyle} type="text" name="project_type" />
              </div>
              <div style={{ marginBottom: 24 }}>
                <span style={labelStyle}>{copy.fields.email}</span>
                <input style={fieldStyle} type="email" name="email" required />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  background: TOKENS.charcoal,
                  color: TOKENS.ivory,
                  border: "none",
                  padding: "11px 24px",
                  fontSize: 12,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.04em",
                  cursor: status === "sending" ? "wait" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "sending" ? "SENDING…" : copy.send}
              </button>
              {status === "sent" && (
                <p style={{ marginTop: 12, fontSize: 12, color: TOKENS.bronze }}>Thank you — we'll be in touch shortly.</p>
              )}
              {status === "error" && (
                <p style={{ marginTop: 12, fontSize: 12, color: "#a8473a" }}>Something went wrong — please email us directly.</p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
