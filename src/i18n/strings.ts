import type { Localized } from '../types/quiz';

/**
 * 静态 UI 文案（按钮、小节标题、提示语等）
 * ----------------------------------------------------------------------------
 * 与「内容数据」（题库、结果、首页文案）分开管理。
 * 用法：const { t } = useLocale(); t(strings.shareButton)
 * 含 {n} / {total} 占位的，用 .replace 自行替换。
 */
export const strings = {
  /** 语言切换按钮（短标签） */
  toggleToEn: { zh: 'EN', en: 'EN' } as Localized,
  toggleToZh: { zh: '中', en: '中' } as Localized,

  /** 答题页 */
  backAria: { zh: '上一题', en: 'Previous question' } as Localized,
  progressQuestion: { zh: '第 {n} 题', en: 'Question {n}' } as Localized,
  quizHint: {
    zh: '选择后自动进入下一题，可点左上角返回修改',
    en: 'Selecting an option advances automatically — tap back (top-left) to change it.',
  } as Localized,

  /** 结果页小节标题 */
  sectionInterpret: { zh: '人格解读', en: 'Your Profile' } as Localized,
  sectionFocus: { zh: '适合你关注的方向', en: 'Areas to Focus On' } as Localized,
  sectionEboScience: {
    zh: 'EboScience · 外在护理建议',
    en: 'EboScience · Skincare Guidance',
  } as Localized,
  sectionEboGenes: {
    zh: 'EboGenes · 基因检测服务',
    en: 'EboGenes · Genetic Testing',
  } as Localized,
  sectionAi: {
    zh: 'AI Genetic Consultant',
    en: 'AI Genetic Consultant',
  } as Localized,

  /** 结果页操作 */
  ctaHeading: { zh: '下一步，了解更多', en: 'Next Steps' } as Localized,
  shareButton: { zh: '分享结果', en: 'Share' } as Localized,
  restartButton: { zh: '重新测试', en: 'Retake' } as Localized,
  shareCopied: {
    zh: '已复制结果文案，去粘贴分享吧！',
    en: 'Result copied — paste it to share!',
  } as Localized,
};
