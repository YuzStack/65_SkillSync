import { Navigate } from 'react-router';
import AppLayout from './components/AppLayout';
import CreateProfile from './components/CreateProfile.';
import Dashboard from './components/dashboard/Dashboard';
import ProfileGuard from './components/ProfileGuard';

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Public Route
      {
        path: 'create-profile',
        element: <CreateProfile />,
      },

      // Protected Routes
      {
        element: <ProfileGuard />,
        children: [{ path: 'dashboard', element: <Dashboard /> }],
      },

      // Redirect home to dashboard
      {
        index: true,
        element: <Navigate to='/dashboard' replace />,
      },
    ],
  },
];

export default routes;
