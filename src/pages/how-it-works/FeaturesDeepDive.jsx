import { Brain, LayoutDashboard, ShieldUser, Zap } from 'lucide-react';

export default function FeaturesDeepDive() {
  return (
    <section className='container mx-auto mt-6 flex flex-col gap-4 p-4 lg:mt-4 lg:p-6'>
      <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
        Built for Precision
      </h2>
      <p className='text-paragraph max-w-2xl lg:text-xl'>
        We've engineered SkillSync to do more than just search—we've built it to
        think.
      </p>

      <div className='mt-2 grid gap-6 lg:mt-4 lg:grid-cols-12'>
        <div className='bg-bg-sec rounded-xl p-4 lg:col-span-5 lg:row-span-2 lg:p-6'>
          <div className='flex h-full flex-col'>
            <div className='flex flex-col gap-4'>
              <Brain className='text-theme bg-theme/20 size-8 rounded-lg p-2 lg:size-10' />
              <h3 className='text-lg font-semibold lg:text-xl'>
                Semantic AI Matching
              </h3>
              <p className='text-paragraph text-sm md:text-base'>
                We don't just match keywords. Our integration with Gemini Al
                analyzes the semantic context of your experience against
                employer expectations to find the underlying fit.
              </p>
            </div>
            <img
              src='/skillsync-ai-logic-visualization.png'
              alt='SkillSync AI Job Matching'
              className='mt-auto rounded-lg'
            />
          </div>
        </div>

        <div className='bg-bg-sec rounded-xl p-4 lg:col-span-7 lg:p-6'>
          <div className='flex justify-between gap-4 lg:gap-6'>
            <div className='flex h-full flex-col gap-4'>
              <Zap className='text-theme bg-theme/20 size-8 rounded-lg p-2 lg:size-10' />
              <h3 className='text-lg font-semibold lg:text-xl'>
                Live Job Streamming
              </h3>
              <p className='text-paragraph text-sm md:text-base'>
                Your data is never stale. Every search triggers a real-time
                fetch from global job markets via JSearch, ensuring you are the
                first to see new opportunities.
              </p>
            </div>
            <img
              src='/skillsync-job-streaming-visualization.png'
              alt='SkillSync AI Job Matching'
              className='h-75 w-70 rounded-lg'
            />
          </div>
        </div>

        <div className='bg-bg-sec rounded-xl p-4 lg:col-span-7 lg:p-6'>
          <div className='flex justify-between gap-4 lg:gap-6'>
            <div className='flex h-full flex-col gap-4'>
              <LayoutDashboard className='text-theme bg-theme/20 size-8 rounded-lg p-2 lg:size-10' />
              <h3 className='text-lg font-semibold lg:text-xl'>
                Adaptive Dashboard
              </h3>
              <p className='text-paragraph text-sm md:text-base'>
                A seamless transition between discovery and analysis. Whether
                you're on a 27-inch monitor or your smartphone, the intelligence
                stays accessible.
              </p>
            </div>
            <img
              src='/skillsync-adaptive-dashboard-visualization.png'
              alt='SkillSync AI Job Matching'
              className='h-75 w-70 rounded-lg'
            />
          </div>
        </div>

        <div className='bg-bg-sec rounded-xl p-4 lg:col-span-12 lg:p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6 lg:gap-8'>
              <ShieldUser className='text-theme bg-theme/20 size-8 rounded-lg p-2 lg:size-10' />
              <div className='space-y-2'>
                <h3 className='text-lg font-semibold lg:text-xl'>
                  Privacy-First Analysis
                </h3>
                <p className='text-paragraph max-w-3xl text-sm md:text-base'>
                  Your professional profile is yours. We process your data
                  locally within your session context to provide insights
                  without ever selling your information.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-bg-primary text-paragraph rounded-full border border-neutral-800 px-3 py-1 text-sm'>
                AES-256
              </div>
              <div className='bg-bg-primary text-paragraph rounded-full border border-neutral-800 px-3 py-1 text-sm'>
                Local Processing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
