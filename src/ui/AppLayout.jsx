import { Outlet } from 'react-router';
import { JobsProvider } from '../features/jobs/JobsContext';
import { UserProvider } from '../features/user/UserContext';
import { Suspense } from 'react';
import FullPageSpinner from './FullPageSpinner';

export default function AppLayout() {
  return (
    <JobsProvider>
      <UserProvider>
        <Suspense fallback={<FullPageSpinner />}>
          <Outlet />
        </Suspense>
      </UserProvider>
    </JobsProvider>
  );
}
