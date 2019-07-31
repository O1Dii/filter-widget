import { handleAction } from 'redux-actions';

import { openCloseDropdown } from '../actions';

const open = handleAction(
  openCloseDropdown,
  (state = { contexts: false, dimensions: false }, { payload }) => {
    if (payload.section) {
      return { ...state, [payload.section]: !state[payload.section] };
    }

    return state;
  },
  {},
);

export default open;
