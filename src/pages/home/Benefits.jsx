import { CircleAlert, Lightbulb, Search } from 'lucide-react';

export default function Benefits() {
  return (
    <section className='container mx-auto mt-6 flex flex-col items-center gap-4 p-4 lg:mt-4 lg:gap-6 lg:p-6'>
      <h2 className='text-center text-2xl font-bold md:text-3xl lg:text-4xl'>
        The Job Search is Broken
      </h2>
      <p className='text-paragraph max-w-2xl text-center lg:text-xl'>
        Traditional job boards overwhelm you with thousands of roles, leaving
        you to wonder if you're actually qualified. We changed that.
      </p>
      <div className='mt-4 flex flex-wrap justify-around gap-6'>
        <div className='bg-bg-sec h-55 w-70 space-y-4 rounded-lg p-4 md:h-60 md:w-80 lg:h-75 lg:w-100 lg:p-6'>
          <Search className='bg-theme/20 text-theme size-10 rounded-lg p-2 lg:size-12.5' />
          <h3 className='text-xl font-semibold lg:text-3xl'>
            No More Endless Scrolling
          </h3>
          <p className='text-paragraph lg:text-lg'>
            Stop wasting hours on irrelevant listings. We filter out the noise
            so you only see what matters.
          </p>
        </div>
        <div className='bg-bg-sec h-55 w-70 space-y-4 rounded-lg p-4 md:h-60 md:w-80 lg:h-75 lg:w-100 lg:p-6'>
          <CircleAlert className='bg-theme/20 text-theme size-10 rounded-lg p-2 lg:size-12.5' />
          <h3 className='text-xl font-semibold lg:text-3xl'>
            Clear Qualification
          </h3>
          <p className='text-paragraph lg:text-lg'>
            No more guessing if you're a fit. Get an instant match score based
            on your actual skills and experience.
          </p>
        </div>
        <div className='bg-bg-sec h-55 w-70 space-y-4 rounded-lg p-4 md:h-60 md:w-80 lg:h-75 lg:w-100 lg:p-6'>
          <Lightbulb className='bg-theme/20 text-theme size-10 rounded-lg p-2 lg:size-12.5' />
          <h3 className='text-xl font-semibold lg:text-3xl'>
            Insights, Not Templates
          </h3>
          <p className='text-paragraph lg:text-lg'>
            Receive actionable feedback tailored to your profile, helping you
            highlight the right strengths for every role.
          </p>
        </div>
      </div>
    </section>
  );
}
