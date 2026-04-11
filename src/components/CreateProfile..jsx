import { X } from 'lucide-react';
import { useState } from 'react';

export default function CreateProfile() {
  const [fullName, setFullName] = useState('');
  const [profBio, setProfBio] = useState('');

  const [skillValue, setSkillValue] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddSkill(e) {
    if (e.key !== 'Enter') return;

    e.preventDefault();
    const refinedInput = skillValue.trim().toUpperCase();

    // Only add if not empty and not already in the list
    if (refinedInput && !skills.includes(refinedInput)) {
      setSkills(skills => [...skills, refinedInput]);
      setSkillValue('');
    }
  }

  function removeSkill(skill) {
    setSkills(skills.filter(s => s !== skill));
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='border border-neutral-800 bg-neutral-900 md:w-lg md:rounded-2xl lg:rounded-3xl'>
        <header className='flex flex-col items-center gap-2 border-b border-neutral-800 px-3 py-5'>
          <img
            src='/skillsync.png'
            alt='Skill Sync'
            className='size-10 lg:size-12.5'
          />
          <h1 className='text-headline mt-1 text-xl font-semibold md:text-2xl'>
            Welcome to SkillSync
          </h1>
          <p className='text-paragraph md:text-lg'>
            Setup your profile to get personalized job matches
          </p>
        </header>
        <form className='space-y-6 p-6'>
          <label className='flex flex-col gap-1.5'>
            <p className='text-sm md:text-base'>
              Full Name <span className='text-red-400'>*</span>
            </p>
            <input
              type='text'
              className='bg-bg-primary focus:ring-theme h-10 w-full rounded-lg p-3 transition-colors focus:ring-1 focus:outline-0'
              placeholder='e.g., Yusuf Oyinlola'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </label>
          <label className='flex flex-col gap-1.5'>
            <p className='text-sm md:text-base'>Professional Bio</p>
            <textarea
              className='bg-bg-primary focus:ring-theme w-full rounded-lg p-3 transition-colors focus:ring-1 focus:outline-0'
              placeholder='Tell us about your experience...'
              rows={4}
              value={profBio}
              onChange={e => setProfBio(e.target.value)}
            />
          </label>
          <label className='flex flex-col gap-1.5'>
            <p className='text-sm md:text-base'>Technical Skills</p>
            <input
              type='text'
              className='bg-bg-primary focus:ring-theme h-12.5 w-full rounded-lg p-3 transition-colors focus:ring-1 focus:outline-0'
              placeholder='Type a skill and press Enter...'
              value={skillValue}
              onChange={e => setSkillValue(e.target.value)}
              onKeyDown={handleAddSkill}
            />
          </label>
          <ul className='-mt-4 flex flex-wrap gap-2'>
            {skills.map(skill => (
              <li
                className='bg-bg-primary flex items-center gap-1.5 rounded-sm px-1.5 py-1 text-sm'
                key={skill}
              >
                {skill}
                <button onClick={() => removeSkill(skill)}>
                  <X
                    size={20}
                    className='transition-colors hover:text-red-400'
                  />
                </button>
              </li>
            ))}
          </ul>
          <button className='bg-theme hover:bg-theme/80 mt-2 w-full rounded-lg p-3 font-semibold transition-colors md:text-lg'>
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
