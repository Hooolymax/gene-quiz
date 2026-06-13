/**
 * 全局类型定义
 * ----------------------------------------------------------------------------
 * 4 组二分维度（共 8 个字母），最终生成 4 位人格代码（类 MBTI / SBTI）：
 *   P / R ：Performance 表现驱动型  vs  Recovery 恢复修复型
 *   S / B ：Skin 皮肤状态型         vs  Body 身体代谢型
 *   A / N ：Active 主动管理型       vs  Natural 自然随缘型
 *   T / C ：Tech 科技检测型         vs  Care 日常护理型
 *
 * 示例代码：PSAT、RBNC、PBAT、RSAC …
 *
 * i18n：所有面向用户的文案都用 Localized<T> 包一层（{ zh, en }），
 * 维度、得分、代码、渐变、emoji 等与语言无关的字段保持原样。
 */

/** 支持的语言 */
export type Locale = 'zh' | 'en';

/** 多语言文案容器：每种语言一份内容（可为字符串或字符串数组） */
export type Localized<T = string> = Record<Locale, T>;

/** 8 个维度字母 */
export type DimensionKey = 'P' | 'R' | 'S' | 'B' | 'A' | 'N' | 'T' | 'C';

/** 一个选项可以给多个维度加分，例如 { T: 2, A: 1 } */
export type Score = Partial<Record<DimensionKey, number>>;

/** 单个选项 */
export interface Option {
  /** 选项唯一 id（同一题内唯一即可，例如 'a' | 'b' | 'c' | 'd'） */
  id: string;
  /** 选项文案（多语言） */
  text: Localized;
  /** 该选项给各维度的加分 */
  score: Score;
}

/** 单道题目 */
export interface Question {
  /** 题目唯一 id（建议用递增数字） */
  id: number;
  /** 题干（多语言） */
  title: Localized;
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
  /** 4 位人格代码，例如 'PSAT'（与语言无关） */
  code: string;
  /** 人格名称（多语言） */
  name: Localized;
  /** 一句 slogan（多语言） */
  slogan: Localized;
  /** 3-5 个标签（多语言，pill 展示） */
  tags: Localized<string[]>;
  /** 详细描述（多语言） */
  description: Localized;
  /** 适合关注的方向（多语言，3-5 条） */
  focusAreas: Localized<string[]>;
  /** EboScience 外在护理建议（多语言） */
  eboScienceRecommendation: Localized;
  /** EboGenes 基因检测服务建议（多语言） */
  eboGenesRecommendation: Localized;
  /** AI Genetic Consultant 建议（多语言） */
  aiConsultantRecommendation: Localized;
  /** 主题渐变（Tailwind 类名字符串，与语言无关） */
  gradient: string;
  /** 代表性 emoji，结果页大图标（与语言无关） */
  emoji: string;
}

/** 用户作答记录：questionId -> 选中的 optionId */
export type Answers = Record<number, string>;

/** 各维度累计得分 */
export type ScoreTotals = Record<DimensionKey, number>;
