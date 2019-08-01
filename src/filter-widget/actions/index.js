import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data/index';

export const requestContexts = createAction('REQUEST_CONTEXTS');

export const recieveContexts = createAction('RECIEVE_CONTEXTS', contexts => ({
  contexts,
}));

export const getContextsData = () => (dispatch) => {
  dispatch(requestContexts());
  const data = getContexts();
  dispatch(recieveContexts(data));
};

export const requestDimensions = createAction('REQUEST_DIMENSIONS');

export const recieveDimensions = createAction('RECIEVE_DIMENSIONS', dimensions => ({
  dimensions,
}));

export const getDimensionsData = () => (dispatch) => {
  dispatch(requestDimensions());
  const data = getDimensions();
  dispatch(recieveDimensions(data));
};

export const requestFilters = createAction('REQUEST_FILTERS');

export const recieveFilters = createAction('RECIEVE_FILTERS', filters => ({
  filters,
}));

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

export const toggleContext = createAction('TOGGLE_CONTEXT');

export const toggleDimension = createAction('TOGGLE_DIMENSION');

export const toggleFilter = createAction('TOGGLE_FILTER');

export const changeSearchInput = createAction('CHANGE_SEARCH', data => ({
  text: data,
}));

export const changeFilters = createAction('CHANGE_FILTERS', search => ({
  search,
}));

export const changeSearch = data => (dispatch) => {
  dispatch(changeSearchInput(data));
  dispatch(changeFilters(data));
};

export const openCloseDropdown = createAction('OPEN_CLOSE_DROPDOWN', (section, prop) => ({
  section,
  state: prop,
}));

export const matchChange = createAction('MATCH_CHANGE', data => ({ match: data }));

export const sortingChange = createAction('SORTINGS_CHANGE', data => ({ sortingReverse: data }));
