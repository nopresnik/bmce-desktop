import { JobTableColumn } from 'components/JobTable/JobTable.types';
import { createContext, useContext, useReducer } from 'react';
import { systemStateReducer } from './useBusinessConfig.reducer';
import {
  BusinessConfig,
  BusinessConfigContext,
  BusinessConfigHook,
} from './useBusinessConfig.types';

const defaultBusinessConfig: BusinessConfig = {
  blockInteraction: false,
  jobStatuses: [
    {
      title: 'Active',
      apiStatus: 'active',
      defaultVisibleCols: [
        JobTableColumn.DATE,
        JobTableColumn.JOB_NO,
        JobTableColumn.CLIENT,
        JobTableColumn.LOCATION,
        JobTableColumn.DESCRIPTION,
      ],
    },
    {
      title: 'On Hold',
      apiStatus: 'hold',
      defaultVisibleCols: [
        JobTableColumn.DATE,
        JobTableColumn.JOB_NO,
        JobTableColumn.CLIENT,
        JobTableColumn.LOCATION,
        JobTableColumn.DESCRIPTION,
        JobTableColumn.NOTES,
      ],
    },
    {
      title: 'Awaiting Invoicing',
      apiStatus: 'invoicing',
      defaultVisibleCols: [
        JobTableColumn.DATE,
        JobTableColumn.JOB_NO,
        JobTableColumn.CLIENT,
        JobTableColumn.LOCATION,
        JobTableColumn.DESCRIPTION,
        JobTableColumn.COMPLETED,
        JobTableColumn.PRICE,
      ],
    },
    {
      title: 'Unpaid',
      apiStatus: 'unpaid',
      defaultVisibleCols: [
        JobTableColumn.DATE,
        JobTableColumn.JOB_NO,
        JobTableColumn.CLIENT,
        JobTableColumn.LOCATION,
        JobTableColumn.DESCRIPTION,
        JobTableColumn.PRICE,
      ],
    },
    {
      title: 'Completed',
      apiStatus: 'completed',
      defaultVisibleCols: [
        JobTableColumn.DATE,
        JobTableColumn.JOB_NO,
        JobTableColumn.CLIENT,
        JobTableColumn.LOCATION,
        JobTableColumn.DESCRIPTION,
        JobTableColumn.COMPLETED,
        JobTableColumn.COMPLETED_BY,
        JobTableColumn.INVOICED,
        JobTableColumn.PAID,
      ],
    },
  ],
};

const Context = createContext<BusinessConfigContext>({
  businessConfig: defaultBusinessConfig,
  dispatch: () => {
    return;
  },
});

export const BusinessConfigProvider: React.FC = ({ children }) => {
  const [businessConfig, dispatch] = useReducer(
    systemStateReducer,
    defaultBusinessConfig
  );

  return (
    <Context.Provider value={{ businessConfig, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useBusinessConfig: BusinessConfigHook = () => {
  const { businessConfig, dispatch } = useContext(Context);

  const blockInteraction = () => {
    dispatch({ type: 'BLOCK_INTERACTION' });
  };

  const unblockInteraction = () => {
    dispatch({ type: 'UNBLOCK_INTERACTION' });
  };

  return {
    businessConfig,
    blockInteraction,
    unblockInteraction,
  };
};
