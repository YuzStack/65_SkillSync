import LeftPanel from './LeftPanel';
import JobFullDetails from '../jobs/JobFullDetails';

export default function Main() {
  return (
    <main className='grid lg:grid-cols-12'>
      <LeftPanel />
      <JobFullDetails />
    </main>
  );
}
