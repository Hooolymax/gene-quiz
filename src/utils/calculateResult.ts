import { questions } from '../data/questions';
import { fallbackResult, resultMap } from '../data/results';
import type { Answers, ArchetypeKey, PersonalityResult, ScoreTotals } from '../types/quiz';

/**
 * 计分系统 —— 8 原型加权取最高分
 * ----------------------------------------------------------------------------
 * 顺序兼做「并列时的优先级」与初始化用。
 */
export const ARCHETYPE_ORDER: ArchetypeKey[] = [
  'ROCKET',
  'ENGINE',
  'PLAYMAKER',
  'ICEMAN',
  'PHOENIX',
  'ANALYST',
  'IRON',
  'CHAOS',
];

/** 初始化一份全 0 的原型得分表 */
function emptyTotals(): ScoreTotals {
  return ARCHETYPE_ORDER.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as ScoreTotals);
}

/**
 * 根据用户作答累计各原型得分。
 * 不关心题目数量，新增/删除题目都无需改这里。
 */
export function calculateScores(answers: Answers): ScoreTotals {
  const totals = emptyTotals();

  for (const question of questions) {
    const optionId = answers[question.id];
    if (!optionId) continue; // 未作答跳过

    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;

    for (const key of Object.keys(option.score) as ArchetypeKey[]) {
      totals[key] += option.score[key] ?? 0;
    }
  }

  return totals;
}

/**
 * 取得分最高的原型。并列时按 ARCHETYPE_ORDER 顺序取靠前者，结果稳定。
 */
export function pickArchetype(totals: ScoreTotals): ArchetypeKey {
  let best: ArchetypeKey = ARCHETYPE_ORDER[0];
  for (const key of ARCHETYPE_ORDER) {
    if (totals[key] > totals[best]) best = key;
  }
  return best;
}

/**
 * 主入口：作答 -> 人格结果。
 */
export function calculateResult(answers: Answers): PersonalityResult {
  const totals = calculateScores(answers);
  const code = pickArchetype(totals);
  return resultMap[code] ?? fallbackResult;
}
