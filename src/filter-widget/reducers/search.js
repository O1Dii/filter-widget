import { handleAction } from 'redux-actions';

import { changeSearch } from '../actions/index';

const search = handleAction(changeSearch, (state, action) => [...state], {});

export default search;
