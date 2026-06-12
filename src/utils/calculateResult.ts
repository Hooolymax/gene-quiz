import { questions } from '../data/questions';
import { fallbackResult, resultMap } from '../data/results';
import type { Answers, Axis, DimensionKey, PersonalityResult, ScoreTotals } from '../types/quiz';

/**
 * 计分系统
 * ----------------------------------------------------------------------------
 * 4 组对立维度轴。顺序决定最终 4 位代码里字母的位置：
 *   第 1 位 A/E ｜ 第 2 位 R/S ｜ 第 3 位 T/F ｜ 第 4 位 C/I
 */
export const AXES: Axis[] = [
  { left: 'A', right: 'E' }, // 爆发力 vs 耐力
  { left: 'R', right: 'S' }, // 挑战   vs 稳健
  { left: 'T', right: 'F' }, // 技术   vs 感觉
  { left: 'C', right: 'I' }, // 竞技   vs 自我
];

/** 初始化一份全 0 的维度得分表 */
function emptyTotals(): ScoreTotals {
  return { A: 0, E: 0, R: 0, S: 0, T: 0, F: 0, C: 0, I: 0 };
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
