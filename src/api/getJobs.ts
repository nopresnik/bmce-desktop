import { AxiosResponse } from 'axios';
import { api } from 'api';
import { ApiResponse, Job } from './types.responses';
import { API_ROUTE_JOBS } from 'constants/apiRoutes';

export const getJobs = (
  status?: string
): Promise<AxiosResponse<ApiResponse<Job[]>>> => {
  const url = status ? `${API_ROUTE_JOBS}/s/${status}` : API_ROUTE_JOBS;
  return api.get(url);
};
