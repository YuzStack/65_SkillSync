import { SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useJobs } from '../../contexts/JobsContext';

export default function SearchJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const { getJobs, dispatch, jobs } = useJobs();

  useEffect(
    function () {
      if (!searchQuery.trim()) {
        dispatch({ type: 'jobs/clear' });
        return;
      }

      if (searchQuery.length < 3) return;

      const timer = setTimeout(function () {
        getJobs(searchQuery);
      }, 1000);

      return () => clearTimeout(timer);
    },
    [searchQuery, getJobs, dispatch],
  );

  return (
    <div className='border-b border-neutral-800 p-4'>
      <div className='flex items-center justify-between gap-4'>
        <input
          type='text'
          className='focus:ring-theme flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 transition-colors focus:ring-1 focus:outline-0'
          placeholder='Search by title, company or location...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className='text-paragraph cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 p-2 transition-colors hover:text-white'>
          <SlidersHorizontal className='size-6' />
        </div>
      </div>

      <p className='text-paragraph mt-2 text-xs lg:text-sm'>
        {jobs.length} roles
      </p>
    </div>
  );
}
