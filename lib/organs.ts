import { Organ } from "./types";

export const ORGANS: Organ[] = [
  {
    id: "liver", zh: "肝", en: "Liver", category: "zang",
    tagline: "情绪与“气机交通”的调度中心：别堵、别冲、别乱跑。",
    does: ["疏通情绪与压力反应", "帮助消化系统“动起来”", "协调活动的流畅感"],
    normalFeels: ["情绪更稳定", "胸胁不闷、叹气少", "吃完不怎么胀"],
    commonPatterns: [
      { name: "压力憋着型（气机不畅）", signs: ["胸闷/胸胁胀","爱叹气","紧张就胃不舒服","易烦"], triggers: ["长期压力/压抑","作息乱","久坐少动"], explain: "像交通堵车：该走的不走、该下的不下。" },
      { name: "上冲急躁型（火/热偏盛）", signs: ["易怒","口苦/口干","睡不踏实","头胀/眼干"], triggers: ["熬夜","辛辣酒精","压力+缺觉"], explain: "像油门踩过头：节律过热、容易往上冲。" },
      { name: "供给不足型（血/阴偏虚）", signs: ["眼干","抽筋/麻","睡浅多梦","更敏感"], triggers: ["长期熬夜","过度用眼","恢复不够"], explain: "像电池容量低：不够用时就各种小报警。" }
    ],
    connections: [{ title: "肝→脾（压力大先伤消化）", explain: "压力一大就胀、嗳气、食欲乱，常见是节律被搞乱先在消化上表现。" }],
    misconceptions: ["“肝不好=肝功能异常”不等同。中医的“肝”更像一个功能系统。"],
    popularQuestions: [
      { q: "为什么我一生气就胃不舒服？", a: "科普角度：调度节律乱了，消化先受影响，所以先在胃上体现。" }
    ],
  },

  {
    id: "heart", zh: "心", en: "Heart", category: "zang",
    tagline: "清醒与安定的“主控室”：精神、睡眠、专注都跟它有关。",
    does: ["维持精神清明与专注感", "影响睡眠安稳", "推动血的循环（中医语境）"],
    normalFeels: ["睡得实", "心里更踏实", "注意力更稳定"],
    commonPatterns: [
      { name: "忙乱烦躁型（心火偏旺）", signs: ["心烦","入睡难","多梦","口干"], triggers: ["熬夜","咖啡因过多","焦虑长期拉满"], explain: "主控室过热：越想控制越睡不着。" },
      { name: "不够稳型（心血/心阴不足）", signs: ["睡浅易醒","记忆差","心悸/慌","白天没劲"], triggers: ["长期劳心","恢复不足","失血后未恢复"], explain: "供电不足：运行不稳、容易报警。" }
    ],
    connections: [{ title: "心↔肾（睡眠与精力）", explain: "很多失眠不是单点故障：上面太忙、下面太虚，会一起拖后腿。" }],
    misconceptions: ["“心火旺”不是心脏发炎；更多指烦躁、失眠等“过热表现”。"],
    popularQuestions: [{ q: "我很累但睡不着？", a: "常见是“主控室太忙/太热”或“供电不足却还在硬撑”。" }],
  },

  {
    id: "spleen", zh: "脾", en: "Spleen (TCM system)", category: "zang",
    tagline: "消化加工厂 + 能量分配中心：把吃的变成“你能用的”。",
    does: ["把饮食转化为精微（能量/营养）", "推动清浊分工", "与“湿”关系密切"],
    normalFeels: ["饭后不胀不困太多", "精力更稳", "大便相对成形"],
    commonPatterns: [
      { name: "动力不足型（运化弱）", signs: ["饭后胀","容易困","食欲乱","便溏"], triggers: ["久坐少动","吃得杂乱","压力+缺觉"], explain: "加工线转速低：原料堆着就胀、就困。" },
      { name: "湿气堆积型（湿重）", signs: ["身体沉重","头昏","粘滞感","水肿倾向"], triggers: ["甜腻油炸","潮湿环境","运动不足"], explain: "仓库潮了：东西变黏、清理变慢。" },
      { name: "吃得多但不转化型", signs: ["总想吃","吃完不消","体重上升","腹部胀"], triggers: ["高热量饮食","压力性进食","晚睡夜宵"], explain: "输入太快、处理跟不上：越堵越想再塞。" }
    ],
    connections: [{ title: "脾→肺（后勤上供）", explain: "消化转化不稳时，痰湿更容易上扰到肺（咳痰、胸闷等）。" }],
    misconceptions: ["“脾虚=脾脏有病”不等同。这里说的是转化与水湿管理的功能系统。"],
    popularQuestions: [{ q: "为什么我吃完就困？", a: "资源都被消化占用，再叠加转化动力不足就更明显。" }],
  },

  {
    id: "lung", zh: "肺", en: "Lung", category: "zang",
    tagline: "呼吸与防御的“外部接口”：你跟外界交换的那一层。",
    does: ["管理呼吸节奏", "与皮肤/防御相关（中医语境）", "水液通道的上游调度"],
    normalFeels: ["呼吸顺、胸不闷", "不容易反复感冒", "皮肤相对润泽"],
    commonPatterns: [
      { name: "防御偏弱型（卫外不足）", signs: ["容易感冒","怕风","动辄出汗","鼻子敏感"], triggers: ["长期疲劳","恢复差","久坐少动"], explain: "城墙薄：外界一变化就容易被影响。" },
      { name: "干燥偏盛型（燥/阴不足）", signs: ["干咳","咽干","皮肤干","便秘倾向"], triggers: ["熬夜","空调暖气","少水+辛辣"], explain: "接口缺润滑：越干越敏感。" }
    ],
    connections: [{ title: "肺←脾（痰湿上扰）", explain: "消化加工不稳→更容易有痰湿→影响肺的通畅。" }],
    misconceptions: ["“肺热/肺寒”不是体温的热冷；是咳痰鼻咽等一类表现模式。"],
    popularQuestions: [],
  },

  {
    id: "kidney", zh: "肾", en: "Kidney", category: "zang",
    tagline: "长期储备与底盘系统：耐力、恢复、骨与成长都离不开它。",
    does: ["维持长期精力与恢复能力", "与骨、腰膝、听力相关（中医语境）", "调节水液与下焦功能"],
    normalFeels: ["精力底盘稳","腰膝有力","睡醒更恢复"],
    commonPatterns: [
      { name: "底盘不足型（肾气/肾精偏虚）", signs: ["容易累","恢复慢","腰膝酸软","记忆下降"], triggers: ["长期熬夜","过劳","久病"], explain: "电池老化：续航变短、充得慢。" },
      { name: "偏冷偏虚型（肾阳偏虚）", signs: ["怕冷","手脚冷","清晨腹泻倾向","夜尿多"], triggers: ["长期受寒","久坐","长期疲劳"], explain: "发动机温度太低：动力不足、代谢慢。" },
      { name: "虚热上扰型（肾阴不足）", signs: ["口干","夜间燥热","睡浅","盗汗倾向"], triggers: ["熬夜","压力","辛辣+缺觉"], explain: "冷却液不够：表面是热，根子是“润不够”。" }
    ],
    connections: [{ title: "肾↔心（越累越睡不着）", explain: "底盘不足+主控室忙乱，容易出现“越累越睡不实”。" }],
    misconceptions: ["“肾虚=性功能问题”是过度简化。中医的“肾”更像底盘与储备系统。"],
    popularQuestions: [],
  },

  // 六腑（MVP：够用版）
  {
    id: "gallbladder", zh: "胆", en: "Gallbladder", category: "fu",
    tagline: "节律与决断的小帮手：跟“肝的调度”配合。",
    does: ["配合肝的节律", "科普：常与“果断/犹豫”一起讨论"],
    normalFeels: ["更能拿主意","饮食节律较稳"],
    commonPatterns: [{ name: "节律紊乱型", signs: ["口苦","胃胀","易烦"], triggers: ["熬夜","油腻辛辣","压力"], explain: "多见于肝胆一体的节律被打乱。" }],
    connections: [{ title: "胆与肝常一起看", explain: "口苦、易怒、胀等常被放在同一线索里理解。" }],
    misconceptions: ["这里不是在讲胆结石；把它当“节律线索”更容易理解。"],
    popularQuestions: [],
  },
  {
    id: "stomach", zh: "胃", en: "Stomach", category: "fu",
    tagline: "食物的“接收与初加工”。",
    does: ["接纳与腐熟食物", "科普：与“胃气”强弱相关"],
    normalFeels: ["食欲正常","饭后不顶不反"],
    commonPatterns: [
      { name: "上逆型", signs: ["嗳气","反酸","恶心","胸口顶"], triggers: ["吃太快","压力","睡前进食"], explain: "该往下走的没下去，于是往上顶。" },
      { name: "胃热偏盛型", signs: ["口渴喜冷","易饿","口臭","便秘倾向"], triggers: ["辛辣油炸","熬夜","急躁"], explain: "锅火太大：消耗快、需求也更强。" }
    ],
    connections: [{ title: "胃与脾是一对搭档", explain: "一个负责接收，一个负责转化分配；消化问题常一起看更清楚。" }],
    misconceptions: ["“胃火”不是胃炎诊断名；只是中医描述的一类表现模式。"],
    popularQuestions: [],
  },
  {
    id: "large_intestine", zh: "大肠", en: "Large Intestine", category: "fu",
    tagline: "排出与“干湿度管理”。",
    does: ["传导糟粕", "与津液/肺系统常联动讨论（科普）"],
    normalFeels: ["排便规律","不太干也不太稀"],
    commonPatterns: [
      { name: "偏干型", signs: ["便秘","口干","皮肤干"], triggers: ["缺水+熬夜","久坐少动"], explain: "水不够、路太干。" },
      { name: "偏稀型", signs: ["便溏/腹泻","怕冷","腹部隐痛"], triggers: ["受凉","饮食不洁","疲劳"], explain: "动力不足+节律乱。" }
    ],
    connections: [{ title: "肺与大肠（表里）", explain: "呼吸/皮肤/排便节律在中医里常会放一张图看。" }],
    misconceptions: [],
    popularQuestions: [],
  },
  {
    id: "small_intestine", zh: "小肠", en: "Small Intestine", category: "fu",
    tagline: "清浊分工：把可用的留下，不要的送走。",
    does: ["分清泌浊（科普）","与心系统表里"],
    normalFeels: ["小便与消化更有节律"],
    commonPatterns: [{ name: "分工忙乱型", signs: ["尿黄/尿急倾向","口渴","烦躁"], triggers: ["上火+熬夜","饮食刺激"], explain: "分拣线忙乱。" }],
    connections: [{ title: "心与小肠（表里）", explain: "烦躁、口渴、尿频等有时会一起讨论，但需结合整体。" }],
    misconceptions: [],
    popularQuestions: [],
  },
  {
    id: "bladder", zh: "膀胱", en: "Bladder", category: "fu",
    tagline: "水液的“储存与排出阀门”。",
    does: ["与排尿相关（科普）"],
    normalFeels: ["排尿顺畅","不频不急"],
    commonPatterns: [{ name: "水道不利型", signs: ["水肿","尿少","沉重感"], triggers: ["久坐","湿重环境","运动少"], explain: "阀门开合不灵。" }],
    connections: [{ title: "肾→膀胱", explain: "科普：下焦水液的动力多从肾系统来理解。" }],
    misconceptions: [],
    popularQuestions: [],
  },
  {
    id: "sanjiao", zh: "三焦", en: "Triple Burner", category: "fu",
    tagline: "全身“管道与分区调度”：上中下三段的通路概念。",
    does: ["水液与气机通路模型","把身体分成上/中/下功能区"],
    normalFeels: ["循环与代谢更顺","闷胀/水肿较少"],
    commonPatterns: [{ name: "通路不畅型", signs: ["闷胀","水肿","上热下寒感"], triggers: ["久坐少动","湿重+熬夜","压力"], explain: "管道堵塞或阀门失灵。" }],
    connections: [{ title: "三焦=通路概念", explain: "它不是具体器官，更像解释“通行与分布”的模型。" }],
    misconceptions: ["三焦不是解剖学器官；把它当“通道/分区系统”更容易理解。"],
    popularQuestions: [],
  },
];

export const ORGAN_BY_ID: Record<string, Organ> = Object.fromEntries(ORGANS.map(o => [o.id, o]));
