import { SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useJobs } from './JobsContext';
import JobFilters from './JobFilters';

export default function SearchJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const { getJobs, dispatch, jobs } = useJobs();
  const [isAddingFilters, setIsAddingFilters] = useState(false);

  useEffect(
    function () {
      if (!searchQuery.trim()) {
        dispatch({ type: 'jobs/clear' });
        return;
      }
    },
    [searchQuery, dispatch],
  );

  function handleSearchJobs(e) {
    e.preventDefault();
    if (!searchQuery.trim() || searchQuery.length < 3) return;

    getJobs(searchQuery);
  }

  return (
    <div className='border-b border-neutral-800 p-4'>
      <div className='flex items-center justify-between gap-4'>
        <form onSubmit={handleSearchJobs} className='w-full'>
          <input
            type='text'
            className='focus:ring-theme w-full flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 transition-colors focus:ring-1 focus:outline-0'
            placeholder='Search by title, company or location...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
        <button
          className={`rounded-lg border p-2 ${isAddingFilters ? 'bg-theme/20 border-theme/80 text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900 transition-colors hover:text-white'}`}
          onClick={() => setIsAddingFilters(!isAddingFilters)}
        >
          <SlidersHorizontal className='size-6' />
        </button>
      </div>

      {isAddingFilters && <JobFilters />}

      <p className='text-paragraph mt-2 text-xs lg:text-sm'>
        {jobs.length} roles
      </p>
    </div>
  );
}
