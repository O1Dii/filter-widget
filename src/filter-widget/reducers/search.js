import { handleAction } from 'redux-actions';

import { combineReducers } from 'redux';
import { changeSearchInput, matchChange, sortingChange } from '../actions';

const text = handleAction(changeSearchInput, (state, { payload }) => payload.text, '');

const match = handleAction(matchChange, (state, { payload }) => payload.match, '**');

const sortingReverse = handleAction(
  sortingChange,
  (state, { payload }) => payload.sortingReverse,
  false,
);

const search = combineReducers({
  text,
  match,
  sortingReverse,
});

export default search;
