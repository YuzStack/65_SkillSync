import { UserRoundPen } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Header({ setShowEditProfile }) {
  return (
    <header className='bg-bg-primary h-16 border-b border-neutral-800'>
      <div className='flex h-full items-center justify-between px-3 lg:px-6'>
        <NavLink to='/'>
          <div className='flex items-center gap-2'>
            <img
              src='/skillsync.png'
              alt='SkillSync'
              className='size-6 lg:size-8'
            />
            <p className='text-lg font-bold lg:text-xl'>SkillSync</p>
          </div>
        </NavLink>
        <button
          className='rounded-full border border-neutral-800 bg-neutral-900 p-2'
          onClick={() => setShowEditProfile(true)}
        >
          <UserRoundPen className='text-paragraph size-5 transition-colors hover:text-white' />
        </button>
      </div>
    </header>
  );
}
