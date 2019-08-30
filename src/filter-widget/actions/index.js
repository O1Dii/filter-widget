import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data';

import { SORTING_ASC, SORTING_DESC } from '../constants';
import { getSearchedFiltersIds } from '../selectors';
import ContextRecord from '../records/ContextRecord';
import DimensionRecord from '../records/DimensionRecord';
import FilterRecord from '../records/FilterRecord';

export const requestContexts = createAction('REQUEST_CONTEXTS');
export const receiveContexts = createAction('RECEIVE_CONTEXTS', (widgetId, contexts) => ({
  data: contexts.map(item => ContextRecord(item)),
  id: widgetId,
}));
export const getContextsData = widgetId => (dispatch) => {
  dispatch(requestContexts());
  const contexts = getContexts();
  dispatch(receiveContexts(widgetId, contexts));
};

export const requestDimensions = createAction('REQUEST_DIMENSIONS');
export const receiveDimensions = createAction('RECEIVE_DIMENSIONS', (widgetId, dimensions) => ({
  data: dimensions.map(item => DimensionRecord(item)),
  id: widgetId,
}));
export const getDimensionsData = widgetId => (dispatch) => {
  dispatch(requestDimensions());
  const dimensions = getDimensions();
  dispatch(receiveDimensions(widgetId, dimensions));
};

export const requestFilters = createAction('REQUEST_FILTERS');
export const receiveFilters = createAction('RECEIVE_FILTERS', (widgetId, filters) => ({
  data: filters.map(item => FilterRecord(item)),
  id: widgetId,
}));
export const getFiltersData = widgetId => (dispatch) => {
  dispatch(requestFilters());
  const filters = getFilters();
  dispatch(receiveFilters(widgetId, filters));
};

export const getAllData = widgetId => (dispatch) => {
  dispatch(getContextsData(widgetId));
  dispatch(getDimensionsData(widgetId));
  dispatch(getFiltersData(widgetId));
};

export const uncheckFilters = createAction('UNCHECK_FILTERS', (widgetId, filtersIds) => ({
  filtersIds,
  id: widgetId,
}));
export const uncheckDimensions = createAction('UNCHECK_DIMENSIONS', (widgetId, dimensionsIds) => ({
  dimensionsIds,
  id: widgetId,
}));

export const checkContext = createAction('CHECK_CONTEXT', (widgetId, contextId) => ({
  contextId,
  id: widgetId,
}));
export const uncheckContext = createAction('UNCHECK_CONTEXT', (widgetId, contextId) => ({
  contextId,
  id: widgetId,
}));
export const checkDimension = createAction('CHECK_DIMENSION', (widgetId, dimensionId) => ({
  dimensionId,
  id: widgetId,
}));
export const uncheckDimension = createAction('UNCHECK_DIMENSION', (widgetId, dimensionId) => ({
  dimensionId,
  id: widgetId,
}));
export const checkFilter = createAction('CHECK_FILTER', (widgetId, filterId) => ({
  filterId,
  id: widgetId,
}));
export const uncheckFilter = createAction('UNCHECK_FILTER', (widgetId, filterId) => ({
  filterId,
  id: widgetId,
}));

export const uncheckDimensionWithFilters = (widgetId, dimensionId) => (dispatch, getState) => {
  const filters = getState().getIn([widgetId, 'filters']);
  const selectedFilters = getState().getIn([widgetId, 'selectedFilters']);

  const toUncheckFilters = selectedFilters.filter(
    selectedFilter => filters.getIn([selectedFilter, 'dimensionId']) === dimensionId,
  );

  dispatch(uncheckFilters(widgetId, toUncheckFilters));
  dispatch(uncheckDimension(widgetId, dimensionId));
};

export const uncheckContextWithDimensions = (widgetId, contextId) => (dispatch, getState) => {
  const dimensions = getState().getIn([widgetId, 'dimensions']);
  const selectedDimensions = getState().getIn([widgetId, 'selectedDimensions']);

  const toUncheckDimensions = selectedDimensions.filter(
    selectedDimension => dimensions.getIn([selectedDimension, 'contextId']) === contextId,
  );

  toUncheckDimensions.forEach((dimension) => {
    dispatch(uncheckDimensionWithFilters(widgetId, dimension));
  });

  dispatch(uncheckDimensions(widgetId, toUncheckDimensions));
  dispatch(uncheckContext(widgetId, contextId));
};

export const replaceSelectedFilters = createAction('REPLACE_FILTERS', (widgetId, newFilters) => ({
  newFilters,
  id: widgetId,
}));

export const uncheckAllFilters = createAction('UNCHECK_ALL_FILTERS', widgetId => ({
  id: widgetId,
}));

export const checkAllFilters = widgetId => (dispatch, getStore) => {
  const filters = getSearchedFiltersIds(getStore(), widgetId);

  dispatch(replaceSelectedFilters(widgetId, filters));
};

export const changeSearchInput = createAction('CHANGE_SEARCH', (widgetId, searchText) => ({
  searchText,
  id: widgetId,
}));

export const changeSearchWithFiltersUncheck = (widgetId, searchText) => (dispatch, getStore) => {
  dispatch(changeSearchInput(widgetId, searchText));

  const remainingFilters = getStore()
    .getIn([widgetId, 'selectedFilters'])
    .filter(filter => getSearchedFiltersIds(getStore(), widgetId).includes(filter));

  dispatch(replaceSelectedFilters(widgetId, remainingFilters));
};

export const matchChange = createAction('MATCH_CHANGE', (widgetId, match) => ({
  match,
  id: widgetId,
}));
export const sortingChange = createAction('SORTINGS_CHANGE', (widgetId, sortType) => ({
  sortType: sortType === SORTING_ASC ? SORTING_DESC : SORTING_ASC,
  id: widgetId,
}));

export const createWidget = createAction('CREATE_WIDGET');
export const closeWidget = createAction('CLOSE_WIDGET', widgetId => ({
  id: widgetId,
}));
