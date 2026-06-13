import type { Question } from '../types/quiz';

/**
 * 题库配置（示例 12 题，每题 4 个选项，中英双语）
 * ----------------------------------------------------------------------------
 * 维度速查：
 *   P 表现驱动 / R 恢复修复 ｜ S 皮肤状态 / B 身体代谢 ｜
 *   A 主动管理 / N 自然随缘 ｜ T 科技检测 / C 日常护理
 *
 * 题目主题均匀覆盖：运动表现、睡眠恢复、皮肤抗老、饮食营养、健康风险意识、科技检测接受度。
 * 文案用 { zh, en } 双语；score 与语言无关，可同时给多个维度加分，例如 { T: 2, A: 1 }。
 * 计分逻辑见 src/utils/calculateResult.ts —— 不依赖题目数量，加减题目无需改代码。
 */
export const questions: Question[] = [
  // —— 运动表现 ——
  {
    id: 1,
    title: {
      zh: '说到运动，你最看重的是？',
      en: 'When it comes to exercise, what matters most to you?',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '突破极限、看到表现和成绩在进步',
          en: 'Pushing limits and seeing my performance improve',
        },
        score: { P: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '动得舒服、不累着自己，重在放松',
          en: 'Moving comfortably and staying relaxed, never overdoing it',
        },
        score: { R: 2, N: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '跟着训练数据和心率区间科学安排',
          en: 'Training scientifically with data and heart-rate zones',
        },
        score: { P: 1, T: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '保持规律就好，强度顺其自然',
          en: 'Just staying consistent — I let the intensity flow naturally',
        },
        score: { R: 1, C: 1, N: 1 },
      },
    ],
  },
  // —— 睡眠恢复 ——
  {
    id: 2,
    title: {
      zh: '高强度的一天之后，你通常会？',
      en: 'After an intense day, you usually…',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '安排拉伸、泡澡、按摩，认真帮身体恢复',
          en: 'Stretch, soak or get a massage — I take recovery seriously',
        },
        score: { R: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '照常作息，身体自己会缓过来',
          en: 'Keep my usual routine — my body bounces back on its own',
        },
        score: { N: 2, R: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '用手环看睡眠和恢复评分再决定怎么调整',
          en: "Check my wearable's sleep and recovery scores, then adjust",
        },
        score: { T: 2, R: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '不太在意恢复，第二天接着冲',
          en: "Don't think much about recovery — I go again the next day",
        },
        score: { P: 2 },
      },
    ],
  },
  // —— 皮肤抗老 ——
  {
    id: 3,
    title: {
      zh: '你对皮肤状态的关注程度是？',
      en: 'How much attention do you give your skin?',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '很关注，护肤、防晒、抗老一样不落',
          en: 'A lot — skincare, sun protection and anti-aging, all covered',
        },
        score: { S: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '基础清洁保湿即可，顺其自然',
          en: 'Just basic cleansing and moisturizing — I keep it natural',
        },
        score: { N: 2, C: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '更在意身体内在状态，皮肤其次',
          en: 'I care more about how my body feels inside; skin is secondary',
        },
        score: { B: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '会研究成分和检测，挑有依据的方案',
          en: 'I research ingredients and data to pick evidence-based options',
        },
        score: { S: 1, T: 2 },
      },
    ],
  },
  // —— 饮食营养 ——
  {
    id: 4,
    title: {
      zh: '面对每天的饮食，你的方式更接近？',
      en: 'Which best describes your approach to daily eating?',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '按营养比例和热量规划，主动管理',
          en: 'I plan macros and calories — I manage it actively',
        },
        score: { B: 1, A: 2 },
      },
      {
        id: 'b',
        text: {
          zh: '想吃就吃，凭感觉和心情',
          en: 'I eat what I feel like, by mood and instinct',
        },
        score: { N: 2 },
      },
      {
        id: 'c',
        text: {
          zh: '关注对皮肤、抗老有帮助的食物',
          en: 'I favor foods that support skin and a youthful look',
        },
        score: { S: 2, C: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '更在意代谢、血糖和身体内在指标',
          en: 'I focus on metabolism, blood sugar and internal markers',
        },
        score: { B: 2, T: 1 },
      },
    ],
  },
  // —— 健康风险意识 ——
  {
    id: 5,
    title: {
      zh: '对于潜在的健康风险，你的态度是？',
      en: "What's your attitude toward potential health risks?",
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '提前了解、主动预防，越早越好',
          en: 'Learn early and prevent proactively — the sooner the better',
        },
        score: { A: 2, T: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '有明显不适再处理，平时不太担心',
          en: "I deal with it only when something's clearly off",
        },
        score: { N: 2 },
      },
      {
        id: 'c',
        text: {
          zh: '靠规律作息和日常护理慢慢调养',
          en: 'I rely on a steady routine and daily care to stay balanced',
        },
        score: { C: 2, R: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '希望用检测和数据看清自己的情况',
          en: "I'd rather use testing and data to see my situation clearly",
        },
        score: { T: 2, A: 1 },
      },
    ],
  },
  // —— 科技检测接受度 ——
  {
    id: 6,
    title: {
      zh: '我更愿意通过数据、检测或报告了解身体状态。',
      en: "I'd rather understand my body through data, tests and reports.",
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '非常认同，越量化越安心',
          en: 'Strongly agree — the more quantified, the more reassured I feel',
        },
        score: { T: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '感觉比数据更重要，凭身体反应判断',
          en: 'Feeling matters more than data — I go by how my body responds',
        },
        score: { C: 2, N: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '检测可以参考，但更信任日常护理习惯',
          en: 'Tests are a reference, but I trust daily care habits more',
        },
        score: { C: 2, T: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '愿意尝试基因/体征检测来优化表现',
          en: 'Happy to try genetic or biometric testing to optimize performance',
        },
        score: { T: 2, P: 1 },
      },
    ],
  },
  // —— 运动表现 ——
  {
    id: 7,
    title: {
      zh: '理想中的运动状态是？',
      en: 'Your ideal physical state is…',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '更强、更快、更有力量的自己',
          en: 'A stronger, faster, more powerful me',
        },
        score: { P: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '身体轻盈、恢复快、少酸痛',
          en: 'Feeling light, recovering fast, with little soreness',
        },
        score: { R: 2, B: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '皮肤气色和身材线条都更好看',
          en: 'Better skin, complexion and body lines',
        },
        score: { S: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '代谢稳定、精力充沛、状态在线',
          en: 'Steady metabolism, plenty of energy, always on form',
        },
        score: { B: 2, R: 1 },
      },
    ],
  },
  // —— 睡眠恢复 ——
  {
    id: 8,
    title: {
      zh: '关于睡眠，你更像哪一种？',
      en: 'When it comes to sleep, which are you?',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '把睡眠当成头等大事，主动优化作息',
          en: 'I treat sleep as a top priority and actively optimize my routine',
        },
        score: { A: 2, R: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '困了就睡，随性而稳定',
          en: 'I sleep when tired — easygoing but steady',
        },
        score: { N: 2, R: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '用设备追踪睡眠质量并据此调整',
          en: 'I track sleep quality with a device and adjust accordingly',
        },
        score: { T: 2, A: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '靠泡脚、香薰、护理仪式帮助入睡',
          en: 'I wind down with foot soaks, aromas and little care rituals',
        },
        score: { C: 2, S: 1 },
      },
    ],
  },
  // —— 皮肤抗老 ——
  {
    id: 9,
    title: {
      zh: '看到「抗老」相关的话题，你会？',
      en: "When you come across 'anti-aging' topics, you…",
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '立刻关注，想了解最新的护理方向',
          en: 'Tune in right away — I want the latest care directions',
        },
        score: { S: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '更想知道身体内在的衰老和代谢信号',
          en: 'Am more curious about internal aging and metabolic signals',
        },
        score: { B: 2, T: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '顺其自然，保持心态年轻最重要',
          en: 'Take it easy — staying young at heart matters most',
        },
        score: { N: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '坚持日常护理和防晒，稳扎稳打',
          en: 'Stick to daily care and sun protection, step by step',
        },
        score: { C: 2, S: 1 },
      },
    ],
  },
  // —— 饮食营养 ——
  {
    id: 10,
    title: {
      zh: '挑选保健或营养补充时，你会？',
      en: 'When choosing supplements or nutrition, you…',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '研究成分和数据，按需求精准补充',
          en: 'Research ingredients and data, supplementing precisely to need',
        },
        score: { T: 2, A: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '吃天然食物为主，不太依赖额外补充',
          en: 'Mostly eat whole foods and rarely rely on extra supplements',
        },
        score: { N: 2, C: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '挑对皮肤、气色有帮助的',
          en: 'Pick what helps skin and complexion',
        },
        score: { S: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '关注代谢、肠道和身体内在平衡',
          en: 'Focus on metabolism, gut and internal balance',
        },
        score: { B: 2 },
      },
    ],
  },
  // —— 健康风险意识 ——
  {
    id: 11,
    title: {
      zh: '如果有一份关于你身体的个性化报告，你最想看？',
      en: "If you had a personalized report about your body, you'd most want to see…",
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '运动表现和体能潜力相关的部分',
          en: 'The parts about athletic performance and fitness potential',
        },
        score: { P: 2, T: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '皮肤、抗老和外在状态相关的部分',
          en: 'The parts about skin, anti-aging and outward condition',
        },
        score: { S: 2, A: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '营养、代谢和健康管理相关的部分',
          en: 'The parts about nutrition, metabolism and health management',
        },
        score: { B: 2, A: 1 },
      },
      {
        id: 'd',
        text: {
          zh: '恢复、压力和生活方式相关的部分',
          en: 'The parts about recovery, stress and lifestyle',
        },
        score: { R: 2, C: 1 },
      },
    ],
  },
  // —— 科技检测接受度 ——
  {
    id: 12,
    title: {
      zh: '测完这套题，你最希望得到？',
      en: 'After this quiz, what would you most like to get?',
    },
    options: [
      {
        id: 'a',
        text: {
          zh: '一份能帮我科学管理身体的方向建议',
          en: 'Guidance to help me manage my body scientifically',
        },
        score: { A: 2, T: 1 },
      },
      {
        id: 'b',
        text: {
          zh: '一个轻松有趣、能分享的人格标签',
          en: 'A fun, shareable personality label',
        },
        score: { N: 2, C: 1 },
      },
      {
        id: 'c',
        text: {
          zh: '关于皮肤与外在护理的灵感',
          en: 'Inspiration for skin and external care',
        },
        score: { S: 2 },
      },
      {
        id: 'd',
        text: {
          zh: '关于营养代谢与内在管理的灵感',
          en: 'Inspiration for nutrition, metabolism and internal care',
        },
        score: { B: 2 },
      },
    ],
  },
];
