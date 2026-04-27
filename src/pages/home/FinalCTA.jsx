import { Link } from 'react-router';

export default function FinalCTA() {
  return (
    <section className='from-theme/20 to-bg-primary container mx-auto mt-6 flex min-h-[50vh] items-center justify-center bg-radial'>
      <div className='flex flex-col items-center gap-4 p-4 lg:gap-6 lg:p-6'>
        <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
          Ready to sync your skills?
        </h2>
        <p className='text-paragraph max-w-2xl text-center lg:text-xl'>
          Join other developers and engineers who are using Al to skip the noise
          and find their perfect role.
        </p>
        <Link to='/dashboard'>
          <button className='bg-theme hover:bg-theme/90 shadow-theme mt-2 rounded-lg p-2 px-2.5 font-semibold text-black shadow transition-all hover:scale-105 lg:mt-4 lg:px-4 lg:py-3 lg:text-lg'>
            Launch Application
          </button>
        </Link>
      </div>
    </section>
  );
}
