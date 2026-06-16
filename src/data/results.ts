import type { PersonalityResult } from '../types/quiz';

/**
 * 世界杯基因人格 —— 8 个收藏款原型（中英双语）
 * ----------------------------------------------------------------------------
 * code 与语言无关，作为查表 key；其余面向用户的文案用 { zh, en } 双语。
 * emoji 作为大「收藏角色」展示；gradient 是 Tailwind 渐变类名。
 *
 * 文案为娱乐 / 科普启发性质，避免医学夸大。
 */
export const results: PersonalityResult[] = [
  {
    code: 'ROCKET',
    name: { zh: '🚀 冲锋狗', en: 'THE ROCKET' },
    tagline: {
      zh: '别人还在思考，你已经冲出去了。',
      en: "Before others react, you're already moving.",
    },
    traits: {
      zh: ['行动派', '反应快', '不爱等待', '先冲再说'],
      en: ['Action-first', 'Lightning reflexes', 'Impatient', 'Charges ahead'],
    },
    strengths: {
      zh: ['短距冲刺', '快速反击', '抢点爆发'],
      en: ['Sprint bursts', 'Fast breaks', 'Explosive runs'],
    },
    dnaInspiration: {
      zh: '快肌纤维与爆发潜力。',
      en: 'Fast-twitch response and explosive potential.',
    },
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    emoji: '🚀',
  },
  {
    code: 'ENGINE',
    name: { zh: '🫀 永动机', en: 'THE ENGINE' },
    tagline: {
      zh: '你不会累，只会换挡。',
      en: "You don't stop. You shift gears.",
    },
    traits: {
      zh: ['耐力惊人', '稳定输出', '越战越勇', '不轻易停'],
      en: ['Tireless', 'Steady output', 'Gets stronger', 'Never quits'],
    },
    strengths: {
      zh: ['全场覆盖', '长跑续航', '高位逼抢'],
      en: ['Box-to-box', 'Long-distance stamina', 'Relentless pressing'],
    },
    dnaInspiration: {
      zh: '耐力与恢复效率。',
      en: 'Endurance and recovery efficiency.',
    },
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    emoji: '🫀',
  },
  {
    code: 'PLAYMAKER',
    name: { zh: '🧠 球场军师', en: 'THE PLAYMAKER' },
    tagline: {
      zh: '真正的高手，靠的是脑子。',
      en: 'The smartest move wins.',
    },
    traits: {
      zh: ['大局观', '会读比赛', '传球视野', '冷静指挥'],
      en: ['Big-picture', 'Reads the game', 'Great vision', 'Calm command'],
    },
    strengths: {
      zh: ['组织进攻', '关键直塞', '战术调度'],
      en: ['Orchestrating attacks', 'Killer passes', 'Tactical control'],
    },
    dnaInspiration: {
      zh: '决策力与认知表现。',
      en: 'Decision-making and cognitive performance.',
    },
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    emoji: '🧠',
  },
  {
    code: 'ICEMAN',
    name: { zh: '🧊 大心脏', en: 'THE ICE MAN' },
    tagline: {
      zh: '压力越大，你越冷静。',
      en: 'Pressure brings out your best.',
    },
    traits: {
      zh: ['临危不乱', '关键先生', '稳如冰山', '心理强大'],
      en: ['Unshakable', 'Clutch', 'Cool as ice', 'Mentally strong'],
    },
    strengths: {
      zh: ['点球决胜', '关键时刻', '逆境稳定'],
      en: ['Penalty kicks', 'Clutch moments', 'Steady under fire'],
    },
    dnaInspiration: {
      zh: '抗压能力与沉着。',
      en: 'Stress resilience and composure.',
    },
    gradient: 'from-sky-400 via-cyan-500 to-blue-600',
    emoji: '🧊',
  },
  {
    code: 'PHOENIX',
    name: { zh: '🔥 逆转凤凰', en: 'THE PHOENIX' },
    tagline: {
      zh: '跌倒没关系，你总能翻盘。',
      en: 'Every comeback starts with you.',
    },
    traits: {
      zh: ['永不放弃', '逆境反弹', '越挫越强', '翻盘体质'],
      en: ['Never gives up', 'Bounces back', 'Thrives on setbacks', 'Comeback king'],
    },
    strengths: {
      zh: ['绝境逆转', '快速适应', '下半场发力'],
      en: ['Late comebacks', 'Quick adaptation', 'Second-half surge'],
    },
    dnaInspiration: {
      zh: '恢复与适应。',
      en: 'Recovery and adaptation.',
    },
    gradient: 'from-orange-500 via-rose-500 to-fuchsia-600',
    emoji: '🔥',
  },
  {
    code: 'ANALYST',
    name: { zh: '📊 数据怪人', en: 'THE ANALYST' },
    tagline: {
      zh: '别人靠直觉，你靠概率。',
      en: 'You trust the numbers.',
    },
    traits: {
      zh: ['理性派', '细节控', '靠数据', '预判大师'],
      en: ['Rational', 'Detail-obsessed', 'Data-driven', 'Master of prediction'],
    },
    strengths: {
      zh: ['战术分析', '定位球设计', '对手研究'],
      en: ['Tactical analysis', 'Set-piece design', 'Opponent scouting'],
    },
    dnaInspiration: {
      zh: '模式识别与精准。',
      en: 'Pattern recognition and precision.',
    },
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    emoji: '📊',
  },
  {
    code: 'IRON',
    name: { zh: '🛡️ 铁人', en: 'KING IRON' },
    tagline: {
      zh: '抗造，是一种天赋。',
      en: 'Built to last.',
    },
    traits: {
      zh: ['身体硬朗', '恢复神速', '从不缺席', '扛得住'],
      en: ['Tough', 'Fast recovery', 'Always available', 'Takes a hit'],
    },
    strengths: {
      zh: ['身体对抗', '高强度连战', '快速复原'],
      en: ['Physical duels', 'Back-to-back games', 'Rapid recovery'],
    },
    dnaInspiration: {
      zh: '耐久与韧性。',
      en: 'Durability and resilience.',
    },
    gradient: 'from-cyan-400 via-sky-500 to-blue-700',
    emoji: '🛡️',
  },
  {
    code: 'CHAOS',
    name: { zh: '🤪 快乐足球家', en: 'CHAOS CREATOR' },
    tagline: {
      zh: '快乐才是最强战术。',
      en: 'Fun is your superpower.',
    },
    traits: {
      zh: ['鬼才创意', '随性发挥', '气氛担当', '快乐至上'],
      en: ['Creative genius', 'Improviser', 'Mood-maker', 'Joy-first'],
    },
    strengths: {
      zh: ['花式过人', '即兴配合', '点燃全场'],
      en: ['Flashy dribbles', 'Improvised plays', 'Hyping the crowd'],
    },
    dnaInspiration: {
      zh: '创造力与即兴。',
      en: 'Creativity and spontaneity.',
    },
    gradient: 'from-fuchsia-500 via-pink-500 to-amber-400',
    emoji: '🤪',
  },
];

/**
 * 兜底结果（fallback）—— 理论上 8 原型必有最高分，不会用到，仅作类型与极端兜底。
 */
export const fallbackResult: PersonalityResult = results[0];

/** 便捷查表：code -> result（运行时构建一次） */
export const resultMap: Record<string, PersonalityResult> = results.reduce(
  (map, r) => {
    map[r.code] = r;
    return map;
  },
  {} as Record<string, PersonalityResult>,
);
