import {
  Bookmark,
  Brain,
  Briefcase,
  CircleDollarSign,
  Clock,
  Dot,
  MapPin,
} from 'lucide-react';
import AiInsight from './AiInsight';
import { useJobs } from '../../contexts/JobsContext';
import Message from '../Message';
import Loader from '../Loader';

export default function RightPanel() {
  const { activeJob } = useJobs();

  if (!activeJob)
    return (
      <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
        <Message text='Select a job to view details' />
      </div>
    );

  return (
    <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold lg:text-3xl'>{activeJob.jobTitle}</h2>
        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-2 px-3 text-sm'>
            <Bookmark className='size-5' />
            <p>Save Job</p>
          </button>
          <button className='bg-theme hover:bg-theme/80 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'>
            <a href={activeJob.applyLink} target='_blank'>
              Apply Now
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
        <p className='text-paragraph whitespace-pre-line lg:max-w-3xl lg:text-lg'>
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
