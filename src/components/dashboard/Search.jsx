import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='border-b border-neutral-800 p-4'>
      <div className='flex items-center justify-between gap-4'>
        <input
          type='text'
          className='focus:ring-theme flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 transition-colors focus:ring-1 focus:outline-0'
          placeholder='Search by title, company or location...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className='text-paragraph cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 p-2 transition-colors hover:text-white'>
          <SlidersHorizontal className='size-6' />
        </div>
      </div>
      <p className='text-paragraph mt-2 text-xs lg:text-sm'>3 roles</p>
    </div>
  );
}
