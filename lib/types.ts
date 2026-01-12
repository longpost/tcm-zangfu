export type OrganId =
  | "liver" | "heart" | "spleen" | "lung" | "kidney"
  | "gallbladder" | "stomach" | "large_intestine" | "small_intestine" | "bladder" | "sanjiao";

export type Organ = {
  id: OrganId;
  zh: string;
  en: string;
  category: "zang" | "fu";
  tagline: string;
  does: string[];
  normalFeels: string[];
  commonPatterns: Array<{
    name: string;
    signs: string[];
    triggers: string[];
    explain: string;
  }>;
  connections: Array<{ title: string; explain: string }>;
  misconceptions: string[];
  popularQuestions: Array<{ q: string; a: string }>;
};

export type Symptom = {
  id: string;
  label: string;
  group: "情绪" | "消化" | "睡眠" | "能量" | "寒热" | "体液/水湿";
};

export type SymptomMapping = {
  symptomId: string;
  organId: OrganId;
  strength: 1 | 2 | 3;
  why: string;
};
