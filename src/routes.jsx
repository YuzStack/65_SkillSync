import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';

// Statically import layouts & guards (because they are needed immediately the app loads)
import AppLayout from './ui/AppLayout';
import PageLayout from './pages/ui/PageLayout';
import DashboardGuard from './ui/DashboardGuard';
import FullPageSpinner from './ui/FullPageSpinner'; // Will be needed immediately too

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
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/how-it-works',
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <HowItWorks />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <DashboardGuard />
          </Suspense>
        ),
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
