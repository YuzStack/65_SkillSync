import {
  Bookmark,
  Brain,
  Briefcase,
  CircleDollarSign,
  Clock,
  Dot,
  MapPin,
} from 'lucide-react';
import AiInsight from '../ai-insight/AiInsight';
import { useJobs } from './JobsContext';
import Message from '../../ui/Message';
import Loader from '../../ui/Loader';

export default function JobFullDetails() {
  const { activeJob, dispatch, savedJobs } = useJobs();

  if (!activeJob)
    return (
      <div className='h-[calc(100vh-64px)] p-6 lg:col-span-8'>
        <Message text='Select a job to view details' />
      </div>
    );

  const isSaved = savedJobs.some(job => job.jobId === activeJob.jobId);

  return (
    <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
      <div className='sm:flex sm:items-center sm:justify-between sm:gap-2'>
        <h2 className='text-2xl font-bold lg:text-3xl'>{activeJob.jobTitle}</h2>
        <div className='my-3 flex items-center gap-2 sm:my-0 sm:gap-3'>
          {isSaved ? (
            <button
              className='flex items-center gap-2 text-sm sm:rounded-lg sm:border sm:border-neutral-800 sm:bg-neutral-900 sm:p-2 sm:px-3'
              onClick={() =>
                dispatch({ type: 'job/unsave', payload: activeJob.jobId })
              }
            >
              <i className='fa-solid fa-bookmark text-theme text-2xl sm:text-lg'></i>
              <p className='hidden sm:block'>Save Job</p>
            </button>
          ) : (
            <button
              className='flex items-center gap-2 text-sm sm:rounded-lg sm:border sm:border-neutral-800 sm:bg-neutral-900 sm:p-2 sm:px-3'
              onClick={() => dispatch({ type: 'job/save', payload: activeJob })}
            >
              <i className='fa-regular fa-bookmark text-2xl sm:text-lg'></i>
              <p className='hidden sm:block'>Save Job</p>
            </button>
          )}
          <button className='bg-theme hover:bg-theme/80 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'>
            <a href={activeJob.applyLink} target='_blank'>
              Apply <span className='hidden sm:inline'>Now</span>
            </a>
          </button>
        </div>
      </div>
      <div className='mt-3 flex items-center gap-4'>
        <p className='text-sm'>{activeJob.employerName}</p>
        <p className='text-paragraph flex items-center gap-1 text-sm'>
          <MapPin className='text-paragraph size-4' />
          <span>
            {activeJob.isRemote ? 'Remote, ' : ''}
            {activeJob.jobLocation}
          </span>
        </p>
        {activeJob.postedAt && (
          <p className='text-paragraph flex items-center gap-1 text-sm'>
            <Clock className='text-paragraph size-4' />
            <span>{activeJob.postedAt}</span>
          </p>
        )}
      </div>
      <div className='mt-4 flex items-center gap-2 lg:mt-6'>
        <div className='flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-2 px-3'>
          <Briefcase className='text-paragraph size-4' />
          <p className='text-sm'>{activeJob.employmentType}</p>
        </div>
        {activeJob.salary && (
          <div className='flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-2 px-3'>
            <CircleDollarSign className='text-paragraph size-4' />
            <p className='text-sm'>{activeJob.salary}</p>
          </div>
        )}
      </div>
      {/* <AiInsight /> */}
      <button className='bg-theme hover:bg-theme/80 my-4 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'>
        Get AI Analysis
      </button>
      <div className='mt-6'>
        <h2 className='mb-3 text-lg font-semibold lg:text-xl'>
          About the Role
        </h2>
        <p className='whitespace-pre-line text-white lg:max-w-3xl lg:text-lg'>
          {activeJob.jobDescription}
        </p>
      </div>
      {activeJob.jobRoles && (
        <div className='mt-6'>
          <h2 className='mb-3 text-lg font-semibold lg:text-xl'>
            Responsibilities
          </h2>
          <ul className='mt-2 space-y-2 lg:max-w-3xl'>
            {activeJob.jobRoles.map((role, i) => (
              <li className='flex items-center gap-1' key={i}>
                <Dot className='size-7 text-neutral-700' />
                <span className='text-paragraph'>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
