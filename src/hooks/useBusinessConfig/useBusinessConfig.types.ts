import { JobTableColumn } from 'components/JobTable/JobTable.types';
import { Dispatch } from 'react';

export interface JobStatusConfig {
  title: string;
  apiStatus: string;
  defaultVisibleCols: JobTableColumn[];
}

export interface BusinessConfig {
  blockInteraction: boolean;
  jobStatuses: JobStatusConfig[];
}

export interface BusinessConfigContext {
  businessConfig: BusinessConfig;
  dispatch: Dispatch<SystemAction>;
}

export type SystemAction = {
  type: 'BLOCK_INTERACTION' | 'UNBLOCK_INTERACTION';
};

export type BusinessConfigHook = () => {
  businessConfig: BusinessConfig;
  blockInteraction: () => void;
  unblockInteraction: () => void;
};
