import { handleAction, combineActions } from 'redux-actions';

import { recieveContexts, recieveDimensions, recieveFilters } from '../actions/index';

const data = handleAction(
  combineActions(recieveContexts, recieveDimensions, recieveFilters),
  (state, { payload }) => Object.assign(state, payload),
  {},
);

export default data;
