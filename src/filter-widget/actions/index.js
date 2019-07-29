import { TOGGLE_CONTEXT, TOGGLE_DIMENSION, CHANGE_SEARCH } from '../types';

export const toggleContext = text => ({
  type: TOGGLE_CONTEXT,
  text,
});

export const toggleDimension = id => ({
  type: TOGGLE_DIMENSION,
  id,
});

export const changeSearch = text => ({
  type: CHANGE_SEARCH,
  text,
});
