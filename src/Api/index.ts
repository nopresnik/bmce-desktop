import axios, { AxiosResponse } from 'axios';
import Client from '../Types/IClient';
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

const getClients = (): Promise<Client[]> => {
  return axios.get(API_URL + '/clients').then(({ data }) => {
    return data.data;
  });
};

const getClient = (id: string): Promise<Client> => {
  return axios.get(API_URL + '/clients/' + id).then(({ data }) => data.data);
};

export default {
  getJobs,
  getJob,
  patchJob,
  postJob,
  getStats,
  getClients,
  getClient,
};
