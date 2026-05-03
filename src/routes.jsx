import { lazy } from 'react';
import { Navigate } from 'react-router';

// Statically import layouts & guards (because they are needed immediately the app loads)
import AppLayout from './ui/AppLayout';
import PageLayout from './pages/ui/PageLayout';
import DashboardGuard from './ui/DashboardGuard';

// Dynamically import pages & dashboards (because they are only needed when their routes are visited)
const Dashboard = lazy(() => import('./ui/Dashboard'));
const AllJobs = lazy(() => import('./features/jobs/AllJobs'));
const SavedJobs = lazy(() => import('./features/jobs/SavedJobs'));
const CreateProfile = lazy(() => import('./features/user/CreateProfile.'));
const Home = lazy(() => import('./pages/home/Home'));
const HowItWorks = lazy(() => import('./pages/how-it-works/HowItWorks'));

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
