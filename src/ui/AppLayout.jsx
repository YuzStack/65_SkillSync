import { Outlet } from 'react-router';
import { UserProvider } from '../user/UserContext';
import { JobsProvider } from '../jobs/JobsContext';

export default function AppLayout() {
  return (
    <JobsProvider>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </JobsProvider>
  );
}
