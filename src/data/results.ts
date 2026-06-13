import type { PersonalityResult } from '../types/quiz';

/**
 * 人格结果配置（身体年轻力人格，中英双语）
 * ----------------------------------------------------------------------------
 * 全部 16 种 4 位组合（P/R · S/B · A/N · T/C）。
 * code / gradient / emoji 与语言无关；其余面向用户的文案用 { zh, en } 双语。
 *
 * 文案原则：避免医学夸大，不出现「治疗 / 治愈 / 逆转衰老 / 保证改善 / 诊断疾病」
 * （及英文 cure / treat / reverse aging / guarantee / diagnose）等表达；
 * 统一使用「皮肤状态管理 / 健康管理倾向 / 营养与代谢相关信息」这类中性表述。
 */
export const results: PersonalityResult[] = [
  {
    code: 'PSAT',
    name: { zh: '数据抗老先锋', en: 'Data-Driven Youth Pioneer' },
    slogan: {
      zh: '用数据看见状态，用主动定义年轻。',
      en: 'See your state through data; define youth through action.',
    },
    tags: {
      zh: ['表现驱动', '皮肤管理', '主动规划', '数据派'],
      en: ['Performance', 'Skincare', 'Proactive', 'Data-driven'],
    },
    description: {
      zh: '你既追求运动表现，也很在意皮肤与外在状态，习惯主动规划，并喜欢用检测和数据让一切有据可依。你相信「看得见」才更安心。',
      en: 'You chase performance yet care just as much about your skin and outward state. You plan proactively and like tests and data to back every decision — for you, seeing it is believing it.',
    },
    focusAreas: {
      zh: ['运动表现与体能提升', '皮肤状态管理', '主动型健康管理', '可量化的检测与追踪'],
      en: ['Performance & fitness', 'Skin-condition management', 'Proactive health management', 'Quantified testing & tracking'],
    },
    eboScienceRecommendation: {
      zh: '可以关注 EboScience 在皮肤状态管理与抗老护理方向的产品，搭配你已有的主动管理习惯，让外在护理更有节奏。',
      en: "Explore EboScience's skin-condition and anti-aging care directions; paired with your proactive habits, your external care can follow a clear rhythm.",
    },
    eboGenesRecommendation: {
      zh: '你偏好数据化决策，EboGenes 基因检测能帮你进一步了解营养、代谢与运动表现相关信息，作为规划的参考。',
      en: 'Since you like data-driven decisions, EboGenes genetic testing can help you learn more about nutrition, metabolism and performance-related information as a planning reference.',
    },
    aiConsultantRecommendation: {
      zh: '把检测信息连接到 AI Genetic Consultant，可获得更个性化的解读，帮助你把数据转化为可执行的管理方向。',
      en: 'Connect your test data to the AI Genetic Consultant for a more personalized read that turns data into actionable directions.',
    },
    gradient: 'from-cyan-400 via-teal-500 to-emerald-500',
    emoji: '🧬',
  },
  {
    code: 'PSAC',
    name: { zh: '自律护肤运动家', en: 'Disciplined Skincare Athlete' },
    slogan: {
      zh: '认真训练，也认真护理。',
      en: 'Train with intention; care with the same.',
    },
    tags: {
      zh: ['表现驱动', '皮肤管理', '主动规划', '日常护理'],
      en: ['Performance', 'Skincare', 'Proactive', 'Everyday care'],
    },
    description: {
      zh: '你在运动表现上很上进，对皮肤状态也很用心，更信任稳定的日常护理仪式而非一堆数据。规律和坚持是你的底色。',
      en: 'You strive in performance and care a lot about your skin, trusting steady daily rituals over piles of data. Consistency and follow-through define you.',
    },
    focusAreas: {
      zh: ['运动表现与体能', '皮肤状态管理', '稳定的护理习惯', '生活方式管理'],
      en: ['Performance & fitness', 'Skin-condition management', 'Steady care habits', 'Lifestyle management'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 的修复护理与抗老相关产品方向，很契合你重视日常护理的习惯，可作为护肤流程的补充。',
      en: "EboScience's repair-care and anti-aging directions fit your love of daily care and can round out your skincare routine.",
    },
    eboGenesRecommendation: {
      zh: '若想让护理更有针对性，EboGenes 基因检测能提供皮肤与营养相关信息，帮助你进一步了解自己。',
      en: 'To make care more targeted, EboGenes genetic testing offers skin- and nutrition-related information to help you understand yourself better.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以把你的习惯和检测信息结合，给出更个性化的护理与生活方式建议。',
      en: 'The AI Genetic Consultant can combine your habits and test data into more personalized care and lifestyle guidance.',
    },
    gradient: 'from-rose-400 via-pink-500 to-fuchsia-500',
    emoji: '✨',
  },
  {
    code: 'PSNT',
    name: { zh: '轻盈科技玩家', en: 'Easygoing Tech Explorer' },
    slogan: {
      zh: '随性生活，理性看数据。',
      en: 'Live easy, read the data with reason.',
    },
    tags: {
      zh: ['表现驱动', '皮肤管理', '自然随缘', '数据派'],
      en: ['Performance', 'Skincare', 'Easygoing', 'Data-driven'],
    },
    description: {
      zh: '你享受运动带来的好状态，也在意外在，但不爱被计划绑住——开心最重要。同时你又对检测和科技充满好奇，乐于尝鲜。',
      en: "You enjoy the glow of staying active and care about appearance, but you won't be tied down by plans — fun comes first. At the same time, you're curious about testing and tech, and happy to try new things.",
    },
    focusAreas: {
      zh: ['运动表现', '皮肤状态管理', '轻松的生活节奏', '科技检测体验'],
      en: ['Athletic performance', 'Skin-condition management', 'A relaxed pace', 'Tech & testing experiences'],
    },
    eboScienceRecommendation: {
      zh: '可以把 EboScience 的护理产品当作轻松的自我犒赏，按状态选择皮肤管理方向，不必给自己压力。',
      en: "Treat EboScience's care products as an easy little reward — pick a skin-management direction by how you feel, no pressure.",
    },
    eboGenesRecommendation: {
      zh: '你喜欢尝鲜，EboGenes 基因检测能让你以有趣的方式了解营养、代谢与皮肤相关信息。',
      en: 'Since you love trying things, EboGenes genetic testing is a fun way to learn about nutrition, metabolism and skin-related information.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把检测结果解读得更易懂，帮你在不费力的前提下更个性化地了解自己。',
      en: 'The AI Genetic Consultant makes test results easy to grasp, helping you get a more personalized read with little effort.',
    },
    gradient: 'from-sky-400 via-cyan-500 to-blue-500',
    emoji: '🛰️',
  },
  {
    code: 'PSNC',
    name: { zh: '自在状态主义者', en: 'Effortless Glow Seeker' },
    slogan: {
      zh: '状态好不好，身体会告诉我。',
      en: 'My body tells me how it feels.',
    },
    tags: {
      zh: ['表现驱动', '皮肤管理', '自然随缘', '日常护理'],
      en: ['Performance', 'Skincare', 'Easygoing', 'Everyday care'],
    },
    description: {
      zh: '你喜欢动起来的感觉，也在意皮肤与气色，但更愿意顺其自然、靠日常护理慢慢养。你相信舒服和坚持比焦虑更有用。',
      en: 'You love the feeling of moving and care about your skin and complexion, but prefer to let things take their course and build up with daily care. You trust comfort and consistency over anxiety.',
    },
    focusAreas: {
      zh: ['运动与活力', '皮肤状态管理', '轻松自然的节奏', '日常护理习惯'],
      en: ['Movement & vitality', 'Skin-condition management', 'A relaxed, natural pace', 'Daily care habits'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 温和的日常护理与抗老相关产品方向，很适合你「细水长流」的护理风格。',
      en: "EboScience's gentle daily-care and anti-aging directions suit your slow-and-steady style.",
    },
    eboGenesRecommendation: {
      zh: '如果某天想更了解自己，EboGenes 基因检测能补上营养与皮肤相关的客观信息，作为参考。',
      en: 'Whenever you feel like knowing more, EboGenes genetic testing adds objective nutrition- and skin-related information as a reference.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以用轻松的方式帮你解读身体信息，给出更个性化的护理灵感。',
      en: 'The AI Genetic Consultant can interpret your body information in a relaxed way and offer more personalized care inspiration.',
    },
    gradient: 'from-emerald-400 via-green-500 to-teal-500',
    emoji: '😌',
  },
  {
    code: 'PBAT',
    name: { zh: '代谢优化工程师', en: 'Metabolic Optimization Engineer' },
    slogan: {
      zh: '把身体当系统，持续迭代升级。',
      en: 'Treat the body as a system; keep iterating.',
    },
    tags: {
      zh: ['表现驱动', '身体代谢', '主动规划', '数据派'],
      en: ['Performance', 'Metabolism', 'Proactive', 'Data-driven'],
    },
    description: {
      zh: '你关注运动表现，更在意身体内在的代谢与能量，习惯主动管理并用数据驱动决策。对你来说，身体是一个值得优化的系统。',
      en: 'You care about performance and even more about internal metabolism and energy, managing proactively and letting data drive decisions. To you, the body is a system worth optimizing.',
    },
    focusAreas: {
      zh: ['运动表现与体能', '营养与代谢相关信息', '主动型健康管理', '数据化追踪'],
      en: ['Performance & fitness', 'Nutrition & metabolism info', 'Proactive health management', 'Data tracking'],
    },
    eboScienceRecommendation: {
      zh: '在专注内在管理之余，EboScience 的外在护理产品方向能帮你照顾到皮肤状态，让内外更平衡。',
      en: "Alongside your focus on the inside, EboScience's external-care directions help you tend to your skin so inside and outside stay balanced.",
    },
    eboGenesRecommendation: {
      zh: '非常契合你：EboGenes 基因检测能围绕营养、代谢与健康管理提供更多信息，支撑你的优化思路。',
      en: 'A strong fit: EboGenes genetic testing offers more information around nutrition, metabolism and health management to support your optimization mindset.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把代谢与营养相关数据转化为更个性化的解读和管理方向。',
      en: 'The AI Genetic Consultant can turn metabolism- and nutrition-related data into a more personalized read and management direction.',
    },
    gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    emoji: '⚙️',
  },
  {
    code: 'PBAC',
    name: { zh: '稳健代谢管家', en: 'Steady Metabolism Steward' },
    slogan: {
      zh: '稳稳地管理，长期有回报。',
      en: 'Manage steadily; the long game pays off.',
    },
    tags: {
      zh: ['表现驱动', '身体代谢', '主动规划', '日常护理'],
      en: ['Performance', 'Metabolism', 'Proactive', 'Everyday care'],
    },
    description: {
      zh: '你重视运动与内在代谢，做事有计划，但更信任稳定的日常习惯而非一堆设备。你用长期主义照顾身体。',
      en: 'You value exercise and internal metabolism and plan ahead, but trust steady daily habits over a pile of gadgets. You care for your body with a long-term mindset.',
    },
    focusAreas: {
      zh: ['运动与体能', '营养与代谢相关信息', '主动而稳定的管理', '生活方式管理'],
      en: ['Exercise & fitness', 'Nutrition & metabolism info', 'Proactive, steady management', 'Lifestyle management'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 的日常护理与抗老相关方向，可作为你内在管理之外的外在补充，照顾皮肤状态。',
      en: "EboScience's daily-care and anti-aging directions can complement your internal management and tend to your skin.",
    },
    eboGenesRecommendation: {
      zh: '想让管理更有依据时，EboGenes 基因检测能提供营养与代谢相关信息，帮助你进一步了解自己。',
      en: 'When you want more to go on, EboGenes genetic testing offers nutrition- and metabolism-related information to help you understand yourself better.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以结合你的习惯，给出更个性化的营养与生活方式建议。',
      en: 'The AI Genetic Consultant can build on your habits to offer more personalized nutrition and lifestyle guidance.',
    },
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
    emoji: '🧭',
  },
  {
    code: 'PBNT',
    name: { zh: '好奇代谢探索者', en: 'Curious Metabolism Explorer' },
    slogan: {
      zh: '随心而动，也乐于探索身体。',
      en: 'Move freely, and love exploring your body.',
    },
    tags: {
      zh: ['表现驱动', '身体代谢', '自然随缘', '数据派'],
      en: ['Performance', 'Metabolism', 'Easygoing', 'Data-driven'],
    },
    description: {
      zh: '你享受运动的活力，关注身体内在状态，不喜欢被计划框死，却对检测和科技充满好奇，愿意尝试新方式了解自己。',
      en: "You enjoy the energy of moving and pay attention to how your body feels inside. You don't like rigid plans, yet you're curious about testing and tech and happy to try new ways to know yourself.",
    },
    focusAreas: {
      zh: ['运动与活力', '营养与代谢相关信息', '轻松的节奏', '科技检测体验'],
      en: ['Movement & vitality', 'Nutrition & metabolism info', 'A relaxed pace', 'Tech & testing experiences'],
    },
    eboScienceRecommendation: {
      zh: '可以把 EboScience 的护理产品当作轻松的尝试，按需要照顾皮肤状态，不必有负担。',
      en: "Treat EboScience's care products as an easy experiment — tend to your skin as needed, no burden.",
    },
    eboGenesRecommendation: {
      zh: '你爱探索，EboGenes 基因检测正好能满足好奇心，提供营养、代谢相关信息。',
      en: 'You love to explore — EboGenes genetic testing satisfies that curiosity with nutrition- and metabolism-related information.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把检测结果讲得有趣又易懂，帮你更个性化地认识自己。',
      en: 'The AI Genetic Consultant explains test results in a fun, clear way to help you know yourself more personally.',
    },
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    emoji: '🔬',
  },
  {
    code: 'PBNC',
    name: { zh: '自然能量派', en: 'Natural Energy Type' },
    slogan: {
      zh: '动得开心，吃得自在，活力自然来。',
      en: 'Move with joy, eat with ease, energy follows.',
    },
    tags: {
      zh: ['表现驱动', '身体代谢', '自然随缘', '日常护理'],
      en: ['Performance', 'Metabolism', 'Easygoing', 'Everyday care'],
    },
    description: {
      zh: '你喜欢运动带来的能量，关注身体内在感受，崇尚自然、不爱算计，靠规律的日常习惯让自己保持状态。',
      en: 'You love the energy exercise brings and tune into how your body feels inside. You favor a natural approach over calculation, staying in form through steady daily habits.',
    },
    focusAreas: {
      zh: ['运动与活力', '营养与代谢相关信息', '自然的生活节奏', '日常护理习惯'],
      en: ['Movement & vitality', 'Nutrition & metabolism info', 'A natural pace of life', 'Daily care habits'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 温和的护理产品方向，契合你顺其自然的风格，可帮助照顾皮肤状态。',
      en: "EboScience's gentle care directions match your natural style and help you tend to your skin.",
    },
    eboGenesRecommendation: {
      zh: '想更了解自己时，EboGenes 基因检测能提供营养与代谢相关信息，作为轻松的参考。',
      en: 'When you want to know more, EboGenes genetic testing offers nutrition- and metabolism-related information as an easy reference.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以用轻松的方式帮你解读身体信息，给出更个性化的生活建议。',
      en: 'The AI Genetic Consultant can interpret your body information in a relaxed way and offer more personalized lifestyle guidance.',
    },
    gradient: 'from-lime-400 via-green-500 to-emerald-500',
    emoji: '🌱',
  },
  {
    code: 'RSAT',
    name: { zh: '修护抗老规划师', en: 'Recovery & Anti-Aging Planner' },
    slogan: {
      zh: '会休息，也会科学护理。',
      en: 'Rest well; care with method.',
    },
    tags: {
      zh: ['恢复修复', '皮肤管理', '主动规划', '数据派'],
      en: ['Recovery', 'Skincare', 'Proactive', 'Data-driven'],
    },
    description: {
      zh: '你重视恢复与修复，对皮肤状态很上心，习惯主动规划，并喜欢用检测和数据让护理更有方向。你懂得「养」比「拼」更长久。',
      en: 'You value recovery and care a lot about your skin. You plan proactively and like tests and data to give your care direction — you know that nurturing lasts longer than grinding.',
    },
    focusAreas: {
      zh: ['恢复与生活方式管理', '皮肤状态管理', '主动型健康管理', '可量化的检测追踪'],
      en: ['Recovery & lifestyle management', 'Skin-condition management', 'Proactive health management', 'Quantified testing & tracking'],
    },
    eboScienceRecommendation: {
      zh: '非常契合你：EboScience 的修复护理与抗老相关产品方向，能配合你重视恢复的节奏，照顾皮肤状态。',
      en: "A strong fit: EboScience's repair-care and anti-aging directions match your recovery-minded rhythm and tend to your skin.",
    },
    eboGenesRecommendation: {
      zh: '你偏好有依据的决策，EboGenes 基因检测能提供皮肤与营养相关信息，帮助护理更有针对性。',
      en: 'Since you like evidence-based decisions, EboGenes genetic testing offers skin- and nutrition-related information to make your care more targeted.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把检测信息转化为更个性化的护理与恢复管理建议。',
      en: 'The AI Genetic Consultant can turn your test data into more personalized care and recovery guidance.',
    },
    gradient: 'from-fuchsia-400 via-pink-500 to-rose-500',
    emoji: '🌸',
  },
  {
    code: 'RSAC',
    name: { zh: '温柔护理主理人', en: 'Gentle Care Curator' },
    slogan: {
      zh: '把自己照顾好，是最好的抗老。',
      en: 'Caring for yourself is the best anti-aging.',
    },
    tags: {
      zh: ['恢复修复', '皮肤管理', '主动规划', '日常护理'],
      en: ['Recovery', 'Skincare', 'Proactive', 'Everyday care'],
    },
    description: {
      zh: '你懂得给身体留出恢复空间，对皮肤状态很用心，喜欢有仪式感的日常护理。你用温柔而坚持的方式经营自己。',
      en: 'You know how to give your body room to recover, care attentively for your skin, and enjoy daily care with a sense of ritual. You tend to yourself gently and consistently.',
    },
    focusAreas: {
      zh: ['恢复与生活方式管理', '皮肤状态管理', '稳定的护理仪式', '健康管理倾向'],
      en: ['Recovery & lifestyle management', 'Skin-condition management', 'Steady care rituals', 'Health-management tendencies'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 的修复与抗老护理产品方向，正好贴合你重视日常护理的风格，可作为护理流程的一部分。',
      en: "EboScience's repair and anti-aging directions fit your love of daily care and can become part of your routine.",
    },
    eboGenesRecommendation: {
      zh: '若想让护理更有针对性，EboGenes 基因检测能提供皮肤与营养相关信息，帮助你进一步了解自己。',
      en: 'To make care more targeted, EboGenes genetic testing offers skin- and nutrition-related information to help you understand yourself better.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以结合你的护理习惯，给出更个性化的建议。',
      en: 'The AI Genetic Consultant can build on your care habits to offer more personalized guidance.',
    },
    gradient: 'from-rose-300 via-rose-400 to-pink-500',
    emoji: '🤍',
  },
  {
    code: 'RSNT',
    name: { zh: '佛系科技尝鲜家', en: 'Laid-Back Tech Sampler' },
    slogan: {
      zh: '放轻松，但乐于了解自己。',
      en: 'Stay relaxed, but love learning about yourself.',
    },
    tags: {
      zh: ['恢复修复', '皮肤管理', '自然随缘', '数据派'],
      en: ['Recovery', 'Skincare', 'Easygoing', 'Data-driven'],
    },
    description: {
      zh: '你不爱给自己压力，重视恢复和放松，也在意皮肤状态，但更随性。同时你对检测和科技保持好奇，愿意轻松尝试。',
      en: "You don't like piling on pressure — you value recovery and relaxation, care about your skin but stay easygoing. At the same time you're curious about testing and tech, happy to try things lightly.",
    },
    focusAreas: {
      zh: ['恢复与放松', '皮肤状态管理', '轻松的生活节奏', '科技检测体验'],
      en: ['Recovery & relaxation', 'Skin-condition management', 'A relaxed pace of life', 'Tech & testing experiences'],
    },
    eboScienceRecommendation: {
      zh: '把 EboScience 的护理产品当作放松时的自我犒赏，按状态选择皮肤管理方向即可。',
      en: "Treat EboScience's care products as a relaxing reward — just pick a skin-management direction by how you feel.",
    },
    eboGenesRecommendation: {
      zh: '你喜欢尝鲜，EboGenes 基因检测能以轻松的方式提供皮肤与营养相关信息。',
      en: 'Since you love sampling, EboGenes genetic testing offers skin- and nutrition-related information in a relaxed way.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把检测结果解读得轻松易懂，帮你更个性化地了解自己。',
      en: 'The AI Genetic Consultant explains test results in an easy, clear way to help you know yourself more personally.',
    },
    gradient: 'from-sky-300 via-blue-400 to-indigo-500',
    emoji: '🫧',
  },
  {
    code: 'RSNC',
    name: { zh: '松弛感生活家', en: 'Slow-Living Aesthete' },
    slogan: {
      zh: '慢一点，皮肤和心情都更好。',
      en: 'Slow down — your skin and mood both thank you.',
    },
    tags: {
      zh: ['恢复修复', '皮肤管理', '自然随缘', '日常护理'],
      en: ['Recovery', 'Skincare', 'Easygoing', 'Everyday care'],
    },
    description: {
      zh: '你崇尚松弛与平衡，重视休息，在意皮肤气色，但更愿意顺其自然，用温和的日常护理慢慢养。你相信状态来自从容。',
      en: 'You embrace ease and balance, value rest, and care about your skin and complexion — but prefer to let things flow, nurturing slowly with gentle daily care. You believe good condition comes from calm.',
    },
    focusAreas: {
      zh: ['恢复与放松', '皮肤状态管理', '松弛的生活节奏', '日常护理习惯'],
      en: ['Recovery & relaxation', 'Skin-condition management', 'A relaxed pace of life', 'Daily care habits'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 温和的日常护理与抗老相关产品方向，非常契合你「慢养」的风格。',
      en: "EboScience's gentle daily-care and anti-aging directions fit your slow-nurturing style beautifully.",
    },
    eboGenesRecommendation: {
      zh: '某天想更了解自己时，EboGenes 基因检测能补上皮肤与营养相关的客观信息作为参考。',
      en: 'Whenever you want to know more, EboGenes genetic testing adds objective skin- and nutrition-related information as a reference.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以用轻松的方式帮你解读身体信息，给出更个性化的护理灵感。',
      en: 'The AI Genetic Consultant can interpret your body information in a relaxed way and offer more personalized care inspiration.',
    },
    gradient: 'from-teal-300 via-emerald-400 to-green-500',
    emoji: '🍃',
  },
  {
    code: 'RBAT',
    name: { zh: '内在调养策略家', en: 'Inner Wellness Strategist' },
    slogan: {
      zh: '照顾好里子，状态自然在线。',
      en: 'Care for the inside, and form follows.',
    },
    tags: {
      zh: ['恢复修复', '身体代谢', '主动规划', '数据派'],
      en: ['Recovery', 'Metabolism', 'Proactive', 'Data-driven'],
    },
    description: {
      zh: '你重视恢复，更关注身体内在的代谢与平衡，习惯主动规划并用数据辅助决策。你懂得从根本上经营自己的状态。',
      en: 'You value recovery and focus even more on internal metabolism and balance, planning proactively and using data to guide decisions. You know how to manage your condition from the ground up.',
    },
    focusAreas: {
      zh: ['恢复与生活方式管理', '营养与代谢相关信息', '主动型健康管理', '数据化追踪'],
      en: ['Recovery & lifestyle management', 'Nutrition & metabolism info', 'Proactive health management', 'Data tracking'],
    },
    eboScienceRecommendation: {
      zh: '在内在调养之余，EboScience 的外在护理产品方向能帮你照顾皮肤状态，让内外更协调。',
      en: "Alongside your inner work, EboScience's external-care directions help you tend to your skin so inside and outside stay in sync.",
    },
    eboGenesRecommendation: {
      zh: '非常契合你：EboGenes 基因检测能围绕营养、代谢与健康管理提供更多信息，支持你的调养策略。',
      en: 'A strong fit: EboGenes genetic testing offers more information around nutrition, metabolism and health management to support your strategy.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把代谢与恢复相关数据转化为更个性化的管理建议。',
      en: 'The AI Genetic Consultant can turn metabolism- and recovery-related data into more personalized management guidance.',
    },
    gradient: 'from-blue-400 via-indigo-500 to-violet-500',
    emoji: '🧩',
  },
  {
    code: 'RBAC',
    name: { zh: '平衡养生管家', en: 'Balanced Wellness Keeper' },
    slogan: {
      zh: '稳稳调养，慢慢变好。',
      en: 'Nurture steadily; improve gradually.',
    },
    tags: {
      zh: ['恢复修复', '身体代谢', '主动规划', '日常护理'],
      en: ['Recovery', 'Metabolism', 'Proactive', 'Everyday care'],
    },
    description: {
      zh: '你重视恢复与内在代谢，做事有规划，但更信任稳定的日常习惯。你用平衡和耐心照顾身体，相信积累的力量。',
      en: 'You value recovery and internal metabolism and plan ahead, but trust steady daily habits most. You care for your body with balance and patience, believing in the power of small accruals.',
    },
    focusAreas: {
      zh: ['恢复与生活方式管理', '营养与代谢相关信息', '稳定的健康管理', '日常护理习惯'],
      en: ['Recovery & lifestyle management', 'Nutrition & metabolism info', 'Steady health management', 'Daily care habits'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 的日常护理与抗老相关方向，可作为你内在调养之外的外在补充，照顾皮肤状态。',
      en: "EboScience's daily-care and anti-aging directions can complement your inner work and tend to your skin.",
    },
    eboGenesRecommendation: {
      zh: '想让调养更有依据时，EboGenes 基因检测能提供营养与代谢相关信息，帮助你进一步了解自己。',
      en: 'When you want more to go on, EboGenes genetic testing offers nutrition- and metabolism-related information to help you understand yourself better.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以结合你的习惯，给出更个性化的营养与恢复建议。',
      en: 'The AI Genetic Consultant can build on your habits to offer more personalized nutrition and recovery guidance.',
    },
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    emoji: '🍵',
  },
  {
    code: 'RBNT',
    name: { zh: '随心调理探索者', en: 'Free-Spirited Wellness Explorer' },
    slogan: {
      zh: '不强求，但愿意懂自己。',
      en: 'No forcing — just a willingness to understand yourself.',
    },
    tags: {
      zh: ['恢复修复', '身体代谢', '自然随缘', '数据派'],
      en: ['Recovery', 'Metabolism', 'Easygoing', 'Data-driven'],
    },
    description: {
      zh: '你重视恢复和内在感受，崇尚自然、不爱被计划绑住，却对检测和科技保持好奇，愿意以轻松的方式更了解身体。',
      en: "You value recovery and how you feel inside, favor a natural approach and dislike rigid plans — yet you stay curious about testing and tech, happy to understand your body in a relaxed way.",
    },
    focusAreas: {
      zh: ['恢复与放松', '营养与代谢相关信息', '轻松的节奏', '科技检测体验'],
      en: ['Recovery & relaxation', 'Nutrition & metabolism info', 'A relaxed pace', 'Tech & testing experiences'],
    },
    eboScienceRecommendation: {
      zh: '把 EboScience 的护理产品当作轻松的尝试，按需要照顾皮肤状态即可。',
      en: "Treat EboScience's care products as an easy experiment — just tend to your skin as needed.",
    },
    eboGenesRecommendation: {
      zh: '你爱探索，EboGenes 基因检测能满足好奇心，提供营养与代谢相关信息。',
      en: 'You love to explore — EboGenes genetic testing satisfies that curiosity with nutrition- and metabolism-related information.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 能把检测结果讲得有趣易懂，帮你更个性化地认识自己。',
      en: 'The AI Genetic Consultant explains test results in a fun, clear way to help you know yourself more personally.',
    },
    gradient: 'from-purple-400 via-violet-500 to-indigo-600',
    emoji: '🔭',
  },
  {
    code: 'RBNC',
    name: { zh: '自然平衡派', en: 'Natural Balance Type' },
    slogan: {
      zh: '顺其自然，身心都松弛。',
      en: 'Go with the flow; body and mind at ease.',
    },
    tags: {
      zh: ['恢复修复', '身体代谢', '自然随缘', '日常护理'],
      en: ['Recovery', 'Metabolism', 'Easygoing', 'Everyday care'],
    },
    description: {
      zh: '你崇尚自然与平衡，重视休息，关注身体内在感受，靠规律温和的日常习惯让自己保持状态。从容，是你的关键词。',
      en: 'You embrace nature and balance, value rest, and tune into how your body feels inside, staying in form through gentle, regular habits. Composure is your keyword.',
    },
    focusAreas: {
      zh: ['恢复与放松', '营养与代谢相关信息', '自然的生活节奏', '日常护理习惯'],
      en: ['Recovery & relaxation', 'Nutrition & metabolism info', 'A natural pace of life', 'Daily care habits'],
    },
    eboScienceRecommendation: {
      zh: 'EboScience 温和的护理产品方向，契合你顺其自然的风格，可帮助照顾皮肤状态。',
      en: "EboScience's gentle care directions match your go-with-the-flow style and help you tend to your skin.",
    },
    eboGenesRecommendation: {
      zh: '想更了解自己时，EboGenes 基因检测能提供营养与代谢相关信息，作为轻松的参考。',
      en: 'When you want to know more, EboGenes genetic testing offers nutrition- and metabolism-related information as an easy reference.',
    },
    aiConsultantRecommendation: {
      zh: 'AI Genetic Consultant 可以用轻松的方式帮你解读身体信息，给出更个性化的生活建议。',
      en: 'The AI Genetic Consultant can interpret your body information in a relaxed way and offer more personalized lifestyle guidance.',
    },
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    emoji: '🌿',
  },
];

/**
 * 兜底结果（fallback）
 * 当出现并列、数据缺失等导致 code 未命中 results 时使用。
 * calculateResult 会把真实算出的 code 覆盖到 fallback 上再返回。
 */
export const fallbackResult: PersonalityResult = {
  code: '----',
  name: { zh: '均衡年轻力', en: 'Balanced Vitality' },
  slogan: {
    zh: '你的身体年轻力，丰富到难以归类。',
    en: 'Your body-age profile is too well-rounded to pin down.',
  },
  tags: {
    zh: ['均衡', '多面手', '可塑性强'],
    en: ['Balanced', 'All-rounder', 'Adaptable'],
  },
  description: {
    zh: '你在表现、皮肤、恢复、饮食和健康管理上都很均衡，没有明显偏向。这意味着你适应力很强，可以从任意一个方向开始，帮助自己进一步了解身体状态。',
    en: "You're balanced across performance, skin, recovery, diet and health management, with no strong lean. That makes you highly adaptable — start from any direction to get to know your body better.",
  },
  focusAreas: {
    zh: ['运动表现', '皮肤状态管理', '营养与代谢相关信息', '恢复与生活方式管理'],
    en: ['Athletic performance', 'Skin-condition management', 'Nutrition & metabolism info', 'Recovery & lifestyle management'],
  },
  eboScienceRecommendation: {
    zh: '可以从 EboScience 的皮肤状态管理与护理产品方向开始，找到适合自己的外在护理节奏。',
    en: "Start with EboScience's skin-condition management and care directions to find an external-care rhythm that suits you.",
  },
  eboGenesRecommendation: {
    zh: 'EboGenes 基因检测能围绕营养、代谢与健康管理提供更多信息，帮助你更清晰地了解自己。',
    en: 'EboGenes genetic testing offers more information around nutrition, metabolism and health management to help you understand yourself more clearly.',
  },
  aiConsultantRecommendation: {
    zh: 'AI Genetic Consultant 可以把这些信息整合成更个性化的解读和管理方向。',
    en: 'The AI Genetic Consultant can pull these together into a more personalized read and management direction.',
  },
  gradient: 'from-slate-400 via-slate-500 to-slate-700',
  emoji: '🧬',
};

/** 便捷查表：code -> result（运行时构建一次） */
export const resultMap: Record<string, PersonalityResult> = results.reduce(
  (map, r) => {
    map[r.code] = r;
    return map;
  },
  {} as Record<string, PersonalityResult>,
);
