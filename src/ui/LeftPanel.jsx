import { Outlet } from 'react-router';
import SearchJobs from '../features/jobs/SearchJobs';
import NavJobs from '../features/jobs/NavJobs';

export default function LeftPanel() {
  return (
    <div className='flex flex-col border-r border-neutral-800 lg:col-span-4'>
      <NavJobs />
      <SearchJobs />
      <Outlet />
    </div>
  );
}
