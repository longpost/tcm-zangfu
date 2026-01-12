import { Symptom, SymptomMapping } from "./types";

export const SYMPTOMS: Symptom[] = [
  { id: "irritable", label: "易怒/急躁", group: "情绪" },
  { id: "low_mood", label: "压抑/闷闷的", group: "情绪" },
  { id: "sighing", label: "爱叹气/胸闷", group: "情绪" },

  { id: "bloating", label: "饭后腹胀/胃胀", group: "消化" },
  { id: "reflux", label: "反酸/嗳气/恶心", group: "消化" },
  { id: "big_appetite", label: "总想吃/停不下来", group: "消化" },

  { id: "insomnia", label: "入睡难/睡浅", group: "睡眠" },
  { id: "dreamy", label: "多梦/醒后不解乏", group: "睡眠" },

  { id: "tired", label: "容易累/恢复慢", group: "能量" },
  { id: "post_meal_sleepy", label: "吃完就困", group: "能量" },

  { id: "cold", label: "怕冷/手脚冷", group: "寒热" },
  { id: "heat", label: "口干/烦热/容易上火感", group: "寒热" },

  { id: "heaviness", label: "身体沉重/头昏粘滞感", group: "体液/水湿" },
  { id: "edema", label: "水肿/眼皮肿/袜印", group: "体液/水湿" },
  { id: "dry_constipation", label: "偏干/便秘倾向", group: "体液/水湿" },
];

export const MAPPINGS: SymptomMapping[] = [
  { symptomId: "irritable", organId: "liver", strength: 3, why: "压力与情绪调度常在“肝系统”体现，容易急躁上冲。" },
  { symptomId: "low_mood", organId: "liver", strength: 2, why: "长期压抑/郁闷常见与“气机不畅”相关。" },
  { symptomId: "sighing", organId: "liver", strength: 3, why: "叹气+胸胁闷胀很典型提示“调度堵车”。" },
  { symptomId: "bloating", organId: "liver", strength: 2, why: "压力一大就胀：节律被打乱先在消化上表现。" },

  { symptomId: "insomnia", organId: "heart", strength: 3, why: "睡不安稳、心里忙乱，科普里常先看“心系统的安定能力”。" },
  { symptomId: "dreamy", organId: "heart", strength: 2, why: "多梦/醒后不解乏常见与“主控室运行不稳”相关。" },
  { symptomId: "heat", organId: "heart", strength: 2, why: "烦热口干伴心烦时，常见会放在心系统的“过热/缺润”模式理解。" },

  { symptomId: "post_meal_sleepy", organId: "spleen", strength: 3, why: "饭后困常见与转化动力不足、资源被消化占用相关。" },
  { symptomId: "bloating", organId: "spleen", strength: 3, why: "饭后胀、食物停着不走，是“运化不畅”的经典线索。" },
  { symptomId: "heaviness", organId: "spleen", strength: 3, why: "沉重、头昏、粘滞感常见与“湿重”同向。" },
  { symptomId: "big_appetite", organId: "spleen", strength: 2, why: "想吃停不下来有时是“输入>处理能力”，也可能与压力性进食叠加。" },
  { symptomId: "reflux", organId: "stomach", strength: 3, why: "反酸嗳气更偏向“胃气上逆/节律不降”的线索。" },
  { symptomId: "heat", organId: "stomach", strength: 2, why: "口渴喜冷、易饿等组合，科普里常归为“胃热偏盛”的可能模式。" },

  { symptomId: "dry_constipation", organId: "lung", strength: 2, why: "干燥类问题科普里常把肺当作“外部接口的润泽”线索之一。" },
  { symptomId: "dry_constipation", organId: "large_intestine", strength: 3, why: "便秘是大肠层面的直接表现，也可能与津液不足有关。" },

  { symptomId: "tired", organId: "kidney", strength: 2, why: "长期耐力差、恢复慢常见与“底盘储备不足”相关。" },
  { symptomId: "cold", organId: "kidney", strength: 3, why: "怕冷手脚冷在科普层面常归为底盘偏冷偏虚的模式线索。" },
  { symptomId: "edema", organId: "kidney", strength: 2, why: "水肿类问题常会连到下焦动力与水道管理去理解。" },
  { symptomId: "edema", organId: "bladder", strength: 2, why: "排水阀门开合不利时，水液容易停留。" },
  { symptomId: "edema", organId: "sanjiao", strength: 2, why: "通路分布不畅时，科普里也会用三焦模型解释。" },
];

export function groupSymptoms(symptoms: Symptom[]) {
  const groups: Record<string, Symptom[]> = {};
  for (const s of symptoms) {
    (groups[s.group] ??= []).push(s);
  }
  return groups;
}
