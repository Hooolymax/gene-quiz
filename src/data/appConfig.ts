import type { Localized } from '../types/quiz';

/**
 * 应用级文案 / 品牌配置（多语言）
 * ----------------------------------------------------------------------------
 * 所有面向用户的文案用 { zh, en } 包一层；href / gradient 与语言无关。
 * 用法：const { t } = useLocale(); t(appConfig.title)
 * 扩展点（品牌定制）：未来可在此加入 logo、主色、客服二维码等。
 */
export const appConfig = {
  /** 品牌名（页眉/页脚展示） */
  brandName: {
    zh: 'EboVir · 身体年轻力实验室',
    en: 'EboVir · Body Age Lab',
  } as Localized,

  /** 首页主标题 */
  title: {
    zh: '测测你的身体年轻力人格',
    en: 'Body Age Profile Test',
  } as Localized,

  /** 首页标题上方的小标签（eyebrow） */
  tagline: {
    zh: 'Body Age Profile Test',
    en: 'A 2-minute body-age personality test',
  } as Localized,

  /** 首页副标题 */
  subtitle: {
    zh: '用 2 分钟了解你的运动、皮肤、恢复、饮食和健康管理倾向。',
    en: 'In 2 minutes, discover your tendencies across exercise, skin, recovery, diet and health management.',
  } as Localized,

  /** 开始按钮文案 */
  startButtonText: { zh: '开始测试', en: 'Start Test' } as Localized,

  /** 结果页 Hero 上方的小标题 */
  resultLabel: {
    zh: '你的身体年轻力人格',
    en: 'Your Body Age Profile',
  } as Localized,

  /** 免责声明（首页 + 结果页都会展示） */
  disclaimer: {
    zh: '本测试为趣味互动内容，不代表医学建议、诊断结论或真实基因检测结果。',
    en: 'This test is for fun and engagement only. It is not medical advice, a diagnosis, or a real genetic testing result.',
  } as Localized,

  /** 分享文案模板（{code} {name} {slogan} 会被替换） */
  shareTemplate: {
    zh: '我的身体年轻力人格是 {code} {name}！{slogan} 快来测测你的 →',
    en: 'My Body Age Profile is {code} {name}! {slogan} Take the test →',
  } as Localized,

  /**
   * 结果页底部 3 个 CTA 卡片。
   * href 为正式外链（新标签页打开）；title / description / buttonText 多语言。
   */
  ctas: [
    {
      title: {
        zh: '查看我的 EboScience 外在护理建议',
        en: 'See my EboScience skincare guidance',
      } as Localized,
      description: {
        zh: '探索皮肤状态管理、修复护理和抗老相关产品方向。',
        en: 'Explore product directions for skin-condition management, repair care and anti-aging.',
      } as Localized,
      buttonText: { zh: '查看 EboScience', en: 'Explore EboScience' } as Localized,
      href: 'https://eboscience.com/',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: {
        zh: '了解 EboGenes 基因检测服务',
        en: 'Learn about EboGenes genetic testing',
      } as Localized,
      description: {
        zh: '通过基因检测进一步了解营养、代谢、健康风险和身体管理相关信息。',
        en: 'Use genetic testing to learn more about nutrition, metabolism, health risks and body management.',
      } as Localized,
      buttonText: { zh: '了解 EboGenes', en: 'Learn about EboGenes' } as Localized,
      href: 'https://ebogenes.com/',
      gradient: 'from-violet-500 to-indigo-500',
    },
    {
      title: {
        zh: '体验 AI Genetic Consultant',
        en: 'Try the AI Genetic Consultant',
      } as Localized,
      description: {
        zh: '上传或连接检测信息，获得更个性化的基因解读和健康管理建议。',
        en: 'Upload or connect your test data for a more personalized genetic read and health guidance.',
      } as Localized,
      buttonText: { zh: '体验 AI Consultant', en: 'Try AI Consultant' } as Localized,
      href: 'https://www.e-ai.ca/',
      gradient: 'from-fuchsia-500 to-purple-500',
    },
  ],
};
