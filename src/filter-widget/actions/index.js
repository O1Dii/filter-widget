import { createActions } from 'redux-actions';

export const { toggleContext, toggleDimension, changeSearch } = createActions(
  'TOGGLE_CONTEXT',
  'TOGGLE_DIMENSION',
  'CHANGE_SEARCH',
);
