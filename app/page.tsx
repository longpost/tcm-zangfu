import OrganCard from "@/app/components/OrganCard";
import BodyMap from "@/app/components/BodyMap";
import { getOrgans } from "@/lib/content";
import { t } from "@/app/state/i18n";

export default function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = searchParams?.lang === "en" ? "en" : "zh";
  const organs = getOrgans(lang);
  const zang = organs.filter((o) => o.category === "zang");
  const fu = organs.filter((o) => o.category === "fu");

  return (
    <>
      <h1 className="h1">{t(lang, "home.title")}</h1>
      <p className="p">{t(lang, "home.subtitle")}</p>

      <div className="twoCol">
        <div>
          <div className="card">
            <div className="sectionTitle">
              <span className="dot" />
              <h3>{lang === "en" ? "How to use" : "你可以怎么用"}</h3>
            </div>
            <ul className="list">
              {lang === "en" ? (
                <>
                  <li>Want to understand a system (Liver/Heart/Spleen/Lung/Kidney)? Tap a card or the body map.</li>
                  <li>Start from feelings/symptoms? Use the <code className="inline">Symptom → Systems</code> page.</li>
                  <li>Each page follows the same template: <b>Normal</b> → <b>Common patterns</b> → <b>Connections & misconceptions</b>.</li>
                </>
              ) : (
                <>
                  <li>想理解某个系统（肝/心/脾/肺/肾等）→ 点卡片或人体图。</li>
                  <li>从“感受/症状”倒推线索 → 去 <code className="inline">症状→系统</code> 页面点选。</li>
                  <li>每个系统都按同一模板：<b>正常</b> → <b>常见失衡</b> → <b>关系与误区</b>。</li>
                </>
              )}
            </ul>
          </div>

          <div className="grid" style={{ marginTop: 14 }}>
            <div className="card" style={{ gridColumn: "span 12" }}>
              <div className="sectionTitle">
                <span className="dot2" />
                <h3>{lang === "en" ? "Zang (core)" : "五脏（核心）"}</h3>
              </div>
              <div className="grid">
                {zang.map((o) => (
                  <OrganCard key={o.id} organ={o} lang={lang} />
                ))}
              </div>
            </div>

            <div className="card" style={{ gridColumn: "span 12" }}>
              <div className="sectionTitle">
                <span className="dot3" />
                <h3>{lang === "en" ? "Fu (MVP: enough-to-use)" : "六腑（MVP 先放“够用版”）"}</h3>
              </div>
              <div className="grid">
                {fu.map((o) => (
                  <OrganCard key={o.id} organ={o} lang={lang} />
                ))}
              </div>
              <div className="note" style={{ marginTop: 10 }}>
                {lang === "en"
                  ? "Fu content is intentionally shorter in v1. Next iteration can add more scenarios and misconception clarifications."
                  : "目前六腑内容比五脏更精简。你要是觉得太薄，我们下一轮就把“场景库”和“误区澄清”补齐。"}
              </div>
            </div>
          </div>
        </div>

        <BodyMap lang={lang} />
      </div>

      <div className="footer">{lang === "en" ? "Note: education-only, not a diagnostic tool." : "提示：这是科普模型，不是诊断工具。"}</div>
    </>
  );
}
