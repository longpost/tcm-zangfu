import { t } from "@/app/state/i18n";

export default function AboutPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = searchParams?.lang === "en" ? "en" : "zh";

  return (
    <>
      <h1 className="h1">{t(lang, "about.title")}</h1>

      <p className="p">
        {lang === "en"
          ? "This is a public-facing Zang-Fu education app. It explains the TCM functional-systems way of thinking in plain language."
          : "这是一个面向大众的「中医脏腑系统」科普 Web App：用更容易理解的方式讲清楚中医在想什么。"}
      </p>

      <div className="note warn">
        <b>{lang === "en" ? "Important:" : "重要："}</b>{" "}
        {lang === "en"
          ? "This site does not provide medical diagnosis, prescriptions, or emergency advice. If symptoms are severe or persistent, please seek professional care."
          : "本网站不提供医疗诊断、处方或紧急处理建议。若出现严重或持续症状，请及时就医。"}
      </div>

      <hr />

      <div className="card">
        <div className="sectionTitle">
          <span className="dot" />
          <h3>{lang === "en" ? "Structure" : "内容结构"}</h3>
        </div>

        <ul className="list">
          {lang === "en" ? (
            <>
              <li>
                <b>Overview:</b> quick positioning, common signs, common
                misconceptions.
              </li>
              <li>
                <b>Single system:</b> what it does → what&nbsp;
                <em>&quot;normal&quot;</em>&nbsp;tends to feel like → 3–4 common
                patterns → connections and misconceptions.
              </li>
              <li>
                <b>Symptom → Systems:</b> a hinting tool (not diagnosis) that
                explains common educational mappings.
              </li>
            </>
          ) : (
            <>
              <li>
                <b>总览：</b>快速理解五脏六腑的“人话定位”、常见表现、常见误区。
              </li>
              <li>
                <b>单个脏腑：</b>先讲“正常是什么样”，再讲 3–4
                种常见失衡模式；并提供“为什么会这样”的科普展开。
              </li>
              <li>
                <b>症状 → 系统：</b>用“提示”而非“诊断”的方式，把常见感受映射到可能涉及的系统与解释。
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="footer">
        {lang === "en"
          ? "Version: 1.1 (MVP + Popular Science). Next: relationship graph, scenario library, study mode, richer Fu content."
          : "版本：1.1（MVP + 科普）｜可扩展方向：关系图、生活场景库、学习模式、六腑补强、双语细化"}
      </div>
    </>
  );
}

