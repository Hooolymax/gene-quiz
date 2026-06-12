/**
 * 全局类型定义
 * ----------------------------------------------------------------------------
 * 4 组二分维度（共 8 个字母），最终生成 4 位人格代码（类 MBTI）：
 *   A / E ：Athletic Power 爆发力型  vs  Endurance 耐力型
 *   R / S ：Risk 挑战型           vs  Stable 稳健型
 *   T / F ：Technique 技术训练型    vs  Flow 自然感觉型
 *   C / I ：Competitive 竞技型      vs  Individual 自我探索型
 */

/** 8 个维度字母 */
export type DimensionKey = 'A' | 'E' | 'R' | 'S' | 'T' | 'F' | 'C' | 'I';

/** 一个选项可以给多个维度加分，例如 { A: 2, C: 1 } */
export type Score = Partial<Record<DimensionKey, number>>;

/** 单个选项 */
export interface Option {
  /** 选项唯一 id（同一题内唯一即可，例如 'a' | 'b' | 'c' | 'd'） */
  id: string;
  /** 选项文案 */
  text: string;
  /** 该选项给各维度的加分 */
  score: Score;
}

/** 单道题目 */
export interface Question {
  /** 题目唯一 id（建议用递增数字） */
  id: number;
  /** 题干 */
  title: string;
  /** 4 个选项 */
  options: Option[];
}

/** 一条对立维度轴：左字母 vs 右字母 */
export interface Axis {
  left: DimensionKey;
  right: DimensionKey;
}

/** 人格结果 */
export interface PersonalityResult {
  /** 4 位人格代码，例如 'ARTC' */
  code: string;
  /** 人格名称 */
  name: string;
  /** 一句 slogan */
  slogan: string;
  /** 3-5 个标签（pill 展示） */
  tags: string[];
  /** 详细描述 */
  description: string;
  /** 适合的运动类型推荐 */
  sports: string[];
  /** 训练风格建议 */
  trainingStyle: string;
  /** 主题渐变（Tailwind 类名字符串，用于结果页品牌色，例：'from-amber-400 via-orange-500 to-red-500'） */
  gradient: string;
  /** 代表性 emoji，结果页大图标 */
  emoji: string;
}

/** 用户作答记录：questionId -> 选中的 optionId */
export type Answers = Record<number, string>;

/** 各维度累计得分 */
export type ScoreTotals = Record<DimensionKey, number>;
