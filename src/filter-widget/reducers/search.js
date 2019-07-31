import { handleAction } from 'redux-actions';

import { changeSearchInput } from '../actions';

const search = handleAction(
  changeSearchInput,
  (state, { payload }) => payload.data,
  '',
);

export default search;
