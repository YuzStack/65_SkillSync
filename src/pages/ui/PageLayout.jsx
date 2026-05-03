import { Outlet, useLocation } from 'react-router';
import PrimaryHeader from './PrimaryHeader';
import Footer from './Footer';
import FullPageSpinner from '../../ui/FullPageSpinner';
import { Suspense } from 'react';

export default function PageLayout() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <PrimaryHeader />
      <main className='mt-16 sm:mt-0'>
        <Suspense fallback={<FullPageSpinner />} key={location.pathname}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
