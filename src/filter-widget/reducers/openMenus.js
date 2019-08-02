import { handleAction } from 'redux-actions';

import { openCloseDropdown } from '../actions';

const openMenus = handleAction(
  openCloseDropdown,
  (state, { payload }) => {
    if (payload.section) {
      return {
        ...state,
        [payload.section]: payload.state !== undefined ? payload.state : !state[payload.section],
      };
    }

    return state;
  },
  { contexts: false, dimensions: false },
);

export default openMenus;
