import React from 'react';
import * as Api from '../../api';
import Client from '../../types/IClient';
import Job from '../../types/IJob';

const useJobFormInternal = () => {
  const [client, setClient] = React.useState({} as Client);
  const [job, setJob] = React.useState({} as Job);
  const isExisting = !!job.jobID;

  const fetchJob = async (jobId: number) => {
    const {
      data: { data },
    } = await Api.getJob(jobId);

    setJob(data);
    setClient(data.client);

    return data as Job;
  };

  const fetchJobAsPrevRef = async (jobId: number) => {
    try {
      const {
        data: { data },
      } = await Api.getJob(jobId);

      setJob({ ...job, location: data.location });
      setClient(data.client);

      return data as Job;
    } catch (e) {
      setJob({} as Job);
    }
  };

  const saveJob = async () => {
    if (isExisting) {
      try {
        const { data } = await Api.patchJob(job);

        return data.success;
      } catch (e) {
        return false;
      }
    }

    return createJob();
  };

  const createJob = async () => {
    try {
      const jobPayload = job;
      if (client._id) {
        jobPayload.client = client._id;
      } else {
        jobPayload.client = (await Api.createClient(client))._id;
      }

      const { data } = await Api.postJob(jobPayload);
      return data.success;
    } catch (e) {
      return false;
    }
  };

  const deleteJob = async () => {
    if (!job.jobID || job.deleted) return;

    try {
      await Api.deleteJob(job.jobID);
      setJob({ ...job, deleted: true });
    } catch (e) {
      alert('Something went wrong while deleting this job.');
    }
  };

  const recoverJob = async () => {
    if (!job.jobID || !job.deleted) return;

    try {
      await Api.recoverJob(job.jobID);
      setJob({ ...job, deleted: false });
    } catch (e) {
      alert('Something went wrong while recovering this job.');
    }
  };

  const clearForm = (client = true) => {
    if (client) {
      setClient({} as Client);
    }
    setJob({} as Job);
  };

  return {
    client,
    setClient,
    job,
    setJob,
    fetchJob,
    fetchJobAsPrevRef,
    saveJob,
    deleteJob,
    recoverJob,
    clearForm,
  };
};

type UseJobFormInternalResult = ReturnType<typeof useJobFormInternal>;

const JobFormContext = React.createContext<UseJobFormInternalResult>(
  {} as UseJobFormInternalResult
);
JobFormContext.displayName = 'JobFormContext';

export const JobFormProvider: React.FC = ({ children }) => {
  const jobForm = useJobFormInternal();

  return (
    <JobFormContext.Provider value={jobForm}>
      {children}
    </JobFormContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useJobForm = () => React.useContext(JobFormContext);
