import { Bookmark } from 'lucide-react';
import { useJobs } from '../../contexts/JobsContext';

export default function SavedJobs() {
  const { savedJobs, dispatch, activeJob } = useJobs();

  if (savedJobs.length === 0)
    return (
      <div className='flex flex-col items-center px-3 py-12'>
        <div className='flex size-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900'>
          <Bookmark className='text-paragraph size-8' />
        </div>
        <h3 className='mt-4 mb-2 text-lg lg:text-xl'>No saved jobs yet</h3>
        <p className='text-paragraph lg:text-lg'>
          Bookmark jobs you're interested in and they will appear here.
        </p>
      </div>
    );

  return (
    <ul className='space-y-4 p-5'>
      {savedJobs.map(job => (
        <li
          className={`hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2 ${activeJob && activeJob.jobId === job.jobId ? 'bg-theme/20 border-l-theme scale-102 border-l-2' : ''}`}
          key={job.jobId}
          onClick={() =>
            dispatch({ type: 'savedJob/setActive', payload: job.jobId })
          }
        >
          <div className='flex gap-4'>
            <div className='flex size-12.5 items-center justify-center overflow-hidden rounded-full bg-blue-500'>
              {job.employerLogo ? (
                <img
                  src={job.employerLogo}
                  alt={job.employerName}
                  className='size-full'
                />
              ) : (
                <span className='text-lg font-bold'>
                  {job.employerName.split('').at(0)}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-lg font-semibold'>{job.jobTitle}</p>
              <div className='flex items-center justify-between gap-4'>
                <span className='text-paragraph text-sm'>
                  {job.employerName}
                </span>
                <span className='text-paragraph text-sm'>
                  {job.isRemote ? 'Remote, ' : ''}
                  {job.jobLocation}
                </span>
              </div>
            </div>
          </div>
          <div>
            <Bookmark className='text-paragraph size-6' />
          </div>
        </li>
      ))}
    </ul>
  );
}
