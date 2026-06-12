import type { Question } from '../types/quiz';

/**
 * 题库配置（示例 12 题，每题 4 个选项）
 * ----------------------------------------------------------------------------
 * 维度速查：
 *   A 爆发力 / E 耐力 ｜ R 挑战 / S 稳健 ｜ T 技术 / F 感觉 ｜ C 竞技 / I 自我
 *
 * 每个选项的 score 可同时给多个维度加分，例如 { A: 2, C: 1 }。
 * 计分逻辑见 src/utils/calculateResult.ts —— 不依赖题目数量，加减题目无需改代码。
 *
 * 替换题目时只要保持本数组的结构即可：
 *   - id 不重复
 *   - 每题 options 的 id 在题内唯一
 *   - score 的 key 只能是 8 个维度字母
 */
export const questions: Question[] = [
  {
    id: 1,
    title: '你最享受的运动节奏是？',
    options: [
      { id: 'a', text: '短时间高强度爆发，比如冲刺、HIIT、力量训练', score: { A: 2, C: 1 } },
      { id: 'b', text: '长时间稳定输出，比如长跑、骑行、游泳', score: { E: 2, I: 1 } },
      { id: 'c', text: '节奏多变、随心而动，哪种爽来哪种', score: { F: 2, A: 1 } },
      { id: 'd', text: '有计划地分阶段推进，循序渐进', score: { S: 2, T: 1 } },
    ],
  },
  {
    id: 2,
    title: '周末有空，你更可能去？',
    options: [
      { id: 'a', text: '尝试没玩过的极限项目，比如攀岩、冲浪', score: { R: 2, A: 1 } },
      { id: 'b', text: '去熟悉的健身房，按计划训练', score: { S: 2, T: 1 } },
      { id: 'c', text: '约朋友打一场比赛，分个胜负', score: { C: 2 } },
      { id: 'd', text: '一个人去公园慢跑放空', score: { I: 2, E: 1 } },
    ],
  },
  {
    id: 3,
    title: '训练时你最在意？',
    options: [
      { id: 'a', text: '动作标准、技术细节到位', score: { T: 2 } },
      { id: 'b', text: '跟着感觉走，身体舒服就好', score: { F: 2 } },
      { id: 'c', text: '能不能赢过别人 / 刷新纪录', score: { C: 2, R: 1 } },
      { id: 'd', text: '自己有没有比上次进步', score: { I: 2, S: 1 } },
    ],
  },
  {
    id: 4,
    title: '面对一个高难度动作，你会？',
    options: [
      { id: 'a', text: '直接上，挑战才刺激', score: { R: 2, A: 1 } },
      { id: 'b', text: '先拆解，练分解动作', score: { T: 2, S: 1 } },
      { id: 'c', text: '多试几次找手感', score: { F: 2 } },
      { id: 'd', text: '看看能不能比别人先学会', score: { C: 2 } },
    ],
  },
  {
    id: 5,
    title: '你的理想单次运动时长？',
    options: [
      { id: 'a', text: '20 分钟以内，够爽就行', score: { A: 2 } },
      { id: 'b', text: '60 分钟以上，越练越上头', score: { E: 2 } },
      { id: 'c', text: '看心情，不设限', score: { F: 1, I: 1 } },
      { id: 'd', text: '严格按计划设定的时长', score: { S: 2, T: 1 } },
    ],
  },
  {
    id: 6,
    title: '下面哪种运动偶像气质最吸引你？',
    options: [
      { id: 'a', text: '短跑爆发健将', score: { A: 2 } },
      { id: 'b', text: '马拉松耐力王者', score: { E: 2 } },
      { id: 'c', text: '极限运动玩家', score: { R: 2 } },
      { id: 'd', text: '技术流大师', score: { T: 2 } },
    ],
  },
  {
    id: 7,
    title: '要不要报名一场比赛？',
    options: [
      { id: 'a', text: '当然要，享受竞技的快感', score: { C: 2, R: 1 } },
      { id: 'b', text: '不太爱比，自己练就好', score: { I: 2 } },
      { id: 'c', text: '看有没有新鲜的挑战', score: { R: 2 } },
      { id: 'd', text: '想清楚胜率再决定', score: { S: 2 } },
    ],
  },
  {
    id: 8,
    title: '对风险较高的动作，你的态度是？',
    options: [
      { id: 'a', text: '风险即乐趣，越刺激越好', score: { R: 2, A: 1 } },
      { id: 'b', text: '稳一点，慢慢来', score: { S: 2, E: 1 } },
      { id: 'c', text: '凭直觉判断要不要上', score: { F: 2 } },
      { id: 'd', text: '先学好保护技术再说', score: { T: 2 } },
    ],
  },
  {
    id: 9,
    title: '你最想拥有的身体能力是？',
    options: [
      { id: 'a', text: '瞬间爆发力', score: { A: 2 } },
      { id: 'b', text: '持久的耐力', score: { E: 2 } },
      { id: 'c', text: '灵活协调的技术', score: { T: 2, F: 1 } },
      { id: 'd', text: '抗压的竞技心态', score: { C: 2 } },
    ],
  },
  {
    id: 10,
    title: '一个人运动 vs 团队运动，你选？',
    options: [
      { id: 'a', text: '团队 / 对抗，有输赢才带劲', score: { C: 2 } },
      { id: 'b', text: '一个人，专注自我世界', score: { I: 2 } },
      { id: 'c', text: '都行，看当天的感觉', score: { F: 1, E: 1 } },
      { id: 'd', text: '有教练带、有计划最安心', score: { S: 1, T: 1 } },
    ],
  },
  {
    id: 11,
    title: '你怎么看待训练计划表？',
    options: [
      { id: 'a', text: '计划是底线，严格执行', score: { S: 2, T: 1 } },
      { id: 'b', text: '大方向有就行，细节随性', score: { F: 2 } },
      { id: 'c', text: '用来不断加码、挑战上限', score: { R: 2, A: 1 } },
      { id: 'd', text: '用来记录自己的成长轨迹', score: { I: 2 } },
    ],
  },
  {
    id: 12,
    title: '测完这套题，你最想得到？',
    options: [
      { id: 'a', text: '一个能炫的爆发型标签', score: { A: 1, C: 1 } },
      { id: 'b', text: '证明自己耐力超强', score: { E: 2 } },
      { id: 'c', text: '发现没试过的运动方向', score: { R: 1, I: 1 } },
      { id: 'd', text: '一份适合自己的训练建议', score: { T: 1, S: 1 } },
    ],
  },
];
