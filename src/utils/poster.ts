import type { Locale, PersonalityResult } from '../types/quiz';

/**
 * 收藏款海报生成（零依赖，纯 Canvas）
 * ----------------------------------------------------------------------------
 * 不引入 html2canvas 等库，直接在 1080×1350（4:5，小红书/IG 友好）画布上
 * 画出渐变背景 + 大角色 emoji + 中英名称 + tagline + 品牌脚注，导出 PNG 下载。
 */

/** 每个原型对应的两段渐变色（hex），与卡片视觉呼应 */
const POSTER_COLORS: Record<string, [string, string]> = {
  ROCKET: ['#fbbf24', '#ef4444'],
  ENGINE: ['#ec4899', '#ef4444'],
  PLAYMAKER: ['#8b5cf6', '#4f46e5'],
  ICEMAN: ['#38bdf8', '#2563eb'],
  PHOENIX: ['#f97316', '#c026d3'],
  ANALYST: ['#34d399', '#0891b2'],
  IRON: ['#22d3ee', '#1d4ed8'],
  CHAOS: ['#d946ef', '#f59e0b'],
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** 简单按字符宽度换行（兼顾中英） */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const lines: string[] = [];
  let line = '';
  for (const ch of text) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function downloadPoster(
  result: PersonalityResult,
  locale: Locale,
): Promise<void> {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const [c1, c2] = POSTER_COLORS[result.code] ?? ['#6366f1', '#06b6d4'];

  // 背景渐变
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, c1);
  bg.addColorStop(1, c2);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 柔光圆斑
  const glow = ctx.createRadialGradient(W * 0.5, H * 0.36, 60, W * 0.5, H * 0.36, 620);
  glow.addColorStop(0, 'rgba(255,255,255,0.35)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = 'center';

  // 顶部品牌
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = '600 30px -apple-system, "PingFang SC", sans-serif';
  ctx.fillText('WORLD CUP DNA · EBOVIR × EBOGENES', W / 2, 110);

  // 大角色 emoji
  ctx.font = '380px -apple-system, "Apple Color Emoji", sans-serif';
  ctx.fillText(result.emoji, W / 2, 560);

  // 中文名（去掉 emoji 前缀，emoji 已大图展示）
  const zhName = result.name.zh.replace(/^\W+\s*/, '').trim();
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 96px -apple-system, "PingFang SC", sans-serif';
  ctx.fillText(zhName || result.name.zh, W / 2, 720);

  // 英文名
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = '700 52px -apple-system, sans-serif';
  ctx.fillText(result.name.en.toUpperCase(), W / 2, 792);

  // tagline（按当前语言）
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = '500 42px -apple-system, "PingFang SC", sans-serif';
  const tagline = result.tagline[locale];
  const tagLines = wrapText(ctx, tagline, W - 200);
  let ty = 900;
  for (const l of tagLines.slice(0, 3)) {
    ctx.fillText(l, W / 2, ty);
    ty += 60;
  }

  // 底部 DNA 灵感卡片
  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  roundRect(ctx, 120, 1110, W - 240, 150, 40);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '600 30px -apple-system, sans-serif';
  ctx.fillText('DNA INSPIRATION', W / 2, 1170);
  ctx.fillStyle = '#ffffff';
  ctx.font = '500 36px -apple-system, "PingFang SC", sans-serif';
  ctx.fillText(result.dnaInspiration[locale], W / 2, 1218);

  // 脚注
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = '500 28px -apple-system, sans-serif';
  ctx.fillText('ebogenes.com', W / 2, 1310);

  // 导出下载
  await new Promise<void>((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return resolve();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `worldcup-dna-${result.code.toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      resolve();
    }, 'image/png');
  });
}
