import { ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {
  return (
    <div className='flex min-h-[calc(100vh-64px)] items-center p-6'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-6xl font-bold'>
            Stop Guessing. <br />
            <span className='text-theme'>Start Matching.</span>
          </h1>
          <p className='text-paragraph max-w-xl text-lg'>
            SkillSync uses Al to analyze your profile against thousands of
            realtime job listings, giving you a match score and actionable
            insights before you even apply.
          </p>
          <div className='mt-2 flex items-center gap-4'>
            <Link to='/dashboard'>
              <button className='bg-theme hover:bg-theme/90 rounded-lg px-4 py-3 font-semibold text-black transition-all hover:scale-105'>
                Find Your Match
              </button>
            </Link>
            <Link to='/how-it-works'>
              <button className='bg-bg-sec rounded-lg px-3 py-2 font-semibold text-white transition-all hover:scale-105'>
                Learn How It Works
              </button>
            </Link>
          </div>
          <div className='mt-4 flex items-center gap-6'>
            <p className='text-paragraph flex items-center gap-2 text-sm tracking-wider'>
              <ShieldCheck className='text-paragraph size-5' />
              <span>AI CERTIFIED</span>
            </p>
            <p className='text-paragraph flex items-center gap-2 text-sm tracking-wider'>
              <Zap className='text-paragraph size-5' />
              <span>REAL-TIME DATA</span>
            </p>
          </div>
        </div>
        <div>
          <img
            src='/skillsync-dashboard.png'
            alt='skillSync Dashboard'
            className='shadow-theme/30 h-[50vh] rounded-xl shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
