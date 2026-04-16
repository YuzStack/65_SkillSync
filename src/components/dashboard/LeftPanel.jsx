import Search from './Search';
import Jobs from './Jobs';
import NavJobs from './NavJobs';

export default function LeftPanel() {
  return (
    <div className='flex flex-col border-r border-neutral-800 lg:col-span-4'>
      <NavJobs />
      <Search />

      <div className='flex-1 overflow-scroll'>
        <Jobs />
      </div>
    </div>
  );
}
