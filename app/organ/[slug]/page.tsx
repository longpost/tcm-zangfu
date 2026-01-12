import Link from "next/link";
import { ORGANS } from "@/lib/organs";
import { getOrgans } from "@/lib/content";
import type { Organ } from "@/lib/types";
import { t } from "@/app/state/i18n";

export function generateStaticParams() {
  return ORGANS.map((o) => ({ slug: o.id }));
}

function qsFrom(searchParams?: Record<string, string | string[] | undefined>) {
  const q = new URLSearchParams();
  const lang = searchParams?.lang === "en" ? "en" : "zh";
  const style = typeof searchParams?.style === "string" ? searchParams?.style : typeof searchParams?.theme === "string" ? searchParams?.theme : undefined;
  const copy = typeof searchParams?.copy === "string" ? searchParams?.copy : undefined;
  q.set("lang", lang);
  if (style) q.set("style", style);
  if (copy) q.set("copy", copy);
  const s = q.toString();
  return s ? `?${s}` : "";
}

function Section({
  title,
  dot,
  children,
}: {
  title: string;
  dot: "dot" | "dot2" | "dot3";
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <div className="sectionTitle">
        <span className={dot} />
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function OrganPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = searchParams?.lang === "en" ? "en" : "zh";
  const organs = getOrgans(lang);
  const organ = organs.find((o) => o.id === params.slug) as Organ | undefined;
  const qs = qsFrom(searchParams);

  if (!organ) {
    return (
      <div className="card">
        <h3>{lang === "en" ? "Not found" : "未找到"}</h3>
        <p className="small">{lang === "en" ? "This system does not exist." : "这个系统不存在。"}</p>
        <Link className="btn" href={`/${qs}`}>{t(lang, "organ.back")}</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="h1">
        {organ.zh} <span className="small">/ {organ.en}</span>
      </h1>
      <p className="p">{organ.tagline}</p>

      <div className="twoCol">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Section title={t(lang, "organ.section.what")} dot="dot">
            <ul className="list">{organ.does.map((x) => <li key={x}>{x}</li>)}</ul>
          </Section>

          <Section title={t(lang, "organ.section.normal")} dot="dot2">
            <ul className="list">{organ.normalFeels.map((x) => <li key={x}>{x}</li>)}</ul>
          </Section>

          <Section title={t(lang, "organ.section.patterns")} dot="dot3">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {organ.commonPatterns.map((p) => (
                <div key={p.name} className="note" style={{ borderStyle: "solid" }}>
                  <b>{p.name}</b>
                  <div className="small" style={{ marginTop: 6 }}>{p.explain}</div>
                  <div className="kv" style={{ marginTop: 10 }}>{p.signs.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                  <div className="small" style={{ marginTop: 10 }}>
                    {lang === "en" ? "Common triggers: " : "常见诱因："}
                    {p.triggers.join(lang === "en" ? ", " : "、")}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Section title={t(lang, "organ.section.links")} dot="dot2">
            {organ.connections.length === 0 ? (
              <div className="note">{lang === "en" ? "None yet." : "暂无"}</div>
            ) : (
              <ul className="list">
                {organ.connections.map((c) => <li key={c.title}><b>{c.title}：</b>{c.explain}</li>)}
              </ul>
            )}
          </Section>

          <Section title={t(lang, "organ.section.mis")} dot="dot3">
            {organ.misconceptions.length === 0 ? (
              <div className="note">{lang === "en" ? "None yet." : "暂无"}</div>
            ) : (
              <ul className="list">{organ.misconceptions.map((m) => <li key={m}>{m}</li>)}</ul>
            )}
          </Section>

          <Section title={t(lang, "organ.section.faq")} dot="dot">
            {organ.popularQuestions.length === 0 ? (
              <div className="note">{lang === "en" ? "None yet." : "暂无"}</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {organ.popularQuestions.map((qa) => (
                  <div key={qa.q} className="note" style={{ borderStyle: "solid" }}>
                    <b>Q: {qa.q}</b>
                    <div className="small" style={{ marginTop: 6 }}>A: {qa.a}</div>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <div className="note warn">
            <b>{lang === "en" ? "Reminder:" : "提醒："}</b>{" "}
            {lang === "en"
              ? "Education-only. If symptoms are severe or persistent, seek professional care."
              : "这里是科普，不是诊断。严重/持续症状请就医。"}
          </div>

          <Link className="btn" href={`/symptoms${qs}`}>{lang === "en" ? "Start from symptoms →" : "从症状倒推系统 →"}</Link>
          <Link className="btn" href={`/${qs}`}>← {t(lang, "organ.back")}</Link>
        </div>
      </div>
    </>
  );
}
