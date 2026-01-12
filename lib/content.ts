import { ORGANS } from "./organs";
import { MAPPINGS, SYMPTOMS } from "./symptoms";
import type { Organ, Symptom, SymptomMapping } from "./types";

export type Lang = "zh" | "en";

type Text = string;

// --- English overlays (keep originals as Chinese) ---
const ORGANS_EN: Record<string, Partial<Organ> & { _en?: any }> = {
  liver: {
    tagline:
      "Emotions and flow control: the 'traffic dispatcher' for smooth momentum.",
    does: [
      "Regulates stress/emotional response",
      "Helps digestion keep moving",
      "Supports smooth movement and flexibility",
    ],
    normalFeels: [
      "More stable mood",
      "Less chest/side tightness, less sighing",
      "Less post-meal bloating",
    ],
    commonPatterns: [
      {
        name: "Stuck-under-pressure (stagnation)",
        signs: ["Chest/side tightness", "Frequent sighing", "Stress upsets stomach", "Irritable"],
        triggers: ["Chronic stress", "Irregular sleep", "Too sedentary"],
        explain: "Like a traffic jam: things that should move don’t, so you feel 'blocked'.",
      },
      {
        name: "Overheated & rushing upward (heat)",
        signs: ["Quick temper", "Bitter taste / dry mouth", "Restless sleep", "Head/eye pressure"],
        triggers: ["Late nights", "Spicy/alcohol", "Stress + poor sleep"],
        explain: "Like pressing the gas too hard: the rhythm gets too 'hot' and rushes upward.",
      },
      {
        name: "Low supply (blood/yin)",
        signs: ["Dry eyes", "Cramps/tingling", "Light sleep with dreams", "More sensitive"],
        triggers: ["Chronic late nights", "Heavy screen time", "Not enough recovery"],
        explain: "Like a low battery: small issues trigger warnings more easily.",
      },
    ],
    connections: [
      {
        title: "Liver → Spleen (stress hits digestion first)",
        explain:
          "When stress spikes, bloating and appetite changes often show up early as the digestive rhythm gets disrupted.",
      },
    ],
    misconceptions: [
      "TCM 'Liver' is not the same as lab liver function. It describes a functional system.",
    ],
    popularQuestions: [
      {
        q: "Why does anger make my stomach feel worse?",
        a: "Education-only: when regulation/flow is disrupted, digestion is often where it shows up first.",
      },
    ],
  },
  heart: {
    tagline: "The 'control room' for calm awareness: mind, sleep, and focus.",
    does: [
      "Supports clear awareness and focus",
      "Affects sleep stability",
      "Drives circulation in the TCM sense",
    ],
    normalFeels: ["More restorative sleep", "More inner steadiness", "More stable focus"],
    commonPatterns: [
      {
        name: "Restless/overheated (agitation)",
        signs: ["Restlessness", "Trouble falling asleep", "Many dreams", "Dry mouth"],
        triggers: ["Late nights", "Too much caffeine", "Chronic anxiety"],
        explain: "The control room is running 'too hot': the more you try to force it, the worse sleep gets.",
      },
      {
        name: "Not enough grounding (blood/yin)",
        signs: ["Light sleep", "Poor memory", "Palpitations", "Low daytime energy"],
        triggers: ["Overthinking", "Not enough recovery", "After blood loss"],
        explain: "Power supply is unstable: the system 'alarms' more easily.",
      },
    ],
    connections: [
      {
        title: "Heart ↔ Kidney (sleep & stamina)",
        explain:
          "Many sleep issues are not single-point problems: an overactive 'top' and a depleted 'bottom' can reinforce each other.",
      },
    ],
    misconceptions: ["TCM 'Heart fire' is not myocarditis; it’s a pattern label for agitation/insomnia-type signs."],
    popularQuestions: [
      {
        q: "I’m exhausted but can’t sleep — why?",
        a: "Commonly: the control system is too 'busy/hot', or the supply is low but you keep pushing.",
      },
    ],
  },
  spleen: {
    tagline: "Digestive processing + energy distribution: turning food into usable fuel.",
    does: [
      "Transforms food/drink into usable resources",
      "Sorts clear vs turbid (TCM concept)",
      "Closely related to 'dampness' patterns",
    ],
    normalFeels: ["Less bloating after meals", "Steadier energy", "More formed stools"],
    commonPatterns: [
      {
        name: "Low processing power",
        signs: ["Post-meal bloating", "Sleepy after eating", "Unstable appetite", "Loose stool"],
        triggers: ["Sedentary", "Irregular diet", "Stress + poor sleep"],
        explain: "Assembly line is slow: food sits there → bloating and heaviness.",
      },
      {
        name: "Damp accumulation",
        signs: ["Heaviness", "Foggy head", "Sticky feeling", "Swelling tendency"],
        triggers: ["Greasy/sugary foods", "Humid environment", "Low activity"],
        explain: "Warehouse is damp: things become sticky and harder to clear.",
      },
      {
        name: "Intake > processing",
        signs: ["Cravings", "Food doesn’t 'go down'", "Weight gain", "Abdominal fullness"],
        triggers: ["High-calorie diet", "Stress eating", "Late-night snacking"],
        explain: "You keep feeding the belt faster than it can process.",
      },
    ],
    connections: [
      {
        title: "Spleen → Lung (logistics supply)",
        explain:
          "When processing is weak, damp/phlegm patterns are more likely to affect the Lung (phlegm, chest stuffiness).",
      },
    ],
    misconceptions: [
      "Not the anatomical spleen. Here it means digestion/processing and fluid management functions.",
    ],
    popularQuestions: [
      { q: "Why do I get sleepy after meals?", a: "Resources are diverted to digestion; low processing power makes it worse." },
    ],
  },
  lung: {
    tagline: "Breathing & defense: the main interface between you and the outside world.",
    does: [
      "Manages respiratory rhythm",
      "Related to skin/defense in TCM",
      "Upper regulation of fluids",
    ],
    normalFeels: ["Breathing feels open", "Fewer colds", "Skin feels more hydrated"],
    commonPatterns: [
      {
        name: "Low defense",
        signs: ["Catch colds easily", "Sensitive to wind", "Sweat easily", "Nasal sensitivity"],
        triggers: ["Chronic fatigue", "Poor recovery", "Sedentary"],
        explain: "Walls are thin: weather changes hit you quickly.",
      },
      {
        name: "Dryness",
        signs: ["Dry cough", "Dry throat", "Dry skin", "Constipation tendency"],
        triggers: ["Late nights", "Heated/AC air", "Low fluids + spicy"],
        explain: "Interface lacks lubrication: irritation rises.",
      },
    ],
    connections: [
      {
        title: "Lung ← Spleen (damp/phlegm)",
        explain: "Weak processing → more damp/phlegm → affects Lung openness.",
      },
    ],
    misconceptions: ["TCM 'Lung heat/cold' are pattern labels, not body temperature."],
  },
  kidney: {
    tagline: "Long-term reserve & foundation: stamina, recovery, bones, growth.",
    does: [
      "Supports long-term stamina and recovery",
      "Related to bones/low back/hearing in TCM",
      "Lower regulation of fluids",
    ],
    normalFeels: ["Stable base energy", "Strong low back/knees", "Wake up more restored"],
    commonPatterns: [
      {
        name: "Low reserve (qi/essence)",
        signs: ["Easily tired", "Slow recovery", "Low back weakness", "Worse memory"],
        triggers: ["Chronic late nights", "Overwork", "Long illness"],
        explain: "Aging battery: shorter range and slower charging.",
      },
      {
        name: "Cold/low drive (yang)",
        signs: ["Feels cold", "Cold hands/feet", "Morning loose stool", "Frequent night urination"],
        triggers: ["Cold exposure", "Sedentary", "Chronic fatigue"],
        explain: "Engine temperature too low: power and metabolism slow down.",
      },
      {
        name: "Dry 'false heat' (yin)",
        signs: ["Dry mouth", "Night heat", "Light sleep", "Night sweats"],
        triggers: ["Late nights", "Stress", "Spicy + poor sleep"],
        explain: "Not enough coolant: surface heat appears because润 is low.",
      },
    ],
    connections: [
      {
        title: "Kidney ↔ Heart (the more tired, the worse sleep)",
        explain: "Low reserve plus an overactive mind can create a self-reinforcing cycle.",
      },
    ],
    misconceptions: ["'Kidney deficiency' is not just sexual function. Think foundation/reserve."],
  },
  stomach: {
    tagline: "Receives and begins 'cooking' food (TCM concept).",
    does: ["Receives food", "Begins digestion", "Related to stomach qi descending"],
  },
  gallbladder: {
    tagline: "Rhythm & decisiveness partner (often discussed with Liver).",
  },
  large_intestine: {
    tagline: "Elimination and moisture balance.",
  },
  // others (MVP)
  small_intestine: { tagline: "Separates clear vs turbid: keep what’s useful, pass the rest." },
  bladder: { tagline: "The drainage gate: storage and release of urine (TCM model)." },
  sanjiao: { tagline: "A pathway model: how fluids and qi move through upper/middle/lower regions." },
};

