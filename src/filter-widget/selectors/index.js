import { createSelector } from 'reselect';
import { is } from 'immutable';

import { filters, sort } from '../utils';

const getDimensions = state => state.get('dimensions');
const getSelectedContexts = state => state.get('selectedContexts');
const getFilters = state => state.get('filters');
const getSelectedDimensions = state => state.get('selectedDimensions');
const getSelectedFilters = state => state.get('selectedFilters');
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
