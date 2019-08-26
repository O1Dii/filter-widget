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
  toggleFilters,
} from '../actions';
import { PARTIAL_MATCH, SORTING_ASC } from '../constants';
import { contextRecord, dimensionRecord, filterRecord } from '../records';

function uncheckCurrent(state, toExcludeValues, name) {
  const arr = state.get(name);
  const newArr = arr.filterNot(item => toExcludeValues.includes(item));

  return state.set(name, newArr);
}

function uncheckSertainFilters(state, toExcludeValues) {
  return uncheckCurrent(state, toExcludeValues, 'selectedFilters');
}

function uncheckSertainDimensions(state, toExcludeValues) {
  return uncheckCurrent(state, toExcludeValues, 'selectedDimensions');
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

function toggleCurrentContext(state, payload) {
  return toggleCurrent(state, payload, 'selectedContexts');
}
function toggleCurrentDimension(state, payload) {
  return toggleCurrent(state, payload, 'selectedDimensions');
}
function toggleCurrentFilter(state, payload) {
  return toggleCurrent(state, payload, 'selectedFilters');
}

function toggleCurrentFilters(state, [arr, checked]) {
  let newArr;

  if (checked) {
    newArr = arr;
  } else {
    newArr = Immutable.List();
  }

  return state.set('selectedFilters', newArr);
}

function recieveData(state, payload, name, record) {
  const arr = Immutable.Map(payload.map(item => [item.id, record(item)]));

  return state.set(name, arr);
}

const main = handleActions(
  {
    [toggleContext]: (state, { payload }) => toggleCurrentContext(state, payload),
    [toggleDimension]: (state, { payload }) => toggleCurrentDimension(state, payload),
    [toggleFilter]: (state, { payload }) => toggleCurrentFilter(state, payload),
    [toggleFilters]: (state, { payload }) => toggleCurrentFilters(state, payload),
    [uncheckDimensions]: (state, { payload }) => uncheckSertainDimensions(state, payload),
    [uncheckFilters]: (state, { payload }) => uncheckSertainFilters(state, payload),
    [recieveContexts]: (state, { payload }) => recieveData(state, payload, 'contexts', contextRecord),
    [recieveDimensions]: (state, { payload }) => recieveData(state, payload, 'dimensions', dimensionRecord),
    [recieveFilters]: (state, { payload }) => recieveData(state, payload, 'filters', filterRecord),
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
