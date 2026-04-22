import { Bookmark } from 'lucide-react';
import { useJobs } from './JobsContext';
import Message from '../ui/Message';
import Loader from '../ui/Loader';

export default function Jobs() {
  const { jobs, isLoading, error, dispatch, activeJob, savedJobs } = useJobs();

  if (error)
    return (
      <div className='h-[calc(100vh-227px)]'>
        <Message text={error} />
      </div>
    );

  if (isLoading)
    return (
      <div className='h-[calc(100vh-227px)]'>
        <Loader />
      </div>
    );

  if (jobs.length === 0)
    return (
      <div className='h-[calc(100vh-227px)]'>
        <Message text='No jobs yet, start by searching for a job.' />
      </div>
    );

  return (
    <ul className='space-y-4 p-5'>
      {jobs.map(job => (
        <li
          className={`hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 overflow-auto rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2 ${activeJob && activeJob.jobId === job.jobId ? 'bg-theme/20 border-l-theme scale-102 border-l-2' : ''}`}
          key={job.jobId}
          onClick={() => {
            dispatch({ type: 'job/setActive', payload: job.jobId });
          }}
        >
          <div className='flex items-center gap-4'>
            <div className='flex size-10 items-center justify-center overflow-hidden rounded-full bg-blue-500 sm:size-12.5'>
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
          <div className='hidden sm:block'>
            {savedJobs.some(j => j.jobId === job.jobId) ? (
              <button
                onClick={e => {
                  e.stopPropagation();
                  dispatch({ type: 'job/unsave', payload: job.jobId });
                }}
              >
                <i className='fa-solid fa-bookmark text-theme text-xl'></i>
              </button>
            ) : (
              <button
                onClick={e => {
                  e.stopPropagation();
                  dispatch({ type: 'job/save', payload: job });
                }}
              >
                <i className='fa-regular fa-bookmark text-xl'></i>
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
