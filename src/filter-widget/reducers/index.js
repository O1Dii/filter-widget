import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  checkContext,
  checkDimension,
  checkFilter,
  uncheckContext,
  uncheckDimension,
  uncheckFilter,
  replaceSelectedFilters,
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

const main = handleActions(
  {
    [checkContext]: (state, { payload }) => state.update('selectedContexts', oldItems => oldItems.push(payload)),
    [uncheckContext]: (state, { payload }) => state.update('selectedContexts', oldItems => oldItems.delete(oldItems.indexOf(payload))),

    [checkDimension]: (state, { payload }) => state.update('selectedDimensions', oldItems => oldItems.push(payload)),
    [uncheckDimension]: (state, { payload }) => state.update('selectedDimensions', oldItems => oldItems.delete(oldItems.indexOf(payload))),

    [checkFilter]: (state, { payload }) => state.update('selectedFilters', oldItems => oldItems.push(payload)),
    [uncheckFilter]: (state, { payload }) => state.update('selectedFilters', oldItems => oldItems.delete(oldItems.indexOf(payload))),

    [replaceSelectedFilters]: (state, { payload }) => state.set('selectedFilters', payload),
    [uncheckAllFilters]: state => state.set('selectedFilters', Immutable.List()),

    [uncheckFilters]: (state, { payload }) => state.update('selectedFilters', oldItems => oldItems.filterNot(item => payload.includes(item))),
    [uncheckDimensions]: (state, { payload }) => state.update('selectedDimensions', oldItems => oldItems.filterNot(item => payload.includes(item))),

    [recieveContexts]: (state, { payload }) => state.set('contexts', Immutable.Map(payload.map(item => [item.get('id'), item]))),
    [recieveDimensions]: (state, { payload }) => state.set('dimensions', Immutable.Map(payload.map(item => [item.get('id'), item]))),
    [recieveFilters]: (state, { payload }) => state.set('filters', Immutable.Map(payload.map(item => [item.get('id'), item]))),

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
