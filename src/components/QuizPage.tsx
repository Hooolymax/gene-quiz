import { useState } from 'react';
import { questions } from '../data/questions';
import { useLocale } from '../i18n/LocaleContext';
import { strings } from '../i18n/strings';
import { splitLeadingEmoji } from '../utils/format';
import type { Answers } from '../types/quiz';
import OptionCard from './OptionCard';
import TopBanner from './TopBanner';

interface QuizPageProps {
  /** 进入答题时已有的答案 */
  initialAnswers: Answers;
  /** 全部答完回调 */
  onComplete: (answers: Answers) => void;
  /** 第 1 题再点返回则退出到首页 */
  onExit: () => void;
}

/** 选中后自动跳到下一题前的停顿（毫秒） */
const ADVANCE_DELAY = 240;

const pad2 = (n: number) => String(n).padStart(2, '0');

/**
 * 答题页 —— 参考站布局：顶栏 + 返回/进度（01/08）+ 进度条 + 题干 + 选项卡。
 */
export default function QuizPage({ initialAnswers, onComplete, onExit }: QuizPageProps) {
  const { t } = useLocale();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const question = questions[current];
  const total = questions.length;
  const isLast = current === total - 1;
  const selectedId = answers[question.id];
  const percent = Math.round(((current + 1) / total) * 100);

  const handleSelect = (optionId: string) => {
    const next = { ...answers, [question.id]: optionId };
    setAnswers(next);
    window.setTimeout(() => {
      if (isLast) onComplete(next);
      else setCurrent((c) => c + 1);
    }, ADVANCE_DELAY);
  };

  const handleBack = () => {
    if (current === 0) onExit();
    else setCurrent((c) => c - 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBanner />

      <main className="mx-auto w-full max-w-md flex-1 px-5 py-5">
        {/* 返回 + 进度计数 */}
        <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1 rounded-full px-2 py-1 transition hover:bg-slate-100 active:scale-95"
            aria-label={t(strings.backAria)}
          >
            ← Back
          </button>
          <span className="tabular-nums tracking-widest text-slate-400">
            {pad2(current + 1)} / {pad2(total)}
          </span>
        </div>

        {/* 进度条 */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* 题干 */}
        <div key={question.id} className="animate-fade-in-up">
          <h2 className="mb-6 mt-8 text-2xl font-extrabold leading-snug text-slate-900">
            {t(question.title)}
          </h2>

          {/* 选项 */}
          <div className="flex flex-col gap-3">
            {question.options.map((option) => {
              const { emoji, label } = splitLeadingEmoji(t(option.text));
              return (
                <OptionCard
                  key={option.id}
                  emoji={emoji || '•'}
                  label={label}
                  selected={selectedId === option.id}
                  onClick={() => handleSelect(option.id)}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">{t(strings.quizHint)}</p>
      </main>
    </div>
  );
}
