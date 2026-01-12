import ParamLink from "./ParamLink";
import { Organ } from "@/lib/types";

export default function OrganCard({ organ, lang }: { organ: Organ; lang: "zh" | "en" }) {
  const isEn = lang === "en";

  return (
    <ParamLink href={`/organ/${organ.id}`} className="card" style={{ gridColumn: "span 6" }}>
      <h3>
        {organ.zh} <span className="small">/ {organ.en}</span>
      </h3>
      <div className="small">{organ.tagline}</div>
      <div className="kv">
        <span className="chip">{organ.category === "zang" ? (isEn ? "Zang" : "脏") : isEn ? "Fu" : "腑"}</span>
        {organ.does.slice(0, 2).map((x) => (
          <span key={x} className="chip">{x}</span>
        ))}
      </div>
    </ParamLink>
  );
}
