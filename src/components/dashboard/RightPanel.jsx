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
  const { activeJob, isLoading, error } = useJobs();

  // if (error)
  //   return (
  //     <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
  //       <Message text={error} />
  //     </div>
  //   );

  // if (isLoading)
  //   return (
  //     <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
  //       <Loader />
  //     </div>
  //   );

  if (!activeJob)
    return (
      <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
        <Message text='Select a job to view details' />
      </div>
    );

  return (
    <div className='min-h-[calc(100vh-64px)] p-6 lg:col-span-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold lg:text-3xl'>
          Senior React Developer
        </h2>
        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-2 px-3 text-sm'>
            <Bookmark className='size-5' />
            <p>Save Job</p>
          </button>
          <button className='bg-theme hover:bg-theme/80 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'>
            Apply Now
          </button>
        </div>
      </div>
      <div className='mt-3 flex items-center gap-4'>
        <p className='text-sm'>TechFlow</p>
        <p className='text-paragraph flex items-center gap-1 text-sm'>
          <MapPin className='text-paragraph size-4' />
          <span>Remote, US</span>
        </p>
        <p className='text-paragraph flex items-center gap-1 text-sm'>
          <Clock className='text-paragraph size-4' />
          <span>2 hours ago</span>
        </p>
      </div>
      <div className='mt-4 flex items-center gap-2 lg:mt-6'>
        <div className='flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-2 px-3'>
          <Briefcase className='text-paragraph size-4' />
          <p className='text-sm'>Full-time</p>
        </div>
        <div className='flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-2 px-3'>
          <CircleDollarSign className='text-paragraph size-4' />
          <p className='text-sm'>$140k - 180k</p>
        </div>
        <div className='flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-2 px-3'>
          <Brain className='text-paragraph size-4' />
          <p className='text-sm'>Senior</p>
        </div>
      </div>
      <AiInsight />
      {/* <button className='bg-theme hover:bg-theme/80 my-4 rounded-lg p-2 px-3 text-sm transition-all hover:scale-102'>
        Get AI Analysis
      </button> */}
      <div className='mt-6'>
        <h2 className='mb-3 text-lg font-semibold lg:text-xl'>
          About the Role
        </h2>
        <p className='text-paragraph lg:max-w-3xl lg:text-lg'>
          We are looking for an experienced Senior React Developer to lead our
          frontend architecture. You will be responsible for building highly
          performant, scalable web applications and mentoring junior developers.
        </p>
      </div>
      <div className='mt-6'>
        <h2 className='mb-3 text-lg font-semibold lg:text-xl'>Requirements</h2>
        <ul className='mt-2 space-y-2 lg:max-w-3xl'>
          <li className='flex items-center gap-1'>
            <Dot className='size-7 text-neutral-700' />
            <span className='text-paragraph'>
              5+ years of experience with React and TypeScript
            </span>
          </li>
          <li className='flex items-center gap-1'>
            <Dot className='size-7 text-neutral-700' />
            <span className='text-paragraph'>
              Deep understanding of state management (Redux, Zustand, or
              Context)
            </span>
          </li>
          <li className='flex items-center gap-1'>
            <Dot className='size-7 text-neutral-700' />
            <span className='text-paragraph'>
              Experience with modern build tools and CI/CD pipelines
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
