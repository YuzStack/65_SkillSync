import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

function styleDesktopNavLink({ isActive }) {
  return `hover:text-theme pb-1 font-semibold transition-all ${isActive ? 'border-theme border-b-2 text-theme' : 'text-white'}`;
}

function styleMobileNavLink({ isActive }) {
  return `rounded-lg p-2 transition-all ${isActive ? 'text-theme bg-theme/20' : 'text-white'}`;
}

export default function PrimaryHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className='bg-bg-primary sticky top-0 z-10 hidden h-16 border-b border-neutral-800 sm:block'>
        <div className='flex h-full items-center justify-between px-3 lg:px-6'>
          <div className='flex items-center gap-2'>
            <img
              src='/skillsync.png'
              alt='SkillSync'
              className='size-6 lg:size-8'
            />
            <p className='text-lg font-bold lg:text-xl'>SkillSync</p>
          </div>
          <nav className='flex items-center gap-6'>
            <NavLink to='/' className={styleDesktopNavLink}>
              Home
            </NavLink>
            <NavLink to='/how-it-works' className={styleDesktopNavLink}>
              How It Works
            </NavLink>
          </nav>
          <NavLink to='/dashboard'>
            <button className='bg-theme hover:bg-theme/90 rounded-lg px-3 py-2 text-sm font-semibold text-black transition-all'>
              Launch Application
            </button>
          </NavLink>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className='relative z-10 sm:hidden'>
        <header className='bg-bg-primary fixed top-0 z-10 h-16 w-full border-b border-neutral-800'>
          <div className='flex h-full items-center justify-between px-3 lg:px-6'>
            <div className='flex items-center gap-2'>
              <img
                src='/skillsync.png'
                alt='SkillSync'
                className='size-6 lg:size-8'
              />
              <p className='text-lg font-bold lg:text-xl'>SkillSync</p>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>
        <nav
          className={`bg-bg-sec fixed top-16 right-0 z-10 flex h-[calc(100vh-64px)] w-50 flex-col gap-2 border-l-2 border-neutral-800 p-4 transition-all duration-300 ${!isMobileMenuOpen && 'translate-x-full'}`}
        >
          <NavLink to='/' className={styleMobileNavLink}>
            Home
          </NavLink>
          <NavLink to='/how-it-works' className={styleMobileNavLink}>
            How It Works
          </NavLink>
          <NavLink to='/dashboard'>
            <button className='bg-theme hover:bg-theme/90 rounded-lg px-3 py-2 text-sm font-semibold text-black transition-all'>
              Launch Application
            </button>
          </NavLink>
        </nav>
        {isMobileMenuOpen && (
          <div
            className='fixed inset-0 h-screen bg-black/20 backdrop-blur-xs'
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
}
