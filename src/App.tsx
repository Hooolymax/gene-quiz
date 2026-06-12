import { useState } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { calculateResult } from './utils/calculateResult';
import type { Answers, PersonalityResult } from './types/quiz';

/**
 * 页面阶段。用一个简单的状态机切换，不引入路由 ——
 * 这样最容易迁移到微信小程序（小程序用自己的页面栈，逻辑层可直接复用 utils/data）。
 *
 * 扩展点（后端 API / 用户结果保存）：
 *   - handleComplete 里可把 answers + result 上报后端，或写入 localStorage 做历史记录。
 * 扩展点（路由）：
 *   - 若 Web 端需要可分享的结果链接，可换成 react-router，并把 code 放进 URL。
 */
type Stage = 'home' | 'quiz' | 'result';

export default function App() {
  const [stage, setStage] = useState<Stage>('home');
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<PersonalityResult | null>(null);

  const handleStart = () => {
    setAnswers({});
    setResult(null);
    setStage('quiz');
  };

  const handleComplete = (finalAnswers: Answers) => {
    const computed = calculateResult(finalAnswers);
    setAnswers(finalAnswers);
    setResult(computed);
    setStage('result');
    // 扩展点：在此上报结果 / 保存到 localStorage / 调用后端。
  };

  const handleRestart = () => {
    setAnswers({});
    setResult(null);
    setStage('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {stage === 'home' && <HomePage onStart={handleStart} />}

      {stage === 'quiz' && (
        <QuizPage
          initialAnswers={answers}
          onComplete={handleComplete}
          onExit={handleRestart}
        />
      )}

      {stage === 'result' && result && (
        <ResultPage result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
