import { handleAction } from 'redux-actions';

import { changeSearch } from '../actions';

const search = handleAction(changeSearch, state => state, {});

export default search;
