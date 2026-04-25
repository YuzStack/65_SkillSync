import { Outlet } from 'react-router';
import PrimaryHeader from './home/PrimaryHeader';

export default function PageLayout() {
  return (
    <div>
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
