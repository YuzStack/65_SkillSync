import { createContext, useCallback, useContext, useReducer } from 'react';

const JobsContext = createContext();

const initialState = {
  jobs: [],
  activeJob: null,
  savedJobs: [],
  isLoading: false,
  error: '',
};

function reducer(curState, action) {
  switch (action.type) {
    case 'loading':
      return { ...curState, isLoading: true };
    case 'jobs/loaded':
      return { ...curState, jobs: action.payload, isLoading: false };
    case 'jobs/clear':
      return { ...curState, jobs: [], activeJob: null, error: '' };
    case 'job/setActive': {
      const newjobs = curState.jobs.map(job => ({
        ...job,
        isActive: job.jobId === action.payload.jobId ? true : false,
      }));
      return { ...curState, activeJob: action.payload, jobs: newjobs };
    }
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
    dispatch({ type: 'loading' });

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST,
      },
    };

    try {
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${searchQuery}&num_pages=1`,
        options,
      );

      if (!response.ok)
        throw new Error('Something went wrong with fetching jobs');

      const { data } = await response.json();
      console.log(data);

      const transformedData = data.map(datum => ({
        jobId: datum.job_id,
        employerLogo: datum.employer_logo,
        jobTitle: datum.job_title,
        applyLink: datum.job_apply_link,
        employerName: datum.employer_name,
        isRemote: datum.job_is_remote,
        jobLocation: datum.job_location,
        postedAt: datum.job_posted_at,
        employmentType: datum.job_employment_type,
        salary: datum.job_salary_string,
        jobDescription: datum.job_description,
        jobRoles: datum.job_highlights.Responsibilities,
        isSaved: false,
        isActive: false,
      }));

      dispatch({ type: 'jobs/loaded', payload: transformedData || [] });
    } catch (error) {
      console.error(`${error.message} 🙌🙌`);
      dispatch({ type: 'rejected', payload: error.message });
    }
  }, []);

  function getJob(id) {
    const activeJob = jobs.find(job => job.jobId === id);
    dispatch({ type: 'job/setActive', payload: activeJob });
  }

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
