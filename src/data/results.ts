import type { PersonalityResult } from '../types/quiz';

/**
 * 人格结果配置
 * ----------------------------------------------------------------------------
 * 这里写满了全部 16 种 4 位组合（A/E · R/S · T/F · C/I）。
 * code 必须与 calculateResult 生成的 4 位代码完全一致才能命中。
 * gradient 是 Tailwind 渐变类名字符串，已被 tailwind.config.js 的 content 扫描收录。
 *
 * 替换文案时只改字段值即可；只要 code 不变，匹配逻辑无需改动。
 * 扩展点（品牌定制结果页）：可在每个结果上加 image、couponId、productId 等字段。
 */
export const results: PersonalityResult[] = [
  {
    code: 'ARTC',
    name: '闪电格斗家',
    slogan: '爆发即正义，赛场见真章。',
    tags: ['爆发力', '敢挑战', '重技术', '爱竞技'],
    description:
      '你天生为高强度对抗而生，喜欢在短时间内释放全部能量，靠扎实的技术和好胜心在竞争中脱颖而出。挑战越大，你越兴奋。',
    sports: ['搏击 / 拳击', '短跑冲刺', 'CrossFit', '篮球', 'HIIT 团课'],
    trainingStyle: '以高强度间歇 + 技术打磨为主，设定可量化的对抗目标，定期参加比赛激发潜能。',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    emoji: '⚡',
  },
  {
    code: 'ARTI',
    name: '极限技术控',
    slogan: '把每个动作练到极致，只和自己较劲。',
    tags: ['爆发力', '敢挑战', '重技术', '自我探索'],
    description:
      '你追求动作的精准与突破，享受钻研高难度技巧的过程。比起赢过别人，你更在意征服自己设下的难关。',
    sports: ['攀岩', '滑板', '体操', '武术套路', '自由潜水'],
    trainingStyle: '专注分解动作与技术进阶，循序挑战更高难度，用录像复盘代替和他人比较。',
    gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    emoji: '🎯',
  },
  {
    code: 'ARFC',
    name: '野性冲刺手',
    slogan: '凭本能爆发，为胜利燃烧。',
    tags: ['爆发力', '敢挑战', '凭感觉', '爱竞技'],
    description:
      '你是赛场上的热血担当，靠直觉和爆发力压制对手。不爱按部就班，但一到关键时刻总能点燃全场。',
    sports: ['足球', '篮球', '短跑', '橄榄球', '极限飞盘'],
    trainingStyle: '多打实战和对抗赛，用比赛节奏保持状态，热身与恢复别偷懒以防受伤。',
    gradient: 'from-red-500 via-rose-500 to-pink-600',
    emoji: '🔥',
  },
  {
    code: 'ARFI',
    name: '肾上腺探险家',
    slogan: '刺激在哪，我就在哪。',
    tags: ['爆发力', '敢挑战', '凭感觉', '自我探索'],
    description:
      '你为肾上腺素而活，热爱新鲜、刺激、未知的运动体验。规则和计划束缚不了你，自由和冒险才是你的燃料。',
    sports: ['冲浪', '滑雪', '蹦极', '越野摩托', '跑酷'],
    trainingStyle: '以体验式挑战为主，不断尝试新项目，但务必先学习安全防护与风险评估。',
    gradient: 'from-orange-400 via-pink-500 to-purple-600',
    emoji: '🪂',
  },
  {
    code: 'ASTC',
    name: '精准力量王',
    slogan: '稳扎稳打，力量碾压。',
    tags: ['爆发力', '稳健', '重技术', '爱竞技'],
    description:
      '你相信力量来自科学与坚持，喜欢用标准动作和系统计划稳步提升，并在竞技中验证自己的训练成果。',
    sports: ['举重', '力量举', '健美', '短距游泳', '赛艇'],
    trainingStyle: '遵循周期化力量计划，重视动作标准与渐进超负荷，定期测试 1RM 或参加比赛。',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    emoji: '🏋️',
  },
  {
    code: 'ASTI',
    name: '数据健身家',
    slogan: '用数据雕刻身体。',
    tags: ['爆发力', '稳健', '重技术', '自我探索'],
    description:
      '你是理性派训练者，喜欢用计划、记录和数据驱动进步。不爱攀比，只想看到自己一点点变强。',
    sports: ['器械健身', '普拉提', '心率区间训练', '抱石攀岩', '游泳'],
    trainingStyle: '制定可量化的训练日志，关注动作质量与身体反馈，按数据微调计划。',
    gradient: 'from-sky-500 via-cyan-500 to-blue-600',
    emoji: '📊',
  },
  {
    code: 'ASFC',
    name: '节奏对抗者',
    slogan: '稳住节奏，赢在默契。',
    tags: ['爆发力', '稳健', '凭感觉', '爱竞技'],
    description:
      '你在团队对抗中游刃有余，靠稳定发挥和出色球感掌控比赛。不张扬，却是队友最信赖的中坚。',
    sports: ['篮球', '排球', '羽毛球', '网球双打', '足球'],
    trainingStyle: '以团队配合和实战演练为主，稳定基本功，靠比赛手感而非死磕数据。',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    emoji: '🏀',
  },
  {
    code: 'ASFI',
    name: '本能爆发派',
    slogan: '身体知道答案。',
    tags: ['爆发力', '稳健', '凭感觉', '自我探索'],
    description:
      '你训练靠身体直觉，状态好就上强度，累了就调整。稳健而不刻板，享受运动本身的爽感。',
    sports: ['自由力量训练', '街头健身', '舞蹈', '拳击有氧', '冲刺跑'],
    trainingStyle: '倾听身体信号安排强度，保持规律但灵活的节奏，享受过程胜过追求数字。',
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
    emoji: '💥',
  },
  {
    code: 'ERTC',
    name: '战术耐力者',
    slogan: '比的是耐力，拼的是策略。',
    tags: ['耐力', '敢挑战', '重技术', '爱竞技'],
    description:
      '你是长线作战的高手，懂得用节奏和战术分配体能，在漫长赛程中后程发力击败对手。',
    sports: ['公路自行车', '铁人三项', '中长跑', '越野跑', '赛艇'],
    trainingStyle: '结合配速训练与战术演练，模拟比赛场景，重视补给与节奏控制。',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    emoji: '🚴',
  },
  {
    code: 'ERTI',
    name: '越野探路人',
    slogan: '路再长，也要走出自己的线。',
    tags: ['耐力', '敢挑战', '重技术', '自我探索'],
    description:
      '你享受在复杂地形中长时间挑战自我，靠技术和耐力征服未知路线，唯一的对手只有自己。',
    sports: ['越野跑', '登山', '长距离徒步', '攀冰', '山地车'],
    trainingStyle: '渐进提升里程与地形难度，打磨路线规划与装备技术，记录每一次个人突破。',
    gradient: 'from-teal-500 via-emerald-500 to-green-600',
    emoji: '🧗',
  },
  {
    code: 'ERFC',
    name: '热血马拉松',
    slogan: '用心跳丈量赛道。',
    tags: ['耐力', '敢挑战', '凭感觉', '爱竞技'],
    description:
      '你靠热情和韧劲跑完全程，享受赛事氛围和冲线的高光。配速凭感觉，意志却无比坚定。',
    sports: ['马拉松', '长距离骑行', '公开水域游泳', '障碍赛', '划船马拉松'],
    trainingStyle: '积累有氧基础里程，多参加赛事保持热情，靠体感配速但注意循序渐进。',
    gradient: 'from-rose-400 via-red-500 to-orange-500',
    emoji: '🏃',
  },
  {
    code: 'ERFI',
    name: '孤独远征者',
    slogan: '一个人，也能走很远。',
    tags: ['耐力', '敢挑战', '凭感觉', '自我探索'],
    description:
      '你热爱独自踏上漫长旅程，在自然中与自己对话。不为名次，只为抵达内心的远方。',
    sports: ['长线徒步', '独自骑行', '越野跑', '桨板远行', '登山'],
    trainingStyle: '以长时间低强度有氧为主，凭感觉调整节奏，注重自我补给与心理耐受。',
    gradient: 'from-indigo-500 via-blue-600 to-slate-700',
    emoji: '🏔️',
  },
  {
    code: 'ESTC',
    name: '稳健战略家',
    slogan: '稳一点，赢到最后。',
    tags: ['耐力', '稳健', '重技术', '爱竞技'],
    description:
      '你是耐力赛场上冷静的棋手，靠科学计划和稳定执行笑到最后。不冒进，却总能稳稳达标。',
    sports: ['铁人三项', '公路骑行', '长距游泳', '划船机', '配速跑'],
    trainingStyle: '执行周期化耐力计划，重视心率区间与技术效率，比赛中严格控速。',
    gradient: 'from-violet-500 via-indigo-500 to-blue-600',
    emoji: '♟️',
  },
  {
    code: 'ESTI',
    name: '自律修行者',
    slogan: '自律，是最高级的运动天赋。',
    tags: ['耐力', '稳健', '重技术', '自我探索'],
    description:
      '你把运动当作一种修行，享受规律、专注和长期主义。进步缓慢但坚定，身心同步成长。',
    sports: ['长跑', '瑜伽', '普拉提', '游泳', '骑行通勤'],
    trainingStyle: '保持稳定的训练频率与正确姿态，关注呼吸与身体觉察，靠长期积累复利。',
    gradient: 'from-slate-500 via-slate-600 to-slate-800',
    emoji: '🧘',
  },
  {
    code: 'ESFC',
    name: '团队续航者',
    slogan: '陪队友跑到终点的人。',
    tags: ['耐力', '稳健', '凭感觉', '爱竞技'],
    description:
      '你在长时间团队运动中稳定输出，是团队里的耐力发动机。靠默契和韧性，和大家一起赢。',
    sports: ['足球', '曲棍球', '龙舟', '接力跑', '团队骑行'],
    trainingStyle: '以团队耐力训练和配合为主，保持稳定基础体能，靠氛围和体感维持节奏。',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    emoji: '🤝',
  },
  {
    code: 'ESFI',
    name: '自在长跑魂',
    slogan: '跑着跑着，世界就安静了。',
    tags: ['耐力', '稳健', '凭感觉', '自我探索'],
    description:
      '你享受平稳、自在、不被打扰的运动时光。没有目标的压力，只有呼吸、节奏和自由的心。',
    sports: ['慢跑', '骑行', '游泳', '快走', '流瑜伽'],
    trainingStyle: '保持轻松规律的有氧习惯，凭感觉享受过程，把运动变成一种生活方式。',
    gradient: 'from-lime-400 via-green-500 to-emerald-600',
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
  name: '全能运动家',
  slogan: '你的运动基因，丰富到难以归类。',
  tags: ['均衡', '多面手', '可塑性强'],
  description:
    '你的各项运动特质都很均衡，没有明显偏科，这意味着你适应力极强，几乎能驾驭任何类型的运动。多去尝试，找到最让你上瘾的那一种吧。',
  sports: ['综合体能', '游泳', '骑行', '球类运动', '力量训练'],
  trainingStyle: '保持多样化的交叉训练，广泛尝试不同项目，在体验中发现自己真正的偏好。',
  gradient: 'from-slate-500 via-slate-600 to-slate-700',
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
