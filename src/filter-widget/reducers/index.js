import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  toggleContext,
  toggleDimension,
  toggleFilter,
  recieveContexts,
  recieveDimensions,
  recieveFilters,
  changeSearchInput,
  matchChange,
  sortingChange,
  uncheckDimensions,
  uncheckFilters,
} from '../actions';
import { PARTIAL_MATCH, SORTING_ASC } from '../constants';

function uncheckCurrentFilters(state, dimensionId) {
  const arr = state.get('selectedFilters');
  const newArr = arr.filter(item => state.get('filters').get(item).dimensionId !== dimensionId);

  return state.set('selectedFilters', newArr);
}

function uncheckCurrentDimensions(state, contextId) {
  let currentState = state;
  const arr = state.get('selectedDimensions');

  const toExcludeValues = arr.filter(
    item => state.get('dimensions').get(item).contextId === contextId,
  );

  toExcludeValues.forEach((item) => {
    currentState = uncheckCurrentFilters(currentState, item);
  });

  const newArr = arr.filterNot(item => toExcludeValues.includes(item));

  return currentState.set('selectedDimensions', newArr);
}

function toggleCurrent(state, payload, name) {
  let arr = state.get(name);

  if (arr.includes(payload)) {
    arr = arr.delete(arr.indexOf(payload));
  } else {
    arr = arr.push(payload);
  }

  return state.set(name, arr);
}

function toggleContexts(state, payload) {
  return toggleCurrent(state, payload, 'selectedContexts');
}
function toggleDimensions(state, payload) {
  return toggleCurrent(state, payload, 'selectedDimensions');
}
function toggleFilters(state, payload) {
  return toggleCurrent(state, payload, 'selectedFilters');
}

function recieveData(state, payload, name) {
  const arr = Immutable.Map(payload.map(item => [item.id, item]));

  return state.set(name, arr);
}

const main = handleActions(
  {
    [toggleContext]: (state, { payload }) => {
      const newState = uncheckDimensions(state, payload);

      return toggleContexts(newState, payload);
    },
    [toggleDimension]: (state, { payload }) => {
      const newState = uncheckFilters(state, payload);

      return toggleDimensions(newState, payload);
    },
    [toggleFilter]: (state, { payload }) => toggleFilters(state, payload),
    [uncheckDimensions]: (state, { payload }) => uncheckCurrentDimensions(state, payload),
    [uncheckFilters]: (state, { payload }) => uncheckCurrentFilters(state, payload),
    [recieveContexts]: (state, { payload }) => recieveData(state, payload, 'contexts'),
    [recieveDimensions]: (state, { payload }) => recieveData(state, payload, 'dimensions'),
    [recieveFilters]: (state, { payload }) => recieveData(state, payload, 'filters'),
    [changeSearchInput]: (state, { payload }) => state.set('searchText', payload),
    [matchChange]: (state, { payload }) => state.set('searchMatch', payload),
    [sortingChange]: (state, { payload }) => state.set('sortType', payload),
  },
  Immutable.Map({
    contexts: Immutable.Map(),
    dimensions: Immutable.Map(),
    filters: Immutable.Map(),
    selectedContexts: Immutable.List(),
    selectedDimensions: Immutable.List(),
    selectedFilters: Immutable.List(),
    searchText: '',
    searchMatch: PARTIAL_MATCH,
    sortType: SORTING_ASC,
  }),
);

export default main;
