import { api } from 'api';
import { AxiosResponse } from 'axios';
import { API_ROUTE_STATS } from 'constants/apiRoutes';
import { ApiResponse, Stats } from './types.responses';

export const getStats = (): Promise<AxiosResponse<ApiResponse<Stats>>> => {
  return api.get(API_ROUTE_STATS);
};
