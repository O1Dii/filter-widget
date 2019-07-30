import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data/index';

export const requestContexts = createAction('REQUEST_CONTEXTS');

export const recieveContexts = createAction('RECIEVE_CONTEXTS', data => ({
  data,
}));

export const getContextsData = createAction('GET_CONTEXTS', () => (dispatch) => {
  dispatch(requestContexts());
  const data = getContexts();
  dispatch(recieveContexts(data));
});

export const requestDimensions = createAction('REQUEST_DIMENSIONS');

export const recieveDimensions = createAction('RECIEVE_DIMENSIONS', data => ({
  data,
}));

export const getDimensionsData = createAction('GET_DIMENSIONS', () => (dispatch) => {
  dispatch(requestDimensions());
  const data = getDimensions();
  dispatch(recieveDimensions(data));
});

export const requestFilters = createAction('REQUEST_FILTERS');

export const recieveFilters = createAction('RECIEVE_FILTERS', data => ({
  data,
}));

export const getFiltersData = createAction('GET_FILTERS', () => (dispatch) => {
  dispatch(requestFilters());
  const data = getFilters();
  dispatch(recieveFilters(data));
});

export const toggleContext = createAction('TOGGLE_CONTEXT');

export const toggleDimension = createAction('TOGGLE_DIMENSION');

export const changeSearch = createAction('CHANGE_SEARCH');
