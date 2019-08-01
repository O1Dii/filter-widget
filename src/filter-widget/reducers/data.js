import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { recieveContexts, recieveDimensions, recieveFilters } from '../actions';

const contexts = handleAction(
  recieveContexts,
  (state, { payload }) => Object.fromEntries(payload.contexts.map(item => [item.id, item])),
  [],
);

const dimensions = handleAction(
  recieveDimensions,
  (state, { payload }) => Object.fromEntries(payload.dimensions.map(item => [item.id, item])),
  [],
);

const filters = handleAction(
  recieveFilters,
  (state, { payload }) => Object.fromEntries(payload.filters.map(item => [item.id, item])),
  [],
);

const data = combineReducers({ contexts, dimensions, filters });

export default data;
