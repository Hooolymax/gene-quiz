import type { Localized } from '../types/quiz';

/**
 * 应用级文案 / 品牌配置（中英并列展示）—— 世界杯基因人格测试
 * ----------------------------------------------------------------------------
 * 参考站布局：全站中英文同时显示（无语言切换）。文案仍用 { zh, en } 存，组件里两种都渲染。
 * href 与语言无关。
 */
export const appConfig = {
  /** 品牌名（顶栏左侧） */
  brandName: 'EBOVIR × EBOGENES',
  /** 顶栏右侧站点名 */
  siteName: 'World Cup DNA Lab',
  /** 页脚版权 */
  copyright: 'EBOVIR × EBOGENES © 2026',

  /** 首页标题上方的小标签（eyebrow） */
  tagline: 'Powered by EBOVIR × EBOGENES',

  /** 首页主标题 */
  title: {
    zh: '测测你的世界杯基因人格',
    en: "What's Your World Cup DNA?",
  } as Localized,

  /** 首页副标题 */
  subtitle: {
    zh: '8 道题，解锁你的专属球员人格盲盒。',
    en: '8 questions. 8 collectible archetypes. Pure fun.',
  } as Localized,

  /** 开始按钮文案 */
  startButtonText: { zh: '开始测试', en: 'Start the Quiz' } as Localized,

  /** 结果页 Hero 上方的小标题 */
  resultLabel: {
    zh: '你的基因人格',
    en: 'Your World Cup DNA',
  } as Localized,

  /** 收藏款角标 */
  collectibleLabel: {
    zh: '限定收藏款',
    en: 'Limited Collectible',
  } as Localized,

  /** 短免责声明（首页 CTA 下方） */
  shortDisclaimer: {
    zh: '仅供娱乐，不构成医学或基因建议。',
    en: 'For entertainment only. No medical or genetic advice.',
  } as Localized,

  /** 完整免责声明（首页 + 结果页页脚） */
  disclaimer: {
    zh: '本测试仅供娱乐与科普启发使用，不构成医学建议、健康评估、基因诊断或治疗依据。',
    en: 'This experience is intended for entertainment and educational inspiration only. It does not provide medical advice, health assessment, genetic diagnosis, or treatment recommendations.',
  } as Localized,

  /** 结果页底部「EBOVIR × EBOGENES 探索区」文案 */
  ending: {
    title: {
      zh: '🔬 原来，每个人的潜力都不一样。',
      en: '🔬 What if your potential is uniquely yours?',
    } as Localized,
    intro: {
      zh: '这个测试的灵感，来自正在兴起的研究——人们在很多方面可能天生不同：',
      en: 'This experience was inspired by emerging research exploring how people may differ in areas such as:',
    } as Localized,
    bullets: {
      zh: ['恢复与适应', '能量代谢', '抗压能力', '决策倾向', '运动表现潜力'],
      en: [
        'Recovery and adaptation',
        'Energy metabolism',
        'Stress resilience',
        'Decision-making tendencies',
        'Physical performance potential',
      ],
    } as Localized<string[]>,
    closing: {
      zh: '它的意义，不是给你贴上限制的标签，而是庆祝每个人的独特。每个人都有属于自己的优势。真正重要的，不是和别人一样，而是发现最适合自己的潜力。',
      en: "The goal isn't to label limitations. It's to celebrate human uniqueness. Everyone has their own strengths — what matters isn't being like others, but discovering the potential that's uniquely yours.",
    } as Localized,
    aboutTitle: {
      zh: '关于 EBOGENES',
      en: 'About EBOGENES',
    } as Localized,
    aboutBody: {
      zh: 'EBOGENES 是 EBOVIR 旗下的创新项目，探索基因、健康、运动表现与人类潜力之间迷人的交汇点，让科学启发帮助人们更好地认识自己。',
      en: 'EBOGENES is an innovation initiative by EBOVIR that explores the fascinating intersection of genetics, wellness, performance, and human potential. Discover how science-inspired insights may help people better understand themselves.',
    } as Localized,
  },

  /**
   * 结果页 3 个公司 CTA（均为正式外链，新标签页打开）。
   * 保留最初版本的三个公司页面：EBOGENES / EBOSCIENCE / AI Genetic Consultant。
   */
  ctas: [
    {
      emoji: '🔬',
      label: { zh: '探索 EBOGENES', en: 'Explore EBOGENES' } as Localized,
      href: 'https://ebogenes.com/',
      gradient: 'from-violet-500 to-indigo-500',
    },
    {
      emoji: '🧬',
      label: { zh: '了解 EBOSCIENCE', en: 'Explore EBOSCIENCE' } as Localized,
      href: 'https://eboscience.com/',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      emoji: '✨',
      label: { zh: '体验 AI Genetic Consultant', en: 'Try AI Genetic Consultant' } as Localized,
      href: 'https://www.e-ai.ca/',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
  ],
};
