import axios, { AxiosResponse } from 'axios';
import APIResult from '../Types/IAPIResult';
import Client from '../Types/IClient';
import Job from '../Types/IJob';
import PriceCategory from '../Types/IPriceCategory';
import User from '../Types/IUser';

const API_URL = 'http://localhost:3001/api';

const getJobs = (status?: string): Promise<AxiosResponse> => {
  if (status) return axios.get(API_URL + '/jobs/s/' + status);
  return axios.get(API_URL + '/jobs');
};

const getJob = (jobID: number | string): Promise<AxiosResponse> =>
  axios.get(API_URL + '/jobs/' + jobID);

const patchJob = (job: Job): Promise<AxiosResponse> =>
  axios.patch(API_URL + '/jobs/' + job.jobID, job);

const postJob = (job: Job): Promise<AxiosResponse> =>
  axios.post(API_URL + '/jobs', job);

const deleteJob = (jobID: number): Promise<Job> => {
  return axios.delete(API_URL + '/jobs/' + jobID).then(({ data }) => data.data);
};

const recoverJob = (jobID: number): Promise<Job> => {
  return axios
    .post(API_URL + '/jobs/recover/' + jobID)
    .then(({ data }) => data.data);
};

const getStats = (): Promise<AxiosResponse> => axios.get(API_URL + '/stats');

const getClients = (): Promise<Client[]> => {
  return axios.get(API_URL + '/clients').then(({ data }) => {
    return data.data;
  });
};

const getClient = (id: string): Promise<Client> => {
  return axios.get(API_URL + '/clients/' + id).then(({ data }) => data.data);
};

const createClient = (client: Client): Promise<Client> => {
  return axios.post(API_URL + '/clients', client).then(({ data }) => data.data);
};

const patchClient = (client: Client): Promise<APIResult<Client>> => {
  return axios
    .patch(API_URL + '/clients/' + client._id, client)
    .then(({ data }) => data);
};

const getUsers = (): Promise<User[]> => {
  return axios.get(API_URL + '/users').then(({ data }) => data.data);
};

const getPriceCats = (): Promise<PriceCategory[]> => {
  return axios.get(API_URL + '/pricecategories').then(({ data }) => data.data);
};

export default {
  getJobs,
  getJob,
  patchJob,
  postJob,
  deleteJob,
  recoverJob,
  getStats,
  getClients,
  getClient,
  createClient,
  patchClient,
  getUsers,
  getPriceCats,
};
