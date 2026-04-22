import JobFullDetails from '../features/jobs/JobFullDetails';
import LeftPanel from './LeftPanel';

export default function Main() {
  return (
    <main className='grid lg:grid-cols-12'>
      <LeftPanel />
      <JobFullDetails />
    </main>
  );
}
