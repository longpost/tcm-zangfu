"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { groupSymptoms } from "@/lib/symptoms";
import { getMappings, getOrgans, getSymptoms } from "@/lib/content";
import ParamLink from "./ParamLink";
import { OrganId } from "@/lib/types";
import { t } from "@/app/state/i18n";

type Hit = { organId: OrganId; score: number; reasons: string[] };

export default function SymptomPicker() {
  const sp = useSearchParams();
  const lang = sp.get("lang") === "en" ? "en" : "zh";

  const organs = useMemo(() => getOrgans(lang), [lang]);
  const symptoms = useMemo(() => getSymptoms(lang), [lang]);
  const mappings = useMemo(() => getMappings(lang), [lang]);

  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const groups = useMemo(() => groupSymptoms(symptoms), [symptoms]);

  const hits = useMemo(() => {
    const picked = new Set(Object.entries(selected).filter(([, v]) => v).map(([k]) => k));
    const map = new Map<OrganId, Hit>();
    for (const m of mappings) {
      if (!picked.has(m.symptomId)) continue;
      const prev = map.get(m.organId) ?? { organId: m.organId, score: 0, reasons: [] };
      prev.score += m.strength;
      prev.reasons.push(m.why);
      map.set(m.organId, prev);
    }
    return [...map.values()].sort((a, b) => b.score - a.score);
  }, [selected, mappings]);

  const pickedCount = useMemo(() => Object.values(selected).filter(Boolean).length, [selected]);

  return (
    <div className="twoCol">
      <div className="card">
        <div className="sectionTitle">
          <span className="dot" />
          <h3>{t(lang, "symptoms.pick")}</h3>
        </div>
        <p className="small">
          {lang === "en"
            ? "2–6 selections is enough. The app will show commonly related systems and explain why (education-only)."
            : "选 2–6 个就够了。系统会给出“科普里常见相关系统”并解释原因。"}
        </p>

        {Object.entries(groups).map(([g, items]) => (
          <div key={g} style={{ marginTop: 14 }}>
            <div className="small" style={{ marginBottom: 8, color: "rgba(232,238,246,0.85)" }}>
              <b>{g}</b>
            </div>
            <div className="kv">
              {items.map((s) => {
                const on = !!selected[s.id];
                return (
                  <button
                    key={s.id}
                    className="btn"
                    onClick={() => setSelected((p) => ({ ...p, [s.id]: !p[s.id] }))}
                    aria-pressed={on}
                    style={{
                      background: on ? "rgba(139,211,255,0.18)" : "rgba(255,255,255,0.04)",
                      borderColor: on ? "rgba(139,211,255,0.45)" : "rgba(255,255,255,0.12)",
                      width: "fit-content",
                    }}
                  >
                    {on ? "✅" : "⬜️"} {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <hr />
        <div className="note warn">
          <b>{lang === "en" ? "Reminder:" : "提醒："}</b>{" "}
          {lang === "en"
            ? "This is a hinting tool, not diagnosis. If you have chest pain, trouble breathing, high fever, etc., seek urgent care."
            : "这里输出的是“相关线索”，不是诊断结论。若有胸痛、呼吸困难、持续高热等，请立即就医。"}
        </div>
      </div>

      <div className="card">
        <div className="sectionTitle">
          <span className="dot3" />
          <h3>{t(lang, "symptoms.result")}</h3>
        </div>
        <p className="small">
          {lang === "en" ? "Selected" : "已选"} <b>{pickedCount}</b> {lang === "en" ? "item(s)." : "项。"}{" "}
          {lang === "en"
            ? "Higher score = more commonly related in educational mappings (not severity)."
            : "分数越高=科普里越常见相关（不代表严重程度）。"}
        </p>

        {hits.length === 0 ? (
          <div className="note">{t(lang, "symptoms.none")}</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {hits.slice(0, 8).map((h) => {
              const o = organs.find((x) => x.id === h.organId);
              if (!o) return null;
              return (
                <div key={h.organId} className="note" style={{ borderStyle: "solid" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                    <div>
                      <b>
                        {o.zh} / {o.en}
                      </b>
                      <div className="small">{o.tagline}</div>
                    </div>
                    <div className="chip">{lang === "en" ? `Score: ${h.score}` : `提示分：${h.score}`}</div>
                  </div>
                  <ul className="list">{h.reasons.slice(0, 3).map((r, idx) => <li key={idx}>{r}</li>)}</ul>

                  <ParamLink className="btn" href={`/organ/${o.id}`} style={{ marginTop: 8, width: "fit-content" }}>
                    {lang === "en" ? `Open ${o.en} page →` : `去看 ${o.zh} 系统科普 →`}
                  </ParamLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
