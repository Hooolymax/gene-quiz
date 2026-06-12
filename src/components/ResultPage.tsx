import { useRef } from 'react';
import { appConfig } from '../data/appConfig';
import type { PersonalityResult } from '../types/quiz';

interface ResultPageProps {
  result: PersonalityResult;
  /** 重新测试 */
  onRestart: () => void;
}

/**
 * 结果页 —— 适合截图分享的整屏布局。
 * 结构：渐变 Hero（代码 + 名称 + slogan） → 标签 → 描述 → 运动推荐 → 训练建议 → 操作按钮。
 */
export default function ResultPage({ result, onRestart }: ResultPageProps) {
  // 截图容器 ref：扩展点（分享图生成）—— 未来接 html2canvas / dom-to-image 时对它截图
  const shareCardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    const text = appConfig.shareTemplate
      .replace('{code}', result.code)
      .replace('{name}', result.name)
      .replace('{slogan}', result.slogan);

    // 优先调用系统原生分享（移动端浏览器 / PWA）
    if (navigator.share) {
      try {
        await navigator.share({ title: '运动基因人格测试', text });
        return;
      } catch {
        // 用户取消分享，静默忽略，继续走复制兜底
      }
    }

    // 兜底：复制到剪贴板
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制结果文案，去粘贴分享吧！');
    } catch {
      alert(text);
    }

    // 扩展点（分享图生成）：
    // import html2canvas from 'html2canvas';
    // const canvas = await html2canvas(shareCardRef.current!);
    // const img = canvas.toDataURL('image/png'); // 再触发下载 / 调起分享面板
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div ref={shareCardRef} className="mx-auto max-w-md">
        {/* Hero 区（品牌渐变） */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${result.gradient} px-6 pb-10 pt-12 text-white`}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-3 text-6xl drop-shadow-md">{result.emoji}</div>
            <div className="text-sm font-medium tracking-[0.3em] text-white/80">
              你的运动基因人格
            </div>
            <div className="mt-2 text-6xl font-black tracking-widest drop-shadow-lg">
              {result.code}
            </div>
            <h1 className="mt-3 text-2xl font-extrabold">{result.name}</h1>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">
              「{result.slogan}」
            </p>
          </div>
        </div>

        {/* 内容卡片 */}
        <div className="space-y-6 px-5 py-6">
          {/* 标签 pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {result.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-indigo-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 详细描述 */}
          <Section title="人格解读">
            <p className="text-[15px] leading-relaxed text-slate-600">{result.description}</p>
          </Section>

          {/* 运动推荐 */}
          <Section title="适合你的运动">
            <div className="flex flex-wrap gap-2">
              {result.sports.map((sport) => (
                <span
                  key={sport}
                  className="rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {sport}
                </span>
              ))}
            </div>
          </Section>

          {/* 训练风格建议 */}
          <Section title="训练风格建议">
            <p className="text-[15px] leading-relaxed text-slate-600">{result.trainingStyle}</p>
          </Section>

          {/* 免责声明 */}
          <p className="pt-2 text-center text-xs leading-relaxed text-slate-400">
            {appConfig.disclaimer}
          </p>
        </div>
      </div>

      {/* 操作按钮（截图区之外，分享图里不会出现按钮） */}
      <div className="mx-auto max-w-md px-5 pb-10">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            分享结果
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full bg-white px-6 py-4 text-base font-bold text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-[0.98]"
          >
            重测
          </button>
        </div>
      </div>
    </div>
  );
}

/** 结果页通用小节标题 + 内容 */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900">
        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500" />
        {title}
      </h3>
      {children}
    </div>
  );
}
