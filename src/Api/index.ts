import axios, { AxiosResponse } from 'axios';
import Job from '../Types/IJob';

const API_URL = 'http://localhost:3001/api';

const getJobs = (status?: string): Promise<AxiosResponse> => {
  if (status) return axios.get(API_URL + '/jobs/s/' + status);
  return axios.get(API_URL + '/jobs');
};

const getJob = (jobID: number): Promise<AxiosResponse> =>
  axios.get(API_URL + '/jobs/' + jobID);

const patchJob = (job: Job): Promise<AxiosResponse> =>
  axios.patch(API_URL + '/jobs/' + job.jobID, job);

const postJob = (job: Job): Promise<AxiosResponse> =>
  axios.post(API_URL + '/jobs', job);

const getStats = (): Promise<AxiosResponse> => axios.get(API_URL + '/stats');

export default {
  getJobs,
  getJob,
  patchJob,
  postJob,
  getStats,
};
