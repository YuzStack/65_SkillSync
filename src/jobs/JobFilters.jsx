import { useJobs } from './JobsContext';

export default function JobFilters() {
  const { filters, dispatch } = useJobs();

  function handleFiltering(category, value) {
    const isCurrentlyActive = filters[category] === value;

    dispatch({
      type: 'filters/update',
      payload: { [category]: isCurrentlyActive ? 'all' : value },
    });
  }

  return (
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
  );
}
