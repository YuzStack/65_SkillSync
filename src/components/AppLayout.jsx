import { Outlet } from 'react-router';
import { UserProvider } from '../contexts/UserContext';
import { JobsProvider } from '../contexts/JobsContext';

export default function AppLayout() {
  return (
    <JobsProvider>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </JobsProvider>
  );
}
