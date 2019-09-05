import { createSelector } from 'reselect';

import { filters, sort } from '../utils';

const getDimensions = (state, id) => state.getIn([id, 'dimensions']);
const getSelectedContexts = (state, id) => state.getIn([id, 'selectedContexts']);
const getFilters = (state, id) => state.getIn([id, 'filters']);
const getSelectedDimensions = (state, id) => state.getIn([id, 'selectedDimensions']);
const getSelectedFilters = (state, id) => state.getIn([id, 'selectedFilters']);
const getSearchText = (state, id) => state.getIn([id, 'searchText']);
const getSearchMatch = (state, id) => state.getIn([id, 'searchMatch']);
const getSortType = (state, id) => state.getIn([id, 'sortType']);

export const getFilteredDimensions = createSelector(
  [getDimensions, getSelectedContexts],
  (dimensions, selectedContexts) => dimensions.filter(item => selectedContexts.includes(item.get('contextId'))),
);

export const getFilteredFilters = createSelector(
  [getFilters, getSelectedDimensions],
  (unfilteredFilters, selectedDimensions) => unfilteredFilters.filter(item => selectedDimensions.includes(item.get('dimensionId'))),
);

export const getSearchedUnsortedFilters = createSelector(
  [getSearchText, getSearchMatch, getFilteredFilters],
  (searchText, searchMatch, filteredFilters) => {
    const comparator = filters[searchMatch];
    return filteredFilters.filter(filter => comparator(filter.get('name'), searchText));
  },
);

export const getSearchedSortedFilters = createSelector(
  [getSearchedUnsortedFilters, getSortType],
  (unsortedFilters, sortType) => {
    const comparator = sort[sortType];
    return unsortedFilters.sort((a, b) => comparator(a.get('name'), b.get('name')));
  },
);

export const getSearchedFiltersIds = createSelector(
  [getSearchedSortedFilters],
  searchedFilters => searchedFilters.map(filter => filter.get('id')).toList(),
);

export const getAllChecked = createSelector(
  [getSelectedFilters, getSearchedFiltersIds],
  (selectedFilters, searchedFilters) => searchedFilters.count() === selectedFilters.count(),
);
