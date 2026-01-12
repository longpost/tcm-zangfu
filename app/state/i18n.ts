export type Lang = "zh" | "en";

const DICT: Record<string, { zh: string; en: string }> = {
  "app.title": { zh: "脏腑科普", en: "Zang-Fu Explorer" },
  "nav.overview": { zh: "总览", en: "Overview" },
  "nav.symptoms": { zh: "症状→系统", en: "Symptom → Systems" },
  "nav.about": { zh: "说明", en: "About" },
  "footer.disclaimer": {
    zh: "免责声明：本应用仅用于健康科普与学习，不提供诊断、处方或医疗建议...",
    en: "Disclaimer: This app is for education only. It does not provide diagnosis, prescriptions, or medical advice."
  },
  "home.title": { zh: "五脏六腑（科普）", en: "Zang-Fu (Popular Science)" },
  "home.subtitle": {
    zh: "用人话讲清楚中医“脏腑系统”怎么理解（非诊断）。",
    en: "A plain-language guide to TCM Zang-Fu systems (education only)."
  },
  "home.filterAll": { zh: "全部", en: "All" },
  "home.filterZang": { zh: "五脏", en: "Zang (Organs)" },
  "home.filterFu": { zh: "六腑", en: "Fu (Bowels)" },
  "home.openSymptoms": { zh: "去做症状提示", en: "Go to Symptom Guide" },
  "organ.back": { zh: "返回总览", en: "Back to overview" },
  "organ.section.what": { zh: "它主要管什么", en: "What it mainly does" },
  "organ.section.normal": { zh: "状态好时你可能感觉", en: "When it’s doing well, you may feel" },
  "organ.section.patterns": { zh: "常见失衡模式（科普）", en: "Common imbalance patterns (education)" },
  "organ.section.links": { zh: "常见牵连", en: "Common connections" },
  "organ.section.mis": { zh: "常见误区", en: "Common misconceptions" },
  "organ.section.faq": { zh: "常见问题", en: "FAQs" },
  "symptoms.title": { zh: "症状→系统（提示，不是诊断）", en: "Symptom → Systems (guidance, not diagnosis)" },
  "symptoms.pick": { zh: "选择你有的感受/表现：", en: "Pick what you feel/notice:" },
  "symptoms.result": { zh: "可能相关的系统（科普）", en: "Potentially related systems (education)" },
  "symptoms.none": { zh: "先选一些项，才会给出提示。", en: "Select a few items to see the guidance." },
  "about.title": { zh: "关于与边界", en: "About & boundaries" },
};

export function t(lang: Lang, key: keyof typeof DICT | string) {
  const v = DICT[key];
  if (!v) return key;
  return lang === "en" ? v.en : v.zh;
}
