import { SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useJobs } from '../../contexts/JobsContext';

export default function SearchJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const { getJobs, dispatch, jobs, filters } = useJobs();
  const [isAddingFilters, setIsAddingFilters] = useState(true);

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

  function handleFiltering(category, value) {
    const isCurrentActive = filters[category] === value;

    dispatch({
      type: 'filters/update',
      payload: { [category]: isCurrentActive ? 'all' : value },
    });
  }

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
        <button
          className={`rounded-lg border p-2 ${isAddingFilters ? 'bg-theme/20 border-theme/80 text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900 transition-colors hover:text-white'}`}
          onClick={() => setIsAddingFilters(!isAddingFilters)}
        >
          <SlidersHorizontal className='size-6' />
        </button>
      </div>

      {isAddingFilters && (
        <div className='text-paragraph my-4'>
          <div className='flex items-center justify-between gap-2'>
            <h3 className='text-sm font-semibold uppercase'>Filters</h3>
            {(filters.jobType !== 'all' || filters.location !== 'all') && (
              <button
                className='text-theme hover:text-theme/90 text-sm transition-all'
                onClick={() => dispatch({ type: 'filters/clear' })}
              >
                Clear Filters
              </button>
            )}
          </div>
          <div className='my-2.5'>
            <h4 className='text text-sm'>Job Type</h4>
            <div className='my-1.5 flex items-center gap-2'>
              <button
                className={`rounded-lg border p-1 px-2 text-sm transition-colors ${filters.jobType === 'full-time' ? 'bg-theme/20 border-theme text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900'}`}
                onClick={() => handleFiltering('jobType', 'full-time')}
              >
                Full-time
              </button>
              <button
                className={`rounded-lg border p-1 px-2 text-sm transition-colors ${filters.jobType === 'contract' ? 'bg-theme/20 border-theme text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900'}`}
                onClick={() => handleFiltering('jobType', 'contract')}
              >
                Contract
              </button>
            </div>
          </div>
          <div className='my-2.5'>
            <h4 className='text text-sm'>Job Location</h4>
            <div className='my-1.5 flex items-center gap-2'>
              <button
                className={`rounded-lg border p-1 px-2 text-sm transition-colors ${filters.location === 'all' ? 'bg-theme/20 border-theme text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900'}`}
                onClick={() => handleFiltering('location', 'all')}
              >
                Any Location
              </button>
              <button
                className={`rounded-lg border p-1 px-2 text-sm transition-colors ${filters.location === 'remote' ? 'bg-theme/20 border-theme text-theme' : 'text-paragraph border-neutral-800 bg-neutral-900'}`}
                onClick={() => handleFiltering('location', 'remote')}
              >
                Remote
              </button>
            </div>
          </div>
        </div>
      )}

      <p className='text-paragraph mt-2 text-xs lg:text-sm'>
        {jobs.length} roles
      </p>
    </div>
  );
}
