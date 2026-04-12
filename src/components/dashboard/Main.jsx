import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function Main() {
  return (
    <main className='grid lg:grid-cols-12'>
      <LeftPanel />
      <RightPanel />
    </main>
  );
}
