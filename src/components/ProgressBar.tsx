import { useLocale } from '../i18n/LocaleContext';
import { strings } from '../i18n/strings';

interface ProgressBarProps {
  /** 当前第几题（1-based） */
  current: number;
  /** 总题数 */
  total: number;
}

/**
 * 进度条 —— 平滑过渡的填充条 + 「第 3 题 / 3 / 12」文字（多语言）。
 */
export default function ProgressBar({ current, total }: ProgressBarProps) {
  const { t } = useLocale();
  const percent = Math.round((current / total) * 100);
  const label = t(strings.progressQuestion).replace('{n}', String(current));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-500">
        <span>{label}</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
