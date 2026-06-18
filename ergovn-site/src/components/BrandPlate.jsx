import { useState } from "react";
import { TOKENS } from "../data/config";

export default function BrandPlate({ brand, height = 210, titleSize = 16, captionSize = 8 }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "block",
        height,
        textDecoration: "none",
        border: `0.5px solid ${hover ? TOKENS.charcoal : TOKENS.stone}`,
        transition: "border-color 0.25s",
      }}
    >
      <img
        src={brand.photo}
        alt={brand.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(0.15) contrast(1.03)",
          transform: hover ? "scale(1.035)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(28,26,23,0.78) 0%, rgba(28,26,23,0.15) 45%, transparent 70%)",
        }}
      />
      <div
        className="mono"
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          fontSize: 8,
          color: TOKENS.ivory,
          background: "rgba(28,26,23,0.45)",
          padding: "4px 8px",
          letterSpacing: "0.04em",
        }}
      >
        {brand.domain} ↗
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "14px 16px" }}>
        <div className="mono" style={{ fontSize: captionSize, color: "rgba(245,241,234,0.6)", letterSpacing: "0.08em", marginBottom: 4 }}>
          {brand.country.toUpperCase()} — {brand.relationship.toUpperCase()}
        </div>
        <div className="serif" style={{ fontSize: titleSize, fontWeight: 300, color: TOKENS.ivory, lineHeight: 1 }}>
          {brand.name}
        </div>
      </div>
    </a>
  );
}
