import { BusinessConfig, SystemAction } from './useBusinessConfig.types';

export const systemStateReducer = (
  state: BusinessConfig,
  action: SystemAction
): BusinessConfig => {
  switch (action.type) {
    case 'BLOCK_INTERACTION': {
      return {
        ...state,
        blockInteraction: true,
      };
    }
    case 'UNBLOCK_INTERACTION': {
      return {
        ...state,
        blockInteraction: false,
      };
    }
    default:
      return state;
  }
};
