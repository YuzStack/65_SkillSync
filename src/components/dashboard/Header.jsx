import { UserRoundPen } from 'lucide-react';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 h-16 border-b border-neutral-800'>
      <div className='flex h-full items-center justify-between px-3 lg:px-6'>
        <div className='flex items-center gap-2'>
          <img
            src='/skillsync.png'
            alt='SkillSync'
            className='size-6 lg:size-8'
          />
          <p className='text-lg font-bold lg:text-xl'>SkillSync</p>
        </div>
        <div className='flex size-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900'>
          <UserRoundPen className='text-paragraph size-5 transition-colors hover:text-white' />
        </div>
      </div>
    </header>
  );
}
