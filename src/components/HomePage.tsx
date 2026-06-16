import { appConfig } from '../data/appConfig';
import { results } from '../data/results';
import { useLocale } from '../i18n/LocaleContext';
import TopBanner from './TopBanner';
import SiteFooter from './SiteFooter';

interface HomePageProps {
  /** 点击「开始测试」回调 */
  onStart: () => void;
}

/**
 * 首页 —— 参考站布局：顶栏 + 渐变大标题 + 8 个收藏盲盒方块 + 黑色 CTA + 免责 + 页脚。
 */
export default function HomePage({ onStart }: HomePageProps) {
  const { t } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBanner />

      <main className="flex flex-1 flex-col items-center px-6 py-10 text-center">
        {/* eyebrow */}
        <div className="mb-4 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
          ✦ {appConfig.tagline}
        </div>

        {/* 主标题 */}
        <h1 className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-3xl font-black leading-tight tracking-tight text-transparent sm:text-5xl">
          {t(appConfig.title)}
        </h1>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
          {t(appConfig.subtitle)}
        </p>

        {/* 8 个收藏盲盒方块 */}
        <div className="mt-8 grid w-full max-w-md grid-cols-4 gap-3">
          {results.map((r) => (
            <div
              key={r.code}
              className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${r.gradient} shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 rounded-full bg-white/30 blur-md" />
              <span className="relative text-3xl drop-shadow-sm">{r.emoji}</span>
            </div>
          ))}
        </div>

        {/* 黑色 CTA */}
        <button
          type="button"
          onClick={onStart}
          className="mt-8 w-full max-w-md rounded-full bg-slate-900 py-4 text-lg font-bold text-white shadow-xl shadow-slate-900/20 transition-all duration-200 hover:scale-[1.01] hover:bg-slate-800 active:scale-[0.98]"
        >
          🚀 {t(appConfig.startButtonText)}
        </button>

        {/* 短免责 */}
        <p className="mt-5 max-w-md text-xs leading-relaxed text-slate-400">
          {t(appConfig.shortDisclaimer)}
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
