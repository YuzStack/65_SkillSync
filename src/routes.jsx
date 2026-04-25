import { Navigate } from 'react-router';
import AppLayout from './ui/AppLayout';
import DashboardGuard from './ui/DashboardGuard';
import Dashboard from './ui/Dashboard';
import AllJobs from './features/jobs/AllJobs';
import SavedJobs from './features/jobs/SavedJobs';
import CreateProfile from './features/user/CreateProfile.';
import Home from './pages/home/Home';
import HowItWorks from './pages/how-it-works/HowItWorks';
import PageLayout from './pages/PageLayout';

const routes = [
  {
    element: <PageLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/how-it-works',
        element: <HowItWorks />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
];

export default routes;
