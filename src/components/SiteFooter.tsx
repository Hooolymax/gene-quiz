import { appConfig } from '../data/appConfig';
import { useLocale } from '../i18n/LocaleContext';

/**
 * 页脚 —— 完整免责声明 + 版权。全站统一。
 */
export default function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-slate-100 px-6 py-6 text-center">
      <p className="mx-auto max-w-md text-[10px] leading-relaxed text-slate-400">
        {t(appConfig.disclaimer)}
      </p>
      <p className="mt-3 text-[10px] font-semibold tracking-wide text-slate-400">
        {appConfig.copyright}
      </p>
    </footer>
  );
}
