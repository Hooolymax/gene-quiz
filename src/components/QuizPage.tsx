import { useState } from 'react';
import { questions } from '../data/questions';
import type { Answers } from '../types/quiz';
import ProgressBar from './ProgressBar';
import OptionCard from './OptionCard';

interface QuizPageProps {
  /** 进入答题时已有的答案（支持从结果页返回继续/重测） */
  initialAnswers: Answers;
  /** 全部答完回调，回传最终答案 */
  onComplete: (answers: Answers) => void;
  /** 在第 1 题再点「上一步」时退出到首页 */
  onExit: () => void;
}

/** 选中后自动跳到下一题前的停顿（毫秒），用于展示选中态 */
const ADVANCE_DELAY = 220;

/**
 * 答题页 —— 一次一题、显示进度、可返回上一题修改答案。
 */
export default function QuizPage({ initialAnswers, onComplete, onExit }: QuizPageProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const question = questions[current];
  const total = questions.length;
  const isLast = current === total - 1;
  const selectedId = answers[question.id];

  const handleSelect = (optionId: string) => {
    const next = { ...answers, [question.id]: optionId };
    setAnswers(next);

    // 选完自动前进（稍作延迟以展示选中态）
    window.setTimeout(() => {
      if (isLast) {
        onComplete(next);
      } else {
        setCurrent((c) => c + 1);
      }
    }, ADVANCE_DELAY);
  };

  const handleBack = () => {
    if (current === 0) {
      onExit();
    } else {
      setCurrent((c) => c - 1);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50 px-5 pb-8 pt-6">
      {/* 顶部：返回 + 进度 */}
      <div className="mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={handleBack}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:bg-slate-100 active:scale-95"
          aria-label="上一题"
        >
          ←
        </button>
        <div className="flex-1">
          <ProgressBar current={current + 1} total={total} />
        </div>
      </div>

      {/* 题干 */}
      <div key={question.id} className="animate-fade-in-up">
        <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900">
          {question.title}
        </h2>

        {/* 选项 */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <OptionCard
              key={option.id}
              index={index}
              text={option.text}
              selected={selectedId === option.id}
              onClick={() => handleSelect(option.id)}
            />
          ))}
        </div>
      </div>

      {/* 底部提示 */}
      <p className="mt-auto pt-8 text-center text-xs text-slate-400">
        选择后自动进入下一题，可点左上角返回修改
      </p>
    </div>
  );
}
