import { Brain, Dot } from 'lucide-react';

export default function AiInsight() {
  return (
    <div className='border-l-theme mt-6 rounded-xl border-l bg-zinc-900 p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Brain className='text-theme size-6' />
          <h3 className='text-lg font-semibold'>AI Analysis</h3>
        </div>
        <div className='bg-theme/10 border-theme/20 text-theme rounded-full border p-2 px-3 text-sm'>
          98% Match
        </div>
      </div>
      <ul className='mt-3'>
        <li className='flex items-center gap-1'>
          <Dot className='text-theme size-10' />
          <span className='text-paragraph'>
            Your 6 years of React experience exceeds the 5+ year requirement.
          </span>
        </li>
        <li className='flex items-center gap-1'>
          <Dot className='text-theme size-10' />
          <span className='text-paragraph'>
            You have listed TypeScript and Zustand in your top skills.{' '}
          </span>
        </li>
        <li className='flex items-center gap-1'>
          <Dot className='text-theme size-10' />
          <span className='text-paragraph'>
            Your previous role as a Lead Frontend Engineer aligns with the
            leadership responsibilities.
          </span>
        </li>
      </ul>
    </div>
  );
}
