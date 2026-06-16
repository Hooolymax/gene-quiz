import { appConfig } from '../data/appConfig';
import ebovirLogo from '../assets/ebovir-logo.png';
import LanguageToggle from './LanguageToggle';

/**
 * 顶栏 —— 全站统一：左 EBOVIR logo（× EBOGENES）+ 右「站点名 + 语言切换」。
 */
export default function TopBanner() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white/85 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <img src={ebovirLogo} alt="EBOVIR" className="h-7 w-auto" />
        <span className="text-[10px] font-bold tracking-wide text-slate-600">
          × EBOGENES
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs font-semibold text-slate-400 sm:inline">
          ✦ {appConfig.siteName}
        </span>
        <LanguageToggle variant="light" />
      </div>
    </header>
  );
}
