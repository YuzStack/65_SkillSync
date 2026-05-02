import { Layers2 } from 'lucide-react';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function TechTransparency() {
  return (
    <section className='container mx-auto mt-6 flex flex-col gap-4 p-4 lg:mt-4 lg:p-6'>
      <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
        Powered by Modern Engineering.
      </h2>
      <p className='text-paragraph max-w-2xl lg:text-xl'>
        SkillSync is built on a high-performance stack designed for speed,
        intelligence, and a seamless user experience.
      </p>

      <div className='mt-2 flex flex-col flex-wrap items-stretch gap-4 sm:flex-row sm:gap-5 md:gap-6 lg:mt-4'>
        <motion.div
          className='bg-bg-sec flex-1 cursor-pointer space-y-3 rounded-lg border border-neutral-800 p-4 lg:p-6'
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(59, 130, 246, 0.5)',
          }}
        >
          <div className='flex items-center gap-3'>
            <i className='fa-solid fa-layer-group text-theme text-2xl'></i>
            <h3 className='font-semibold tracking-wide text-neutral-400 lg:text-lg'>
              Frontend
            </h3>
          </div>
          <p className='text-lg font-semibold lg:text-xl'>
            React & Tailwind CSS
          </p>
          <p className='text-paragraph text-sm lg:text-base'>
            for a snappy, responsive, and accessible Ul.
          </p>
        </motion.div>

        <motion.div
          className='bg-bg-sec flex-1 cursor-pointer space-y-3 rounded-lg border border-neutral-800 p-4 lg:p-6'
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(59, 130, 246, 0.5)',
          }}
        >
          <div className='flex items-center gap-3'>
            <i className='fa-solid fa-microchip text-theme text-2xl'></i>
            <h3 className='font-semibold tracking-wide text-neutral-400 lg:text-lg'>
              Intelligence
            </h3>
          </div>
          <p className='text-lg font-semibold lg:text-xl'>Gemini 3 Flash</p>
          <p className='text-paragraph text-sm lg:text-base'>
            for high-speed semantic analysis and career reasoning.
          </p>
        </motion.div>

        <motion.div
          className='bg-bg-sec flex-1 cursor-pointer space-y-3 rounded-lg border border-neutral-800 p-4 lg:p-6'
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(59, 130, 246, 0.5)',
          }}
        >
          <div className='flex items-center gap-3'>
            <i className='fa-solid fa-database text-theme text-2xl'></i>
            <h3 className='font-semibold tracking-wide text-neutral-400 lg:text-lg'>
              Data
            </h3>
          </div>
          <p className='text-lg font-semibold lg:text-xl'>JSearch API</p>
          <p className='text-paragraph text-sm lg:text-base'>
            for real-time access to global job market indices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
