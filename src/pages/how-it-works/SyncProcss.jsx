export default function SyncProcss() {
  return (
    <section className='container mx-auto mt-6 flex flex-col items-center gap-2 p-4 md:gap-4 lg:mt-4 lg:gap-6 lg:p-6'>
      <h2 className='text-center text-2xl font-bold md:text-3xl lg:text-4xl'>
        The Sync Process
      </h2>
      <p className='text-paragraph max-w-2xl text-center lg:text-xl'>
        From profile creation to actionable career insights in four simple
        steps.
      </p>
      <div className='my-4 w-full space-y-10 lg:my-6 lg:space-y-15'>
        <div className='grid items-center justify-between gap-3 md:grid-cols-2 md:gap-6 lg:gap-12'>
          <div className='flex flex-col gap-2 md:items-end md:gap-4'>
            <span className='bg-theme/20 text-theme flex size-10 items-center justify-center rounded-full text-lg font-semibold md:size-12.5 md:text-xl'>
              1
            </span>
            <h3 className='text-lg font-semibold md:text-xl'>
              Define Your Identity
            </h3>
            <p className='text-paragraph max-w-2xl md:text-end md:text-lg'>
              Start by creating your professional profile. Input your core
              skills, experience level, and a brief bio.
            </p>
          </div>
          <img
            src='/skillsync-create-profile.png'
            alt='SkillSync Create Profile'
            className='mx-auto h-100 md:mx-0'
          />
        </div>

        <div className='grid items-center justify-between gap-4 md:grid-cols-2 md:gap-6 lg:gap-12'>
          <img
            src='/skillsync-search.png'
            alt='SkillSync Create Profile'
            className='order-2 mx-auto h-100 md:-order-2 md:mx-0 md:ml-auto'
          />
          <div className='flex flex-col items-start gap-2 md:gap-4'>
            <span className='bg-theme/20 text-theme flex size-10 items-center justify-center rounded-full text-lg font-semibold lg:size-12.5 lg:text-xl'>
              2
            </span>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Real-Time Discovery
            </h3>
            <p className='text-paragraph max-w-2xl text-start lg:text-lg'>
              Use our advanced search to tap into live job data. Filter by role,
              location, or remote status to find exactly what you're looking
              for.
            </p>
          </div>
        </div>

        <div className='grid items-center justify-between gap-4 md:grid-cols-2 md:gap-6 lg:gap-12'>
          <div className='flex flex-col gap-2 md:items-end md:gap-4'>
            <span className='bg-theme/20 text-theme flex size-10 items-center justify-center rounded-full text-lg font-semibold lg:size-12.5 lg:text-xl'>
              3
            </span>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Deep AI Analysis
            </h3>
            <p className='text-paragraph max-w-2xl md:text-end lg:text-lg'>
              Click 'Get Al Analysis' on any role. Our integration with Gemini
              Al scans the job's deep requirements and compares them to your
              specific profile.
            </p>
          </div>
          <img
            src='/skillsync-job-details.png'
            alt='SkillSync Create Profile'
            className='mx-auto sm:h-70 md:mx-0 md:h-80 lg:h-100'
          />
        </div>

        <div className='grid items-center justify-between gap-2 sm:gap-3 md:grid-cols-2 md:gap-6 lg:gap-12'>
          <img
            src='/skillsync-ai-analysis.png'
            alt='SkillSync Create Profile'
            className='order-2 mx-auto sm:h-60 md:-order-2 md:mx-0 md:ml-auto md:h-80'
          />
          <div className='flex flex-col items-start gap-2 md:gap-4'>
            <span className='bg-theme/20 text-theme flex size-10 items-center justify-center rounded-full text-lg font-semibold lg:size-12.5 lg:text-xl'>
              4
            </span>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Actionable Insights
            </h3>
            <p className='text-paragraph max-w-2xl text-start lg:text-lg'>
              Receive a match percentage and specific, personalized advice on
              how to tailor your approach or what skills to highlight for that
              exact role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
