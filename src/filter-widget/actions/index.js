import { createAction } from 'redux-actions';
import { getContexts, getDimensions, getFilters } from '../data';

import { SORTING_ASC, SORTING_DESC } from '../constants';
import { getSearchedFiltersIds, getAllChecked } from '../selectors';

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

export const checkAllFiltersDispatch = createAction('CHECK_ALL_FILTERS');

export const uncheckAllFilters = createAction('UNCHECK_ALL_FILTERS');

export const checkAllFilters = () => (dispatch, getStore) => {
  const filters = getSearchedFiltersIds(getStore());

  dispatch(checkAllFiltersDispatch(filters));
};

// export const toggleAllFilters = () => (dispatch, getStore) => {
//   const filters = getSearchedFiltersIds(getStore());
//   const allChecked = getAllChecked(getStore());

//   if (allChecked) {
//     dispatch(uncheckAllFilters(filters));
//   }

//   dispatch(checkAllFilters(filters));
// };

export const changeSearchInput = createAction('CHANGE_SEARCH');

export const matchChange = createAction('MATCH_CHANGE');
export const sortingChange = createAction('SORTINGS_CHANGE', sortType => (sortType === SORTING_ASC ? SORTING_DESC : SORTING_ASC));

export const openCloseAll = createAction('OPEN_CLOSE_ALL');
