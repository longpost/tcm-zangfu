"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getOrgans } from "@/lib/content";
import { OrganId } from "@/lib/types";

/**
 * 极简“功能系统示意图”，不追求解剖准确。
 * 目的：一个直觉入口（点一下→进入对应系统科普）。
 */
const HOT: Array<{ id: OrganId; zh: string; en: string; x: number; y: number }> = [
  { id: "heart", zh: "心", en: "Heart", x: 190, y: 110 },
  { id: "lung", zh: "肺", en: "Lung", x: 125, y: 120 },
  { id: "liver", zh: "肝", en: "Liver", x: 225, y: 150 },
  { id: "spleen", zh: "脾", en: "Spleen", x: 145, y: 160 },
  { id: "stomach", zh: "胃", en: "Stomach", x: 190, y: 180 },
  { id: "kidney", zh: "肾", en: "Kidney", x: 210, y: 230 },
];

export default function BodyMap() {
  const router = useRouter();
  const sp = useSearchParams();
  const lang = sp.get("lang") === "en" ? "en" : "zh";
  const style = sp.get("style") || sp.get("theme");
  const copy = sp.get("copy");
  const organs = useMemo(() => getOrgans(lang), [lang]);
  const [hover, setHover] = useState<OrganId | null>(null);

  const label = useMemo(() => {
    if (!hover) return lang === "en" ? "Tap a marker to open a system page" : "点击标记，进入对应系统科普";
    const o = organs.find((x) => x.id === hover);
    return o ? `${lang === "en" ? o.en : o.zh}: ${o.tagline}` : lang === "en" ? "Tap a marker to open a system page" : "点击标记，进入对应系统科普";
  }, [hover, organs, lang]);

  const qs = useMemo(() => {
    const q = new URLSearchParams();
    q.set("lang", lang);
    if (style) q.set("style", style);
    if (copy) q.set("copy", copy);
    const s = q.toString();
    return s ? `?${s}` : "";
  }, [lang, style, copy]);

  return (
    <div className="card">
      <div className="sectionTitle"><span className="dot2" /><h3>{lang === "en" ? "Body map (tap to open)" : "人体示意图（点击进入）"}</h3></div>
      <div className="small" style={{ marginBottom: 10 }}>{label}</div>

      <svg viewBox="0 0 360 420" width="100%" height="auto" role="img" aria-label="人体示意图"
           style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14 }}>
        <rect x="0" y="0" width="360" height="420" fill="rgba(255,255,255,0.02)" />
        <g opacity="0.95">
          <path
            d="M180 40
               c-25 0-45 20-45 45
               c0 18 9 34 23 40
               v18
               c-34 12-56 45-56 82
               v38
               c0 18 12 34 30 40
               v84
               c0 20 16 36 36 36
               h24
               c20 0 36-16 36-36
               v-84
               c18-6 30-22 30-40
               v-38
               c0-37-22-70-56-82
               v-18
               c14-6 23-22 23-40
               c0-25-20-45-45-45z"
            fill="rgba(139,211,255,0.07)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
          />
          <line x1="180" y1="95" x2="180" y2="340" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
        </g>

        {HOT.map((p) => {
          const active = hover === p.id;
          return (
            <g key={p.id}
               onMouseEnter={() => setHover(p.id)}
               onMouseLeave={() => setHover(null)}
               onClick={() => router.push(`/organ/${p.id}${qs}`)}
               style={{ cursor: "pointer" }}>
              <circle cx={p.x} cy={p.y} r={active ? 12 : 10}
                      fill={active ? "rgba(180,255,204,0.9)" : "rgba(139,211,255,0.85)"}
                      stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
              <text x={p.x + 14} y={p.y + 5} fontSize="14" fill="rgba(232,238,246,0.95)"
                    style={{ userSelect: "none" }}>{lang === "en" ? p.en : p.zh}</text>
            </g>
          );
        })}
      </svg>

      <div className="note" style={{ marginTop: 12 }}>
        {lang === "en" ? (
          <>This is a <strong>functional-system sketch</strong>, not an anatomical illustration. It’s a quick way to jump into the explanation.</>
        ) : (
          <>这张图是<strong>功能系统示意</strong>，不追求解剖位置准确；目的是让用户“点一下就能看懂思路”。</>
        )}
      </div>
    </div>
  );
}
