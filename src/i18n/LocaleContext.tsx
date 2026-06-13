import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Locale, Localized } from '../types/quiz';

/**
 * 轻量 i18n（不引入第三方库）
 * ----------------------------------------------------------------------------
 * - useLocale() 拿到当前语言、切换方法，以及 t() 取值函数。
 * - t(localized) 根据当前语言从 { zh, en } 里取对应文案，支持字符串或字符串数组。
 * - 语言会持久化到 localStorage，首次进入按浏览器语言猜测默认值。
 */

const STORAGE_KEY = 'bap-locale';

function detectInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
  } catch {
    // localStorage 不可用（隐私模式等），忽略
  }
  const lang = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** 在 zh / en 之间切换 */
  toggle: () => void;
  /** 取多语言文案：t(result.name) -> 当前语言的字符串 / 数组 */
  t: <T>(value: Localized<T>) => T;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 忽略持久化失败
    }
  }, []);

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'zh' ? 'en' : 'zh';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // 忽略
      }
      return next;
    });
  }, []);

  // 同步 <html lang>，利于无障碍与 SEO
  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const t = useCallback(
    <T,>(value: Localized<T>): T => value[locale],
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale 必须在 <LocaleProvider> 内使用');
  }
  return ctx;
}
