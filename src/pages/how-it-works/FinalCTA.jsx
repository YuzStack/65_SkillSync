import { BadgeCheck } from 'lucide-react';
import { Link } from 'react-router';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className='container mx-auto mt-6 flex items-center justify-center bg-[url(/bg-decorative-element-bg-circuitry.png)] bg-contain bg-center py-4 lg:py-6'>
      <div className='flex flex-col items-center gap-4 p-4 lg:gap-6 lg:p-6'>
        <h2 className='text-center text-2xl font-bold md:text-3xl lg:text-4xl'>
          Ready to see how you stack up?
        </h2>
        <Link to='/dashboard'>
          <motion.button
            className='bg-theme hover:bg-theme/90 shadow-theme my-2.5 rounded-lg p-2 px-2.5 font-semibold text-black shadow transition-all hover:scale-105 lg:my-5 lg:px-4 lg:py-3 lg:text-lg'
            animate={{
              boxShadow: [
                '0px 0px 0px rgba(59, 130, 246, 0)',
                '0px 0px 15px rgba(59, 130, 246, 0.5)',
                '0px 0px 0px rgba(59, 130, 246, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Launch Application
          </motion.button>
        </Link>
        <div className='flex items-center gap-2'>
          <BadgeCheck className='text-paragraph size-4' />
          <p className='text-paragraph text-sm'>
            No credit card required to access
          </p>
        </div>
      </div>
    </section>
  );
}