const SYMPTOMS_EN: Record<string, { label: Text; group: Text }> = {
  irritable: { label: "Irritable / short-tempered", group: "Mood" },
  low_mood: { label: "Low mood / 'stuck' feeling", group: "Mood" },
  sighing: { label: "Frequent sighing / chest tightness", group: "Mood" },
  bloating: { label: "Bloating after meals", group: "Digestion" },
  reflux: { label: "Reflux / belching / nausea", group: "Digestion" },
  big_appetite: { label: "Always hungry / can't stop eating", group: "Digestion" },
  insomnia: { label: "Hard to fall asleep / light sleep", group: "Sleep" },
  dreamy: { label: "Many dreams / unrefreshed", group: "Sleep" },
  tired: { label: "Easily tired / slow recovery", group: "Energy" },
  post_meal_sleepy: { label: "Sleepy after meals", group: "Energy" },
  cold: { label: "Cold intolerance / cold hands-feet", group: "Cold/Heat" },
  heat: { label: "Dry mouth / irritability / 'heat'", group: "Cold/Heat" },
  heaviness: { label: "Heaviness / foggy head / sticky feeling", group: "Fluids" },
  edema: { label: "Swelling / puffy eyelids / sock marks", group: "Fluids" },
  dry_constipation: { label: "Dryness / constipation tendency", group: "Fluids" },
};

