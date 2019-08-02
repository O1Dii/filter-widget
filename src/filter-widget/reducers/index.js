import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  toggleContext,
  toggleDimension,
  toggleFilter,
  openCloseAll,
  recieveContexts,
  recieveDimensions,
  recieveFilters,
  changeSearchInput,
  matchChange,
  sortingChange,
} from '../actions';

function toggleCurrent(state, payload, name) {
  let arr = state.get(name);

  if (arr.includes(payload)) {
    arr = arr.delete(arr.indexOf(payload));
  } else {
    arr = arr.push(payload);
  }

  return state.set(name, arr);
}

function recieveData(state, payload, name) {
  const arr = Immutable.List(payload.map(item => [item.id, item]));
  return state.set(name, arr);
}

const main = handleActions(
  {
    [toggleContext]: (state, { payload }) => toggleCurrent(state, payload, 'selectedContexts'),
    [toggleDimension]: (state, { payload }) => toggleCurrent(state, payload, 'selectedDimensions'),
    [toggleFilter]: (state, { payload }) => toggleCurrent(state, payload, 'selectedFilters'),
    [recieveContexts]: (state, { payload }) => recieveData(state, payload, 'contexts'),
    [recieveDimensions]: (state, { payload }) => recieveData(state, payload, 'dimensions'),
    [recieveFilters]: (state, { payload }) => recieveData(state, payload, 'filters'),
    [changeSearchInput]: (state, { payload }) => state.set('searchText', payload),
    [matchChange]: (state, { payload }) => state.set('searchMatch', payload),
    [sortingChange]: (state, { payload }) => state.set('sortType', payload),
  },
  Immutable.Map({
    contexts: Immutable.List(),
    dimensions: Immutable.List(),
    filters: Immutable.List(),
    selectedContexts: Immutable.List(),
    selectedDimensions: Immutable.List(),
    selectedFilters: Immutable.List(),
    searchText: '',
    searchMatch: '**',
    sortType: 'A-Z',
  }),
);

export default main;
