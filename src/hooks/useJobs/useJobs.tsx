import { getJobs } from 'api';
import { Job } from 'api/types.responses';
import { useCallback, useEffect, useState } from 'react';

export const useJobs = (apiStatus?: string) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = useCallback(() => {
    if (apiStatus) {
      getJobs(apiStatus).then(({ data }) => setJobs(data.data));
    }
  }, [apiStatus]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return {
    jobs,
    refreshJobs: fetchJobs,
  };
};
