import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  checkContext,
  checkDimension,
  checkFilter,
  uncheckContext,
  uncheckDimension,
  uncheckFilter,
  checkAllFiltersDispatch,
  uncheckAllFilters,
  uncheckDimensions,
  uncheckFilters,
  recieveContexts,
  recieveDimensions,
  recieveFilters,
  changeSearchInput,
  matchChange,
  sortingChange,
} from '../actions';
import { PARTIAL_MATCH, SORTING_ASC } from '../constants';
import contextRecord from '../records/contextRecord';
import dimensionRecord from '../records/dimensionRecord';
import filterRecord from '../records/filterRecord';

function uncheckSertain(state, toExcludeValues, name) {
  const currentItems = state.get(name);
  const newItems = currentItems.filterNot(item => toExcludeValues.includes(item));

  return state.set(name, newItems);
}

function checkCurrent(state, selectedId, name) {
  return state.set(name, state.get(name).push(selectedId));
}
function uncheckCurrent(state, selectedId, name) {
  const currentItems = state.get(name);

  return state.deleteIn([name, currentItems.indexOf(selectedId)]);
}

function recieveData(state, payload, name, record) {
  const items = Immutable.Map(payload.map(item => [item.id, record(item)]));

  return state.set(name, items);
}

const main = handleActions(
  {
    [checkContext]: (state, { payload }) => checkCurrent(state, payload, 'selectedContexts'),
    [uncheckContext]: (state, { payload }) => uncheckCurrent(state, payload, 'selectedContexts'),
    [checkDimension]: (state, { payload }) => checkCurrent(state, payload, 'selectedDimensions'),
    [uncheckDimension]: (state, { payload }) => uncheckCurrent(state, payload, 'selectedDimensions'),
    [checkFilter]: (state, { payload }) => checkCurrent(state, payload, 'selectedFilters'),
    [uncheckFilter]: (state, { payload }) => uncheckCurrent(state, payload, 'selectedFilters'),
    [checkAllFiltersDispatch]: (state, { payload }) => state.set('selectedFilters', payload),
    [uncheckAllFilters]: state => state.set('selectedFilters', Immutable.List()),
    [uncheckFilters]: (state, { payload }) => uncheckSertain(state, payload, 'selectedFilters'),
    [uncheckDimensions]: (state, { payload }) => uncheckSertain(state, payload, 'selectedDimensions'),
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
