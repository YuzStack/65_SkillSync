import { Bookmark } from 'lucide-react';

export default function NavJobs() {
  return (
    <div className='grid h-12.5 grid-cols-2 border-b border-neutral-800'>
      <div className='border-theme flex cursor-pointer items-center justify-center border-b'>
        <p className='text-sm font-medium'>All Jobs</p>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-paragraph flex cursor-pointer items-center gap-2 text-sm font-medium'>
          <Bookmark className='size-5' />
          <span>Saved</span>
        </p>
      </div>
    </div>
  );
}
