/**
 * 小工具：拆分前缀 emoji、生成收藏编号
 */

/** 从字符串开头拆出 emoji 与剩余文字，例如 "⚡ 冲刺速度" -> { emoji:'⚡', label:'冲刺速度' } */
export function splitLeadingEmoji(s: string): { emoji: string; label: string } {
  const m = s.match(/^(\p{Extended_Pictographic}(?:‍\p{Extended_Pictographic})*️?)\s*/u);
  if (m) return { emoji: m[1], label: s.slice(m[0].length).trim() };
  return { emoji: '', label: s };
}

/** 去掉开头 emoji，仅留文字 */
export function stripEmoji(s: string): string {
  return splitLeadingEmoji(s).label || s;
}

/** 由原型代码生成稳定的「收藏编号」，例如 'ANALYST' -> '7586/9999' */
export function serialNo(code: string): string {
  let h = 2166136261;
  for (let i = 0; i < code.length; i++) {
    h ^= code.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const n = 1000 + (h % 9000);
  return `${n}/9999`;
}
