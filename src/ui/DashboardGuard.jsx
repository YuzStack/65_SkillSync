import { Navigate, Outlet } from 'react-router';
import { useUser } from '../user/UserContext';

export default function DashboardGuard() {
  const { user } = useUser();

  const hasProfile = user.fullName.trim() !== '';

  return hasProfile ? <Outlet /> : <Navigate to='/create-profile' replace />;
}
