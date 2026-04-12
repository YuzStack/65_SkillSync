import Search from './Search';
import Jobs from './Jobs';
import NavJobs from './NavJobs';

export default function LeftPanel() {
  return (
    <div className='min-h-[calc(100vh-64px)] border-r border-neutral-800 lg:col-span-4'>
      <NavJobs />
      <Search />
      <Jobs />
    </div>
  );
}
