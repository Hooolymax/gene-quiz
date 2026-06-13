import { appConfig } from '../data/appConfig';
import { useLocale } from '../i18n/LocaleContext';
import LanguageToggle from './LanguageToggle';

interface HomePageProps {
  /** 点击「开始测试」回调 */
  onStart: () => void;
}

/**
 * 首页 —— health-tech 浅色玻璃拟态主题：浅蓝绿渐变背景 + 标题 + 开始按钮 + 免责声明。
 */
export default function HomePage({ onStart }: HomePageProps) {
  const { t } = useLocale();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gradient-to-br from-cyan-50 via-violet-50 to-emerald-50 px-6 py-12 text-slate-800">
      {/* 背景装饰光斑 */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

      {/* 顶部：品牌名 + 语言切换 */}
      <div className="z-10 flex w-full max-w-sm items-center justify-between">
        <div className="text-sm font-medium tracking-widest text-slate-500">
          {t(appConfig.brandName)}
        </div>
        <LanguageToggle variant="light" />
      </div>

      {/* 主内容 */}
      <div className="z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/60 bg-white/50 text-6xl shadow-xl shadow-cyan-500/10 backdrop-blur-md">
          <span className="animate-float drop-shadow-sm">🧬</span>
        </div>
        <div className="mb-3 rounded-full border border-cyan-200/70 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 backdrop-blur">
          {t(appConfig.tagline)}
        </div>
        <h1 className="bg-gradient-to-r from-cyan-600 via-violet-600 to-emerald-600 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl">
          {t(appConfig.title)}
        </h1>
        <p className="mt-4 max-w-xs text-base leading-relaxed text-slate-500">
          {t(appConfig.subtitle)}
        </p>
      </div>

      {/* 底部按钮 + 免责声明 */}
      <div className="z-10 flex w-full max-w-sm flex-col items-center gap-5">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
        >
          {t(appConfig.startButtonText)}
        </button>
        <p className="px-4 text-center text-xs leading-relaxed text-slate-400">
          {t(appConfig.disclaimer)}
        </p>
      </div>
    </div>
  );
}
