import { Bookmark } from 'lucide-react';
import { NavLink } from 'react-router';

function styleNavLink({ isActive }) {
  return `flex cursor-pointer items-center justify-center ${isActive ? 'border-theme border-b' : 'text-paragraph'}`;
}

export default function NavJobs() {
  return (
    <div className='grid h-12.5 grid-cols-2 border-b border-neutral-800'>
      <NavLink to='all-jobs' className={styleNavLink}>
        <p className='text-sm font-medium'>All Jobs</p>
      </NavLink>
      <NavLink to='saved-jobs' className={styleNavLink}>
        <p className='flex items-center gap-2 text-sm font-medium'>
          <Bookmark className='size-5' />
          <span>Saved</span>
        </p>
      </NavLink>
    </div>
  );
}
