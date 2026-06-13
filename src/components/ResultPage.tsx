import { useRef } from 'react';
import { appConfig } from '../data/appConfig';
import { useLocale } from '../i18n/LocaleContext';
import { strings } from '../i18n/strings';
import type { PersonalityResult } from '../types/quiz';
import LanguageToggle from './LanguageToggle';

interface ResultPageProps {
  result: PersonalityResult;
  /** 重新测试 */
  onRestart: () => void;
}

/**
 * 结果页 —— 适合截图分享的整屏布局。
 * 结构：渐变 Hero（代码 + 名称 + slogan） → 标签 → 描述 → 关注方向
 *      → EboScience / EboGenes / AI Consultant 三段建议 → CTA 卡片 → 免责声明 → 操作按钮。
 */
export default function ResultPage({ result, onRestart }: ResultPageProps) {
  const { t } = useLocale();
  // 截图容器 ref：扩展点（分享图生成）—— 未来接 html2canvas / dom-to-image 时对它截图
  const shareCardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    const text = t(appConfig.shareTemplate)
      .replace('{code}', result.code)
      .replace('{name}', t(result.name))
      .replace('{slogan}', t(result.slogan));

    // 优先调用系统原生分享（移动端浏览器 / PWA）
    if (navigator.share) {
      try {
        await navigator.share({ title: t(appConfig.title), text });
        return;
      } catch {
        // 用户取消分享，静默忽略，继续走复制兜底
      }
    }

    // 兜底：复制到剪贴板
    try {
      await navigator.clipboard.writeText(text);
      alert(t(strings.shareCopied));
    } catch {
      alert(text);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div ref={shareCardRef} className="mx-auto max-w-md">
        {/* Hero 区（品牌渐变） */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${result.gradient} px-6 pb-10 pt-6 text-white`}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          {/* 语言切换（右上角） */}
          <div className="relative flex justify-end">
            <LanguageToggle variant="dark" />
          </div>
          <div className="relative mt-4 flex flex-col items-center text-center">
            <div className="mb-3 text-6xl drop-shadow-md">{result.emoji}</div>
            <div className="text-sm font-medium tracking-[0.3em] text-white/80">
              {t(appConfig.resultLabel)}
            </div>
            <div className="mt-2 text-6xl font-black tracking-widest drop-shadow-lg">
              {result.code}
            </div>
            <h1 className="mt-3 text-2xl font-extrabold">{t(result.name)}</h1>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">
              「{t(result.slogan)}」
            </p>
          </div>
        </div>

        {/* 内容卡片 */}
        <div className="space-y-6 px-5 py-6">
          {/* 标签 pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {t(result.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-teal-600 shadow-sm ring-1 ring-teal-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 详细描述 */}
          <Section title={t(strings.sectionInterpret)}>
            <p className="text-[15px] leading-relaxed text-slate-600">
              {t(result.description)}
            </p>
          </Section>

          {/* 适合关注的方向 */}
          <Section title={t(strings.sectionFocus)}>
            <div className="flex flex-wrap gap-2">
              {t(result.focusAreas).map((area) => (
                <span
                  key={area}
                  className="rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </Section>

          {/* EboScience 外在护理建议 */}
          <Section title={t(strings.sectionEboScience)} accent="from-cyan-500 to-teal-500">
            <p className="text-[15px] leading-relaxed text-slate-600">
              {t(result.eboScienceRecommendation)}
            </p>
          </Section>

          {/* EboGenes 基因检测服务 */}
          <Section title={t(strings.sectionEboGenes)} accent="from-violet-500 to-indigo-500">
            <p className="text-[15px] leading-relaxed text-slate-600">
              {t(result.eboGenesRecommendation)}
            </p>
          </Section>

          {/* AI Genetic Consultant */}
          <Section title={t(strings.sectionAi)} accent="from-fuchsia-500 to-purple-500">
            <p className="text-[15px] leading-relaxed text-slate-600">
              {t(result.aiConsultantRecommendation)}
            </p>
          </Section>

          {/* CTA 卡片区 */}
          <div className="space-y-3">
            <h3 className="px-1 text-sm font-bold text-slate-900">
              {t(strings.ctaHeading)}
            </h3>
            {appConfig.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h4 className="text-[15px] font-bold text-slate-900">{t(cta.title)}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {t(cta.description)}
                </p>
                <span
                  className={`mt-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${cta.gradient} px-4 py-2 text-sm font-bold text-white shadow-sm`}
                >
                  {t(cta.buttonText)} →
                </span>
              </a>
            ))}
          </div>

          {/* 免责声明 */}
          <p className="pt-2 text-center text-xs leading-relaxed text-slate-400">
            {t(appConfig.disclaimer)}
          </p>
        </div>
      </div>

      {/* 操作按钮（截图区之外，分享图里不会出现按钮） */}
      <div className="mx-auto max-w-md px-5 pb-10">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 py-4 text-base font-bold text-white shadow-lg shadow-teal-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            {t(strings.shareButton)}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full bg-white px-6 py-4 text-base font-bold text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-[0.98]"
          >
            {t(strings.restartButton)}
          </button>
        </div>
      </div>
    </div>
  );
}

/** 结果页通用小节标题 + 内容 */
function Section({
  title,
  children,
  accent = 'from-cyan-500 to-emerald-500',
}: {
  title: string;
  children: React.ReactNode;
  /** 左侧色条渐变（用于区分品牌区块） */
  accent?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900">
        <span className={`h-4 w-1 rounded-full bg-gradient-to-b ${accent}`} />
        {title}
      </h3>
      {children}
    </div>
  );
}
