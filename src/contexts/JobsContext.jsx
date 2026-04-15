import { createContext, useCallback, useContext, useReducer } from 'react';

const JobsContext = createContext();

const initialState = {
  jobs: [],
  activeJob: null,
  savedJobs: [],
  isLoading: true,
  error: '',
};

function reducer(curState, action) {
  switch (action.type) {
    case 'loading':
      return { ...curState, isLoading: true };
    case 'jobs/loaded':
      return { ...curState, jobs: action.payload, isLoading: false };
    case 'job/loaded':
      return { ...curState, activeJob: action.payload, isLoading: false };
    case 'job/save':
      return {
        ...curState,
        savedJobs: [...curState.savedJobs, action.payload],
      };
    case 'job/unsave':
      return {
        ...curState,
        savedJobs: curState.savedJobs.filter(
          job => job.job_id !== action.payload,
        ),
      };
    case 'rejected':
      return { ...curState, error: action.payload, isLoading: false };
    default:
      throw new Error('Unkown action type');
  }
}

function JobsProvider({ children }) {
  const [{ jobs, activeJob, savedJobs, isLoading, error }, dispatch] =
    useReducer(reducer, initialState);

  const getJobs = useCallback(async function (searchQuery) {
    if (!searchQuery) {
      dispatch({ type: 'jobs/loaded', payload: [] });
      return;
    }

    dispatch({ type: 'loading' });
    try {
      const response = await fetch(
        `http://localhost:8000/jobs?q=${searchQuery}`,
      );
      if (!response.ok)
        throw new Error('Something went wrong with fetching movies');

      const data = await response.json();
      console.log(data);

      // dispatch({ type: 'jobs/loaded', payload: data });
    } catch (error) {
      console.error(`${error.message} 🙌🙌`);
      // dispatch({ type: 'rejected' });
    }
  }, []);

  const getJob = useCallback(async function (jobId) {
    dispatch({ type: 'loading' });
    try {
      const response = await fetch(`http://localhost:8000/jobs/${jobId}`);
      if (!response.ok)
        throw new Error('Something went wrong with fetching movies');

      const data = await response.json();
      console.log(data);

      // dispatch({ type: 'job/loaded', payload: data });
    } catch (error) {
      console.error(`${error.message} 🙌🙌`);
      // dispatch({ type: 'rejected' });
    }
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        activeJob,
        savedJobs,
        isLoading,
        error,
        getJobs,
        getJob,
        dispatch,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

function useJobs() {
  const context = useContext(JobsContext);
  if (!context) throw new Error('JobsContext was used outside of JobsProvider');
  return context;
}

/* eslint-disable */
export { JobsProvider, useJobs };
