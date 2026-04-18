import { Navigate } from 'react-router';
import AppLayout from './components/AppLayout';
import CreateProfile from './components/CreateProfile.';
import Dashboard from './components/dashboard/Dashboard';
import ProfileGuard from './components/ProfileGuard';
import AllJobs from './components/dashboard/AllJobs';
import SavedJobs from './components/dashboard/SavedJobs';

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
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              { path: 'all-jobs', element: <AllJobs /> },
              { path: 'saved-jobs', element: <SavedJobs /> },
              { index: true, element: <Navigate to='all-jobs' replace /> },
            ],
          },
        ],
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
