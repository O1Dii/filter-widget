import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { recieveContexts, recieveDimensions, recieveFilters } from '../actions';

const contexts = handleAction(recieveContexts, (state, { payload }) => [...payload.contexts], {});

const dimensions = handleAction(
  recieveDimensions,
  (state, { payload }) => [...payload.dimensions],
  {},
);

const filters = handleAction(recieveFilters, (state, { payload }) => [...payload.filters], {});

const data = combineReducers({ contexts, dimensions, filters });

export default data;
