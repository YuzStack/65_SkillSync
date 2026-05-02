import { Brain, Dot } from 'lucide-react';
import { useJobs } from '../jobs/JobsContext';
import { useUser } from '../user/UserContext';
import { useState } from 'react';
import { getJobAnalysis } from './aiService';
import MatchScoreCounter from './MatchScoreCounter';

export default function AiInsight() {
  const { activeJob } = useJobs();
  const { user } = useUser();
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAnalyze() {
    setIsLoading(true);
    try {
      const data = await getJobAnalysis(user, activeJob);
      setAnalysis(data);
    } catch {
      alert('Failed to reach the AI. Check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading)
    return <p className='text-theme my-4 animate-pulse'>Analysing fit...</p>;

  if (!analysis)
    return (
      <button
        className='bg-theme hover:bg-theme/80 my-4 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'
        onClick={handleAnalyze}
      >
        Get AI Analysis
      </button>
    );

  return (
    <div className='border-l-theme mt-6 rounded-xl border-l bg-zinc-900 p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Brain className='text-theme size-6' />
          <h3 className='text-lg font-semibold'>AI Analysis</h3>
        </div>
        <div className='bg-theme/10 border-theme/20 text-theme rounded-full border p-2 px-3 text-sm'>
          <MatchScoreCounter targetValue={analysis.percentage} /> Match
        </div>
      </div>
      <ul className='mt-3 space-y-2'>
        {analysis.insights.map((insight, i) => (
          <li key={i} className='flex items-center gap-1'>
            <Dot className='text-theme size-10 shrink-0' />
            <span className='text-neutral-300'>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
