import { questions } from '../data/questions';
import { fallbackResult, resultMap } from '../data/results';
import type { Answers, Axis, DimensionKey, PersonalityResult, ScoreTotals } from '../types/quiz';

/**
 * 计分系统
 * ----------------------------------------------------------------------------
 * 4 组对立维度轴。顺序决定最终 4 位代码里字母的位置：
 *   第 1 位 P/R ｜ 第 2 位 S/B ｜ 第 3 位 A/N ｜ 第 4 位 T/C
 */
export const AXES: Axis[] = [
  { left: 'P', right: 'R' }, // 表现驱动 vs 恢复修复
  { left: 'S', right: 'B' }, // 皮肤状态 vs 身体代谢
  { left: 'A', right: 'N' }, // 主动管理 vs 自然随缘
  { left: 'T', right: 'C' }, // 科技检测 vs 日常护理
];

/** 初始化一份全 0 的维度得分表 */
function emptyTotals(): ScoreTotals {
  return { P: 0, R: 0, S: 0, B: 0, A: 0, N: 0, T: 0, C: 0 };
}

/**
 * 根据用户作答累计各维度得分。
 * 不关心题目数量，新增/删除题目都无需改这里。
 */
export function calculateScores(answers: Answers): ScoreTotals {
  const totals = emptyTotals();

  for (const question of questions) {
    const optionId = answers[question.id];
    if (!optionId) continue; // 未作答跳过

    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;

    for (const key of Object.keys(option.score) as DimensionKey[]) {
      totals[key] += option.score[key] ?? 0;
    }
  }

  return totals;
}

/**
 * 把维度得分压成 4 位人格代码。
 * 每条轴取分数高的一边；并列时默认取 left（可按需调整规则）。
 */
export function buildCode(totals: ScoreTotals): string {
  return AXES.map(({ left, right }) =>
    totals[left] >= totals[right] ? left : right,
  ).join('');
}

/**
 * 主入口：作答 -> 人格结果。
 * 命中 results 则返回对应结果；否则返回兜底结果（但 code 用真实算出的值）。
 */
export function calculateResult(answers: Answers): PersonalityResult {
  const totals = calculateScores(answers);
  const code = buildCode(totals);

  const matched = resultMap[code];
  if (matched) return matched;

  // 未命中：用 fallback 文案，但保留真实 code，方便分享/排查
  return { ...fallbackResult, code };
}
