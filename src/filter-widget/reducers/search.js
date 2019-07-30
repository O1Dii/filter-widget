import { handleAction } from 'redux-actions';

import { changeSearch } from '../actions/index';

const search = handleAction(changeSearch, state => [...state], {});

export default search;
