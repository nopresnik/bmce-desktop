import axios, { AxiosResponse } from 'axios';
import APIResult from '../types/IAPIResult';
import Client from '../types/IClient';
import Job from '../types/IJob';
import PriceCategory from '../types/IPriceCategory';
import User from '../types/IUser';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const getJobs = (status?: string): Promise<AxiosResponse> => {
  if (status) return axios.get(API_URL + '/jobs/s/' + status);
  return axios.get(API_URL + '/jobs');
};

export const getJob = (jobID: number | string): Promise<AxiosResponse> =>
  axios.get(API_URL + '/jobs/' + jobID);

export const patchJob = (job: Job): Promise<AxiosResponse> =>
  axios.patch(API_URL + '/jobs/' + job.jobID, job);

export const postJob = (job: Job): Promise<AxiosResponse> =>
  axios.post(API_URL + '/jobs', job);

export const deleteJob = (jobID: number | string): Promise<Job> => {
  return axios.delete(API_URL + '/jobs/' + jobID).then(({ data }) => data.data);
};

export const recoverJob = (jobID: number | string): Promise<Job> => {
  return axios
    .post(API_URL + '/jobs/recover/' + jobID)
    .then(({ data }) => data.data);
};

export const getStats = (): Promise<AxiosResponse> =>
  axios.get(API_URL + '/stats');

export const getClients = (): Promise<Client[]> => {
  return axios.get(API_URL + '/clients').then(({ data }) => {
    return data.data;
  });
};

export const getClient = (id: string): Promise<Client> => {
  return axios.get(API_URL + '/clients/' + id).then(({ data }) => data.data);
};

export const createClient = (client: Client): Promise<Client> => {
  return axios.post(API_URL + '/clients', client).then(({ data }) => data.data);
};

export const patchClient = (client: Client): Promise<APIResult<Client>> => {
  return axios
    .patch(API_URL + '/clients/' + client._id, client)
    .then(({ data }) => data);
};

export const getUsers = (): Promise<User[]> => {
  return axios.get(API_URL + '/users').then(({ data }) => data.data);
};

export const getPriceCats = (): Promise<PriceCategory[]> => {
  return axios.get(API_URL + '/pricecategories').then(({ data }) => data.data);
};
