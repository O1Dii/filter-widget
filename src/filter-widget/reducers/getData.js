import { handleAction } from 'redux-actions';

import { combineReducers } from 'redux';
import { recieveContexts, recieveDimensions, recieveFilters } from '../actions/index';

const getData = handleAction(
  combineReducers(recieveContexts, recieveDimensions, recieveFilters),
  (state, action) => {
    console.log(state, action);
    return state;
  },
  {},
);

export default getData;
