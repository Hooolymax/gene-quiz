import { appConfig } from '../data/appConfig';

interface HomePageProps {
  /** 点击「开始测试」回调 */
  onStart: () => void;
}

/**
 * 首页 —— 运动科技感渐变背景 + 标题 + 开始按钮 + 免责声明。
 */
export default function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 px-6 py-12 text-white">
      {/* 背景装饰光斑 */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* 顶部品牌名 */}
      <div className="z-10 text-sm font-medium tracking-widest text-white/70">
        {appConfig.brandName}
      </div>

      {/* 主内容 */}
      <div className="z-10 flex flex-col items-center text-center">
        <div className="mb-6 animate-float text-7xl drop-shadow-lg">🧬</div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {appConfig.title}
        </h1>
        <p className="mt-4 max-w-xs text-base text-white/80">{appConfig.subtitle}</p>
      </div>

      {/* 底部按钮 + 免责声明 */}
      <div className="z-10 flex w-full max-w-sm flex-col items-center gap-5">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-full bg-white py-4 text-lg font-bold text-indigo-600 shadow-xl shadow-indigo-900/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
        >
          {appConfig.startButtonText}
        </button>
        <p className="px-4 text-center text-xs leading-relaxed text-white/60">
          {appConfig.disclaimer}
        </p>
      </div>
    </div>
  );
}
