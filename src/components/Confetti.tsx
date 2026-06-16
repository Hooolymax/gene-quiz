/**
 * 彩带动画 —— 纯 CSS，无依赖。结果揭晓时撒一阵。
 * 在挂载时渲染一批彩色碎片，靠 index.css 的 confetti-fall 关键帧下落后自然消失。
 */
const COLORS = ['#fbbf24', '#ef4444', '#22d3ee', '#a855f7', '#34d399', '#ec4899', '#3b82f6'];
const PIECES = 44;

export default function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {Array.from({ length: PIECES }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.6;
        const duration = 2.2 + Math.random() * 1.6;
        const size = 6 + Math.random() * 8;
        const color = COLORS[i % COLORS.length];
        const rounded = Math.random() > 0.5;
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: '-5vh',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * (rounded ? 1 : 1.6)}px`,
              backgroundColor: color,
              borderRadius: rounded ? '9999px' : '2px',
              opacity: 0.9,
              animation: `confetti-fall ${duration}s ${delay}s ease-in forwards`,
            }}
          />
        );
      })}
    </div>
  );
}
