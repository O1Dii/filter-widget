import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data';

import { SORTING_ASC, SORTING_DESC } from '../constants';
import { getSearchedFiltersIds } from '../selectors';
import ContextRecord from '../records/ContextRecord';
import DimensionRecord from '../records/DimensionRecord';
import FilterRecord from '../records/FilterRecord';

export const requestContexts = createAction('REQUEST_CONTEXTS');
export const recieveContexts = createAction('RECIEVE_CONTEXTS', contexts => contexts.map(item => ContextRecord(item)));
export const getContextsData = () => (dispatch) => {
  dispatch(requestContexts());
  const contexts = getContexts();
  dispatch(recieveContexts(contexts));
};

export const requestDimensions = createAction('REQUEST_DIMENSIONS');
export const recieveDimensions = createAction('RECIEVE_DIMENSIONS', dimensions => dimensions.map(item => DimensionRecord(item)));
export const getDimensionsData = () => (dispatch) => {
  dispatch(requestDimensions());
  const dimensions = getDimensions();
  dispatch(recieveDimensions(dimensions));
};

export const requestFilters = createAction('REQUEST_FILTERS');
export const recieveFilters = createAction('RECIEVE_FILTERS', filters => filters.map(item => FilterRecord(item)));
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

export const checkContext = createAction('CHECK_CONTEXT');
export const uncheckContext = createAction('UNCHECK_CONTEXT');
export const checkDimension = createAction('CHECK_DIMENSION');
export const uncheckDimension = createAction('UNCHECK_DIMENSION');
export const checkFilter = createAction('CHECK_FILTER');
export const uncheckFilter = createAction('UNCHECK_FILTER');

export const uncheckDimensionWithFilters = dimensionId => (dispatch, getState) => {
  const filters = getState().get('filters');
  const selectedFilters = getState().get('selectedFilters');

  const toUncheckFilters = selectedFilters.filter(
    selectedFilter => filters.getIn([selectedFilter, 'dimensionId']) === dimensionId,
  );

  dispatch(uncheckFilters(toUncheckFilters));
  dispatch(uncheckDimension(dimensionId));
};

export const uncheckContextWithDimensions = contextId => (dispatch, getState) => {
  const dimensions = getState().get('dimensions');
  const selectedDimensions = getState().get('selectedDimensions');

  const toUncheckDimensions = selectedDimensions.filter(
    selectedDimension => dimensions.getIn([selectedDimension, 'contextId']) === contextId,
  );

  toUncheckDimensions.forEach((dimension) => {
    dispatch(uncheckDimensionWithFilters(dimension));
  });

  dispatch(uncheckDimensions(toUncheckDimensions));
  dispatch(uncheckContext(contextId));
};

export const replaceSelectedFilters = createAction('REPLACE_FILTERS');

export const uncheckAllFilters = createAction('UNCHECK_ALL_FILTERS');

export const checkAllFilters = () => (dispatch, getStore) => {
  const filters = getSearchedFiltersIds(getStore());

  dispatch(replaceSelectedFilters(filters));
};

export const changeSearchInput = createAction('CHANGE_SEARCH');

export const changeSearchWithFiltersUncheck = searchText => (dispatch, getStore) => {
  dispatch(changeSearchInput(searchText));

  const remainingFilters = getStore()
    .get('selectedFilters')
    .filter(filter => getSearchedFiltersIds(getStore()).includes(filter));

  dispatch(replaceSelectedFilters(remainingFilters));
};

export const matchChange = createAction('MATCH_CHANGE');
export const sortingChange = createAction('SORTINGS_CHANGE', sortType => (sortType === SORTING_ASC ? SORTING_DESC : SORTING_ASC));

export const openCloseAll = createAction('OPEN_CLOSE_ALL');
