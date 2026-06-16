/**
 * 全局类型定义 —— 世界杯基因人格测试
 * ----------------------------------------------------------------------------
 * 8 个「世界杯基因原型」。每个选项用加权打分给一个或多个原型加分，
 * 最终取得分最高的原型作为结果（并列时按 ARCHETYPE_ORDER 顺序取靠前的）。
 * 这样答案到结果的映射不是 1:1，体验「出乎意料又很准」。
 *
 * i18n：所有面向用户的文案都用 Localized<T> 包一层（{ zh, en }）。
 */

/** 支持的语言 */
export type Locale = 'zh' | 'en';

/** 多语言文案容器 */
export type Localized<T = string> = Record<Locale, T>;

/** 8 个世界杯基因原型 */
export type ArchetypeKey =
  | 'ROCKET' // 冲锋狗 THE ROCKET
  | 'ENGINE' // 永动机 THE ENGINE
  | 'PLAYMAKER' // 球场军师 THE PLAYMAKER
  | 'ICEMAN' // 大心脏 THE ICE MAN
  | 'PHOENIX' // 逆转凤凰 THE PHOENIX
  | 'ANALYST' // 数据怪人 THE ANALYST
  | 'IRON' // 铁人 KING IRON
  | 'CHAOS'; // 快乐足球家 CHAOS CREATOR

/** 一个选项可以给多个原型加分，例如 { ROCKET: 2, CHAOS: 1 } */
export type Score = Partial<Record<ArchetypeKey, number>>;

/** 单个选项 */
export interface Option {
  /** 选项唯一 id（同一题内唯一即可，例如 'a' | 'b' | 'c' | 'd'） */
  id: string;
  /** 选项文案（多语言，含 emoji） */
  text: Localized;
  /** 该选项给各原型的加分 */
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

/** 人格结果（收藏款原型） */
export interface PersonalityResult {
  /** 原型代码，例如 'ROCKET'（与语言无关，作为查表 key） */
  code: ArchetypeKey;
  /** 名称（多语言）：中文名 + 英文名 */
  name: Localized;
  /** 病毒式 tagline（多语言，两行调性） */
  tagline: Localized;
  /** 性格特质（多语言，chips 展示） */
  traits: Localized<string[]>;
  /** 运动强项（多语言，chips 展示） */
  strengths: Localized<string[]>;
  /** DNA 灵感解读（多语言） */
  dnaInspiration: Localized;
  /** 主题渐变（Tailwind 类名字符串，与语言无关） */
  gradient: string;
  /** 代表性 emoji，作为大「收藏角色」展示 */
  emoji: string;
}

/** 用户作答记录：questionId -> 选中的 optionId */
export type Answers = Record<number, string>;

/** 各原型累计得分 */
export type ScoreTotals = Record<ArchetypeKey, number>;
