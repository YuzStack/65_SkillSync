import { Outlet } from 'react-router';
import PrimaryHeader from './PrimaryHeader';
import Footer from './Footer';

export default function PageLayout() {
  return (
    <div>
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
