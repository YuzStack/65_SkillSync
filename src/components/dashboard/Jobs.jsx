import { Bookmark } from 'lucide-react';
import { useJobs } from '../../contexts/JobsContext';
import Message from '../Message';
import Loader from '../Loader';

export default function Jobs() {
  const { jobs, isLoading, error, getJob, activeJob } = useJobs();

  if (error) return <Message text={error} />;

  if (isLoading) return <Loader />;

  if (jobs.length === 0)
    return <Message text='No jobs yet, start by searching for a job.' />;

  return (
    <ul className='space-y-4 p-5'>
      {jobs.map(job => (
        <li
          className={`hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2 ${activeJob && activeJob.jobId === job.jobId ? 'bg-theme/20 border-l-theme scale-102 border-l-2' : ''}`}
          key={job.jobId}
          onClick={() => getJob(job.jobId)}
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
