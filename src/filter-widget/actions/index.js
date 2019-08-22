import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data';

import { SORTING_ASC, SORTING_DESC } from '../constants';

export const requestContexts = createAction('REQUEST_CONTEXTS');
export const recieveContexts = createAction('RECIEVE_CONTEXTS');
export const getContextsData = () => (dispatch) => {
  dispatch(requestContexts());
  const data = getContexts();
  dispatch(recieveContexts(data));
};

export const requestDimensions = createAction('REQUEST_DIMENSIONS');
export const recieveDimensions = createAction('RECIEVE_DIMENSIONS');
export const getDimensionsData = () => (dispatch) => {
  dispatch(requestDimensions());
  const data = getDimensions();
  dispatch(recieveDimensions(data));
};

export const requestFilters = createAction('REQUEST_FILTERS');
export const recieveFilters = createAction('RECIEVE_FILTERS');
export const getFiltersData = () => (dispatch) => {
  dispatch(requestFilters());
  const data = getFilters();
  dispatch(recieveFilters(data));
};

export const getAllData = () => (dispatch) => {
  dispatch(getContextsData());
  dispatch(getDimensionsData());
  dispatch(getFiltersData());
};

export const uncheckFilters = createAction('UNCHECK_FILTERS');
export const uncheckDimensions = createAction('UNCHECK_DIMENSIONS');

export const uncheckDimensionWithFilters = dimensionId => (dispatch, getState) => {
  const state = getState();
  const arr = state.get('selectedFilters');

  const toExcludeValues = arr.filter(
    item => state.getIn(['filters', item]).dimensionId === dimensionId,
  );

  dispatch(uncheckFilters(toExcludeValues));
};
export const uncheckContextWithDimensions = contextId => (dispatch, getState) => {
  const state = getState();
  const arr = state.get('selectedDimensions');

  const toExcludeValues = arr.filter(
    item => state.getIn(['dimensions', item]).contextId === contextId,
  );

  toExcludeValues.forEach((item) => {
    dispatch(uncheckDimensionWithFilters(item));
  });

  dispatch(uncheckDimensions(toExcludeValues));
};

export const toggleContext = createAction('TOGGLE_CONTEXT');
export const toggleDimension = createAction('TOGGLE_DIMENSION');
export const toggleFilter = createAction('TOGGLE_FILTER');

export const toggleContextWithUncheck = contextId => (dispatch) => {
  dispatch(uncheckContextWithDimensions(contextId));
  dispatch(toggleContext(contextId));
};
export const toggleDimensionWithUncheck = dimensionId => (dispatch) => {
  dispatch(uncheckDimensionWithFilters(dimensionId));
  dispatch(toggleDimension(dimensionId));
};

export const toggleFilters = createAction('TOGGLE_FILTERS', (arr, checked) => [arr, checked]);

export const changeSearchInput = createAction('CHANGE_SEARCH');
export const changeFilters = createAction('CHANGE_FILTERS');

export const changeSearch = data => (dispatch) => {
  dispatch(changeSearchInput(data));
  dispatch(changeFilters(data));
};

export const matchChange = createAction('MATCH_CHANGE');
export const sortingChange = createAction('SORTINGS_CHANGE', data => (data === SORTING_ASC ? SORTING_DESC : SORTING_ASC));

export const openCloseAll = createAction('OPEN_CLOSE_ALL');
