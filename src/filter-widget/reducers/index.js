import { combineReducers } from 'redux-immutable';

import toggle from './toggle';
import search from './search';
import data from './data';
import open from './open';

const filterWidget = combineReducers({
  toggle,
  search,
  data,
  open,
});

export default filterWidget;
