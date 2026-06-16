import { useState } from 'react';
import { appConfig } from '../data/appConfig';
import { useLocale } from '../i18n/LocaleContext';
import { strings } from '../i18n/strings';
import { downloadPoster } from '../utils/poster';
import { serialNo, stripEmoji } from '../utils/format';
import type { PersonalityResult } from '../types/quiz';
import TopBanner from './TopBanner';
import SiteFooter from './SiteFooter';
import Confetti from './Confetti';

interface ResultPageProps {
  result: PersonalityResult;
  onRestart: () => void;
}

/**
 * 结果页 —— 参考站布局：顶栏 + 浅色收藏卡（编号/角色/名称/tagline）
 * + 特质 + 强项 + DNA + 操作 + EBOVIR×EBOGENES 探索区 + 3 公司 CTA + 页脚。
 */
export default function ResultPage({ result, onRestart }: ResultPageProps) {
  const { t, locale } = useLocale();
  const [busy, setBusy] = useState(false);

  const buildShareText = () =>
    `${result.emoji} ${stripEmoji(t(result.name))} — 「${t(result.tagline)}」 ${t(
      appConfig.title,
    )}`;

  const handleShare = async () => {
    const text = buildShareText();
    if (navigator.share) {
      try {
        await navigator.share({ title: t(appConfig.title), text });
        return;
      } catch {
        /* 用户取消，走复制兜底 */
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      alert(t(strings.shareCopied));
    } catch {
      alert(text);
    }
  };

  const handleDownload = async () => {
    setBusy(true);
    try {
      await downloadPoster(result, locale);
      alert(t(strings.posterReady));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Confetti />
      <TopBanner />

      <main className="mx-auto w-full max-w-md flex-1 px-5 py-6">
        {/* eyebrow */}
        <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
          {t(appConfig.resultLabel)}
        </p>

        {/* 收藏卡 */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div
            className={`pointer-events-none absolute inset-x-0 -top-20 mx-auto h-48 w-48 rounded-full bg-gradient-to-br ${result.gradient} opacity-25 blur-3xl`}
          />

          {/* 编号行 */}
          <div className="relative flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-400">
            <span>EBOVIR × LAB-{result.code}</span>
            <span>#{serialNo(result.code)}</span>
          </div>

          {/* 角色 */}
          <div className="relative mt-5 flex flex-col items-center text-center">
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${result.gradient} opacity-30 blur-xl`}
              />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-100">
                <span className="animate-char-float text-6xl drop-shadow-sm">{result.emoji}</span>
              </div>
            </div>

            {/* 收藏角标 */}
            <span className="mt-4 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              ⭐ {t(appConfig.collectibleLabel)}
            </span>

            <h1 className="mt-3 text-4xl font-black text-slate-900">
              {stripEmoji(t(result.name))}
            </h1>

            {/* tagline 灰框 */}
            <div className="mt-4 w-full rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100">
              <p className="text-[15px] font-semibold leading-relaxed text-slate-700">
                「{t(result.tagline)}」
              </p>
            </div>
          </div>
        </div>

        {/* 内容区 */}
        <div className="mt-5 space-y-5">
          <Section title={t(strings.sectionTraits)} accent="from-fuchsia-500 to-violet-500">
            <div className="flex flex-wrap gap-2">
              {t(result.traits).map((tr) => (
                <span
                  key={tr}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-violet-600 shadow-sm ring-1 ring-violet-100"
                >
                  #{tr}
                </span>
              ))}
            </div>
          </Section>

          <Section title={t(strings.sectionStrengths)} accent="from-cyan-500 to-blue-500">
            <div className="flex flex-wrap gap-2">
              {t(result.strengths).map((s) => (
                <span
                  key={s}
                  className="rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title={`🧬 ${t(strings.sectionDna)}`} accent="from-emerald-500 to-teal-500">
            <p className="text-[15px] font-medium leading-relaxed text-slate-600">
              {t(result.dnaInspiration)}
            </p>
          </Section>

          {/* 分享 / 保存海报 */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="flex-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              📤 {t(strings.shareButton)}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={busy}
              className="flex-1 rounded-full bg-white py-3.5 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-[0.98] disabled:opacity-60"
            >
              🖼️ {t(strings.downloadButton)}
            </button>
          </div>

          {/* EBOVIR × EBOGENES 探索区 */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg">
            <h2 className="text-lg font-extrabold leading-snug">{t(appConfig.ending.title)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {t(appConfig.ending.intro)}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {t(appConfig.ending.bullets).map((b) => (
                <li
                  key={b}
                  className="rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-white/90 ring-1 ring-white/10"
                >
                  • {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {t(appConfig.ending.closing)}
            </p>

            <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="text-sm font-bold text-white">{t(appConfig.ending.aboutTitle)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {t(appConfig.ending.aboutBody)}
              </p>
            </div>

            {/* 3 公司 CTA */}
            <div className="mt-5 space-y-3">
              {appConfig.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${cta.gradient} py-3.5 text-sm font-bold text-white shadow-md transition hover:scale-[1.02] active:scale-[0.98]`}
                >
                  {cta.emoji} {t(cta.label)}
                </a>
              ))}
            </div>
          </div>

          {/* 再测一次 */}
          <button
            type="button"
            onClick={onRestart}
            className="w-full rounded-full bg-white py-3.5 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-[0.98]"
          >
            🔁 {t(strings.restartButton)}
          </button>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/** 结果页通用小节标题 + 内容 */
function Section({
  title,
  children,
  accent = 'from-fuchsia-500 to-cyan-500',
}: {
  title: string;
  children: React.ReactNode;
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
