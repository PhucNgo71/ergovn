import { TOKENS } from "../data/config";
import { brands } from "../data/brands";
import BrandPlate from "./BrandPlate";
import Reveal from "./Reveal";

export default function MakersSection({ copy }) {
  const featured = brands.find((b) => b.featured) || brands[0];
  const stacked = brands.filter((b) => b.key !== featured.key).slice(0, 2);
  const row = brands.filter((b) => b.key !== featured.key).slice(2, 6);

  return (
    <section id="makers" style={{ padding: "48px 28px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 6 }}>{copy.makersEyebrow}</div>
          <p style={{ fontSize: 12, color: TOKENS.t2, maxWidth: 480, marginTop: 10, lineHeight: 1.6, marginBottom: 28 }}>
            {copy.makersBody}
          </p>
        </Reveal>

        {/* Asymmetric featured grid */}
        <Reveal delay={80}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10, marginBottom: 10 }}>
            <BrandPlate brand={featured} height={320} titleSize={22} captionSize={9} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {stacked.map((b) => (
                <BrandPlate key={b.key} brand={b} height={155} titleSize={17} captionSize={8} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 32 }}>
            {row.map((b) => (
              <BrandPlate key={b.key} brand={b} height={200} titleSize={15} captionSize={8} />
            ))}
          </div>
        </Reveal>

        {/* Horizontal scroll filmstrip — mobile-friendly secondary browse */}
        <Reveal delay={180}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <span className="mono" style={{ fontSize: 9, color: TOKENS.t3, letterSpacing: "0.06em" }}>BROWSE ALL HOUSES</span>
            <span className="mono" style={{ fontSize: 9, color: TOKENS.t3 }}>SCROLL →</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              paddingBottom: 12,
              scrollSnapType: "x mandatory",
            }}
          >
            {brands.map((b) => (
              <div key={b.key} style={{ flex: "0 0 200px", scrollSnapAlign: "start" }}>
                <BrandPlate brand={b} height={250} titleSize={16} captionSize={8} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
