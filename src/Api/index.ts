import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3001/api';

const getJobs = (status?: string): Promise<AxiosResponse> => {
  if (status) return axios.get(API_URL + '/jobs/s/' + status);
  return axios.get(API_URL + '/jobs');
};

const getJob = (jobID: number): Promise<AxiosResponse> =>
  axios.get(API_URL + '/jobs/' + jobID);

export default {
  getJobs,
  getJob,
};
