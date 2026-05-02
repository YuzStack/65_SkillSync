import { ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router';
// eslint-disable-next-line
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <motion.section
      className='container mx-auto flex min-h-[calc(100vh-64px)] items-center'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex w-full flex-col items-center justify-between gap-6 p-4 lg:flex-row'>
        <div className='flex flex-col gap-2 lg:gap-4'>
          <motion.h1
            className='text-3xl font-bold sm:text-4xl lg:text-6xl'
            variants={itemVariants}
          >
            Stop Guessing. <br />
            <span className='text-theme'>Start Matching.</span>
          </motion.h1>
          <motion.p
            className='text-paragraph max-w-xl sm:text-lg'
            variants={itemVariants}
          >
            SkillSync uses Al to analyze your profile against thousands of
            realtime job listings, giving you a match score and actionable
            insights before you even apply.
          </motion.p>
          <motion.div
            className='mt-2 flex items-center gap-4'
            variants={itemVariants}
          >
            <Link to='/dashboard'>
              <button className='bg-theme hover:bg-theme/90 rounded-lg p-2 px-2.5 font-semibold text-black transition-all hover:scale-105 lg:px-4 lg:py-3'>
                Find Your Match
              </button>
            </Link>
            <Link to='/how-it-works'>
              <button className='bg-bg-sec rounded-lg p-2 px-2.5 font-semibold text-white transition-all hover:scale-105 lg:px-3 lg:py-2'>
                Learn How It Works
              </button>
            </Link>
          </motion.div>
          <motion.div
            className='mx-auto mt-4 flex w-fit items-center gap-6'
            variants={itemVariants}
          >
            <p className='text-paragraph flex items-center gap-2 text-sm tracking-wider'>
              <ShieldCheck className='text-paragraph size-5' />
              <span className='text-sm md:text-base'>AI CERTIFIED</span>
            </p>
            <p className='text-paragraph flex items-center gap-2 text-sm tracking-wider'>
              <Zap className='text-paragraph size-5' />
              <span className='text-sm md:text-base'>REAL-TIME DATA</span>
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
          <img
            src='/skillsync-dashboard.png'
            alt='SkillSync Dashboard'
            className='shadow-theme/30 hidden h-[50vh] rounded-xl shadow-lg sm:block'
          />
          <img
            src='/skillsync-dashboard-mobile.png'
            alt='SkillSync Dashboard'
            className='h-[50vh] sm:hidden'
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
