import Jobs from './Jobs';
import SearchJobs from './SearchJobs';

export default function AllJobs() {
  return (
    <div className='flex-1 overflow-scroll'>
      <Jobs />
    </div>
  );
}
