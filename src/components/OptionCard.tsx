interface OptionCardProps {
  /** 选项 emoji（左侧图标格） */
  emoji: string;
  /** 选项文案（已按当前语言取好、去掉 emoji） */
  label: string;
  /** 是否被选中 */
  selected: boolean;
  /** 点击回调 */
  onClick: () => void;
}

/**
 * 选项卡片 —— 参考站风格：左侧渐变图标格 + 文案 + 右侧箭头。
 */
export default function OptionCard({ emoji, label, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group flex w-full items-center gap-3 rounded-2xl border bg-white px-3 py-3 text-left transition-all duration-200 active:scale-[0.99]',
        selected
          ? 'border-violet-500 shadow-md ring-2 ring-violet-500/20'
          : 'border-slate-200 hover:border-violet-300 hover:shadow-sm',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xl transition-colors',
          selected
            ? 'bg-gradient-to-br from-violet-500 to-cyan-500 shadow-sm'
            : 'bg-slate-100 group-hover:bg-violet-50',
        ].join(' ')}
      >
        {emoji}
      </span>
      <span
        className={[
          'flex-1 text-[15px] leading-snug',
          selected ? 'font-semibold text-violet-900' : 'font-medium text-slate-700',
        ].join(' ')}
      >
        {label}
      </span>
      <span
        className={[
          'text-lg transition',
          selected ? 'text-violet-500' : 'text-slate-300 group-hover:text-violet-400',
        ].join(' ')}
      >
        →
      </span>
    </button>
  );
}
