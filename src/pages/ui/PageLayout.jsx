import { Outlet } from 'react-router';
import PrimaryHeader from './PrimaryHeader';
import Footer from './Footer';

export default function PageLayout() {
  return (
    <div>
      <PrimaryHeader />
      <main className='mt-16 sm:mt-0'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
