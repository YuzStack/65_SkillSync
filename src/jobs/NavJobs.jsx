import { Bookmark } from 'lucide-react';
import { NavLink } from 'react-router';
import { useJobs } from './JobsContext';

function styleNavLink({ isActive }) {
  return `flex cursor-pointer items-center justify-center ${isActive ? 'border-theme border-b' : 'text-paragraph'}`;
}

export default function NavJobs() {
  const { savedJobs } = useJobs();

  return (
    <div className='grid h-12.5 grid-cols-2 border-b border-neutral-800'>
      <NavLink to='all-jobs' className={styleNavLink}>
        <p className='text-sm font-medium'>All Jobs</p>
      </NavLink>
      <NavLink to='saved-jobs' className={styleNavLink}>
        <p className='flex items-center gap-2 text-sm font-medium'>
          {savedJobs.length === 0 ? (
            <i className='fa-regular fa-bookmark text-base'></i>
          ) : (
            <i className='fa-solid fa-bookmark text-base'></i>
          )}
          <span>Saved</span>
          {savedJobs.length > 0 && (
            <span className='text-theme bg-theme/20 flex size-5 items-center justify-center rounded-full p-2'>
              {savedJobs.length}
            </span>
          )}
        </p>
      </NavLink>
    </div>
  );
}
