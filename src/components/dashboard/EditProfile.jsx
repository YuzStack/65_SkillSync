import { X } from 'lucide-react';
import { useState } from 'react';

export default function EditProfile({ setShowEditProfile }) {
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
    <div className='absolute inset-0 z-20 flex min-h-screen items-center justify-center bg-black/30 backdrop-blur-xs'>
      <div className='border border-neutral-800 bg-neutral-900 sm:size-fit md:w-lg md:rounded-2xl lg:rounded-3xl'>
        <header className='flex items-center justify-between gap-2 border-b border-neutral-800 px-3 py-5'>
          <h1 className='text-headline mt-1 text-xl font-semibold md:text-2xl'>
            Profile Settings
          </h1>
          <div>
            <button
              className='rounded-lg p-1 text-white/50 transition-all hover:scale-105 hover:bg-neutral-800 hover:text-white'
              onClick={() => setShowEditProfile(false)}
            >
              <X className='size-6' />
            </button>
          </div>
        </header>
        <form className='space-y-6 p-6'>
          <label className='flex flex-col gap-1.5'>
            <p className='text-sm md:text-base'>Full Name</p>
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
          <div className='mt-2 flex justify-end gap-4'>
            <button
              className='p-1 px-2 font-semibold text-white/70 transition-colors hover:text-white'
              onClick={() => setShowEditProfile(false)}
            >
              Cancel
            </button>
            <button className='bg-theme hover:bg-theme/80 rounded-lg p-2 px-3 font-semibold transition-colors'>
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
