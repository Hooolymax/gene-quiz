import type { Localized } from '../types/quiz';

/**
 * 静态 UI 文案（按钮、小节标题、提示语等）
 * ----------------------------------------------------------------------------
 * 与「内容数据」（题库、结果、首页文案）分开管理。
 * 用法：const { t } = useLocale(); t(strings.shareButton)
 * 含 {n} / {total} 占位的，用 .replace 自行替换。
 */
export const strings = {
  /** 答题页 */
  backAria: { zh: '上一题', en: 'Previous question' } as Localized,
  progressQuestion: { zh: '第 {n} 题', en: 'Question {n}' } as Localized,
  quizHint: {
    zh: '凭直觉选，选完自动进入下一题，可点左上角返回修改',
    en: 'Go with your gut — it auto-advances. Tap back (top-left) to change an answer.',
  } as Localized,

  /** 结果页小节标题 */
  sectionTraits: { zh: '性格特质', en: 'Personality Traits' } as Localized,
  sectionStrengths: { zh: '运动强项', en: 'Sports Strengths' } as Localized,
  sectionDna: { zh: '基因灵感', en: 'DNA Inspiration' } as Localized,

  /** 结果页操作 */
  shareButton: { zh: '分享', en: 'Share' } as Localized,
  downloadButton: { zh: '保存海报', en: 'Save Poster' } as Localized,
  restartButton: { zh: '再测一次', en: 'Retake' } as Localized,
  shareCopied: {
    zh: '已复制分享文案，去粘贴给朋友吧！',
    en: 'Share text copied — paste it to your friends!',
  } as Localized,
  posterReady: {
    zh: '海报已保存到下载文件夹 🎉',
    en: 'Poster saved to your downloads 🎉',
  } as Localized,
};
