import { useLocale } from '../i18n/LocaleContext';
import type { Locale } from '../types/quiz';

interface LanguageToggleProps {
  /** 浅色背景下（如答题页/结果页内容区）用 'light'，深色/渐变背景上用 'dark' */
  variant?: 'light' | 'dark';
}

const OPTIONS: { value: Locale; label: string }[] = [
  { value: 'zh', label: '中' },
  { value: 'en', label: 'EN' },
];

/**
 * 语言切换 —— 一个 中 / EN 的分段小开关。
 * 受 LocaleProvider 控制，点击即切换并持久化。
 */
export default function LanguageToggle({ variant = 'light' }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();

  const isDark = variant === 'dark';
  const track = isDark
    ? 'bg-white/15 ring-1 ring-white/25'
    : 'bg-slate-100 ring-1 ring-slate-200';

  return (
    <div className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ${track}`}>
      {OPTIONS.map((opt) => {
        const active = locale === opt.value;
        const activeCls = isDark
          ? 'bg-white text-slate-800 shadow-sm'
          : 'bg-white text-teal-600 shadow-sm ring-1 ring-teal-100';
        const idleCls = isDark ? 'text-white/80' : 'text-slate-500';
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLocale(opt.value)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
              active ? activeCls : idleCls
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
