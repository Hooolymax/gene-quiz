interface OptionCardProps {
  /** 选项序号（0-based），用于显示 A/B/C/D */
  index: number;
  /** 选项文案 */
  text: string;
  /** 是否被选中 */
  selected: boolean;
  /** 点击回调 */
  onClick: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * 选项卡片 —— 带 hover / active / 选中态。
 * 移动端优先：大点击区域、明显的按压反馈。
 */
export default function OptionCard({ index, text, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200',
        'active:scale-[0.98]',
        selected
          ? 'border-teal-500 bg-teal-50 shadow-md ring-2 ring-teal-500/30'
          : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50/40 hover:shadow-sm',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
          selected
            ? 'bg-teal-500 text-white'
            : 'bg-slate-100 text-slate-500 group-hover:bg-teal-100 group-hover:text-teal-600',
        ].join(' ')}
      >
        {LETTERS[index] ?? index + 1}
      </span>
      <span
        className={[
          'text-[15px] leading-snug',
          selected ? 'font-semibold text-teal-900' : 'text-slate-700',
        ].join(' ')}
      >
        {text}
      </span>
    </button>
  );
}
