import { Outlet } from 'react-router';
import { JobsProvider } from '../features/jobs/JobsContext';
import { UserProvider } from '../features/user/UserContext';

export default function AppLayout() {
  return (
    <JobsProvider>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </JobsProvider>
  );
}
