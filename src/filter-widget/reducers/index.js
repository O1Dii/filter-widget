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
  const currentItems = state.get(name);
  const newItems = currentItems.filterNot(item => toExcludeValues.includes(item));

  return state.set(name, newItems);
}

function uncheckSertainFilters(state, toExcludeValues) {
  return uncheckCurrent(state, toExcludeValues, 'selectedFilters');
}

function uncheckSertainDimensions(state, toExcludeValues) {
  return uncheckCurrent(state, toExcludeValues, 'selectedDimensions');
}

function toggleCurrent(state, selectedId, name) {
  let currentItems = state.get(name);

  if (currentItems.includes(selectedId)) {
    currentItems = currentItems.delete(currentItems.indexOf(selectedId));
  } else {
    currentItems = currentItems.push(selectedId);
  }

  return state.set(name, currentItems);
}

function toggleCurrentContext(state, selectedContextId) {
  return toggleCurrent(state, selectedContextId, 'selectedContexts');
}
function toggleCurrentDimension(state, selectedDimensionsId) {
  return toggleCurrent(state, selectedDimensionsId, 'selectedDimensions');
}
function toggleCurrentFilter(state, selectedFiltersId) {
  return toggleCurrent(state, selectedFiltersId, 'selectedFilters');
}

function toggleCurrentFilters(state, [filters, allChecked]) {
  let newFilters;

  if (allChecked) {
    newFilters = filters;
  } else {
    newFilters = Immutable.List();
  }

  return state.set('selectedFilters', newFilters);
}

function recieveData(state, payload, name, record) {
  const items = Immutable.Map(payload.map(item => [item.id, record(item)]));

  return state.set(name, items);
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
