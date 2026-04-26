import { NavLink } from 'react-router';

function styleDesktopNavLink({ isActive }) {
  return `hover:text-theme pb-1 font-semibold transition-all ${isActive ? 'border-theme border-b-2 text-theme' : 'text-white'}`;
}

export default function PrimaryHeader() {
  return (
    <header className='bg-bg-primary sticky top-0 z-10 h-16 border-b border-neutral-800'>
      <div className='flex h-full items-center justify-between px-3 lg:px-6'>
        <div className='flex items-center gap-2'>
          <img
            src='/skillsync.png'
            alt='SkillSync'
            className='size-6 lg:size-8'
          />
          <p className='text-lg font-bold lg:text-xl'>SkillSync</p>
        </div>
        <div className='flex items-center gap-6'>
          <NavLink to='/' className={styleDesktopNavLink}>
            Home
          </NavLink>
          <NavLink to='/how-it-works' className={styleDesktopNavLink}>
            How It Works
          </NavLink>
        </div>
        <NavLink to='/dashboard'>
          <button className='bg-theme hover:bg-theme/90 rounded-lg px-3 py-2 text-sm font-semibold text-black transition-all'>
            Launch Application
          </button>
        </NavLink>
      </div>
    </header>
  );
}
