import type { Question } from '../types/quiz';

/**
 * 题库 —— 世界杯基因人格测试（8 题，每题 4 个选项，中英双语）
 * ----------------------------------------------------------------------------
 * 原型速查：ROCKET 冲锋狗 / ENGINE 永动机 / PLAYMAKER 球场军师 / ICEMAN 大心脏 /
 *          PHOENIX 逆转凤凰 / ANALYST 数据怪人 / IRON 铁人 / CHAOS 快乐足球家
 *
 * score 为加权打分（可同时给多个原型），刻意做成多对多映射，避免「选 A 就是某结果」。
 * 权重经全量组合（4^8=65536）校准，8 个原型分布尽量均衡、都可达。
 * 计分逻辑见 src/utils/calculateResult.ts —— 取最高分原型，并列按顺序兜底。
 */
export const questions: Question[] = [
  {
    id: 1,
    title: {
      zh: '世界杯决赛第89分钟，教练只能给你一个BUFF，你选？',
      en: "It's the 89th minute of the World Cup Final. Your coach can only upgrade one ability.",
    },
    options: [
      {
        id: 'a',
        text: { zh: '⚡ 冲刺速度翻倍，谁都追不上我', en: '⚡ Lightning Speed' },
        score: { ROCKET: 2 },
      },
      {
        id: 'b',
        text: { zh: '🔋 体力无限，再踢90分钟都行', en: '🔋 Endless Stamina' },
        score: { ENGINE: 2 },
      },
      {
        id: 'c',
        text: { zh: '🧠 看穿对手下一步动作', en: '🧠 Elite Focus' },
        score: { PLAYMAKER: 2, ANALYST: 1 },
      },
      {
        id: 'd',
        text: { zh: '🏥 比赛结束马上满血复活', en: '🏥 Fast Recovery' },
        score: { IRON: 2, PHOENIX: 1 },
      },
    ],
  },
  {
    id: 2,
    title: {
      zh: '点球大战开始前，你最像哪种人？',
      en: 'Penalty shootout. Which one are you?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '😎 我第一个上，越刺激越兴奋', en: '😎 Let me go first.' },
        score: { ROCKET: 2, CHAOS: 1 },
      },
      {
        id: 'b',
        text: { zh: '🧊 最后一球给我，我扛得住', en: "🧊 I'll take the final shot." },
        score: { ICEMAN: 2 },
      },
      {
        id: 'c',
        text: { zh: '📊 等等，我先研究门将习惯', en: '📊 Show me the statistics first.' },
        score: { ANALYST: 2, PLAYMAKER: 1 },
      },
      {
        id: 'd',
        text: { zh: '📣 我负责稳住全队气氛', en: "📣 I'll support the team." },
        score: { CHAOS: 1, ENGINE: 1 },
      },
    ],
  },
  {
    id: 3,
    title: {
      zh: '朋友约你踢球迟到了30分钟，你会？',
      en: 'Your friends are 30 minutes late to the match. What do you do?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '🤪 自己开始玩花式足球', en: '🤪 Practice tricks for fun.' },
        score: { CHAOS: 2, ROCKET: 1 },
      },
      {
        id: 'b',
        text: { zh: '🏃 先跑几圈热热身', en: '🏃 Go for extra training.' },
        score: { ENGINE: 2, IRON: 1 },
      },
      {
        id: 'c',
        text: { zh: '🍔 正好，先去找点吃的', en: '🍔 Grab something to eat.' },
        score: { IRON: 1, CHAOS: 1 },
      },
      {
        id: 'd',
        text: { zh: '📱 顺便研究一下战术', en: '📱 Analyze today’s strategy.' },
        score: { ANALYST: 2, PLAYMAKER: 1 },
      },
    ],
  },
  {
    id: 4,
    title: {
      zh: '如果运动天赋能抽SSR，你最想抽到什么？',
      en: 'If sports talent came as an SSR card, what would you choose?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '⚡ 爆发力', en: '⚡ Explosive Power' },
        score: { ROCKET: 2 },
      },
      {
        id: 'b',
        text: { zh: '🫀 超强耐力', en: '🫀 Elite Endurance' },
        score: { ENGINE: 2 },
      },
      {
        id: 'c',
        text: { zh: '🧠 顶级球商', en: '🧠 Tactical Intelligence' },
        score: { PLAYMAKER: 2 },
      },
      {
        id: 'd',
        text: { zh: '🏥 超快恢复', en: '🏥 Recovery Ability' },
        score: { PHOENIX: 2, IRON: 1 },
      },
    ],
  },
  {
    id: 5,
    title: {
      zh: '世界杯夺冠后，你第一件事会做什么？',
      en: "Your team just won the World Cup. What's your first move?",
    },
    options: [
      {
        id: 'a',
        text: { zh: '🕺 冲上看台庆祝', en: '🕺 Celebrate wildly.' },
        score: { CHAOS: 2, ROCKET: 1 },
      },
      {
        id: 'b',
        text: { zh: '📸 发朋友圈和小红书', en: '📸 Post it everywhere.' },
        score: { CHAOS: 1 },
      },
      {
        id: 'c',
        text: { zh: '😭 安静坐着消化情绪', en: '😭 Take it all in quietly.' },
        score: { ICEMAN: 2, PHOENIX: 1 },
      },
      {
        id: 'd',
        text: { zh: '🍜 终于可以狠狠干饭了', en: '🍜 Eat like a champion.' },
        score: { IRON: 2, ENGINE: 1 },
      },
    ],
  },
  {
    id: 6,
    title: {
      zh: '如果不当球员，你更适合？',
      en: "If you weren't a player, what role would fit you best?",
    },
    options: [
      {
        id: 'a',
        text: { zh: '🎤 热血队长', en: '🎤 Motivational Captain' },
        score: { PLAYMAKER: 2, ROCKET: 1 },
      },
      {
        id: 'b',
        text: { zh: '📈 数据分析师', en: '📈 Data Analyst' },
        score: { ANALYST: 2 },
      },
      {
        id: 'c',
        text: { zh: '🩺 队医与恢复专家', en: '🩺 Recovery Specialist' },
        score: { PHOENIX: 2, IRON: 1 },
      },
      {
        id: 'd',
        text: { zh: '🎭 吉祥物兼气氛担当', en: '🎭 Team Mascot' },
        score: { CHAOS: 2 },
      },
    ],
  },
  {
    id: 7,
    title: {
      zh: '比赛输了以后，你通常会……',
      en: 'After losing a match, you usually...',
    },
    options: [
      {
        id: 'a',
        text: { zh: '🔥 不服，再来一场', en: '🔥 Ask for a rematch.' },
        score: { PHOENIX: 2, ROCKET: 1 },
      },
      {
        id: 'b',
        text: { zh: '🧊 冷静复盘哪里出问题', en: '🧊 Review what went wrong.' },
        score: { ANALYST: 2, ICEMAN: 1 },
      },
      {
        id: 'c',
        text: { zh: '🤷 开心最重要', en: '🤷 Move on and enjoy life.' },
        score: { CHAOS: 2 },
      },
      {
        id: 'd',
        text: { zh: '😴 先恢复状态再说', en: '😴 Rest and recharge.' },
        score: { IRON: 2, ENGINE: 1 },
      },
    ],
  },
  {
    id: 8,
    title: {
      zh: '如果EBOVIR实验室能告诉你一个隐藏潜力，你最想知道？',
      en: 'If the EBOVIR Lab could reveal one hidden potential, what would you want to know?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '⚡ 我的速度与爆发潜力？', en: '⚡ My speed and power potential.' },
        score: { ROCKET: 2 },
      },
      {
        id: 'b',
        text: { zh: '🫀 我的耐力与恢复能力？', en: '🫀 My endurance and recovery profile.' },
        score: { ENGINE: 2, IRON: 1 },
      },
      {
        id: 'c',
        text: { zh: '🧠 我的专注与决策优势？', en: '🧠 My focus and decision strengths.' },
        score: { PLAYMAKER: 2, ANALYST: 1 },
      },
      {
        id: 'd',
        text: { zh: '💪 我的抗压与适应能力？', en: '💪 My resilience and adaptability.' },
        score: { ICEMAN: 2, PHOENIX: 1 },
      },
    ],
  },
];
