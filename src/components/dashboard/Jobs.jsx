import { Bookmark } from 'lucide-react';

export default function Jobs() {
  return (
    <ul className='space-y-4 p-5'>
      <li className='hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2'>
        <div className='flex gap-4'>
          <div className='flex size-12.5 items-center justify-center rounded-full bg-blue-500'>
            <span className='text-lg font-bold'>T</span>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold'>Senior React Developer</p>
            <div className='flex items-center justify-between gap-4'>
              <span className='text-paragraph text-sm'>TechFlow</span>
              <span className='text-paragraph text-sm'>Remote, US</span>
            </div>
          </div>
        </div>
        <div>
          <Bookmark className='text-paragraph size-6' />
        </div>
      </li>
      <li className='hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2'>
        <div className='flex gap-4'>
          <div className='flex size-12.5 items-center justify-center rounded-full bg-orange-500'>
            <span className='text-lg font-bold'>N</span>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold'>Frontend Engineer</p>
            <div className='flex items-center justify-between gap-4'>
              <span className='text-paragraph text-sm'>Nexus Systems</span>
              <span className='text-paragraph text-sm'>
                Ilorin, NG (Hybrid)
              </span>
            </div>
          </div>
        </div>
        <div>
          <Bookmark className='text-paragraph size-6' />
        </div>
      </li>
      <li className='hover:bg-theme/20 hover:border-l-theme flex h-20 cursor-pointer items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all hover:scale-102 hover:border-l-2'>
        <div className='flex gap-4'>
          <div className='flex size-12.5 items-center justify-center rounded-full bg-pink-500'>
            <span className='text-lg font-bold'>C</span>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold'>UI/UX Developer</p>
            <div className='flex items-center justify-between gap-4'>
              <span className='text-paragraph text-sm'>Creative Circle</span>
              <span className='text-paragraph text-sm'>New York, US</span>
            </div>
          </div>
        </div>
        <div>
          <Bookmark className='text-paragraph size-6' />
        </div>
      </li>
    </ul>
  );
}
