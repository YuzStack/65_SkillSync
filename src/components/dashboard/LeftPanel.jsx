import Jobs from './Jobs';
import NavJobs from './NavJobs';
import SavedJobs from './SavedJobs';
import { Outlet } from 'react-router';
import SearchJobs from './SearchJobs';

export default function LeftPanel() {
  return (
    <div className='flex flex-col border-r border-neutral-800 lg:col-span-4'>
      <NavJobs />
      <SearchJobs />
      <Outlet />
    </div>
  );
}
