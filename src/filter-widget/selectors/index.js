import { createSelector } from 'reselect';

import { filters, sort } from '../utils';

const getDimensions = state => state.get('dimensions');
const getSelectedContexts = state => state.get('selectedContexts');
const getFilters = state => state.get('filters');
const getSelectedDimensions = state => state.get('selectedDimensions');
const getSearchText = state => state.get('searchText');
const getSearchMatch = state => state.get('searchMatch');
const getSortType = state => state.get('sortType');

export const getFilteredDimensions = createSelector(
  [getDimensions, getSelectedContexts],
  (dimensions, selectedContexts) => dimensions.filter(item => selectedContexts.includes(item.get('contextId'))),
);

export const getFilteredFilters = createSelector(
  [getFilters, getSelectedDimensions],
  (unfilteredFilters, selectedDimensions) => unfilteredFilters.filter(item => selectedDimensions.includes(item.get('dimensionId'))),
);

export const getFilteredFiltersIds = createSelector(
  [getFilteredFilters],
  filteredFilters => filteredFilters.map(filter => filter.get('id')).toList(),
);

export const getSearchedAndSortedFilters = createSelector(
  [getSearchText, getSearchMatch, getSortType, getFilteredFilters],
  (searchText, searchMatch, sortType, filteredFilters) => {
    const comparator = filters[searchMatch];
    const unsortedFilters = filteredFilters.filter(filter => comparator(filter.get('name'), searchText));
    return sort(unsortedFilters, sortType);
  },
);
