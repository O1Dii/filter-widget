import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data';

import { SORTING_ASC, SORTING_DESC } from '../constants';

export const requestContexts = createAction('REQUEST_CONTEXTS');
export const recieveContexts = createAction('RECIEVE_CONTEXTS');
export const getContextsData = () => (dispatch) => {
  dispatch(requestContexts());
  const contexts = getContexts();
  dispatch(recieveContexts(contexts));
};

export const requestDimensions = createAction('REQUEST_DIMENSIONS');
export const recieveDimensions = createAction('RECIEVE_DIMENSIONS');
export const getDimensionsData = () => (dispatch) => {
  dispatch(requestDimensions());
  const dimensions = getDimensions();
  dispatch(recieveDimensions(dimensions));
};

export const requestFilters = createAction('REQUEST_FILTERS');
export const recieveFilters = createAction('RECIEVE_FILTERS');
export const getFiltersData = () => (dispatch) => {
  dispatch(requestFilters());
  const filters = getFilters();
  dispatch(recieveFilters(filters));
};

export const getAllData = () => (dispatch) => {
  dispatch(getContextsData());
  dispatch(getDimensionsData());
  dispatch(getFiltersData());
};

export const uncheckFilters = createAction('UNCHECK_FILTERS');
export const uncheckDimensions = createAction('UNCHECK_DIMENSIONS');

export const uncheckDimensionWithFilters = dimensionId => (dispatch, getState) => {
  const filters = getState().get('filters');
  const selectedFilters = getState().get('selectedFilters');

  const toUncheckFilters = selectedFilters.filter(
    item => filters.getIn([item, 'dimensionId']) === dimensionId,
  );

  dispatch(uncheckFilters(toUncheckFilters));
};

export const toggleContext = createAction('TOGGLE_CONTEXT');
export const toggleDimension = createAction('TOGGLE_DIMENSION');
export const toggleFilter = createAction('TOGGLE_FILTER');

export const toggleContextWithUncheck = contextId => (dispatch, getState) => {
  const dimensions = getState().get('dimensions');
  const selectedDimensions = getState().get('selectedDimensions');

  const toUncheckDimensions = selectedDimensions.filter(
    item => dimensions.getIn([item, 'contextId']) === contextId,
  );

  toUncheckDimensions.forEach((item) => {
    dispatch(uncheckDimensionWithFilters(item));
  });

  dispatch(uncheckDimensions(toUncheckDimensions));

  dispatch(toggleContext(contextId));
};

export const toggleDimensionWithUncheck = dimensionId => (dispatch) => {
  dispatch(uncheckDimensionWithFilters(dimensionId));
  dispatch(toggleDimension(dimensionId));
};

export const toggleFilters = createAction('TOGGLE_FILTERS', (filteredFilters, allChecked) => [
  filteredFilters,
  allChecked,
]);

export const changeSearchInput = createAction('CHANGE_SEARCH');

export const matchChange = createAction('MATCH_CHANGE');
export const sortingChange = createAction('SORTINGS_CHANGE', sortType => (sortType === SORTING_ASC ? SORTING_DESC : SORTING_ASC));

export const openCloseAll = createAction('OPEN_CLOSE_ALL');
