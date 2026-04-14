import { Navigate, Outlet } from 'react-router';
import { useUser } from '../contexts/UserContext';

export default function ProfileGuard() {
  const { user } = useUser();

  const hasProfile = user.fullName.trim() !== '';

  return hasProfile ? <Outlet /> : <Navigate to='create-profile' replace />;
}