const MAPPINGS_EN: Record<string, Text> = {
  // key: `${symptomId}__${organId}`
  "irritable__liver": "Stress/emotional regulation often shows up in the Liver system as 'rising/irritability'.",
  "low_mood__liver": "Persistent low mood is often explained as 'stuck flow' in education contexts.",
  "sighing__liver": "Sighing + tightness is a classic 'traffic jam' clue in TCM-style explanation.",
  "bloating__liver": "Stress-related bloating: rhythm disruption can show up in digestion first.",
  "insomnia__heart": "Restless or light sleep is commonly linked with the Heart system’s calming function.",
  "dreamy__heart": "Many dreams/unrefreshed sleep can reflect an 'unstable control room' model.",
  "heat__heart": "Dryness/irritability with restlessness can be explained as an overheat or low润 pattern.",
  "post_meal_sleepy__spleen": "Post-meal sleepiness often points to processing power and resource diversion.",
  "bloating__spleen": "Bloating after meals is a core clue for weak digestion/processing.",
  "heaviness__spleen": "Heaviness and fogginess match the 'damp' direction in common explanations.",
  "big_appetite__spleen": "Cravings can be 'intake > processing' and may overlap with stress eating.",
  "reflux__stomach": "Reflux/belching fits the 'stomach qi rising' pattern in education.",
  "heat__stomach": "Thirst, big appetite, bad breath may be grouped as 'stomach heat' patterns.",
  "dry_constipation__lung": "Dryness issues can use Lung-as-interface润泽 model.",
  "dry_constipation__large_intestine": "Constipation is directly linked to the Large Intestine level.",
  "tired__kidney": "Low stamina/slow recovery often points to low 'reserve/foundation' model.",
  "cold__kidney": "Cold intolerance often maps to a 'cold/low drive' foundation model.",
  "edema__kidney": "Swelling can be explained via lower fluid management and drive.",
  "edema__bladder": "If the 'drainage gate' doesn't open/close well, fluids can linger.",
  "edema__sanjiao": "When pathways are blocked, the Sanjiao model explains distribution issues.",
};

function overlayOrgan(base: Organ, lang: Lang): Organ {
  if (lang !== "en") return base;
  const over = ORGANS_EN[base.id];
  if (!over) return base;
  return { ...base, ...over, zh: base.zh, en: base.en };
}

function overlaySymptom(base: Symptom, lang: Lang): Symptom {
  if (lang !== "en") return base;
  const over = SYMPTOMS_EN[base.id];
  if (!over) return base;
  return { ...base, label: over.label, group: over.group };
}

function overlayMapping(base: SymptomMapping, lang: Lang): SymptomMapping {
  if (lang !== "en") return base;
  const k = `${base.symptomId}__${base.organId}`;
  const why = MAPPINGS_EN[k];
  return why ? { ...base, why } : base;
}

export function getOrgans(lang: Lang): Organ[] {
  return ORGANS.map((o) => overlayOrgan(o, lang));
}

export function getSymptoms(lang: Lang): Symptom[] {
  return SYMPTOMS.map((s) => overlaySymptom(s, lang));
}

export function getMappings(lang: Lang): SymptomMapping[] {
  return MAPPINGS.map((m) => overlayMapping(m, lang));
}
