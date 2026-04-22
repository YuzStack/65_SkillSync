import { Navigate } from 'react-router';
import AppLayout from './ui/AppLayout';
import DashboardGuard from './ui/DashboardGuard';
import Dashboard from './ui/Dashboard';
import AllJobs from './features/jobs/AllJobs';
// import CreateProfile from './user/CreateProfile.';
import SavedJobs from './features/jobs/SavedJobs';
import CreateProfile from './features/user/CreateProfile.';

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Public Route
      {
        path: '/create-profile',
        element: <CreateProfile />,
      },

      // Protected Routes
      {
        element: <DashboardGuard />,
        children: [
          {
            path: '/dashboard',
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
